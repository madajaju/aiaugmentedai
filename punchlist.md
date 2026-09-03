P0 — Fix the stale launch language

The Movement page is the most obvious issue. It still says things like “Be part of the movement before launch day arrives,” “Launches July 21, 2026,” “before launch,” and describes July 21 as something in the future.

The Resources page likewise says users can “Preorder the book that supports the launch.”

The Books hub repeatedly uses “early-order options,” “Order early,” and refers visitors back to the movement for “launch context.”

That needs a systematic post-launch pass. I would change the language from:

Launch → Movement / Adoption / Join
Preorder / Order early → Buy / Get the book / Learn more
Before launch → Start now / Join now / Continue the journey

This is the biggest credibility issue I see.

P0 — Remove public placeholder language

This is surprisingly visible deeper in the site.

The Individual lens literally tells visitors:

“Each level opens its own static page and can grow from placeholder into full curriculum.”

And the maturity pages say:

“This page is designed as a placeholder today and a full learning hub tomorrow.”

That sounds like internal development documentation escaped into production.

I would remove all language containing concepts such as placeholder, static page, can grow later, more content is being added, unless you intentionally want a beta/dev feel.

A visitor should simply see what is available now.

P1 — Navigation does not expose all six lenses

You correctly define six lenses:

Individual, Team Leader, Organization Leader, Student, Teacher, Education Administrator.

But the global footer only exposes:

Individual | Team Leader | Organization Leader | Assessment

Student, Teacher and Education Administrator are missing throughout the footer/navigation.

That subtly makes education feel secondary despite education being one of the site's three primary audience pillars.

I'd either expose all six under Paths, or group them:

Professional
Individual · Team Leader · Organization Leader

Education
Student · Teacher · Education Leader

That would fit your movement architecture better.

P1 — Lens SEO titles are copied incorrectly

This is a concrete metadata problem.

The page titles currently include:

AI-Augmented Team Leader | Personal AI Fluency & Productivity
AI-Augmented Organization Leader | Personal AI Fluency & Productivity
AI-Augmented Student | Personal AI Fluency & Productivity
AI-Augmented Teacher | Personal AI Fluency & Productivity

“Personal AI Fluency & Productivity” obviously belongs to the Individual lens and appears to have been copied across the templates.

I'd make these role-specific, for example:

Team Leader:
AI-Augmented Team Leader | AI Team Leadership & Reliable Workflows

Organization Leader:
AI-Augmented Organization Leader | Enterprise AI Governance & Scale

Student:
AI-Augmented Student | AI Learning, Judgment & Academic Skills

Teacher:
AI-Augmented Teacher | AI Teaching, Assessment & Learning Design

This matters for both Google and what users see in browser/share previews.

P1 — Education Administrator has a few routing/positioning inconsistencies

This page is much richer than the other lens pages—which I actually like—but it has some unusual behavior.

The CTA labeled “Contact Dr. Darren” appears to point to the site's general About destination rather than an obvious contact destination.

It also shifts terminology from the canonical lens name Education Administrator to Higher Education Leadership. That may be intentional, but throughout the rest of the architecture the lens is called Education Administrator.

I'd settle on one public name. I actually prefer:

Education Leader

It covers administrators without sounding bureaucratic and works across K-12 and higher ed.

P1 — Book state is inconsistent between ai-augmented.ai and paidar.ai

The AI-Augmented books page advertises five books and describes them as having current “early-order options.”

But the current Paidar pages differ materially:

Becoming AI-Augmented and AI-Augmented Teams have actual purchase links.

AI-Augmented Organizations, Educating the AI-Augmented, and AI-Augmented Education currently do not show purchase options; they mostly provide descriptions/consultation/toolkit links.

So AI-Augmented should not label every title “Order early.”

A better state model would be:

Available Now
Becoming AI-Augmented
AI-Augmented Teams

Coming Next
AI-Augmented Organizations

In Development
Educating the AI-Augmented
AI-Augmented Education

That would actually help build anticipation instead of making missing purchase buttons look broken.

P1 — Some maturity copy clearly came from generation templates

I found several examples that aren't broken but should be cleaned up before driving more traffic.

For example:

“This stage page helps a individual recognize where they are...”

And some generated-looking bullets such as:

“You are focused on: standardize one workflow.”
“You are focused on: build your personal os.”

Those should become natural visitor-facing prose.

This suggests doing a global search through the repo for strings like:

placeholder
coming soon
a individual
you are focused on:
early-order
preorder
before launch
launch day
July 21

That will probably catch most of this class of issue.

P2 — “Coming Soon” / locked membership creates expectations you may not want yet

The maturity pages advertise a future member experience containing:

complete video curriculum, exercises, prompt library, worksheets, badges, AI coach, community and office hours.

If that membership product is genuinely coming, great.

But if you aren't ready to launch it soon, I would remove the large locked-content section. Right now it makes the site look like a partially implemented SaaS product instead of a strong movement/framework site.

The same goes for the repeated Coming Soon video lesson, worksheet, prompt examples, community discussion, and weekly challenge sections.

I'd rather show 3 excellent things that exist than 8 locked things that don't.

What is working well

The core journey is much clearer than I expected:

Start Here → Find Your Path → Assessment → Lens → Maturity → AAOS.

The Assessment is especially coherent: it distinguishes the six lenses from the six maturity levels, and explicitly explains that AAOS is the operating model rather than confusing AAOS stages with maturity.

The AAOS page also presents all six lenses correctly and describes the six AAOS stages consistently as Diagnose → Activate → Controls → Execute → Measure → Scale.

And unlike the issues we found on embracingdigital.org, I have not found a systemic 404/navigation failure in the primary ai-augmented.ai hierarchy so far. The main pages, all six lenses, assessment, AAOS, books, articles, and sampled maturity pages resolve.