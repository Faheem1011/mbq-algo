# MBQ ALGO — GitHub & Hostinger Deployment Guide

This guide walks you through pushing the MBQ ALGO codebase to your GitHub account and connecting it directly to **Hostinger** for automated deployments.

---

## 1. Pushing Code to Your GitHub Repository

### Step 1.1: Create a New GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in.
2. Click the **"+"** icon in the top right -> select **New repository**.
3. Repository name: `mbq-algo` (or your preferred name).
4. Set visibility to **Private** (recommended for commercial proprietary SaaS).
5. Leave "Initialize with README", ".gitignore", and "License" **unchecked** (we already created them locally).
6. Click **Create repository**.
7. Copy your repository's remote URL (e.g. `https://github.com/your-username/mbq-algo.git`).

### Step 1.2: Commit & Push from Your Local Terminal

Open your terminal in `C:\Users\Lenovo\Desktop\MBQ algo` and run:

```bash
# 1. Initialize Git
git init

# 2. Add all files (excluding node_modules and .env via .gitignore)
git add .

# 3. Create your initial commit
git commit -m "feat: initial release of MBQ ALGO platform with Pakistani payment gateway and TradingView automation"

# 4. Set main branch
git branch -M main

# 5. Connect your GitHub repository (replace with your actual GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/mbq-algo.git

# 6. Push to GitHub
git push -u origin main
```

---

## 2. Deploying on Hostinger (hPanel Git Integration)

Hostinger supports two deployment approaches depending on your hosting plan:

### Method A: Hostinger Cloud / VPS / Business Hosting (Full Node.js Backend + Frontend)

If you have Hostinger Business Web Hosting, Cloud Hosting, or a VPS with Node.js support:

1. **Log in to Hostinger hPanel** (`hpanel.hostinger.com`).
2. Navigate to **Advanced** -> **Git**.
3. Under **Create a New Repository**:
   - **Repository:** `https://github.com/YOUR_USERNAME/mbq-algo.git`
   - **Branch:** `main`
   - **Install directory:** `public_html` (or a subfolder)
4. Click **Create**.
5. **Set up Automated Deployment Webhook:**
   - Hostinger will give you a **Webhook URL**.
   - Copy this Webhook URL.
   - Go to your GitHub repository -> **Settings** -> **Webhooks** -> **Add webhook**.
   - Paste the URL into **Payload URL**, set content type to `application/json`, and save.
   - Now, **every time you push code to GitHub, Hostinger automatically updates your live website!**
6. **Start the Node.js Server:**
   - In Hostinger hPanel, go to **Node.js**.
   - Set **Node.js version:** `20.x` or `22.x`.
   - **Application root:** `/home/uXXXX/public_html`
   - **Application startup file:** `server.js`
   - Click **Save** and **Run `npm install` && `npm run build`**.

---

### Method B: Hostinger Shared Web Hosting (Static Frontend Deploy)

If your Hostinger plan is standard shared web hosting:

1. Build your static files locally:

```bash
npm run build
```

2. In Hostinger hPanel -> **Git** or **File Manager**:
   - The compiled production assets are in `dist/`.
   - Copy the contents of `dist/` into your domain's `public_html/`.
   - Ensure the included [.htaccess](file:///c:/Users/Lenovo/Desktop/MBQ%20algo/.htaccess) file is placed in `public_html/`.
   - Your website will now load with maximum speed powered by LiteSpeed web server and HTTP/3!

---

## 3. Configuring Environment Variables on Hostinger

Create a `.env` file in your Hostinger application root (copy from [.env.example](file:///c:/Users/Lenovo/Desktop/MBQ%20algo/.env.example)):

```env
PORT=5000
NODE_ENV=production
LICENSE_SECRET=YOUR_SECURE_HMAC_SECRET

# Meezan Bank Credentials (from your corporate merchant agreement)
MEEZAN_MERCHANT_ID=your_id
MEEZAN_API_PASSWORD=your_password
MEEZAN_GATEWAY_URL=https://meezanbank.gateway.mastercard.com

# Safepay Credentials (from getsafepay.com)
SAFEPAY_API_KEY=your_key
SAFEPAY_WEBHOOK_SECRET=your_secret
SAFEPAY_ENVIRONMENT=production

# TradingView Automated Invite Cookies
TRADINGVIEW_SESSION_ID=your_tradingview_session_id
TRADINGVIEW_SCRIPT_ID=PUB_YOUR_SCRIPT_ID
```

---

## 4. Enabling Free SSL Certificate

1. In Hostinger hPanel, go to **Security** -> **SSL**.
2. Click **Install SSL** on your domain.
3. Hostinger installs a lifetime free Let's Encrypt SSL certificate within 2 minutes.
4. The included `.htaccess` file automatically forces all visitors to secure `https://`.
