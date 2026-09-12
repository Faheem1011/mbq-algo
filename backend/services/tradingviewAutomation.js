const axios = require('axios');
const db = require('../db');

/**
 * TradingView Invite-Only Automation Service
 * 
 * TradingView manages invite-only scripts via internal authenticated endpoints:
 * - Grant access: POST https://www.tradingview.com/pine_perm/add/
 * - Revoke access: POST https://www.tradingview.com/pine_perm/remove/
 * 
 * Authentication requires:
 * 1. Admin TradingView session cookie (`sessionid`)
 * 2. Published script ID (e.g. `PUB_123456789`)
 */

class TradingViewAccessService {
  constructor() {
    this.sessionId = process.env.TRADINGVIEW_SESSION_ID || '';
    this.scriptId = process.env.TRADINGVIEW_SCRIPT_ID || 'PUB_MBQ_ALGO_V5';
    this.isConfigured = !!this.sessionId;
  }

  /**
   * Grant invite-only script access to a buyer
   * @param {string} tvUsername - Customer TradingView username
   * @param {number} durationDays - Access validity in days (e.g. 30, 90, or 3650 for lifetime)
   */
  async grantAccess(tvUsername, durationDays = 30) {
    console.log(`[TradingView Automation] Initiating access grant for user: @${tvUsername} (${durationDays} days)`);

    if (!this.isConfigured) {
      console.warn('[TradingView Automation] TRADINGVIEW_SESSION_ID not set in .env. Running in simulation mode.');
      
      db.logTvAccess({
        tvUsername,
        action: 'GRANT_INVITE',
        status: 'SUCCESS_SIMULATED',
        durationDays,
        message: 'Simulation: User added to TradingView invite-only access queue.'
      });

      return {
        success: true,
        mode: 'SIMULATED',
        message: `TradingView access granted for @${tvUsername}.`
      };
    }

    try {
      // Expiration calculation: ISO timestamp or null for lifetime
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + durationDays);

      const response = await axios.post(
        'https://www.tradingview.com/pine_perm/add/',
        new URLSearchParams({
          pine_id: this.scriptId,
          username: tvUsername,
          expiration: expirationDate.toISOString()
        }).toString(),
        {
          headers: {
            'Cookie': `sessionid=${this.sessionId}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Referer': `https://www.tradingview.com/script/${this.scriptId}/`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
          }
        }
      );

      db.logTvAccess({
        tvUsername,
        action: 'GRANT_INVITE',
        status: 'SUCCESS_API',
        durationDays,
        response: response.data
      });

      return { success: true, mode: 'LIVE_API', data: response.data };
    } catch (err) {
      console.error('[TradingView Automation] Error calling TradingView access endpoint:', err.response?.data || err.message);
      
      db.logTvAccess({
        tvUsername,
        action: 'GRANT_INVITE',
        status: 'FAILED',
        error: err.message
      });

      return { success: false, error: err.message };
    }
  }

  /**
   * Revoke invite-only script access (e.g. on refund or lapsed subscription)
   * @param {string} tvUsername - Customer TradingView username
   */
  async revokeAccess(tvUsername) {
    console.log(`[TradingView Automation] Revoking access for user: @${tvUsername}`);

    if (!this.isConfigured) {
      db.logTvAccess({
        tvUsername,
        action: 'REVOKE_INVITE',
        status: 'SUCCESS_SIMULATED',
        message: 'Simulation: User revoked from TradingView access.'
      });
      return { success: true, mode: 'SIMULATED' };
    }

    try {
      const response = await axios.post(
        'https://www.tradingview.com/pine_perm/remove/',
        new URLSearchParams({
          pine_id: this.scriptId,
          username: tvUsername
        }).toString(),
        {
          headers: {
            'Cookie': `sessionid=${this.sessionId}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Referer': `https://www.tradingview.com/script/${this.scriptId}/`
          }
        }
      );

      db.logTvAccess({
        tvUsername,
        action: 'REVOKE_INVITE',
        status: 'SUCCESS_API',
        response: response.data
      });

      return { success: true, mode: 'LIVE_API', data: response.data };
    } catch (err) {
      console.error('[TradingView Automation] Error revoking TradingView access:', err.message);
      return { success: false, error: err.message };
    }
  }
}

module.exports = new TradingViewAccessService();
