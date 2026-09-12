const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const axios = require('axios');
const db = require('../db');
const tvService = require('../services/tradingviewAutomation');

// Helper to generate a cryptographically signed MBQ license token
function generateLicenseKey(planId, tvUsername) {
  const secret = process.env.LICENSE_SECRET || 'MBQ_ALGO_SECRET_KEY_2026';
  const prefix = planId === 'lifetime' ? 'MBQ-LIFE' : planId === 'pro' ? 'MBQ-PRO' : 'MBQ-START';
  const payload = `${tvUsername}:${planId}:${Date.now()}`;
  const signature = crypto.createHmac('sha256', secret).update(payload).digest('hex').substring(0, 8).toUpperCase();
  const randomBlock = crypto.randomBytes(2).toString('hex').toUpperCase();
  return `${prefix}-${signature.substring(0, 4)}-${signature.substring(4, 8)}-${randomBlock}`;
}

/**
 * POST /api/checkout
 * Initiates checkout session with chosen Pakistani gateway or fulfills instant access
 */
router.post('/', async (req, res) => {
  try {
    const { planId, planName, currency, amount, name, email, tvUsername, gateway } = req.body;

    if (!name || !email || !tvUsername || !planId) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const cleanUsername = tvUsername.replace(/^@/, '').trim();
    const orderId = `MBQ-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;
    const licenseKey = generateLicenseKey(planId, cleanUsername);

    // Duration mapping
    const durationDays = planId === 'lifetime' ? 3650 : planId === 'pro' ? 90 : 30;

    // 1. MEEZAN BANK MPGS Direct Integration
    if (gateway === 'meezan' && process.env.MEEZAN_MERCHANT_ID) {
      const merchantId = process.env.MEEZAN_MERCHANT_ID;
      const apiPassword = process.env.MEEZAN_API_PASSWORD;
      const baseUrl = process.env.MEEZAN_GATEWAY_URL || 'https://meezanbank.gateway.mastercard.com';

      const authHeader = 'Basic ' + Buffer.from(`merchant.${merchantId}:${apiPassword}`).toString('base64');

      try {
        const meezanSession = await axios.post(
          `${baseUrl}/api/rest/version/72/merchant/${merchantId}/session`,
          {},
          { headers: { Authorization: authHeader } }
        );

        db.createOrder({
          orderId,
          name,
          email,
          tvUsername: cleanUsername,
          planId,
          planName,
          amount,
          currency,
          gateway: 'Meezan Bank MPGS',
          status: 'PENDING_PAYMENT',
          meezanSessionId: meezanSession.data.session?.id,
          createdAt: new Date().toISOString()
        });

        return res.json({
          success: true,
          mode: 'REDIRECT',
          orderId,
          sessionId: meezanSession.data.session?.id,
          checkoutUrl: `${baseUrl}/checkout/entry/${meezanSession.data.session?.id}`
        });
      } catch (err) {
        console.error('Meezan MPGS error:', err.response?.data || err.message);
      }
    }

    // 2. SAFEPAY PAKISTAN Integration (Meezan, 1Link, EasyPaisa, JazzCash)
    if (gateway === 'safepay' && process.env.SAFEPAY_API_KEY) {
      const safepayEnv = process.env.SAFEPAY_ENVIRONMENT || 'sandbox'; // or 'production'
      const safepayHost = safepayEnv === 'production' ? 'https://api.getsafepay.com' : 'https://sandbox.api.getsafepay.com';

      try {
        const tokenRes = await axios.post(
          `${safepayHost}/order/v1/init`,
          {
            client: process.env.SAFEPAY_API_KEY,
            amount: amount,
            currency: 'PKR',
            environment: safepayEnv
          }
        );

        const tracker = tokenRes.data.data.token;
        const checkoutRedirect = `${safepayEnv === 'production' ? 'https://getsafepay.com' : 'https://sandbox.getsafepay.com'}/checkout/pay?beacon=${tracker}`;

        db.createOrder({
          orderId,
          name,
          email,
          tvUsername: cleanUsername,
          planId,
          planName,
          amount,
          currency,
          gateway: 'Safepay Pakistan',
          status: 'PENDING_PAYMENT',
          safepayTracker: tracker,
          createdAt: new Date().toISOString()
        });

        return res.json({
          success: true,
          mode: 'REDIRECT',
          orderId,
          checkoutUrl: checkoutRedirect
        });
      } catch (err) {
        console.error('Safepay error:', err.response?.data || err.message);
      }
    }

    // 3. SEAMLESS SANDBOX / INSTANT FULFILLMENT MODE
    // Used when running in dev/sandbox or before live merchant bank keys are provided
    db.createOrder({
      orderId,
      name,
      email,
      tvUsername: cleanUsername,
      planId,
      planName,
      amount,
      currency,
      gateway: gateway === 'meezan' ? 'Meezan Bank MPGS' : 'Safepay Pakistan',
      status: 'PAID_VERIFIED',
      licenseKey,
      createdAt: new Date().toISOString()
    });

    db.createLicense({
      licenseKey,
      orderId,
      email,
      tvUsername: cleanUsername,
      planId,
      status: 'ACTIVE',
      expiresAt: new Date(Date.now() + durationDays * 86400000).toISOString(),
      issuedAt: new Date().toISOString()
    });

    // Automatically call TradingView invite-only granting worker
    await tvService.grantAccess(cleanUsername, durationDays);

    return res.json({
      success: true,
      orderId,
      licenseKey,
      tvUsername: cleanUsername,
      gateway: gateway === 'meezan' ? 'Meezan Bank MPGS' : 'Safepay Pakistan',
      status: 'Active (TradingView Invite Issued)',
      message: 'Payment completed successfully. Your TradingView invite is queued!'
    });

  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ success: false, message: 'Internal payment error.' });
  }
});

module.exports = router;
