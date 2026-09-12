const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('../db');
const tvService = require('../services/tradingviewAutomation');

/**
 * POST /api/webhook/safepay
 * Safepay IPN with HMAC SHA256 signature verification
 */
router.post('/safepay', async (req, res) => {
  try {
    const signature = req.headers['x-sfpy-signature'];
    const secret = process.env.SAFEPAY_WEBHOOK_SECRET || 'test_secret';

    const calculatedSig = crypto
      .createHmac('sha256', secret)
      .update(JSON.stringify(req.body))
      .digest('hex');

    if (process.env.NODE_ENV === 'production' && signature !== calculatedSig) {
      console.warn('[Webhook] Invalid Safepay webhook signature rejected.');
      return res.status(403).json({ error: 'Invalid signature' });
    }

    const { tracker, data } = req.body;
    console.log(`[Webhook] Safepay payment notification received for tracker: ${tracker}`);

    // Update order in DB
    const order = db.getOrders().find(o => o.safepayTracker === tracker);
    if (order) {
      db.updateOrderStatus(order.orderId, 'PAID_VERIFIED', data?.ref);
      
      const durationDays = order.planId === 'lifetime' ? 3650 : order.planId === 'pro' ? 90 : 30;
      await tvService.grantAccess(order.tvUsername, durationDays);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Safepay webhook error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

/**
 * POST /api/webhook/meezan
 * Meezan Bank MPGS Notification Hook
 */
router.post('/meezan', async (req, res) => {
  try {
    const { order, result, transaction } = req.body;
    console.log(`[Webhook] Meezan Bank notification received for order: ${order?.id}, result: ${result}`);

    if (result === 'SUCCESS' && order?.id) {
      db.updateOrderStatus(order.id, 'PAID_VERIFIED', transaction?.id);
      
      const existingOrder = db.getOrderById(order.id);
      if (existingOrder) {
        const durationDays = existingOrder.planId === 'lifetime' ? 3650 : existingOrder.planId === 'pro' ? 90 : 30;
        await tvService.grantAccess(existingOrder.tvUsername, durationDays);
      }
    }

    res.json({ status: 'ACKNOWLEDGED' });
  } catch (err) {
    console.error('Meezan Bank webhook error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
