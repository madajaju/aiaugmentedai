# UX Validation Checklist

## Automated checks

- `npm.cmd run check:site` validates one H1, required metadata, image alt attributes, terminology, and sitemap coverage.
- `npm.cmd run check:links` validates local paths, anchors, and external links.
- `node scripts/check-ux-journeys.mjs` validates the core journey entry points and named progression events.
- `node scripts/generate-ux-review.mjs` regenerates `docs/ux-page-review.md` for all public pages.

## Required manual viewport review

Review at 320px, 375px, 390px, 430px, 768px, 1024px, and desktop widths.

| Area | Check |
|---|---|
| Navigation | Menu, dropdowns, focus order, and current-page state work with keyboard and touch. |
| Lens cards | Cards remain readable, grouped, and actionable without horizontal scrolling. |
| Assessment | Radio controls, step navigation, required-field errors, result focus, and local-save explanation are usable. |
| Maturity pages | Stage navigation, saved-path bar, next action, and resource links remain visible and ordered. |
| Tables and diagrams | Content can be read without clipping or forced desktop width. |
| Forms | Labels, required indication, provider success/error states, privacy copy, and mobile input sizing are clear. |
| Accessibility | Skip link, heading order, button names, link names, landmarks, and visible focus are present. |
| Layout | No horizontal scroll or overlapping content at any required width. |
