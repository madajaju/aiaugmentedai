# AI-Augmented.ai Visual Design Punch List

Goal: make the site feel more distinctive, branded, and visually engaging while preserving the current information architecture, page structure, typography, and clean professional feel.

Do not redesign the site. Do not change navigation structure or page hierarchy unless required for styling consistency.

## 1. Establish a global semantic color system

Create or update CSS variables for the core brand palette.

Use approximately:

```css
:root {
  --ink: #1E2430;
  --muted: #667085;
  --surface: #FFFFFF;
  --surface-alt: #F6F7F9;

  --purple: #6D4AFF;
  --purple-soft: #F1EDFF;

  --blue: #2979D9;
  --blue-soft: #EAF3FC;

  --gold: #C99724;
  --gold-soft: #FBF4DF;

  --business: #356C91;
  --business-soft: #EDF5FA;

  --education: #6656B3;
  --education-soft: #F1EEFA;

  --legal: #287A78;
  --legal-soft: #EAF6F5;

  --medical: #39856B;
  --medical-soft: #ECF6F1;
}
```

Use semantic variable names instead of hard-coded colors throughout the site.

Keep body copy and most backgrounds neutral.

Target approximately:

**80% neutral / 20% intentional color.**

---

## 2. Preserve IBM Plex Sans and current typography scale

Do not change the site font family.

Continue using IBM Plex Sans consistently.

Color should improve hierarchy rather than relying on more font sizes, boldness, or decorative typography.

Major headings may use limited colored emphasis within the text.

Example:

```html
<h1>Expand <span class="text-purple">human capability</span> in the age of AI.</h1>
```

Do not color entire paragraphs.

---

## 3. Add alternating section backgrounds

The homepage currently feels visually flat because too many consecutive sections use the same white background.

Create subtle alternating backgrounds.

Recommended rhythm:

```text
Hero                white
Four Questions      light neutral
Domains             white
Maturity            pale purple/neutral
AAOS                 white
Learn/Apply/Augment pale blue or neutral
Final CTA            white or dark accent
Footer               dark neutral
```

Create reusable classes such as:

```css
.section-light
.section-neutral
.section-purple-soft
.section-blue-soft
.section-dark
```

Keep tinted backgrounds very subtle.

Avoid large saturated background blocks.

---

## 4. Improve the homepage hero

Keep the hero layout and copy.

Add a branded visual element to the right side or background of the hero.

Use:

* hexagonal geometry
* interconnected nodes
* purple, blue, and gold accents
* substantial whitespace
* clean linework

Do not use:

* stock AI brains
* robots
* glowing humanoids
* circuit-board clichés
* neon cyberpunk imagery

The hero visual should feel like part of the same visual system used in AI-Augmented books, slides, and resources.

If a static SVG is used, place it in the site asset directory and make it responsive.

---

## 5. Make the hexagon motif a reusable visual system

Create reusable CSS/SVG treatments for the hexagon motif.

Use the motif selectively in:

* hero imagery
* section headers
* feature icons
* process diagrams
* card icons
* decorative corner treatments
* AAOS visuals
* Learn / Apply / Augment sections

Do not put hexagons on every card or section.

The motif should become recognizable without becoming repetitive.

---

## 6. Color-code domain cards

Update domain cards so Business, Education, Legal, and Medical are visually distinct.

Use:

```text
Business  → steel blue
Education → indigo/violet
Legal     → deep teal
Medical   → green/teal
```

Each card should include one or more of:

* colored top border
* pale tinted icon container
* colored icon
* colored heading or eyebrow
* subtle hover tint

Example pattern:

```css
.domain-card {
  background: var(--surface);
  border: 1px solid #E5E7EB;
  border-top-width: 5px;
}

.domain-card--education {
  border-top-color: var(--education);
}

.domain-card--education .domain-icon {
  background: var(--education-soft);
  color: var(--education);
}
```

Do not fill the entire card with strong color.

---

## 7. Create visual differentiation for Learn / Apply / Augment

This is one of the highest-priority changes.

The three levels should immediately feel different.

Use:

### Learn

Use purple/lavender.

Characteristics:

* lightest visual treatment
* outline or open hexagons
* knowledge/learning imagery
* subtle purple accents

### Apply

Use blue.

Characteristics:

* slightly stronger treatment
* connected shapes/workflows
* templates, workbooks, tools, structured action
* blue accent

### Augment

Use gold.

Characteristics:

* strongest treatment
* central emphasized hexagon
* collaboration / guided implementation feel
* gold accents
* more visual depth

Use the same visual convention anywhere Learn / Apply / Augment appears.

Create shared classes:

```css
.level-learn
.level-apply
.level-augment
```

Do not invent different colors on different pages.

---

## 8. Make “Learn. Apply. Augment.” a signature brand treatment

Whenever the phrase is used prominently, style each word consistently:

```text
Learn.   purple
Apply.   blue
Augment. gold
```

Example:

```html
<h2 class="engagement-heading">
  <span class="learn">Learn.</span>
  <span class="apply">Apply.</span>
  <span class="augment">Augment.</span>
</h2>
```

Use this sparingly.

It should feel like a brand signature.

---

## 9. Improve the “Four Questions” section

Keep the existing content.

Add visual identity to each question.

Recommended treatment:

```text
Who am I?              purple
Where am I?            blue
How do I improve?      gold
How much support?      purple → blue → gold progression
```

Use colored icons, left borders, numbers, or small hexagonal markers.

Do not turn the section into four heavily colored boxes.

The primary goal is to improve scanability.

---

## 10. Improve the Maturity section

The maturity model should look like a progression, not six independent gray cards.

Visually connect the stages.

Possible implementation:

* horizontal progression on desktop
* stacked progression on mobile
* subtle increasing visual intensity
* connecting line or arrow
* active-stage capability for future reuse

Stages:

```text
Aware
Exploring
Experimenting
Integrating
Leading
Augmenting
```

Keep text readable and accessible.

Avoid rainbow coloring each stage independently.

Use a controlled progression within the site palette.

---

## 11. Improve the AAOS section

Replace or enhance plain identical cards with a connected process visual.

Stages:

```text
Diagnose
Activate
Controls
Execute
Measure
Scale
```

Use:

* connected hexagons or nodes
* subtle arrows/lines
* purple, blue, and gold accents
* consistent icons if already available

Do not assign arbitrary unrelated colors to every stage.

The user should visually understand that AAOS is a process.

---

## 12. Distinguish Maturity from AAOS visually

Make these two systems visually different enough that users do not confuse them.

Use:

```text
Maturity = "Where you are"
AAOS     = "How you improve"
```

Add small eyebrow labels or supporting text consistently.

Example:

```html
<p class="eyebrow">Where you are</p>
<h2>Augmentation Maturity</h2>
```

and:

```html
<p class="eyebrow">How you improve</p>
<h2>AI-Augmented Operating System</h2>
```

Use different diagram structures even if they share the same palette.

---

## 13. Improve card hover states

Add restrained visual interaction.

Recommended:

* slight elevation
* border-color change
* small translateY
* tinted icon/background
* short transition

Example:

```css
.card {
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(0,0,0,.08);
}
```

Keep interactions subtle and professional.

---

## 14. Introduce better section separators

Avoid relying only on whitespace.

Use one or more of:

* very light background transition
* short accent line
* hexagonal marker
* eyebrow text
* subtle border

Do not use heavy horizontal rules across the entire page.

---

## 15. Improve buttons

Create a consistent button system.

Recommended:

```text
Primary CTA      purple or dark ink
Secondary CTA    white with colored border
Context CTA      domain-specific accent where appropriate
Augment CTA      gold accent where appropriate
```

Standardize:

* padding
* border radius
* hover behavior
* icon spacing
* disabled states

Avoid having all buttons look identical gray/black.

---

## 16. Improve navigation color cues

Do not redesign navigation.

Add restrained active-state cues.

For the top domain selector:

```text
General
Business
Education
Legal
Medical
```

Use the relevant domain color for:

* underline
* small indicator
* active text color
* subtle background pill

Only the active domain should receive the stronger treatment.

Keep inactive items neutral.

---

## 17. Add domain identity to interior pages

Each domain page should inherit a subtle visual identity.

For example, Education pages can use:

* education-colored eyebrow labels
* small top accent
* pale section backgrounds
* matching domain icon

Do not color the entire page based on domain.

Maintain overall AI-Augmented brand consistency.

---

## 18. Keep legal pages restrained

Privacy and Terms pages should not receive the same decorative treatment as marketing pages.

Use:

* white background
* dark text
* subtle domain/header accent
* strong typography
* readable line length
* minimal visual decoration

Legal pages should prioritize trust and readability.

---

## 19. Improve footer contrast

Make the footer visually distinct.

Use a dark neutral background such as:

```css
--footer-bg: #171B24;
```

Use:

* white or near-white headings
* muted light body text
* restrained purple/blue/gold accents
* clear hover states

Do not use a bright brand color as the full footer background.

---

## 20. Check accessibility

After adding color, verify:

* WCAG contrast for all text
* buttons remain readable
* links are distinguishable without color alone
* hover states have keyboard focus equivalents
* domain colors are not the only signal
* tinted backgrounds maintain sufficient contrast

Use visible focus states.

Do not remove outline behavior unless replacing it with an accessible focus treatment.

---

## 21. Maintain responsive behavior

Verify all visual changes on:

```text
mobile
tablet
desktop
large desktop
```

Specifically test:

* hero artwork
* domain cards
* maturity progression
* AAOS diagram
* Learn / Apply / Augment
* navigation
* footer

Convert horizontal diagrams into vertical or wrapped layouts on narrow screens.

---

## 22. Avoid unnecessary visual noise

Do not add:

* excessive gradients
* animated particles
* glowing backgrounds
* parallax effects
* generic stock AI imagery
* multiple competing illustration styles
* excessive drop shadows
* large areas of saturated color
* excessive iconography

The desired style is:

```text
professional
academic
modern
human-centered
architectural
distinctive
```

Not:

```text
cyberpunk
startup cliché
gaming
crypto
generic SaaS
```

---

# Priority Order

Implement in this order:

1. Global semantic color variables.
2. Alternating section backgrounds.
3. Domain card color coding.
4. Learn / Apply / Augment visual differentiation.
5. Hero hexagon visual.
6. Four Questions visual treatment.
7. Maturity progression.
8. AAOS process visualization.
9. Button system.
10. Navigation active-state colors.
11. Footer styling.
12. Interior-page domain accents.
13. Hover/focus polish.
14. Accessibility and responsive QA.

# Acceptance Criteria

The work is complete when:

* The site no longer feels monochromatic.
* White and neutral colors still dominate the interface.
* Purple, blue, and gold visibly reinforce the AI-Augmented brand.
* Business, Education, Legal, and Medical are visually distinguishable.
* Learn, Apply, and Augment are instantly distinguishable.
* Maturity and AAOS look like different concepts.
* The existing information architecture remains unchanged.
* IBM Plex Sans remains the site font.
* The site still feels professional rather than promotional or flashy.
* Color usage is consistent across pages.
* Mobile layouts remain clean and functional.
* Accessibility contrast and keyboard focus are preserved.
