# Punchlist — ai-augmented.ai

Source: `site` snapshots reviewed 2026-07-03/07-04. File paths and line numbers refer to the most recent snapshot reviewed — re-check before editing if files have shifted.

Legend: `[ ]` open · `[x]` resolved · `P0` blocker before launch · `P1` should do before launch · `P2` fast follow · `P3` nice to have

---

## P0

- [x] **Finish fixing inconsistent testimonial attribution.**
  File: `index.html`, testimonial cards (`voices` section).
  Four of six now have full names (`Jeremy Harris`, `Laura Newey`, `DiAnn Fox`, `Jayme Bahouth`). Two are still first-name-only: `Anna, Accountant` and `Boyd, Product Team Leader should be Julianne Sombke`. Get last names + publishing permission, or intentionally standardize all six to first-name-only.

- [x] **Add a copyright/entity line to the footer — currently missing entirely.**
  File: `index.html`, `<footer class="footer">` (~line 773). There is no `©`/LLC line anywhere in the footer. Since this is the movement/book site tied to Paidar Press, add:
  ```html
  <p class="muted">© 2026 Paidar Productions LLC. Paidar Press is an imprint of Paidar Productions LLC.</p>
  ```
  (Confirmed entity mapping: Paidar Productions LLC = podcast, speaking, and Paidar Press/books. Paidar Systems LLC = software/consulting — used on paidar.ai instead.)

---

## P1

- [x] **Fix countdown pluralization bug.**
  File: `assets/site.js`, `formatCountdown()`. Currently renders "17 days, **1 hours**, 4 minutes."
  ```js
  function formatCountdown(target) {
    const now = new Date();
    const remaining = target.getTime() - now.getTime();
    if (remaining <= 0) return { live: true, text: 'The movement is live' };
    const totalMinutes = Math.floor(remaining / 60000);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;
    const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;
    return { live: false, text: `${plural(days, 'day')}, ${plural(hours, 'hour')}, ${plural(minutes, 'minute')}` };
  }
  ```

- [x] **Remove or restyle the hero "chip" row** (`.hero-facts`) so it stops looking like dead buttons.
  File: `index.html` (five spans: "Lens first," "Assessment next," "AAOS by context," "Public standard," "Next step"); `assets/site.css` (`.hero-facts span`, ~line 351). These have border/background/padding identical to a button but no `href`, and duplicate the Journey Map card next to them. Recommended: delete the block. If kept, strip button styling:
  ```css
  .hero-facts span { display: inline-flex; align-items: center; padding: 0; border: none; background: none; color: var(--muted); font-size: 0.85rem; font-weight: 600; }
  .hero-facts span:not(:last-child)::after { content: "·"; margin-left: 0.5rem; color: var(--border); }
  ```

- [x] **Increase spacing between hero CTA row and chip row** (only relevant if chip row is kept).
  File: `assets/site.css`, `.hero-facts` (~line 349): `margin-top: 1.25rem;` (was `0.25rem`).

- [x] **Add a section-break divider and trim excess band padding.**
  File: `assets/site.css`, `.band` rule (~line 145). Root cause: `padding: clamp(3rem, 6vw, 5rem) 0` on every `.band`, combined with several places where two same-type bands land back to back (`#definition`→`#movement` both plain; `#journey`→`#aaos` both alt; `#ecosystem`→`#proof` both plain) — background doesn't shift at the seam, so ~160px of whitespace reads as a broken gap.
  ```css
  .band + .band { border-top: 1px solid var(--border); }
  .band { padding: clamp(3rem, 6vw, 4rem) 0; }
  ```

- [x] **Fix the font-loading bug — Inter is referenced but never actually loaded.**
  File: `assets/site.css` (`--font-sans: Inter, ...`, ~line 21); every `.html` `<head>`. No Google Fonts `<link>`/`@font-face`/self-hosted font files exist anywhere, so every visitor is silently seeing their OS default font instead of Inter. Add before the stylesheet link:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  ```

- [x] **Raise the minimum font size for card body copy.**
  File: `assets/site.css` — several rules set card descriptive text at `0.85rem`–`0.92rem` (13.6–15.2px), e.g. Core Principles cards. Set a floor of `0.95rem` (ideally `1rem`) for any card text meant to be read as a sentence; reserve sub-`0.9rem` sizes for true metadata (kickers/labels/timestamps).

- [x] **(Optional) Add a tooltip to the nav "saved lens" indicator.**
  File: `assets/site.css`, `.nav a.is-saved::after` (~line 584); wiring in `assets/site.js` (`initStagePersistenceControls`). Intentional personalization dot, but has no explanation — add `title="You have a saved path here"`.

- [x] **Homepage should surface the actual AAOS stages, not just the Maturity Model.**
  Currently the homepage only shows the Maturity Model (Aware → Exploring → Experimenting → Integrating → Leading → Augmenting). The AAOS stages themselves (Diagnose → Activate → Controls → Execute → Measure → Scale, per `/aaos/`) don't appear on the homepage at all. Since AAOS is meant to be the central "operating system of the movement," consider surfacing both on the homepage so a first-time visitor gets the full picture without an extra click.

---

## P2 (post-launch)

- [ ] **(Optional) Consider a distinct heading typeface paired with Inter for body text.** Currently `h1`–`h4` and body copy share the same font family, differentiated only by size/weight. A more distinctive display face on headings (e.g. Fraunces or Source Serif 4) would push the visual identity further toward "editorial/authoritative movement." Not urgent.

- [x] **Add 1–2 more newsletter capture points**, not one on every section. Currently two (mid-page + final CTA) — good restraint; consider at most one more (e.g. after the FAQ section).

- [x] **Fix SVG interactivity (links and hover) for ecosystem and AAOS diagrams.** Inlined `ecosystem.svg` on homepage; switched `aaos.svg` to `<object>` site-wide.

---

## Already fixed — do not re-open

- Canonical tags across all 66 pages correctly point to `ai-augmented.ai`.
- `robots.txt` / `sitemap.xml` reference the correct domain.
- Assessment result screen has a working email-capture form tied to Zoho Campaigns.
- `Person` schema for Dr. Darren Pulsipher present with credentials, image, `sameAs` links.
- `FAQPage`, `Organization`, `BreadcrumbList`, `DefinedTerm`/`DefinedTermSet`, `Article` schema implemented site-wide.
- `datePublished` / `dateModified` present on both long-form articles.
- Primary nav uses root-relative links, includes a direct `/newsletter/` link.
- Meta descriptions unique across all 66 pages.
- CTA sprawl consolidated (~5 `.button` CTAs vs. former ~15).
- Start Here page built and linked everywhere.
- Photos added (`assets/img/workshops/`, six images).
- Ecosystem diagram live at `#ecosystem`.
- Hero line rewritten to use site vocabulary ("Hallucination Debt") instead of generic industry phrasing.
- Dynamic, JS-driven launch countdown banner with graceful post-launch state.
- Movement-by-the-numbers stats confirmed accurate and current by Darren (July 2026).
