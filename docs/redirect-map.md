# Redirect Map

This is a redirect plan only. No redirects are implemented in this pass. Use permanent redirects only after the destination pages contain the migrated content and have been validated.

Business and Education destinations are now populated and ready for redirect validation.

## Global redirects

| Legacy URL | Destination | Reason |
| --- | --- | --- |
| `/start-here/` | `/` | The homepage becomes the orientation entry and links to `/find-your-path/`. |
| `/contexts/` | `/` or the relevant domain root | The new site uses domain roots instead of a separate context selector. Preserve fragment-specific mappings where possible. |
| `/aaos/` | `/framework/aaos/` | Move global AAOS content under the approved framework hierarchy. |
| `/learn-apply-augment/` | `/framework/` | Keep the engagement model available from the framework and support pages. |
| `/apply/` | `/resources/` or the relevant domain/role `/apply/` page | Split general application content by audience and support level. |
| `/augment/` | Relevant domain/role `/augment/` page; otherwise `/resources/` | Preserve guided-support intent while adding domain and role context. |
| `/books/` | `/resources/` | Books become curated resources rather than the primary journey. Preserve external book URLs separately. |
| `/articles/` | `/resources/` | Consolidate the article index into the resource hub if no dedicated editorial index is retained. |
| `/articles/ai-adoption-framework-aaos/` | `/framework/aaos/` | Preserve AAOS search equity at the canonical framework destination. |
| `/articles/understanding-ai-maturity-model/` | `/framework/maturity/` | Preserve maturity search equity at the canonical maturity destination. |

## Role overview redirects

| Legacy URL | Destination |
| --- | --- |
| `/lens/individual/` | `/business/individual/` |
| `/lens/team-leader/` | `/business/team/` |
| `/lens/organization-leader/` | `/business/organization/` |
| `/lens/student/` | `/education/student/` |
| `/lens/teacher/` | `/education/teacher/` |
| `/lens/education-administrator/` | `/education/leader/` |

## Role AAOS and maturity redirects

The following exact family expansions apply to each role listed below. Each legacy URL should redirect to the destination shown after the content has been merged.

| Legacy family | Roles | Destination rule |
| --- | --- | --- |
| `/lens/{role}/aaos/` | `individual`, `team-leader`, `organization-leader`, `student`, `teacher`, `education-administrator` | `/framework/aaos/` |
| `/lens/{role}/maturity/` | Same six roles | `/framework/maturity/` |
| `/lens/{role}/{stage}/` | Same six roles | The corresponding `/{domain}/{role}/` landing or support page, with stage content retained as metadata/context |

For the stage family, `{stage}` expands to:

- `aware`
- `exploring`
- `experimenting`
- `integrating`
- `leading`
- `augmenting`

The six role roots expand to 36 exact stage URLs, for example:

```text
/lens/teacher/experimenting/ -> /education/teacher/
/lens/student/leading/ -> /education/student/
/lens/individual/integrating/ -> /business/individual/
/lens/team-leader/augmenting/ -> /business/team/
/lens/organization-leader/exploring/ -> /business/organization/
/lens/education-administrator/aware/ -> /education/leader/
```

## Fragment and asset considerations

- Preserve fragment-specific redirects for `/contexts/#business`, `/contexts/#education`, and the six `/find-your-path/` role fragments where the target can provide an equivalent anchor.
- Do not redirect image, SVG, CSS, or JavaScript asset URLs to HTML pages. Preserve asset paths or add explicit asset migrations separately.
- Keep `/education/` available for the IUC event during the event period. Reassess its canonical destination after the event rather than redirecting it as part of the general migration.
- Verify canonical tags, sitemap entries, internal links, and analytics after redirects are implemented.

## Populated Business and Education support destinations

The six active role families now have static support destinations:

| Legacy role | New support destination |
| --- | --- |
| `/lens/individual/` | `/business/individual/{learn,apply,augment}/` |
| `/lens/team-leader/` | `/business/team/{learn,apply,augment}/` |
| `/lens/organization-leader/` | `/business/organization/{learn,apply,augment}/` |
| `/lens/student/` | `/education/student/{learn,apply,augment}/` |
| `/lens/teacher/` | `/education/teacher/{learn,apply,augment}/` |
| `/lens/education-administrator/` | `/education/leader/{learn,apply,augment}/` |

Use permanent redirects only after each legacy URL has been checked against its final content and analytics requirements. Augment requests should retain the role context and route Darren-led speaking or workshops to `drdarrenspeaks.com`; organizational implementation, assessments, advisory, governance, operating models, and architecture should route to `paidar.ai`.
