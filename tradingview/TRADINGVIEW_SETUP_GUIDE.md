# MBQ ALGO — Complete TradingView Invite-Only Script Master Guide

This document outlines the complete operational process for managing, publishing, protecting, and automating **Invite-Only TradingView indicators** for MBQ ALGO.

---

## 1. How TradingView "Invite-Only" Scripts Work

TradingView offers three publishing visibility options for Pine Scripts:

1. **Open Source:** Anyone can view and copy your Pine Script code. (Do NOT use this for commercial products).
2. **Protected:** Code is hidden, but anyone on TradingView can add it to their chart.
3. **Invite-Only:** Code is **100% hidden**, and **only TradingView usernames explicitly approved by you can see or add the indicator to their charts**.

> [!IMPORTANT]
> To publish **Invite-Only** scripts, you must have an active paid TradingView tier (**Premium, Expert, or Ultimate**). Free or Essential tiers cannot publish invite-only scripts.

---

## 2. Step-by-Step Guide: Publishing MBQ ALGO on TradingView

### Step 2.1: Load the Script in Pine Editor

1. Log in to your TradingView account (with Premium or higher).
2. Open any chart (e.g. `EURUSD` or `BTCUSDT`).
3. Click on the **Pine Editor** tab at the bottom of the TradingView screen.
4. Open [MBQ_ALGO_V5_Pro.pine](file:///c:/Users/Lenovo/Desktop/MBQ%20algo/tradingview/MBQ_ALGO_V5_Pro.pine) in your code editor, copy the entire code, and paste it into the TradingView Pine Editor.
5. Click **Save** and name it `MBQ ALGO X Pro v5`.
6. Click **Add to chart** to verify that it compiles cleanly with zero errors.

### Step 2.2: Publish as Invite-Only

1. In the top right corner of the Pine Editor, click **Publish Script**.
2. Select **"Publish New Script"**.
3. Fill in the details:
   - **Script Title:** `MBQ ALGO X Pro - Precision Non-Repainting Indicator`
   - **Description:** Provide an overview of the indicator (features, non-repainting confirmation, dynamic TP/SL levels, disclaimer).
   - **Category:** Select `Trend Analysis`, `Oscillators`, and `Volatility`.
4. Under **Visibility & Permissions**:
   - Select **"Invite-Only"** (with the lock symbol 🔒).
   - Notice: TradingView will confirm that the source code will be compiled server-side and hidden permanently from all users.
5. Click **Publish Invite-Only Script**.
6. Note down your published Script ID (from the published URL, e.g. `PUB_123456789`).

---

## 3. How to Grant Script Access to Paying Buyers

You have two ways to grant access to buyers:

### Method A: Instant Manual Access (TradingView Web Interface)

1. Open your published indicator page on TradingView (e.g. `https://www.tradingview.com/script/PUB_123456789/`).
2. Scroll to the bottom of the description where you will see the **"Manage Access"** button (visible only to the script author).
3. Click **"Manage Access"**.
4. In the text field, type the customer's TradingView username (collected from their MBQ ALGO checkout form).
5. Choose expiration:
   - **Custom Date:** Select 30 days (for Monthly Starter) or 90 days (for Pro Quarterly).
   - **No Expiration:** Check "No expiration" for Lifetime Access buyers.
6. Click **Add**.
7. The user immediately receives a notification on TradingView and the script appears in their **"Invite-Only Scripts"** tab!

### Method B: Automated Access via MBQ ALGO Backend Worker

Our backend repository includes a dedicated automation service: [tradingviewAutomation.js](file:///c:/Users/Lenovo/Desktop/MBQ%20algo/backend/services/tradingviewAutomation.js).

When a customer pays via Meezan Bank or Safepay:

1. The payment webhook triggers `tvService.grantAccess(tvUsername, durationDays)`.
2. The service issues an authenticated HTTP POST request to TradingView's internal permissions endpoint:

```http
POST https://www.tradingview.com/pine_perm/add/
Cookie: sessionid=YOUR_TRADINGVIEW_SESSION_ID
Content-Type: application/x-www-form-urlencoded

pine_id=PUB_SCRIPT_ID&username=customer_username&expiration=2026-10-12T00:00:00Z
```

3. To enable this, simply retrieve your TradingView session cookie:
   - Log into TradingView in your browser -> Press `F12` (Developer Tools) -> Go to **Application** -> **Cookies** -> Find `sessionid`.
   - Copy this value into your `.env` file as `TRADINGVIEW_SESSION_ID=your_cookie_here`.
   - Set `TRADINGVIEW_SCRIPT_ID=PUB_YOUR_SCRIPT_ID`.

---

## 4. How Your Customers Add MBQ ALGO to Their Chart

This is the exact guide shown to your buyers in their **Customer Portal**:

1. Open any chart on **TradingView.com** (works on free accounts).
2. Click **Indicators (Fx)** in the top navigation bar.
3. In the left panel, click on **"Invite-Only Scripts"** (with the padlock icon).
4. Click on **"MBQ ALGO X Pro v5"**.
5. The indicator instantly appears on their chart with buy/sell signals, dynamic TP/SL levels, and the live trend HUD!

---

## 5. Setting Up Mobile Push Notifications & Webhook Alerts

1. In TradingView, click the **Alert** icon (alarm clock) or press `Alt + A`.
2. In the **Condition** dropdown, select `MBQ ALGO X Pro v5`.
3. Select `MBQ ALGO: Buy Signal Confirmed` or `MBQ ALGO: Sell Signal Confirmed`.
4. Trigger options: Select **"Once Per Bar Close"** (ensures strict 100% non-repainting).
5. Notification options:
   - Check **"Notify on App"** (sends instant push notification to TradingView iOS/Android mobile app).
   - Check **"Show Pop-up"** and **"Play Sound"**.
   - Optional: Check **"Webhook URL"** to route alerts directly to Telegram channels, Discord bots, or automated execution tools (e.g. PineConnector for MT4/MT5).
