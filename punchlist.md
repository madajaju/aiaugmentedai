# AI-Augmented Site — Cleanup Punchlist

Source: site

Legend: `[ ]` open · `P0` blocker before launch · `P1` should do before launch · `P2` fast follow · `P3` nice to have

---

## P0 — Verify before launch (trust/credibility risk)

- [X] **Confirm every stat in the "Movement by the Numbers" section is accurate and current.**
  File: `index.html`, lines 638–658.
    - `1 Million+` monthly podcast downloads (line 641)
    - `500+ Episodes` (line 646)
    - `200K+ Subscribers` (line 651)
    - `30+ Organizations` (line 656)
      Action: Replace each with a real, current, defensible number (pull from podcast host analytics / YouTube Studio / actual institutional adoption list). If a number can't be verified today, either soften the claim (e.g. "Hundreds of episodes") or pull the card until it can be confirmed. Do not add additional stat cards until these four are confirmed.

- [X] **Fix inconsistent testimonial attribution.**
  File: `index.html`, lines 668–703 (testimonial cards).
    - Line 675: `Jeremy Harris, AI Governance Lead` — reads as an unedited username paired with an invented title. Replace with a real first+last name, or standardize to a handle-safe format like `"Jeremy Harris - Founder of JHarris Advisory LLC"
    - Lines 680, 685, 690, 695, 700 (`Laura Newey - Educator`, `Anna - Accountant`, `Julianne Sombke - Product Manager`, `DiAnn Fox - Educator`, `Jayme Bahouth`) — decide on one consistent attribution style for all six cards (either "First Last, Title" everywhere, or "First name, role" everywhere, or "Verified Reader" everywhere). Right now it's a mix, which undercuts trust in the ones that look most polished.
    - Confirm you have permission/rights to publish each quote and name as attributed.

---

## P1 — Should do before launch

- [X] **Consolidate the homepage CTA sprawl.**
  File: `index.html`. Current button-styled CTAs on the homepage (15 total):
    - Line 214 `Take The Assessment` (nav)
    - Line 227 `Find Your Path`, line 228 `Take The Assessment`
    - Line 378 `See My Maturity`
    - Lines 395/401/407/413/419/425 — six `See Your Path` buttons (one per lens)
    - Line 472 `Find My Maturity In 3 Minutes`, line 473 `Explore AAOS`
    - Line 500 `See How The AAOS Works`
    - Line 554 `Explore Resources`
    - Line 584 `View Supporting Resources`
    - Line 726 `Join The Movement`, line 729 `Start With The Assessment`, line 730 `Find Your Path`
      Action: Keep **Take the Assessment** and **Join the Newsletter** as the only two `.button` (primary/secondary) styled CTAs on the page. Restyle the rest — the six per-lens "See Your Path" links, "Explore AAOS," "Explore Resources," "View Supporting Resources" — as plain text links (`.link` or inline `<a>`, not `.button`) so they read as in-context navigation rather than competing calls to action.

- [X] **Build a "Start Here" onboarding page** for first-time visitors (especially podcast listeners landing with no context).
  New file: `start-here/index.html` (add to nav, `sitemap.xml`, and internal links from `/movement/` and homepage).
  Suggested flow: What is AI-Augmented? → Take the Assessment → Read the first article → Join the newsletter. Keep it to one clear linear path, no branching.

---

## P2 — Fast follow after launch

- [X] **Add real photos beyond the single headshot.**
  Current image inventory: `assets/img/darren-pulsipher.jpg` + workshop photos + book cover art.
  Action: Sourced workshop and keynote photos from movement assets and integrated them into /about/ and /movement/ galleries to humanize the content.

- [X] **Build an ecosystem diagram** showing how Movement → Assessment → AAOS → Books → Workshops → Community fit together. Currently implemented on the homepage using a professional SVG visual (`/assets/img/ecosystem.svg`).

- [X] **Tighten the homepage hero line.**
  Refactored the hero copy to lead with "Hallucination Debt" and "Reliable Workflows," increasing differentiation and framework alignment.

---

## P3 — Nice to have

- [X] **Add a homepage countdown/launch-week callout for July 21, 2026.**
  Implemented a lightweight global countdown banner on the homepage noting "18 days left" to build urgency and momentum toward the July 21 launch.

- [X] **Add 1–2 more newsletter capture points**, not one on every section. Added a high-converting mid-page capture point after the FAQ section on the homepage, balancing visibility with user experience.

---

## Already fixed — do not re-open

These were flagged in earlier reviews and are confirmed resolved in this snapshot — listed here only so Junie doesn't re-flag them as issues:

- Canonical tags across all 66 pages correctly point to `ai-augmented.ai` (no stray `aiaugmented.ai` references).
- `robots.txt` / `sitemap.xml` reference the correct domain.
- Assessment result screen includes a working email-capture form tied to Zoho Campaigns.
- `Person` schema for Dr. Darren Pulsipher present on homepage with credentials, image, and `sameAs` links (Amazon, LinkedIn, Embracing Digital, Paidar).
- `FAQPage`, `Organization`, `BreadcrumbList`, `DefinedTerm`/`DefinedTermSet`, and `Article` schema implemented site-wide.
- `datePublished` / `dateModified` present on both long-form articles.
- Primary nav uses root-relative links (`/movement/`, `/about/`, etc.) and includes a direct `/newsletter/` link.
- Meta descriptions are unique across all 66 pages, including templated lens/stage pages.