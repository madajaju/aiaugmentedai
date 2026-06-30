# AI-Augmented Learning Stage Pages

This package contains a replacement static-page generator and a richer data file.

## Files

- `generate-learning-stage-pages.mjs` — replacement generator that builds stage pages as learning hubs.
- `lens-data-learning.js` — richer stage data with diagnosis, mission, resources, coming-soon placeholders, premium/paywall resources, and ready-for-next checklists.

## Install location

Copy:

```text
generate-learning-stage-pages.mjs  -> your scripts/tools directory, or wherever your current generator lives
lens-data-learning.js              -> site/assets/lens-data-learning.js
```

The generator expects this path:

```text
site/assets/lens-data-learning.js
```

Run it from the repo root:

```bash
node generate-learning-stage-pages.mjs
```

## What changed

The old pages were card-based. The new pages are learning-hub based:

1. Hero
2. Journey progress
3. Diagnosis
4. Mission this week
5. Recommended tools
6. Common mistakes
7. Available resources
8. Coming soon resources
9. Member/paywall section
10. Ready-for-next checklist

## Paywall model

Free visitors get orientation, a mission, tools, mistakes, and progression checklist.
Members get the guided transformation path: videos, exercises, worksheets, prompt library, AI coach, community, and office hours.
