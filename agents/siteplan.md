# AI-Augmented Site Plan

## Purpose

The site is a movement platform with a lens-first onboarding flow.

Visitors should first identify themselves, then assess their augmentation maturity, then explore AAOS through a lens-specific and stage-specific path.

## Core Flow

1. Home
2. Find Your Path
3. Assessment
4. AAOS exploration by lens and AAOS stage
5. Resources and books
6. About / trust / context

## Page Roles

### Home

Purpose:

Create awareness and direct visitors into the journey.

Primary job:

Get the visitor to choose a lens.

Secondary job:

Introduce the movement and the public standard.

### The Movement

Purpose:

Explain why the movement exists and build urgency around the public launch.

Primary job:

Make the movement feel worth joining.

Secondary job:

Support the launch and connect the book to the public standard.

### Find Your Path

Purpose:

Help visitors choose their lens.

Primary job:

Let the visitor say "this is me."

Secondary job:

Route them to the assessment and the right lens experience.

### Assessment

Purpose:

Establish the current augmentation maturity level and next step.

Primary job:

Return a clear, actionable result.

Secondary job:

Route into the lens-specific AAOS experience.

### Lens Experiences

Purpose:

Show AAOS through the visitor's role.

Lens set:

* Individual
* Team Leader
* Organization Leader
* Student
* Teacher
* Education Administrator

Each lens should answer:

* Why this matters for me
* What this means in my context
* What my current augmentation maturity level implies
* What I should do next

Each lens should behave like a tabbed hub, but every AAOS stage should also have its own static, crawlable page.
The lens landing page is the selector. The stage pages are the discoverable content.

### AAOS Exploration

Purpose:

Let the visitor explore the framework after lens and augmentation maturity are known.

This section should be AAOS-stage-aware and lens-aware.

It should expose outcomes before framework detail.

### Resources

Purpose:

Support the journey with practical material.

Use:

* Books
* Guides
* Articles
* Launch support material

### Books

Purpose:

Support the movement and the public launch.

Books should be treated as supporting paths, not the center of the site.

### About

Purpose:

Establish credibility and context.

## Navigation

Primary nav:

* Home
* The Movement
* Find Your Path
* Resources
* About

Primary CTA:

* Find Your Path

Secondary CTA:

* Take the Assessment

## Recommended Build Order

1. Home
2. Find Your Path
3. Assessment
4. Lens pages
5. AAOS exploration pages
6. Resources and books
7. About

## Page Relationships

Home
 -> Find Your Path
 -> The Movement

Find Your Path
 -> Assessment
 -> Lens pages

Assessment
 -> AAOS exploration
 -> Resources

Lens pages
 -> AAOS-stage-specific content
 -> Recommended next steps

Lens pages should not rely on injected-only stage content.
The AAOS stage selector can navigate to real pages and still feel like tabs.

## Success Criteria

The site works when a visitor can answer:

* Which lens best describes me?
* Where am I today?
* What does AAOS mean in my context?
* What should I do next?
* How do I continue progressing?

## Build Principle

Do not build pages that do not help the visitor choose a lens, understand their maturity, or move into the next step.
