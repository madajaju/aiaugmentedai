# AI-Augmented Site — Cleanup Punchlist

Source: `sitep`

Legend: `[ ]` open · `[x]` resolved · `P0` blocker before launch · `P1` should do before launch · `P2` fast follow · `P3` nice to have

---

## P0 — Verify before launch (trust/credibility risk)

- [x] ~~Confirm every stat in the "Movement by the Numbers" section is accurate and current.~~ **Confirmed by Darren — closed.**

---

## P1 — Should do before launch

- [x] ~~Consolidate the homepage CTA sprawl.~~ **Done** — homepage down to ~5 `.button`-styled CTAs (nav, hero, "See My Maturity," two newsletter submits); former per-lens/resource buttons converted to `.text-link`.

- [x] ~~Build a "Start Here" onboarding page.~~ **Done** — `start-here/index.html` exists, linked from launch banner, hero, footer, `/movement/`, and `sitemap.xml`.

- [x] ~~Fix countdown pluralization bug.~~ **Done** — `formatCountdown()` in `assets/site.js` now handles singular/plural units.

- [x] ~~Remove or restyle the hero "chip" row so it stops looking like dead buttons.~~ **Done** — `.hero-facts` block deleted from `index.html`.

- [x] ~~Increase spacing between the hero CTA row and the chip row below it.~~ **N/A** — chip row deleted.

- [x] ~~Fix section-to-section spacing/visibility across the whole page.~~ **Done** — added `border-top` to `.band + .band` and trimmed padding in `site.css`.

- [x] ~~Add a tooltip to the nav "saved lens" indicator.~~ **Done** — added `title` attribute to saved links in `assets/site.js`.

- [x] ~~Fix the font-loading bug — Inter is referenced but never actually loaded.~~ **Done** — Google Fonts link added to `<head>` of all HTML files.

- [x] ~~Raise the minimum font size for card body copy.~~ **Done** — floor set to `0.95rem` for card-level descriptive text in `site.css`.

---

## P2 — Fast follow after launch

- [x] ~~Add real photos beyond the single headshot.~~ **Done** — `assets/img/workshops/` now has six images (keynote, session, teacher, teams, individual, education).

- [x] ~~Build an ecosystem diagram.~~ **Done** — live at `#ecosystem` on the homepage.

- [x] ~~Tighten the homepage hero line.~~ **Done** — hero now reads "Stop accumulating Hallucination Debt," using the site's own vocabulary instead of a generic industry line.

- [ ] **(Optional, post-launch) Consider a distinct heading typeface paired with Inter for body text.**
  Currently `h1`–`h4` and body copy all use the same `--font-sans` (Inter), differentiated only by size/weight. That's safe and reads fine, but for a site anchored to a published book and a named framework, a more distinctive display face on headings (e.g. Fraunces or Source Serif 4) would push the visual identity further from "well-made SaaS template" toward "editorial/authoritative movement" — not urgent, just a lever worth knowing about.

---

## P3 — Nice to have

- [x] ~~Add a homepage countdown/launch-week callout for July 21, 2026.~~ **Done** — dynamic, JS-driven countdown banner (`renderBanner()` in `assets/site.js`), recalculates every minute, has a graceful "The movement is live" post-launch state. (See P1 pluralization bug above — the only remaining issue with it.)

- [x] ~~Add 1–2 more newsletter capture points.~~ **Done** — added a third capture point to the homepage after the `#proof` section.

---

## Already fixed — do not re-open

- Canonical tags across all 66 pages correctly point to `ai-augmented.ai` (no stray `aiaugmented.ai` references).
- `robots.txt` / `sitemap.xml` reference the correct domain.
- Assessment result screen includes a working email-capture form tied to Zoho Campaigns.
- `Person` schema for Dr. Darren Pulsipher present on homepage with credentials, image, and `sameAs` links (Amazon, LinkedIn, Embracing Digital, Paidar).
- `FAQPage`, `Organization`, `BreadcrumbList`, `DefinedTerm`/`DefinedTermSet`, and `Article` schema implemented site-wide.
- `datePublished` / `dateModified` present on both long-form articles.
- Primary nav uses root-relative links and includes a direct `/newsletter/` link.
- Meta descriptions are unique across all 66 pages, including templated lens/stage pages.
- Movement-by-the-numbers stats confirmed accurate by Darren.
