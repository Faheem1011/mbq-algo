# MBQ ALGO — Vercel Deployment & Custom Domain Guide

This guide details how to deploy **MBQ ALGO X** to **Vercel** from your GitHub repository (`Faheem1011/mbq-algo`) and direct your custom domain from Hostinger to Vercel for high-speed edge delivery.

---

## 1. Why Vercel?
- **Global Edge Network**: Ultra-low latency worldwide (sub-50ms static asset delivery).
- **Automated CI/CD**: Every push to `main` branch builds and deploys automatically.
- **Instant SSL**: Automated Zero-Config TLS certificates.
- **Dynamic Single Page Routing**: Handled natively via `vercel.json`.

---

## 2. Deploying on Vercel (1-Click GitHub Import)

1. Go to [Vercel.com](https://vercel.com) and log in (recommended: Sign in with GitHub).
2. Click **"Add New..."** -> **"Project"**.
3. Under **Import Git Repository**, locate:
   ```
   Faheem1011/mbq-algo
   ```
4. Click **Import**.
5. Configure Project Settings:
   - **Framework Preset**: `Vite` (Vercel automatically detects this).
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.
7. In ~30-45 seconds, your live production site will be deployed at `https://mbq-algo.vercel.app` (or similar).

---

## 3. Directing Your Custom Domain from Hostinger to Vercel

To point your custom domain (registered on Hostinger) to your Vercel deployment:

### Step 3.1: Add Domain in Vercel
1. In your Vercel Project Dashboard, navigate to **Settings** -> **Domains**.
2. Enter your domain (e.g. `yourdomain.com` or `www.yourdomain.com`).
3. Click **Add**.
4. Vercel will display the recommended DNS records:
   - **For Apex Domain (`yourdomain.com`):**
     - **Type:** `A`
     - **Name:** `@`
     - **Value:** `76.76.21.21`
   - **For `www` Subdomain (`www.yourdomain.com`):**
     - **Type:** `CNAME`
     - **Name:** `www`
     - **Value:** `cname.vercel-dns.com`

---

### Step 3.2: Update DNS Records in Hostinger hPanel

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com).
2. Go to **Domains** -> Select your domain -> Click **DNS / Nameservers**.
3. Under **Manage DNS records**:
   - **Edit or Add the `A` record:**
     - **Type:** `A`
     - **Name:** `@` (or leave blank if required by Hostinger)
     - **Points to:** `76.76.21.21`
     - **TTL:** `300` or `14400`
   - **Edit or Add the `CNAME` record:**
     - **Type:** `CNAME`
     - **Name:** `www`
     - **Points to:** `cname.vercel-dns.com`
     - **TTL:** `300` or `14400`
4. Save the DNS records.
5. Vercel will automatically verify the records, issue the SSL certificate, and make your domain live!

---

## 4. Automatic Git Deployment Workflow

Whenever you push changes from your local machine:
```bash
git add .
git commit -m "feat: your update message"
git push origin main
```
Vercel's webhook will automatically trigger, build the updated Vite project, and deploy the new version live in seconds.
