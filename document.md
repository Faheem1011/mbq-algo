# MBQ Algo X — Full Build Specification
### (Competitive rebuild of swiftalgo.net, upgraded for a licensed-SaaS trading-indicator business)

---

## 0. Source Analysis — What swiftalgo.net Actually Does

**Stack:** Built on Framer (no-code site builder), checkout via **Whop** (not a custom payment gateway — Whop handles billing, access, and community in one).

**Page structure (single-page, anchor-nav):**
1. Sticky nav — logo, Preview / Reviews / Backtests / Features / Pricing / FAQ, "Join Free Discord" CTA
2. Hero — headline, embedded Vimeo demo video, sub-copy with a social-proof number ("12,000+ traders"), dual CTA (Get Access / Join Discord), auto-scrolling logo/market-ticker strip
3. Reviews — large masonry wall of screenshotted testimonials (Discord/TradingView chat screenshots)
4. Backtests — swipeable image carousel of chart backtests + 4 embedded replay videos
5. Preview — one-liner + CTA bridging to features
6. Features grid — 7 feature cards, each icon + 1-line benefit (alerts, TP/SL, trend table, backtester, notifications, guides)
7. "More reviews" — second testimonial wall
8. Comparison table — "Other tools vs. Us" two-column list
9. Pricing — 3 tiers (Monthly / Quarterly "Most Popular" / Lifetime), each linking straight to a Whop checkout URL
10. FAQ — accordion
11. Footer — legal links + heavy risk-disclaimer wall (required for financial-tool marketing)

**What's weak / what you should beat:**
- No native payment/licensing system — 100% dependent on Whop, so you don't own the checkout, the customer data, or the licensing logic.
- Static image reviews (screenshots) — no verifiable, embedded review system.
- No account dashboard — access is manual (buyer submits TradingView username, someone/something grants access).
- No usage-tiering — every plan gets the exact same product, so there's no upsell ladder beyond price/duration.
- Flat scroll, no depth/parallax — feels like a template (because it is one).
- No real "app" — it's a marketing page bolted to a checkout link, not a SaaS platform.

Your version should differ on exactly these points: **own the payment stack, own the licensing/entitlement engine, own the customer dashboard, add tiered feature-locking on the script itself, and add motion depth (parallax) that a Framer template doesn't have out of the box.**

---

## 1. Product Positioning

| | SwiftAlgo | MBQ Algo X (yours) |
|---|---|---|
| Checkout | Whop only | Native Stripe + Whop/crypto as optional alt |
| Access delivery | Manual TradingView username form | Automated dashboard + license key + auto-grant |
| Tiers | Same product, different duration | Duration **and** feature/usage tiers |
| Proof | Screenshot walls | Screenshot wall **+ live/verified TV reviews widget** |
| Motion | Flat | Parallax hero, scroll-reveal sections, tilt cards |
| Post-purchase | Nothing (no dashboard) | Account dashboard: license status, usage meter, invoices, TV username management |

**One-line pitch:** "The only trading indicator with a real dashboard — see your license, your usage, and your entries in one place."

---

## 2. Recommended Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animation/Parallax:** Framer Motion (`useScroll`, `useTransform`) + Lenis (smooth scroll) — this combo is what gives the "buttery" parallax feel
- **3D/optional flair:** React Three Fiber for a subtle animated chart/particle hero background (optional, skip if budget/perf-sensitive)
- **Backend:** Next.js API routes / or separate Node (Express/Fastify) service
- **Database:** PostgreSQL (Supabase or Neon) — users, licenses, subscriptions, usage logs
- **Auth:** Clerk or Supabase Auth (email + Google)
- **Payments:** Stripe (primary) — Checkout + Billing Portal + Webhooks. Optional secondary: Whop (crypto/alt) or Coinbase Commerce for crypto-native trader audience
- **Email:** Resend or Postmark (receipts, license keys, onboarding sequence)
- **Hosting:** Vercel (frontend) + Supabase/Neon (DB) + Vercel Cron or a small worker for TradingView access sync
- **Analytics:** PostHog (funnel + heatmaps) + Meta/TikTok pixel for ad retargeting

---

## 3. Site Structure & Sections (with parallax notes)

1. **Sticky glass nav** — blurred backdrop, shrinks on scroll, active-section highlight.
2. **Hero (parallax)** — headline + subheadline, video demo in a floating "device frame" card that has a subtle 3D tilt-on-mouse-move and moves at a different scroll speed (`y` offset via `useTransform`) than the background gradient/grid, which itself drifts slower (classic 2–3 layer parallax: background grid slowest, glow blobs mid, hero card fastest).
3. **Logo/market ticker strip** — infinite horizontal marquee (BTC, EUR/USD, SPX, NAS100 icons) — CSS `@keyframes` translateX loop, pause on hover.
4. **Social proof counter** — animated count-up ("12,847 traders" / "$--- total signals sent") triggered on scroll-into-view.
5. **Live/verified reviews wall** — masonry grid, cards fade+rise on scroll (staggered `whileInView`), optional Senja/Trustpilot embed for verified reviews instead of static screenshots.
6. **Backtests / results carousel** — draggable horizontal carousel (embla-carousel-react), chart images parallax slightly opposite to carousel scroll direction for depth.
7. **Replay videos grid** — 4 short muted autoplay-on-hover clips.
8. **Features grid (bento-style)** — asymmetric bento grid instead of uniform cards (visually differentiates from SwiftAlgo's plain grid); icons animate in with spring physics.
9. **Comparison table** — sticky-highlight row animation as user scrolls (your column glows).
10. **Pricing** — 3–4 tiers, monthly/annual toggle with animated price swap, "Most Popular" tier slightly scaled up with glow border.
11. **Dashboard preview section (NEW — SwiftAlgo has nothing like this)** — screenshot/mockup of the customer dashboard with parallax device mockup, selling the fact that buyers get a real account.
12. **FAQ accordion** — smooth height animation (Framer Motion `AnimatePresence`).
13. **Final CTA band** — full-width gradient, subtle animated grid/particle background.
14. **Footer** — legal links, required disclaimers (see §8).

---

## 4. Copy — Section-by-Section

### Hero
- Eyebrow: `TRADEALGO PRO X — NOW LIVE`
- H1: **"The Indicator That Tells You What SwiftAlgo Won't."**
- Sub: "Non-repainting entries, automatic TP/SL, and a real dashboard to track every signal — built for traders who are done guessing."
- CTA 1: `Get Instant Access` → pricing
- CTA 2: `Watch 90-Second Demo` → video modal
- Micro-trust line: "Trusted by 14,000+ traders across Forex, Crypto & Stocks"

### Features (bento cards — write 7–9)
1. **Non-Repainting Alerts** — "What you see in backtest is what you get live. No repainting, no vanishing signals."
2. **Auto TP/SL Engine** — "Every signal ships with calculated take-profit and stop-loss levels — no more guessing your exit."
3. **Live Trend Table** — "See bias across every timeframe at a glance, updated in real time."
4. **One-Click Backtester** — "Test any pair, any timeframe, instantly — find your edge before you risk a cent."
5. **Mobile Push Alerts** — "Get pinged the second a setup forms, wherever you are."
6. **Usage Dashboard** *(new differentiator)* — "Track your plan, your signal history, and your license status in one place — something no other indicator gives you."
7. **Step-by-Step Setup Guides** — video + written walkthroughs for TradingView setup.
8. **Priority Support** — live chat + Discord priority queue.

### Comparison Table
| Other Indicators | MBQ Algo X |
|---|---|
| Repainting / disappearing signals | 100% non-repainting, verified |
| No account, no visibility into your license | Full dashboard: usage, invoices, license status |
| Manual, slow access delivery | Automated instant access on payment |
| One-size-fits-all plans | Tiered feature access that scales with your plan |
| Support via ticket black hole | Live chat + Discord priority + <24h SLA |

### Pricing Blurbs
- **Starter (Monthly):** "Try the full system, cancel anytime."
- **Pro (Quarterly — Most Popular):** "Save 15%, unlock multi-timeframe alerts + priority support."
- **Lifetime:** "Pay once, own it forever, all future updates included."

### FAQ (write out, don't leave collapsed like the source)
- What happens after I purchase?
- Does MBQ Algo X repaint?
- What markets/timeframes does it support?
- Do I need to tune the settings myself?
- Does it work on mobile?
- Can I cancel anytime?
- What's the difference between plans?
- Is there a refund policy?

### Legal/Disclaimer footer (mandatory — see §8) — mirror SwiftAlgo's risk disclosure language in your own words; do not copy verbatim, have a lawyer/compliance pass review it before launch.

---

## 5. AI Image / Asset Generation Prompts

Use these with Midjourney v6/Ideogram/DALL·E 3/Flux. Keep a consistent style anchor (add `--style raw` in MJ, or a fixed seed) so all assets feel like one brand system. Suggested palette: near-black background `#05070D`, electric blue `#3B82F6` → violet `#8B5CF6` gradient, neon green `#22C55E` for bullish, red `#EF4444` for bearish.

**Brand style anchor (paste before every prompt):**
> "Modern fintech SaaS aesthetic, dark mode UI, glassmorphism panels, subtle blue-to-violet gradient glow, clean sans-serif, high contrast, minimalist, professional trading platform look, ultra-detailed, 4k"

1. **Hero background:** `abstract dark trading dashboard interface, glowing candlestick chart made of light trails, deep navy background, blue and violet gradient glow, floating glass UI panels, cinematic lighting, no text, 16:9`
2. **Feature icon set (generate individually, flat vector style):** `minimalist 3D glass icon of a [bell / target / table / magnifying glass / phone notification / book / shield], blue-violet gradient glass material, dark background, soft glow, isometric, product icon, no text`
3. **Dashboard mockup (for the "new differentiator" section):** `SaaS analytics dashboard UI mockup on laptop screen, dark theme, license status card, usage progress bar, subscription plan card, trading chart widget, clean modern fintech design, floating device mockup on dark gradient background`
4. **Backtest chart overlays:** `TradingView-style candlestick chart with green buy arrows and red sell arrows, glowing take-profit and stop-loss horizontal lines, dark chart background, professional trading terminal look`
5. **Comparison table graphic:** `split-screen illustration, left side chaotic red tangled lines representing confusion, right side clean glowing blue geometric pattern representing clarity, dark background, abstract`
6. **Trust/social-proof texture:** `abstract network of glowing connected nodes representing a global trader community, dark navy background, blue particles, subtle depth of field`
7. **CTA band background:** `dark gradient mesh background, blue to violet, subtle grid lines, glowing particles rising upward, minimal, wide banner format`
8. **OG / social share image:** `bold headline space at top, dark fintech dashboard screenshot mockup below, blue-violet glow, 1200x630, high contrast, brand-safe margins`

**Copy-generation prompt (for an LLM, to draft testimonial-style UGC ethically — see compliance note below):**
> "You are not generating fake testimonials — only use real, collected, permissioned customer feedback. If you need placeholder/sample copy for design purposes before real reviews arrive, generate clearly-labeled 'Sample Review — Placeholder' text and swap before launch."

⚠️ **Compliance note:** SwiftAlgo's testimonial wall is screenshots of real users. Fabricating testimonials is both an FTC violation (endorsement guides) and a fast way to get your Stripe/payment account banned for a financial product. Collect real reviews via a review widget (Senja, Trustpilot) instead of faking them.

---

## 6. Pricing & Payment Gateway Architecture

### 6.1 Suggested Tiers (duration ladder + feature ladder — this is the upgrade over SwiftAlgo)

| Plan | Price | Billing | Signal/Feature Limits | Notes |
|---|---|---|---|---|
| **Starter** | $47/mo | Monthly | Single-pair alerts, 1 TradingView account linked, standard support | Entry tier |
| **Pro** *(Most Popular)* | $127 / 3mo (~$42/mo) | Quarterly | Multi-pair + multi-timeframe alerts, 2 TradingView accounts, priority Discord | Core upsell |
| **Elite** | $349 / yr (~$29/mo) | Annual | All Pro features + auto-backtester exports + early access to new modules | Best value framing |
| **Lifetime** | $699 | One-time | Everything in Elite, forever, all future indicator updates | High-margin anchor offer |

Add a **7-day money-back guarantee** badge near pricing — increases conversion and is standard in this niche (verify against your refund/legal policy first).

### 6.2 Payment Stack

- **Primary: Stripe**
  - Stripe Checkout (hosted) for subscriptions + one-time Lifetime purchase
  - Stripe Billing Portal for self-serve cancel/upgrade/downgrade
  - Stripe Webhooks → your backend: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
- **Secondary (optional, crypto-native traders):** Coinbase Commerce or NOWPayments for BTC/USDT checkout
- **Alt/community bundling (optional):** Whop can still be used purely as a Discord-community/paywall layer if you want to keep a Discord-native funnel, while Stripe remains system-of-record for licensing

### 6.3 Entitlement / Licensing Flow (this is the core "make it a real SaaS" piece)

```
[Customer pays via Stripe]
        │
        ▼
[Stripe webhook: checkout.session.completed]
        │
        ▼
[Backend] → create/update `subscriptions` row
        │        (user_id, plan_tier, status, period_end)
        ▼
[Backend] → generate a signed License Key
        │        e.g. JWT: { user_id, tier, features[], exp }
        ▼
[Backend] → call TradingView access step (see 6.4)
        │
        ▼
[Email] → send license key + setup guide + dashboard link
        │
        ▼
[Dashboard] → user sees: plan, license key, TV username field,
              usage meter, renewal date, invoices, downgrade/cancel
```

### 6.4 How the "locked after purchased limit" mechanic actually works on TradingView

Two layers, use both:

**Layer 1 — Access-level lock (who can even open the script):**
TradingView's Pine "invite-only" publishing model lets you grant/revoke access per username via the Pine Editor's "Manage access list" (manual UI) or the **TradingView Access Management** flow that most indicator-seller platforms automate via a licensed script/bot (this is what tools like PineConnector or Whop's TV integration do, and what SwiftAlgo is almost certainly using under the hood via a third-party access API). Your backend, on `checkout.session.completed`, should call that access-grant step to add the buyer's TradingView username to the invite list; on `customer.subscription.deleted` / `invoice.payment_failed` after grace period, it removes them. This is your **hard lock** — no active license, no script access at all.

**Layer 2 — Feature/usage lock *inside* the script (tier-gating):**
Pine Script itself can't call your license server live (Pine has no arbitrary outbound HTTP), so tier-gating inside the script has to be done with an **input-based license key** the user pastes into the indicator's settings, which the script validates locally:
- At checkout, your backend generates a short signed token (e.g., HMAC of `user_id + tier + exp`, base32-encoded to keep it short and pasteable).
- The Pine script has a `input.string("", "License Key")` field.
- On load, the script decodes/validates the key format and expiry client-side (string parsing + a checksum you control), and only then unlocks tier-specific features (e.g., multi-timeframe table only renders if `tier >= "pro"`).
- Because Pine can't do real cryptographic verification server-side at runtime, treat this as a **soft gate** (deters casual key-sharing, not a determined attacker) — your real enforcement is Layer 1 (TradingView invite-only access), which is server-controlled and can't be bypassed by editing the script locally, since the buyer never gets the source, only invite access to your published script.
- For "usage limit" style plans (e.g., "5 pairs max on Starter"), enforce it the same way: the script reads the decoded tier from the license key and simply doesn't render/alert past the allowed pair/timeframe count for that tier — paired with your dashboard showing "3/5 pairs used."

**Renewal/expiry sync:** run a daily cron (Vercel Cron / Supabase Edge Function) that checks all `active` subscriptions against Stripe's current status and revokes TradingView access + flags expired license keys for anyone who lapsed, so access always reflects real payment status even if a webhook was missed.

### 6.5 Database Schema (minimum viable)

```sql
users (id, email, tv_username, created_at)
subscriptions (id, user_id, stripe_customer_id, stripe_sub_id, plan_tier, status, current_period_end)
license_keys (id, user_id, key_hash, tier, features_json, issued_at, expires_at, revoked_at)
usage_logs (id, user_id, feature, used_at)  -- powers the dashboard usage meter
tv_access_log (id, user_id, tv_username, action['grant','revoke'], synced_at, status)
```

---

## 7. Customer Dashboard (net-new vs. SwiftAlgo)

Sections to build:
- **Overview:** plan name, status badge (Active/Past Due/Cancelled), renewal date, "Manage Billing" → Stripe Billing Portal
- **License:** the license key (copy button), setup guide link, TradingView username field (editable, triggers re-sync)
- **Usage:** progress bars per tier limit (pairs used, alerts this month, etc.)
- **Invoices:** pulled from Stripe, downloadable PDF
- **Support:** embedded Discord widget + live chat (Crisp/Intercom)

This dashboard alone is your single biggest differentiator to lead with in marketing copy — SwiftAlgo has zero post-purchase product experience.

---

## 8. Legal / Compliance Checklist (do not skip — financial-tool marketing is heavily regulated)

- Prominent risk disclaimer on hero and footer (trading risk, hypothetical/simulated performance, no guarantee of results) — write your own version, don't copy SwiftAlgo's wording verbatim.
- Terms of Service, Privacy Policy, Refund Policy, Full Disclaimer as separate pages, linked in footer.
- If showing backtest results: label clearly as "hypothetical/simulated" and state they were "selected after the fact" if that's true — this exact framing is an FTC/regulatory expectation in this niche.
- Testimonials: only real, permissioned reviews; keep consent/records on file.
- Cookie consent banner (GDPR) if targeting EU traffic.
- Stripe/payment processor account: financial-education/trading-tools products are often flagged as "high-risk" — read Stripe's prohibited/restricted business list before building, and keep your marketing language focused on "education/tools," not guaranteed profits, to reduce chargeback/ban risk.

---

## 9. Build Order (practical sequence)

1. Design system in Figma (or skip straight to Tailwind tokens) — lock palette/type/spacing first.
2. Static marketing page (all sections above, no backend) with Framer Motion parallax — get this converting first since it's your revenue front door.
3. Stripe Checkout + webhook skeleton → confirm payment → license row created.
4. Dashboard shell (auth-gated) showing plan + license key.
5. TradingView access-grant automation (this is the trickiest integration — budget the most time here; likely needs a small headless-browser or third-party API service since TradingView has no official public access-management API).
6. Pine Script license-key input + tier gating logic.
7. Email sequence (Resend/Postmark): receipt → setup guide → day-3 check-in → renewal reminder.
8. Analytics + ad pixels + review widget.
9. QA the full funnel: fake purchase → webhook → license issued → TV access granted → dashboard reflects it → cancel → access revoked.
10. Legal review pass before going live.

---

## 10. Parallax/Motion Implementation Notes (for your dev)

- Use `useScroll({ target: heroRef })` + `useTransform(scrollYProgress, [0,1], [0,-150])` to move the hero video card up faster than the background as the user scrolls — classic 2-layer parallax.
- Wrap section reveals in `whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} viewport={{ once: true, amount: 0.3 }}`.
- Use Lenis for smooth-scroll so the parallax offsets feel buttery instead of jittery on scroll-jank.
- Keep parallax subtle (30–150px of travel max) — SwiftAlgo's target audience is on mobile a lot; disable/reduce parallax intensity under `prefers-reduced-motion` and on small viewports for performance.

---

## 11. SEO Strategy — Competing Directly Against SwiftAlgo

Goal: outrank swiftalgo.net for every query where a buyer is comparison-shopping trading indicators, and own the queries SwiftAlgo hasn't bothered to target (they're a single Framer page — almost no content depth, no blog, no programmatic SEO). That's your biggest structural opening.

### 11.1 Domain & Brand
- Target domain: `mbqalgox.com` (also secure `.io`/`.co` and common misspellings, 301 them to the primary).
- Keep the brand string consistent everywhere as **"MBQ Algo X"** (title tags, schema, socials, Google Business Profile if applicable) so Google consolidates brand-search equity under one entity.
- Register Google Search Console + Bing Webmaster Tools on day one; submit sitemap immediately even before full content is live.

### 11.2 Keyword Map

**Tier 1 — Branded/competitor-comparison (highest intent, easiest to rank, steal SwiftAlgo's own branded traffic):**
- `swiftalgo alternative`
- `swiftalgo vs mbq algo x`
- `is swiftalgo worth it` / `swiftalgo review`
- `best swiftalgo alternative reddit`
- `mbq algo x review`
- `mbq algo x tradingview`

Build a dedicated `/compare/mbq-algo-x-vs-swiftalgo` landing page (and one per competitor: TrendSpider, LuxAlgo, Zen Algo, AlgoAlpha, BigBeluga — this niche has a handful of dominant TradingView-invite-only sellers, all worth a comparison page). This is the single highest-leverage SEO play available: SwiftAlgo has zero content targeting "vs" queries, so any decent comparison page can rank within weeks, not months.

**Tier 2 — Category / product-intent keywords:**
- `non repainting indicator tradingview`
- `buy sell indicator tradingview`
- `best trading indicator for forex`
- `automated take profit stop loss indicator`
- `tradingview invite-only script`
- `trend table indicator tradingview`
- `crypto entry signal indicator`
- `best indicator for day trading`

**Tier 3 — Long-tail / educational (supports topical authority, feeds the blog):**
- `how to set up tradingview alerts on phone`
- `what does non-repainting mean tradingview`
- `how to backtest a strategy on tradingview`
- `best timeframe for scalping forex`
- `tradingview invite-only script not showing up` (support/troubleshooting intent — high-converting, low competition)
- `pine script license key explained`

**Tier 4 — Bottom-funnel / pricing intent:**
- `mbq algo x pricing`
- `mbq algo x lifetime deal`
- `mbq algo x discount code`
- `trading indicator lifetime license`

Use a free-tier tool (Ubersuggest, or Google's own Keyword Planner) plus `site:swiftalgo.net` / their PPC pages via a SERP check to see which terms they're already spending on — outbid or outrank those specifically since they've proven commercial intent.

### 11.3 Site Architecture for SEO (this is what SwiftAlgo structurally can't do as a single Framer page)

```
/                          → homepage (the parallax landing page from §3)
/pricing                   → dedicated pricing page (own URL = own ranking target)
/compare/vs-swiftalgo      → comparison page
/compare/vs-luxalgo        → comparison page (repeat per competitor)
/blog/                     → hub page
/blog/[slug]               → articles (Tier 2/3 keywords above)
/guides/tradingview-setup  → evergreen setup guide (also embed in onboarding email)
/guides/what-is-repainting → educational, links back to product as the "non-repainting" proof
/reviews                   → aggregated testimonial/review page with schema markup
/faq                       → standalone FAQ page (not just an accordion on homepage) with FAQPage schema
/dashboard/*               → noindex (behind auth, not for search)
```

Every blog/guide page should end with a contextual CTA block linking to `/pricing`, not just the nav — internal linking is what turns topical-authority traffic into buyers.

### 11.4 On-Page SEO Checklist (apply to every public page)
- One `<h1>` per page, keyword-aligned, matches search intent (not just brand copy).
- Title tag pattern: `{Primary Keyword} | MBQ Algo X` (homepage: `Non-Repainting Trading Indicator for Forex, Crypto & Stocks | MBQ Algo X`).
- Meta description: 150–160 chars, includes primary keyword + a benefit + implicit CTA. Never leave it to auto-generation.
- Descriptive, keyword-rich URL slugs (`/compare/mbq-algo-x-vs-swiftalgo`, not `/page-2`).
- `alt` text on every image describing what it shows (also required for accessibility) — e.g. `alt="MBQ Algo X buy/sell signal with automatic take-profit and stop-loss lines on EUR/USD chart"`.
- Internal links use descriptive anchor text (`see how our backtester works`, not `click here`).
- Canonical tags on every page to avoid duplicate-content issues from tracking-parameter URLs (`?utm_source=...`).

### 11.5 Technical SEO
- Server-render (Next.js App Router does this by default) — SwiftAlgo's Framer build is comparatively slow to interactive on mobile because of how Framer bundles animation JS; a fast Next.js build is a real ranking edge (Core Web Vitals is a confirmed ranking factor).
- Target Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1 — this is exactly why parallax/motion must be perf-budgeted (§10) and images must be served via `next/image` with proper `sizes`/`priority` on the hero.
- `robots.txt` allowing all public routes, disallowing `/dashboard/`, `/api/`.
- `sitemap.xml` auto-generated (`next-sitemap`), resubmitted on every deploy via CI.
- HTTPS everywhere, no mixed content, HSTS header.
- Mobile-first: this niche's traffic (Discord/TikTok/Reddit referrals) skews heavily mobile — test actual mobile PageSpeed score, not just desktop.
- Structured data (JSON-LD):
  - `Product` + `Offer` schema on `/pricing` (price, currency, availability) — enables rich pricing snippets.
  - `FAQPage` schema on `/faq` — enables FAQ rich results.
  - `Review` / `AggregateRating` schema on `/reviews` — **only if reviews are real and collected**, per Google's review-schema guidelines; fabricated ratings risk a manual action.
  - `Organization` schema site-wide (logo, sameAs socials) for brand knowledge-panel eligibility.
  - `BreadcrumbList` on blog/guide pages.

### 11.6 Content & Link-Building Plan
- **Blog cadence:** 2–4 articles/month targeting Tier 2/3 keywords above; each article should be genuinely useful (setup walkthroughs, indicator theory, timeframe comparisons) — thin AI-spun content underperforms and risks Google's helpful-content systems, especially in the YMYL-adjacent finance space.
- **YMYL awareness:** trading/finance content is treated as "Your Money or Your Life" by Google's quality guidelines — pages need clear authorship, real disclaimers, and no unsubstantiated profit claims, or the whole domain can be quality-suppressed.
- **Backlinks:** guest posts on trading-education blogs, TradingView "Editors' Picks" submission for the public (non-invite-only, teaser) version of the script if you publish one, Reddit (r/algotrading, r/Forex — participate genuinely, don't spam links), YouTube description links from demo/backtest videos, affiliate/partner program with trading educators (also drives direct sales, not just links).
- **Digital PR angle:** the `/compare/vs-swiftalgo` page plus a genuinely useful free tool (e.g., a simple public "risk/reward calculator" or "pip calculator" web tool) is classic link-bait for finance-adjacent sites and forums — cheap to build, disproportionately good for backlinks.

### 11.7 Local/Programmatic Opportunities
- If targeting specific broker/exchange audiences, spin thin-but-useful programmatic pages: `/guides/mbq-algo-x-for-mt4`, `/guides/mbq-algo-x-for-binance`, `/guides/best-settings-for-nas100` — each targeting a real long-tail search, each unique enough in content to avoid doorway-page penalties (don't template-spam near-duplicate pages; write genuinely different guidance per asset/platform).

### 11.8 Measurement
- GA4 + Search Console linked; track keyword rankings weekly for the Tier 1/Tier 2 list above.
- Conversion tracking on `/pricing` → checkout completion, segmented by traffic source, so you can see which SEO content actually drives paying customers vs. just traffic.

---

*End of spec. This document is a build blueprint — swap in your real license-server implementation, legal copy (lawyer-reviewed), finalized brand assets, and confirmed domain before shipping.*
