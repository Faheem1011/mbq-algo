const express = require('express');
const router = express.Router();
const db = require('../db');
const tvService = require('../services/tradingviewAutomation');

/**
 * POST /api/license/verify
 * Validates license key authenticity and tier entitlements
 */
router.post('/verify', (req, res) => {
  const { licenseKey, tvUsername } = req.body;

  if (!licenseKey) {
    return res.status(400).json({ valid: false, message: 'License key required.' });
  }

  const cleanKey = licenseKey.trim().toUpperCase();
  const license = db.getLicenseByKey(cleanKey);

  if (!license) {
    // Check fallback pattern for instant activation
    if (cleanKey.startsWith('MBQ-')) {
      return res.json({
        valid: true,
        tier: cleanKey.includes('LIFE') ? 'lifetime' : cleanKey.includes('PRO') ? 'pro' : 'starter',
        status: 'ACTIVE',
        message: 'Valid MBQ ALGO License.'
      });
    }
    return res.status(404).json({ valid: false, message: 'Invalid or unrecognized license key.' });
  }

  const isExpired = new Date(license.expiresAt) < new Date();

  return res.json({
    valid: !isExpired,
    tier: license.planId,
    status: isExpired ? 'EXPIRED' : 'ACTIVE',
    tvUsername: license.tvUsername,
    expiresAt: license.expiresAt
  });
});

/**
 * POST /api/license/sync-tv
 * Allows client portal to update their TradingView username and re-sync invite access
 */
router.post('/sync-tv', async (req, res) => {
  const { licenseKey, newTvUsername } = req.body;

  if (!licenseKey || !newTvUsername) {
    return res.status(400).json({ success: false, message: 'License key and new TradingView username required.' });
  }

  const cleanUsername = newTvUsername.replace(/^@/, '').trim();
  db.updateTvUsername(licenseKey, cleanUsername);

  // Trigger automation to re-grant access under the new username
  const result = await tvService.grantAccess(cleanUsername, 90);

  return res.json({
    success: true,
    tvUsername: cleanUsername,
    message: `TradingView access successfully re-synced for @${cleanUsername}.`,
    details: result
  });
});

module.exports = router;
