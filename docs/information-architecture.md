# AI-Augmented information architecture

The site uses five separate dimensions:

```text
WHO                 Lens
CONTEXT             Domain
WHERE               Maturity
HOW                 AAOS
LEVEL OF SUPPORT    Learn / Apply / Augment
```

## Lens: who

Lenses describe the visitor's role: Individual, Team Leader, Organization Leader, Student, Teacher, or Education Leader.

## Context: domain

Contexts describe where the work happens. Education is the current context. Business, Healthcare, Legal, and Government are planned contexts.

Use `/contexts/` for context discovery. Existing `/education/` and `/lens/` URLs remain stable until a redirect-backed migration is ready.

## Maturity: where

Maturity describes the visitor's current level: Aware, Exploring, Experimenting, Integrating, Leading, or Augmenting.

## AAOS: how

AAOS is the operating method: Diagnose, Activate, Controls, Execute, Measure, and Scale.

## Level of support

Learn provides free education. Apply provides paid self-service assets. Augment provides paid guided support.

## URL rules

- Use trailing slashes for public directory URLs.
- Use `ai-augmented.ai` with HTTPS as the canonical domain.
- Keep role routes under `/lens/` unless a redirect plan exists.
- Add public canonical pages to the sitemap.
- Use breadcrumbs to expose the meaningful parent path.
