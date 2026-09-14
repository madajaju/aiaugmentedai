# IUC readiness checklist

Run this checklist immediately before the IUC event and after any deployment change.

## QR and landing page

- [ ] `/education/` loads successfully.
- [ ] The physical QR code opens the intended URL.
- [ ] The page works on a phone over cellular data.
- [ ] The keynote and breakout are clearly identified.
- [ ] Student, Teacher, and Education Leader paths are visible.
- [ ] Learn, Apply, and Augment next steps are clear.

## Navigation and content

- [ ] Contexts menu opens on desktop and mobile.
- [ ] Business, Education, Legal, and Medical entries are correct.
- [ ] All education role links work.
- [ ] Assessment works from the primary CTA.
- [ ] No placeholder copy or obvious spelling errors remain.
- [ ] Hero copy and conference details are correct.
- [ ] Conference CTA points to the intended conversation destination.

## Forms and measurement

- [ ] Newsletter and other forms submit successfully.
- [ ] Analytics is working on the deployed site.
- [ ] External shop and conversation links open correctly.

## Technical checks

- [ ] Run `npm.cmd run check:links`.
- [ ] Run `npm.cmd run check:site`.
- [ ] Confirm canonical URLs and sitemap are current.
- [ ] Test mobile layouts at 320px, 375px, 390px, and 430px.
- [ ] Check keyboard navigation and visible focus.
- [ ] Confirm the deployed site serves the expected version.
