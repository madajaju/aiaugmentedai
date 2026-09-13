# Learn → Apply → Augment implementation plan

This plan moves the AI-Augmented site from a framework and resource architecture into a clear engagement and product architecture.

## Strategy to preserve

- **AI-Augmented** is the movement and overall brand.
- **AAOS** is the operating framework and maturity model.
- **Learn → Apply → Augment** describes how visitors engage with the system and the level of support they receive.
- The **shop** is the delivery and transaction destination for free Learn assets and paid Apply assets.
- **Augment** contains higher-touch services such as workshops, assessments, briefings, keynotes, and institutional engagements.
- The six AAOS maturity stages remain **Aware → Exploring → Experimenting → Integrating → Leading → Augmenting**.
- Learn → Apply → Augment must not be presented as a replacement for the AAOS maturity stages. The two models answer different questions.

## Product taxonomy

Use these definitions consistently in page copy, product cards, metadata, navigation, shop collections, email links, and QR code destinations.

### Learn

Free educational assets delivered through the shop, usually through a $0 checkout or account flow.

Examples: keynote and breakout guides, Quick Start Guides, articles, videos, assessments, introductory checklists, foundational chapters, and role-specific explainers.

Primary promise: **Understand the principles, language, and frameworks behind reliable AI-Augmented work.**

Preferred CTAs: **Start Learning**, **Browse Free Learning Assets**, **Get the Free Guide**, **Explore the Learn Collection**.

### Apply

Paid practical assets that help an individual, team, or organization apply the framework to real work.

Examples: workbooks, workflow templates, Reliable and Defensible Work kits, team toolkits, facilitation guides, role-specific implementation plans, and department or campus playbooks.

Primary promise: **Apply the framework to a real workflow, team, or institutional challenge.**

Preferred CTAs: **Browse Application Toolkits**, **Apply the Framework**, **Choose a Workflow Kit**, **Start a Team Implementation**.

### Augment

Paid, higher-touch support delivered through Darren or the AI-Augmented practice.

Examples: executive briefings, leadership workshops, AI readiness assessments, team facilitation, organizational capability assessments, keynotes, and institutional transformation engagements.

Primary promise: **Augment your people, teams, and organization with guided implementation and expert support.**

Preferred CTAs: **Explore Augmentation Services**, **Plan an Organizational Engagement**, **Bring Darren to Your Organization**, **Book a Conversation**.

## Task 1 — Define and document the final product taxonomy

### Goal

Create the authoritative inventory that assigns every current and planned asset to Learn, Apply, or Augment before changing navigation or copy.

### Work

- Inventory all current assets linked from `site/`, including resources, articles, books, assessments, lens pages, maturity pages, AAOS pages, workshops, newsletters, and external Paidar.ai destinations.
- Add each planned IUC asset and new release to the inventory.
- Assign each item an engagement category: Learn, Apply, or Augment.
- Record whether the item is free, paid, or inquiry based.
- Record the intended audience or scope: Individual, Team, Organization, Student, Teacher, or Education Leader.
- Record the canonical destination URL and the expected CTA.
- Identify assets that currently have ambiguous labels such as “Explore,” “Resources,” “Toolkit,” or “Framework.”
- Identify duplicate or overlapping products that should be combined, renamed, or redirected.

### Source-of-truth inventory

The inventory below is the working classification from the current `site/` tree and the planned IUC assets. “Current path” identifies the existing public route. “Destination” identifies the expected canonical delivery or conversion path after the strategy is implemented. A `TBD` value is an implementation blocker that must be resolved before a CTA is published.

| Asset or destination | Current path | Category | Price state | Audience / scope | Destination | CTA | Status / decision |
|---|---|---|---|---|---|---|---|
| Start Here onboarding | `/start-here/` | Learn | Free | All / Individual entry | Site page, then Assessment or Learn collection | Start Here | Keep as onboarding; add Learn framing and route to the strategy page |
| AI-Augmented Movement | `/movement/` | Learn | Free | All / Movement | Site page | Join the Movement | Keep as brand and context page; add Learn → Apply → Augment explanation |
| Find Your Path | `/find-your-path/` | Learn | Free | All / Role selection | Lens hub | Find Your Path | Keep as role-selection route; do not classify the lenses themselves as products |
| AI Readiness Assessment | `/assessment/` | Learn | Free | All / Individual, Team, Organization, Education | Site assessment flow | Take the Assessment | Keep free; classify as Learn and connect results to Apply and Augment recommendations |
| AAOS framework | `/aaos/` | Learn | Free | All / Framework | Site framework page | Explore AAOS | Keep as the public framework; explain that AAOS supports all three engagement levels |
| Foundational AAOS article | `/articles/ai-adoption-framework-aaos/` | Learn | Free | All / Framework | Site article | Read the AAOS Framework | Keep as free learning content |
| AI maturity article | `/articles/understanding-ai-maturity-model/` | Learn | Free | All / Framework | Site article | Understand AI Maturity | Keep as free learning content |
| Articles hub | `/articles/` | Learn | Free | All / General learning | Site article collection | Read the Articles | Keep as Learn collection |
| General resources hub | `/resources/` | Learn | Free / mixed today | All / General learning | New Learn collection and shop | Start Learning | Reclassify page as Learn gateway; separate paid Apply items from free content |
| Newsletter | `/newsletter/` | Learn | Free | All / Community | Newsletter signup | Join the Newsletter | Keep as Learn/community relationship; document email provider and consent behavior |
| Books hub | `/books/` | Learn foundation | Paid books / availability varies | All / Individual, Team, Organization, Education | Paidar.ai book pages or shop | Explore the Series / Get the Books | Keep separate from the three offer categories; explain that books support Learn, Apply, and Augment |
| Becoming AI-Augmented book | Paidar.ai book page | Learn foundation | Paid book | Individual | Paidar.ai or shop | Get the Book | Verify current purchase URL and availability |
| AI-Augmented Teams book | Paidar.ai book page | Apply foundation | Paid book | Team / Team Leader | Paidar.ai or shop | Get the Book | Treat as intellectual foundation for Apply; do not label the book itself as the Team Toolkit |
| AI-Augmented Organizations book | Paidar.ai book page | Apply foundation | Paid book / release state to verify | Organization / Organization Leader | Paidar.ai or shop | Get the Book / Learn More | Verify release and purchase state before publishing availability claims |
| Educating the AI-Augmented book | Paidar.ai book page | Learn foundation | Availability to verify | Student, Teacher, Education Leader | Paidar.ai or shop | Learn More / Get the Book | Verify current product state |
| AI-Augmented Education book | Paidar.ai book page | Apply foundation | Availability to verify | Education / Institution | Paidar.ai or shop | Learn More / Get the Book | Verify current product state |
| IUC keynote Quick Start Guide | Planned asset, linked from `/education/` | Learn | Free through shop | IUC attendee / Individual | Shop Learn collection or product page | Get the Free Keynote Guide | Create product and stable URL; do not link to generic Resources once available |
| IUC Reliable and Defensible AI Workflow Guide | Planned asset, linked from `/education/` | Apply | Paid through shop | IUC attendee / Individual or Team | Shop Apply product page | Apply the Workflow | Create product, price, fulfillment, and canonical URL |
| AI Execution Starter Toolkit for Individuals | Existing shop product | Apply | $49 listed; currently marked sold out | Individual / Individual | `https://shop.paidar.ai/products/ai-starter-toolkit` | View full details | Use as a known Apply product once inventory status is resolved |
| Educator's AI-Augmented Toolkit: Classroom Starter | Existing shop product | Apply | $49 listed | Teacher, Education Leader / Education | `https://shop.paidar.ai/products/educators-ai-augmented-toolkit-classroom-starter` | View full details | Use as a known education Apply product; verify checkout and fulfillment |
| AI-Augmented Team Toolkit | Planned asset, currently routed to `/lens/team-leader/` | Apply | Paid through shop | Team Leader / Team | Shop Apply product page | Explore the Team Toolkit | Replace lens-only destination when product exists; keep lens as supporting context |
| AI-Augmented Organization Framework | Planned asset, currently routed to `/lens/organization-leader/` | Apply | Paid through shop or inquiry, to verify | Organization Leader / Organization | Shop Apply product or Augment inquiry | Explore the Organization Framework | Decide whether self-serve toolkit or guided service; document the decision before linking |
| Executive Briefing | Described on `/education/` | Augment | Paid inquiry | Executive Leadership / Organization | Darren speaking or inquiry destination | Book a Conversation | Need canonical service URL and inquiry form |
| AI-Augmented Leadership Workshop | Described on `/education/`; workshop links also appear on lens pages | Augment | Paid inquiry | Team Leader, Organization Leader / Team or Organization | Darren or Paidar workshop destination | Explore Workshops | Verify canonical service page and whether shop booking is supported |
| AI Readiness / AI-Augmented Organization Assessment | Assessment exists at `/assessment/`; institutional version is planned | Augment | Paid inquiry or paid service | Organization Leader, Education Leader / Organization | Service inquiry or assessment product | Plan an Assessment | Separate the free public assessment from the paid institutional assessment |
| Keynotes and workshops | Described on `/education/` and lens pages | Augment | Paid inquiry | Organizations / Institution | `https://drdarrenspeaks.com/` or canonical service page | Bring Darren to Your Organization | Confirm canonical booking destination and tracking parameters |
| AI-Augmented University | `/education/` section | Augment framework | Free overview; offerings paid | Higher education / Institution | Education strategy page plus Learn, Apply, and Augment routes | Explore AI-Augmented Education | Keep overview free; route products and services by category |
| Student lens | `/lens/student/` plus maturity and AAOS pages | Learn context | Free site content | Student / Individual | Student Learn collection | Start Learning | Lens is context, not a product category |
| Teacher lens | `/lens/teacher/` plus maturity and AAOS pages | Learn context | Free site content | Teacher / Individual | Teacher Learn and Apply collections | Start Learning | Add role-specific Apply and Augment links later |
| Education Leader lens | `/lens/education-administrator/` plus maturity and AAOS pages | Learn context | Free site content | Education Leader / Organization | Education Learn, Apply, and Augment routes | Explore Your Path | Keep public label “Education Leader” consistently |
| Individual lens | `/lens/individual/` plus maturity and AAOS pages | Learn context | Free site content | Individual | Individual Learn and Apply collections | Explore Your Path | Add category labels to linked products |
| Team Leader lens | `/lens/team-leader/` plus maturity and AAOS pages | Apply context | Free site content | Team Leader / Team | Team Apply collection and Augment services | Apply with Your Team | Add explicit Learn, Apply, and Augment next steps |
| Organization Leader lens | `/lens/organization-leader/` plus maturity and AAOS pages | Augment context | Free site content | Organization Leader / Organization | Organization Apply collection and Augment services | Build at Scale | Add explicit Learn, Apply, and Augment next steps |
| Lens data resources | `site/assets/lens-data.js` | Mixed | State to verify per item | Six lenses / Six stages | Existing article, book, resources, assessment, or service destination | Item-specific | Audit generated resource links; add category and price metadata rather than classifying the whole data file |
| Video / YouTube | External destination linked from movement or education content | Learn | Free | All | YouTube channel | Watch | Confirm canonical channel URL and add to Learn collection |
| Podcast / Embracing Digital Transformation | `https://embracingdigital.org/` | Learn | Free | All | Podcast site | Listen | Keep as free learning channel |

### Inventory blockers to resolve before implementation

- The live shop domain is confirmed as `https://shop.paidar.ai/`. Confirm stable collection URLs for Learn and Apply before replacing the shop homepage links.
- Confirm whether free Learn products require a customer account, email address, or $0 checkout.
- Confirm whether paid Apply products are digital downloads, physical products, courses, or bundles.
- Decide whether AI-Augmented Organizations is an Apply product, an Augment service, or both with separate SKUs.
- Decide whether the institutional assessment is a product with a fixed price or a service requiring an inquiry.
- Confirm the canonical booking destination for Executive Briefing, Leadership Workshop, Assessment, and Keynotes.
- Confirm current release and purchase status for all five book titles.
- Add product IDs or canonical URLs once the shop inventory exists.
- Add a status field such as Draft, Ready, Live, or Retire to the inventory during implementation.

### Task 4 completion status

Completed locally:

- Confirmed the live shop domain as `https://shop.paidar.ai/`.
- Updated the new Learn → Apply → Augment page and the Resources page to send shop CTAs to `shop.paidar.ai` instead of the generic Paidar.ai home page.
- Added two observed Apply products to the inventory, including current price and availability notes.

Blocked outside this repository:

- Learn collection URL is not confirmed; the shop homepage currently exposes the entry point but does not provide a stable Learn collection URL in the public page content.
- Apply collection URL is not confirmed; the shop homepage exposes “Explore Toolkits,” but a stable collection URL must be supplied before the site can link directly to it.
- The two observed shop products need an explicit live/sold-out status and verified fulfillment behavior.
- No external shop mutations were made from this workflow.

### Deliverable and acceptance criteria

- Keep the inventory above as the source of truth, updating it when new assets or shop products are created.
- Every public resource has exactly one primary category.
- Every product has a known transaction or inquiry path.
- Free Learn assets explicitly identify the shop as their delivery destination.
- Apply products have a paid shop destination or a documented blocker.
- Augment offerings have a conversation or inquiry destination.
- The taxonomy does not use “Augmenting” as a synonym for the Augment offer category.
- No asset remains categorized only as “Resources,” “Explore,” “Toolkit,” or “Framework” without a Learn, Apply, or Augment classification.
- The inventory distinguishes a content foundation, such as a book or AAOS page, from a product or service that belongs in the offer ladder.

## Task 2 — Create the Learn → Apply → Augment strategy landing page

### Goal

Give visitors one page that explains the engagement model before they encounter a large collection of products.

### Recommended route

Use `/learn-apply-augment/` unless an existing route is selected during implementation. Preserve `/education/` for the IUC and higher education page.

### Work

- Create `site/learn-apply-augment/index.html` using the existing shared layout and styles in `site/assets/site.css`.
- Add a hero statement such as: “Learn the ideas. Apply them to the work. Augment the people, teams, and organization.”
- Explain the difference between the three engagement levels.
- State that Learn assets are free but delivered through the shop.
- State that Apply assets are paid implementation products.
- State that Augment is higher-touch support and services.
- Explain the relationship between the engagement model and AAOS.
- Explain the relationship between the engagement model and the six lenses.
- Provide routes to Learn, Apply, Augment, Find Your Path, Assessment, and AAOS.
- Include a compact comparison table or three-column card layout with audience, format, price state, and next action.
- Add canonical, Open Graph, Twitter, and structured metadata appropriate to the page.
- Add the route to the sitemap if the sitemap is maintained manually.

### Acceptance criteria

- A first-time visitor can explain the difference between Learn, Apply, and Augment after reading the page.
- The page clearly states what is free, what is paid, and what requires a conversation.
- The page does not imply that AAOS stages have been replaced.
- Every CTA resolves to an existing route or documented external destination.
- The page works at mobile and desktop widths using the existing visual system.

## Task 3 — Rebuild the Resources page as the Learn gateway

### Files

- `site/resources/index.html`
- `site/assets/site.css` if shared styling is required

### Work

- Change the title, description, hero eyebrow, and hero copy so the page is clearly about Learn.
- Replace “Support the movement with practical tools” with a Learn focused promise.
- Explain that free Learn assets are delivered through the shop.
- Group existing resources into Foundations, Assessment, Articles, Video, and Role-Based Learning where appropriate.
- Add a Learn collection CTA that points to the shop.
- Add “Continue to Apply” and “Continue to Augment” paths below the free resources.
- Mark every resource card with `Learn · Free` where appropriate.
- Preserve useful movement, assessment, articles, books, and newsletter routes.
- Add links to the new strategy landing page.

### Acceptance criteria

- The page reads as a free learning hub rather than a miscellaneous resource index.
- Free assets visibly state that they are free and accessed through the shop.
- Paid Apply products are not presented as free resources.
- Visitors can reach Apply and Augment without returning to the main navigation.
- Existing useful resource URLs remain valid or receive redirects.

## Task 4 — Establish the shop collection and transaction model

### Scope

This task covers the external shop or Paidar.ai destination and the links from the website. Use the available shop platform capabilities; do not assume ai-augmented.ai will process transactions.

### Work

- Create or confirm three shop collections: Learn, Apply, and Augment.
- Configure Learn products as free products with a $0 checkout, download, or account flow. The current shop homepage presents Individuals, Teams, and Organizations but does not yet expose a confirmed Learn collection URL.
- Configure Apply products as paid products with price, purchase CTA, product description, and fulfillment information.
- Configure Augment products as inquiry or booking products rather than self-serve downloads.
- Add consistent product metadata: category, audience, scope, format, price state, and related AAOS stage or lens.
- Create naming conventions that distinguish a free guide from a paid toolkit on a similar subject.
- Ensure every product page explains what the buyer receives, who it is for, and the next step.
- Add cross-links from Learn products to related Apply products.
- Add cross-links from Apply products to related Augment services.
- Use UTM parameters or another agreed campaign convention for IUC, QR code, email, and website links.
- Confirm free products do not unexpectedly require a paid subscription or hidden payment step.
- Confirm paid products do not use labels such as “free,” “download,” or “resource” without qualification.

### Acceptance criteria

- A user can obtain a Learn asset through the shop without being charged.
- A user can identify the price and fulfillment method of every Apply product before checkout.
- A user can identify how to inquire about every Augment offering.
- The shop uses the same terminology as ai-augmented.ai.
- Website links point to the correct shop collection or product page.

## Task 5 — Reframe the IUC page around the new strategy

### File

- `site/education/index.html`

### Work

- Keep the event context, keynote, breakout, Darren image, and book series.
- Add a “Continue from IUC” section with three choices:
  - Learn — get free keynote and breakout assets through the shop.
  - Apply — use paid workflow and team toolkits with real work.
  - Augment — bring the framework to a university or institution.
- Change resource cards so each has a visible category label and price state.
- Replace generic CTA labels with Learn, Apply, or Augment actions.
- Keep Individual → Team → Organization as a second navigation dimension below the engagement model.
- Explain that engagement level and scope are separate dimensions.
- Connect the keynote to Learn assets and the breakout to Apply assets.
- Connect institutional workshops, assessments, and briefings to Augment.
- Add a direct link to the strategy landing page.
- Map higher education audience tiles to the relevant Learn, Apply, or Augment path.
- State that free resources are delivered through the shop.
- Use “Book a Conversation” for the primary institutional conversion CTA.

### Acceptance criteria

- An IUC attendee can identify the free next step within five seconds.
- The paid Apply path is visible without making the page feel like a sales page.
- The institutional Augment path is separated from self-serve Learn and Apply products.
- The page explains how Learn → Apply → Augment relates to Individual → Team → Organization.
- Current local asset references remain valid.

### Task 5 completion status

Completed in `site/education/index.html`:

- Added the explicit “Continue from IUC” Learn, Apply, and Augment section.
- Kept Individual → Team → Organization as the separate scope dimension.
- Added visible free, paid, and guided access labels to the IUC follow-up cards.
- Routed Learn and Apply follow-up CTAs to the confirmed shop domain.
- Connected the institutional path to the Augment services section.
- Added a direct link to the central Learn → Apply → Augment strategy page.

## Task 6 — Add the taxonomy to books and lens pages

### Files

- `site/books/index.html`
- `site/lens/individual/index.html`
- `site/lens/team-leader/index.html`
- `site/lens/organization-leader/index.html`
- `site/lens/student/index.html`
- `site/lens/teacher/index.html`
- `site/lens/education-administrator/index.html`
- Their maturity, AAOS, and stage pages where product links appear

### Work

- Add a short Learn → Apply → Augment explanation to the books page.
- Position books as the intellectual foundation supporting all three engagement levels.
- Add category labels to book-related resources when they are actually Learn, Apply, or Augment products.
- On each lens hub, add a “For your role” block with:
  - Learn the role-specific principles.
  - Apply them with role-specific tools.
  - Augment your team or organization with guided support.
- Route each step to an actual destination, not a placeholder or generic page.
- Replace generic “Go further” copy with the appropriate Apply or Augment destination.
- Add related product links to maturity pages where they help visitors progress.
- Keep the six lens names consistent, especially “Education Leader” for the public-facing education administrator lens.
- Preserve the distinction between role lens, maturity stage, and engagement level.
- Correct stale book availability, preorder, early-order, or launch language encountered during this pass.

### Acceptance criteria

- A visitor on any major lens page can find Learn, Apply, and Augment next steps for that role.
- Book pages do not imply that every book is itself a paid Apply product.
- Each new CTA points to a real product, service, or framework destination.
- No public page uses placeholder or development language.
- The lens and AAOS structures remain intact.

### Task 6 completion status

Completed in the current pass:

- Added the Learn → Apply → Augment explanation to `site/books/index.html`.
- Positioned the books as the foundation supporting the engagement model rather than as a replacement for it.
- Added role-specific Learn, Apply, and Augment next-step sections to the Individual, Team Leader, Organization Leader, Student, Teacher, and Education Leader hubs.
- Replaced generic “Go further” language on the five standard lens hubs with role-aware next-step copy.
- Added education-specific learning, toolkit, and guided-support paths to the Education Leader hub.
- Preserved the existing AAOS and maturity routes.

Follow-up still required when product URLs are available:

- Add specific Learn and Apply product links to maturity and stage pages currently generated from `site/assets/lens-data.js` and `site/assets/lens-data-learning.js`.
- Replace generic shop homepage links on those generated pages with stable collection or product URLs.
- Add explicit category and price metadata to generated resource records.

## Task 7 — Rework global navigation and footer pathways

### Files

- All shared page headers and footers under `site/`
- `site/assets/site.css` if navigation styling changes

### Work

- Decide whether the primary navigation directly exposes Learn, Apply, and Augment or exposes one Journey page containing the three paths.
- Default recommendation: Home, Learn, Apply, Augment, Find Your Path, About.
- Keep The Movement, Resources, Books, and Assessment available through relevant landing pages or secondary navigation.
- Add the strategy page to the footer.
- Keep all six lenses available in the footer under:
  - Professional: Individual, Team Leader, Organization Leader
  - Education: Student, Teacher, Education Leader
- Add separate Learn, Apply, and Augment footer links where supported.
- Ensure active page state uses `aria-current="page"` correctly.
- Update relative links consistently for root and nested pages.
- Do not add navigation links to destinations that do not exist yet.

### Acceptance criteria

- A visitor can reach each engagement category from every major page.
- All six lenses remain discoverable.
- Navigation labels match the taxonomy exactly.
- Mobile navigation remains usable and does not overflow.
- No existing primary route becomes orphaned.

### Task 7 completion status

Completed through `scripts/standardize-nav.mjs`:

- Added `Learn, Apply, Augment` to the primary navigation on every HTML page.
- Added an `Engage` footer group linking to the strategy page, Assessment, AAOS Framework, and Books.
- Preserved all six lenses in the footer, grouped under the existing Paths area.
- Regenerated headers and footers across the root, education, articles, books, assessment, newsletter, movement, and all lens maturity/stage pages.
- Kept active-page detection in the standardization script so future runs preserve `aria-current="page"`.

The standardization script is now the source template for future navigation changes. Do not hand-edit individual generated headers or footers without updating `scripts/standardize-nav.mjs` first.

## Task 8 — Align copy, CTA, SEO, and structured metadata

### Work

- Search all public HTML, JavaScript, and data files for generic or misleading terms:
  - Resources, Explore, Learn more, Download, Free, Toolkit, Workshop
  - Coming soon, Preorder, Order early, Before launch, Launch day, July 21
  - Placeholder
- Replace each occurrence according to the actual product category and availability.
- Use `Learn · Free`, `Apply · Paid`, and `Augment · Guided` as consistent visible labels where appropriate.
- Keep “Explore” only when it accurately describes browsing a framework or collection.
- Use action-specific CTAs for transactions and inquiries.
- Update page titles and descriptions so they describe the page’s actual role.
- Add or update Open Graph title, description, URL, and image metadata on new or changed pages.
- Add BreadcrumbList, WebPage, Product, Service, or ItemList structured data only where the content supports it.
- Do not add Product schema to an Augment inquiry page unless it has genuine pricing and offer data.
- Update `site/sitemap.xml` and `site/robots.txt` if necessary.

### Acceptance criteria

- Site-wide search finds no stale launch language or public placeholder language.
- A user can tell whether a CTA leads to free learning, a paid product, or an inquiry.
- Page titles and descriptions no longer use copied role-inappropriate language.
- Structured data matches visible content.
- No metadata claims a product is available, free, or purchasable when it is not.

### Task 8 completion status

Completed in the current pass:

- Updated the Individual lens title and structured page name to describe personal judgment and reliable workflows.
- Updated the Education Leader title, Open Graph title, structured page name, and visible heading to use the canonical public role name.
- Replaced generic book CTAs labeled “Learn more” with “Learn about the book.”
- Updated the learning-stage generator so public fallback status is `Planned` or `Guided` instead of `Coming soon` or `Locked`.
- Updated the legacy stage generator fallback so missing examples do not publish “Coming soon...” copy.
- Regenerated learning-stage pages and re-standardized their navigation and footers.

Remaining copy cleanup for the next content pass:

- Audit generic “Explore” and “Resources” wording where it does not identify a real action or collection.
- Add Learn, Apply, and Augment metadata to generated resource records once shop product URLs are confirmed.
- Review all live product availability claims against the external shop before publishing.

## Task 9 — Implement measurement, campaign, and QR-code pathways

### Work

- Define events for Learn collection clicks, free checkout start and completion, Apply product clicks, paid checkout start and completion, Augment service clicks, Book a Conversation clicks, assessment start and completion, and IUC keynote and breakout resource clicks.
- Add campaign parameters for QR codes, IUC handouts, keynote slides, breakout slides, email, LinkedIn, and partner referrals.
- Create distinct URLs or parameters for keynote and breakout resources.
- Ensure tracking works across ai-augmented.ai and the shop where the analytics platform permits it.
- Document event names and expected properties.
- Avoid collecting unnecessary personal information from free Learn users.
- Confirm that free Learn checkout is not reported as revenue.

### Acceptance criteria

- The IUC QR code has a stable destination and campaign identifier.
- Learn, Apply, and Augment conversions can be distinguished in reporting.
- Key funnel events are documented and testable.
- A free checkout is not reported as revenue.
- Measurement respects the existing privacy policy and consent model.

### Task 9 completion status

Completed in the current pass:

- Added provider-neutral measurement events to `site/assets/site.js`.
- Events emit to `window.dataLayer` when an analytics provider supplies one and always dispatch browser `CustomEvent` signals for local integration or testing.
- Added campaign parameter capture for `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` using session storage only.
- Added link, shop, Augment, assessment start, assessment completion, and newsletter signup events.
- Added distinct IUC campaign URLs for the keynote guide, breakout workflow, Learn overview, and Apply overview.
- Kept measurement free of additional personal data collection.

Remaining integration work:

- Connect the emitted events to the selected analytics provider once one is approved and installed.
- Verify the shop preserves or accepts the IUC UTM parameters through checkout.
- Replace generic IUC shop destinations with stable keynote and breakout product URLs when those products are created.
- Confirm the final QR-code URL and campaign naming before printing collateral.

## Task 10 — Validate the full experience and publish the rollout

### Work

- Test from a clean browser session:
  - IUC QR code → free keynote guide → shop checkout
  - IUC QR code → free breakout guide → shop checkout
  - Learn → Apply product
  - Apply product → Augment service
  - Individual → lens → maturity → related resource
  - Team Leader → lens → team toolkit
  - Organization Leader → lens → institutional conversation
  - Student, Teacher, and Education Leader → role-specific Learn path
  - Assessment → result → lens and next engagement step
- Check every internal link and every external shop or service link.
- Validate mobile and desktop layouts.
- Test keyboard navigation, focus states, skip links, form labels, alt text, heading order, and color contrast.
- Validate HTML structure and metadata.
- Check that all images load and have useful alternative text.
- Check that stale launch or placeholder text is absent.
- Check that free, paid, and inquiry labels match actual transaction behavior.
- Update the sitemap and deployment documentation.
- Record unresolved external dependencies such as missing shop products, missing purchase URLs, or unavailable analytics events.

### Acceptance criteria

- All intended visitor journeys reach a valid next step.
- No critical internal links return 404 errors.
- Learn assets can be obtained free through the shop.
- Apply products expose a working paid path.
- Augment offerings expose a working inquiry path.
- The site is usable with keyboard and screen reader basics.
- The strategy is understandable without reading the entire site.
- The implementation is ready for controlled release and post-release measurement.

### Task 10 completion status

Completed validation:

- Audited all 69 public HTML pages in `site/`.
- Confirmed every page has a title, meta description, and site-wide Learn, Apply, Augment navigation link.
- Confirmed all internal relative routes resolve and no internal route is missing.
- Confirmed balanced `a`, `section`, `div`, `main`, and `footer` markup across all pages.
- Confirmed `site/assets/site.js`, `scripts/standardize-nav.mjs`, `scripts/generate-learning-stage-pages.mjs`, and `scripts/generate-lens-stage-pages.mjs` pass Node syntax checks.
- Confirmed the IUC campaign URLs distinguish Learn overview, Apply overview, keynote guide, and breakout workflow.
- Confirmed the sitemap includes `/learn-apply-augment/` and `robots.txt` points to the sitemap.
- Ran `node scripts/check-links.mjs`; its only reported failures were repeated HEAD checks for Google Fonts hosts. Internal links passed the direct repository audit. The checker should be updated to ignore or GET-check font hosts before using it as a release gate.

External dependencies before public release:

- Create stable Learn and Apply collection URLs in the shop and replace current shop-home fallback links.
- Publish the planned IUC keynote guide and breakout workflow products with confirmed free or paid behavior.
- Confirm shop checkout preserves campaign parameters.
- Connect `aa_*` measurement events to the selected analytics provider.
- Confirm final QR-code URL and campaign naming before printing or distributing event collateral.
- Verify current availability and fulfillment for each external book and toolkit product.

The repository is ready for a controlled release after the external dependencies above are confirmed. No deployment or external shop mutation was performed by this workflow.

## Implementation order and dependencies

1. Task 1 — taxonomy and inventory
2. Task 4 — shop collections and transaction model
3. Task 2 — strategy landing page
4. Task 3 — Resources as Learn gateway
5. Task 5 — IUC page
6. Task 6 — books and lens pages
7. Task 7 — navigation and footer
8. Task 8 — copy and metadata pass
9. Task 9 — measurement and campaign paths
10. Task 10 — validation and release

Do not begin site-wide navigation changes until the strategy landing page and shop destinations exist. Do not label a product as Learn, Apply, or Augment until its price and fulfillment path are known.
