# Rolodex Rebels — SEO + LLM / AI discovery audit

**Audit date:** 17 September 2026  
**Scope:** Production only. No implementation, no new routes, no content publishing, no merge, no deploy.  
**Production host:** `https://rolodexrebels.co.uk/`  
**Production deployment:** `dpl_FLERDsDkNfPEjGmokS8GoH5WRrdi`  
**Production git SHA:** `57423cbbd3f5c14cb0f0a74a57ab4a2f8a08b228` (`origin/master`, merge of PR #14)  
**Local working tree:** stale vs origin (behind 45 commits at audit start). This audit used **production HTML** and **origin/master**, not the local dirty tree.

**Research baseline used:** Google Search Central (robots, sitemaps, canonicals, structured data, Core Web Vitals, AI features / AI optimisation guide, spam policies, favicon, Organization markup, Google-Extended); Schema.org; OpenAI crawler docs (OAI-SearchBot vs GPTBot); Anthropic ClaudeBot / Claude-SearchBot / Claude-User; PerplexityBot docs; Bing Webmaster / IndexNow.org; W3C robots exclusion as implemented by Google.

---

## 1. Executive summary

Rolodex Rebels is **technically indexable and crawlable**. The six-pillar architecture, specialist service pages, Who We Help routes, apex HTTPS canonicalisation, prerendered HTML, unique titles/descriptions, JSON-LD, sitemap, robots.txt, paused Results/Insights, and consent-gated GA4 are in place and largely match current 2026 search guidance.

The site is **not blocked**. It is also **not yet citable as an authority**. The binding constraint is not another technical SEO rebuild. It is:

1. **Weak off-site entity corroboration** (almost no public citations beyond the site and a small number of personal LinkedIn posts).
2. **Proof that is visually present but semantically incomplete** (four of seven approved client names exist only as logo `alt`, not visible text).
3. **Recently withdrawn Street Teams URL** (`/services/grassroots/music-street-teams` now 308s to Grassroots). That is the correct product decision. It leaves a previously indexable “music street teams London & Kent” URL pointing at a page that no longer offers street teams.
4. **Specialist money pages that are thinner in the internal-link graph than the pillars.**
5. **No authenticated Search Console / Bing / field CWV data in this audit.**

Google’s 2026 AI guidance is explicit: there is no separate “LLM SEO” discipline, no `llms.txt` requirement, no FAQ-schema rich-result prize, and no benefit from scaled AI articles. The right next slice is **entity, proof and money-page citability**, not new URLs and not Insights publishing.

**llms.txt recommendation:** **NOT JUSTIFIED.**

---

## 2. Current strengths

- Apex HTTPS canonical host with permanent `www` → apex and HTTP → HTTPS redirects.
- Prerendered HTML (`X-Nextjs-Prerender: 1`). Important copy, headings, links and JSON-LD are in the first HTML response. Not client-only.
- 21 canonical indexable URLs in `/sitemap.xml`. Results and Insights excluded while paused.
- Unique title, unique meta description, exactly one H1 on every indexable page.
- Self-canonicals on the matching apex host.
- `Organization` + `WebSite` on the homepage; `Service` on commercial service pages; `BreadcrumbList` on internal pages. JSON-LD parses.
- OAI-SearchBot explicitly allowed. `*` allows Googlebot, Bingbot, Claude-SearchBot and PerplexityBot.
- `/results` and `/insights` are `noindex, follow`, absent from nav and sitemap, with empty `caseStudies` / `insightArticles` arrays.
- Unknown URLs return true HTTP 404 + `noindex` + branded recovery.
- Street Teams and campus campaigns have been removed from the offer; the old Street Teams URL permanently redirects to Grassroots.
- Practical-services directory is early on `/services` and uses real `<a>` links into existing pages/anchors rather than creating competing routes.
- Client proof exists and is factual (names only, no fake testimonials or metrics).
- Consent-gated GA4 (`G-EZSJL5TG8N`) with landing-page / service / audience / UTM attribution into conversion events and the project form.
- IndexNow key is live; Bing verification meta is present.
- Private/internal brands (Raphael Domalik, Event Suite, Event Growth Studio, Last Train Home, Prestige ID, Allxs) do **not** appear in production HTML.
- Lab performance on a prerendered document is healthy: TTFB ~68ms, FCP ~348ms, CLS 0, ~17 resources on `/services` in this session. Do not chase 100/100.

---

## 3. Critical issues

**No P0 indexation / crawl blockers were found.**

The sitemap that briefly 500’d via one fetch client returned **HTTP 200** with valid XML via curl. Treat the earlier 500 as a fetch-client artefact, not a production defect, unless Search Console later shows sitemap fetch failures.

Time-sensitive **P1** items:

| ID | Issue | Why it matters now |
| --- | --- | --- |
| P1-A | `/services/grassroots/music-street-teams` 308 → `/services/grassroots`, and Grassroots copy no longer offers street teams | Any remaining indexed title/snippet for “Music Street Teams London & Kent” is now stale and overclaims. Needs recrawl, not a restored page. |
| P1-B | Off-site entity almost absent | Answer engines and Google need corroboration. The site can be understood; it is hard to *trust* in isolation. |
| P1-C | Search Console / Bing Webmaster not inspected in this audit | Index coverage, query ownership, CWV field data and sitemap processing are unverified. |

---

## 4. Technical SEO findings

| Finding | Evidence | Severity | Effort | Confidence | Class |
| --- | --- | --- | --- | --- | --- |
| Canonical host is apex HTTPS | `https://www.rolodexrebels.co.uk/` → 308 → `https://rolodexrebels.co.uk/`; HTTP apex → HTTPS 308 | — | — | HIGH | Strength |
| `http://www` is a 2-hop chain | HTTP www → HTTPS www → HTTPS apex | P3 | S | HIGH | Nice-to-have |
| Trailing slashes 308 to non-slash | `/services/` → `/services` (matches `trailingSlash: false`) | — | — | HIGH | Strength |
| Homepage canonical lacks trailing slash; sitemap homepage has one | Canonical `https://rolodexrebels.co.uk` vs sitemap `https://rolodexrebels.co.uk/` | P3 | S | HIGH | Polish |
| Vercel alias host is noindexed | `rolodex-rebels.vercel.app` has `X-Robots-Tag: noindex, nofollow, noarchive`; team host SSO-redirects with `noindex` | — | — | HIGH | Strength |
| Important SEO content is prerendered | Production HTML contains titles, H1s, body copy, `<a>` links, JSON-LD | — | — | HIGH | Strength |
| IndexNow is implemented; Google does not consume it | Key `200` at `/indexnow-key.txt` with `X-Robots-Tag: noindex`. IndexNow.org / Bing docs; Google is not a participant | P3 | — | HIGH | Useful for Bing only |
| No `X-Robots-Tag` noindex on indexable HTML | Indexable pages rely on meta robots `index, follow` | — | — | HIGH | Strength |
| HSTS present | `Strict-Transport-Security: max-age=63072000` | — | — | HIGH | Strength |

**JavaScript:** Next.js App Router with static prerender. Cookie banner and analytics are client components and do not hide primary copy. Links are real `<a href>`. Dynamic `[slug]` routes for Insights/Results generate nothing while arrays are empty; unknown slugs 404.

**Not defects:** lack of `lastmod` in the sitemap (Google does not require meaningless lastmod); lack of an image sitemap on a small brochure site; Organization JSON-LD repeated site-wide (consistent, not contradictory).

---

## 5. Crawl / indexation findings

### Host variants

| URL | Status | Destination |
| --- | --- | --- |
| `https://rolodexrebels.co.uk/` | 200 | Canonical |
| `https://www.rolodexrebels.co.uk/` | 308 | Apex `/` |
| `http://rolodexrebels.co.uk/` | 308 | HTTPS apex |
| `http://www.rolodexrebels.co.uk/` | 308 | HTTPS www (then apex) |
| `https://rolodexrebels.co.uk` (no slash) | 200 | Homepage |
| Vercel production alias | 200 + `X-Robots-Tag: noindex, nofollow, noarchive` | Same app, not indexable |
| Team deployment host | 302 SSO | Protected |

### Indexable inventory (production crawl, 17 Sep 2026)

All rows below are HTTP 200, `index, follow`, self-canonical on `https://rolodexrebels.co.uk{path}`, in sitemap, one H1, unique title and description unless noted.

| URL | Title | H1 | Words | Schema beyond Organization | Sitemap | Distinct in-pages | Thin/duplicate risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Music Marketing Agency UK \| Rolodex Rebels | Get seen, get heard, get results! | 1059 | WebSite | Yes | Many | Low |
| `/why-us` | Why Rolodex Rebels \| Music Marketing Agency | FROM THE STREETS TO THE SCREENS. | 388 | BreadcrumbList | Yes | 27 | Low |
| `/services` | Music Marketing Services \| Rolodex Rebels | MUSIC MARKETING. EVERYTHING WORKING TOGETHER. | 532 | BreadcrumbList | Yes | 27 | Low |
| `/services/get-heard` | Music PR & Release Marketing \| Rolodex Rebels | MUSIC PR, RELEASES & COMMUNICATIONS. | 382 | BreadcrumbList, Service | Yes | 5 | Medium (shorter than Music PR child) |
| `/services/get-seen` | Digital Music Marketing & Promotion \| Rolodex Rebels | BE FOUND BY PEOPLE WHO MATTER. | 404 | BreadcrumbList, Service | Yes | 8 | Low |
| `/services/build-your-audience` | Music Audience Growth & Fan Marketing \| Rolodex Rebels | STOP STARTING FROM ZERO. | 412 | BreadcrumbList, Service | Yes | 12 | Low |
| `/services/sell-the-show` | Concert, Tour & Ticket Marketing \| Rolodex Rebels | BUILD DEMAND. SELL TICKETS. GROW THE NEXT CROWD. | 436 | BreadcrumbList, Service | Yes | 10 | Low |
| `/services/grassroots` | Grassroots Music Promotion \| Rolodex Rebels | GRASSROOTS MUSIC PROMOTION. LOCAL. LOUD. EFFECTIVE. | 391 | BreadcrumbList, Service | Yes | 6 | Low; Street Teams language correctly removed |
| `/services/digital-creative` | Music Websites, Digital & Creative Services \| Rolodex Rebels | WEBSITES AND DIGITAL CAMPAIGNS THAT DO A JOB. | 513 | BreadcrumbList, Service | Yes | 6 | Low |
| `/services/music-pr` | Music PR Agency UK \| Artist & Release Publicity \| Rolodex Rebels | MUSIC PR THAT GETS THE RIGHT PEOPLE LISTENING. | 649 | BreadcrumbList, Service | Yes | 4 | Low; underlinked |
| `/services/grassroots/flyer-distribution` | Music & Event Flyer Distribution \| Rolodex Rebels | PUT THE MESSAGE WHERE THE AUDIENCE IS. | 601 | BreadcrumbList, Service | Yes | 3 | Low; underlinked |
| `/services/festival-marketing` | Festival Marketing Agency \| Ticket & Audience Growth \| Rolodex Rebels | BUILD THE CROWD BEFORE THE GATES OPEN. | 734 | BreadcrumbList, Service | Yes | 4 | Low |
| `/services/artist-website-design` | Artist Website Design \| Websites for Musicians \| Rolodex Rebels | GIVE THE MUSIC A HOME OF ITS OWN. | 674 | BreadcrumbList, Service | Yes | 4 | Low |
| `/services/event-festival-websites` | Event & Festival Website Design \| Rolodex Rebels | BUILD THE DIGITAL HOME YOUR EVENT ACTUALLY NEEDS. | 804 | BreadcrumbList, Service | Yes | 4 | Low |
| `/who-we-help` | Music Marketing for Artists & Live Music \| Rolodex Rebels | MUSIC MARKETING. BUILT AROUND YOUR GOAL. | 259 | BreadcrumbList | Yes | 27 | Hub; thin if asked to rank alone |
| `/who-we-help/artists` | Music Marketing for Artists \| Rolodex Rebels | MUSIC MARKETING FOR ARTISTS. BUILD MOMENTUM THAT LASTS. | 347 | BreadcrumbList | Yes | 8 | Low–medium overlap with services |
| `/who-we-help/labels-managers` | Music Marketing for Labels & Managers \| Rolodex Rebels | MUSIC MARKETING FOR LABELS & MANAGERS. LESS FRAGMENTATION. | 323 | BreadcrumbList | Yes | 4 | Medium overlap |
| `/who-we-help/promoters-venues-festivals` | Marketing for Promoters, Venues & Festivals \| Rolodex Rebels | MARKETING FOR PROMOTERS, VENUES & FESTIVALS. BUILD DEMAND. | 544 | BreadcrumbList | Yes | 7 | Low |
| `/start-a-project` | Start a Music Marketing Project \| Rolodex Rebels | LET'S MAKE SOME NOISE. | 338 | BreadcrumbList | Yes | 27 | Conversion page; indexable by design |
| `/privacy` | Privacy Notice \| Rolodex Rebels | Privacy notice | 358 | BreadcrumbList | Yes | 29 | Utility; keep indexable |
| `/cookies` | Cookie Policy \| Rolodex Rebels | Cookie policy | 215 | BreadcrumbList | Yes | 27 | Utility; keep indexable |

Sitemap contains **exactly these 21 URLs**. No Results, no Insights, no Street Teams, no duplicates, no redirects.

### Intentionally non-indexable / error

| URL | Status | Robots | Notes |
| --- | --- | --- | --- |
| `/results` | 200 | `noindex, follow` | Placeholder evidence framework. Not in nav or sitemap. |
| `/insights` | 200 | `noindex, follow` | Placeholder themes. Not in nav or sitemap. |
| `/results/fake-case` | 404 | `noindex` | True 404 |
| `/insights/fake-article` | 404 | `noindex` | True 404 |
| `/this-page-does-not-exist-xyz` | 404 | `noindex` | Branded 404 |
| `/llms.txt` | 404 | `noindex` | Expected; do not add |
| `/llms-full.txt` | 404 | `noindex` | Expected |
| `/services/grassroots/music-street-teams` | **308** | — | Permanent redirect to `/services/grassroots` |
| `/indexnow-key.txt` | 200 | `X-Robots-Tag: noindex` | Correct for a key file |

No redirect loops. No soft 404s on the crawled set (paused pages are real 200s with noindex, which is the intended parked state). No accidental indexable utility besides Privacy/Cookies, which should stay public.

**Orphans:** `/results` and `/insights` have **zero** homepage/nav inlinks. That is intended while paused. No indexable commercial orphan.

---

## 6. Search intent map

| Intent | Owner URL | Status |
| --- | --- | --- |
| Broad UK music marketing agency | `/` | Clear |
| Music marketing services directory | `/services` | Clear; practical names first |
| PR / release / communications pillar | `/services/get-heard` | Clear |
| Music PR / artist publicity / release PR | `/services/music-pr` | Clear money page |
| SEO / social / paid / online promotion | `/services/get-seen` | Clear |
| Fan / audience growth | `/services/build-your-audience` | Clear |
| Concert / tour / ticket marketing | `/services/sell-the-show` | Clear |
| Festival marketing | `/services/festival-marketing` | Clear |
| Grassroots music promotion | `/services/grassroots` | Clear; no longer claims street teams or campuses |
| Flyer / leaflet / flyering | `/services/grassroots/flyer-distribution` | Clear |
| Poster distribution London | `/services/grassroots#poster-distribution` | Correct as a capability anchor, **not** a standalone route |
| Music street teams London / Kent | **No page** | Correct: agency cannot deliver. Old URL 308s to Grassroots. Do **not** restore. |
| Websites / digital / creative umbrella | `/services/digital-creative` | Clear. Hosting is part of website delivery, not a service. |
| Artist / musician / band websites | `/services/artist-website-design` | Clear |
| Event / festival / venue websites | `/services/event-festival-websites` | Clear |
| Marketing for artists | `/who-we-help/artists` | Clear audience page |
| Labels / managers | `/who-we-help/labels-managers` | Clear; thinner |
| Promoters / venues / festivals | `/who-we-help/promoters-venues-festivals` | Clear |
| Why this agency | `/why-us` | Clear |
| Enquire | `/start-a-project` | Clear |
| Results / case studies | `/results` | Paused |
| Insights / articles | `/insights` | Paused |

### Cannibalisation

Parent vs specialist pairs (Get Heard / Music PR; Sell The Show / Festival Marketing; Digital & Creative / Artist sites / Event sites; Grassroots / Flyer distribution) are **intentional hierarchy**, not duplicates. Titles, H1s and first paragraphs diverge enough.

**Watch, do not split further:**

- Get Heard is shorter than Music PR and could be outranked by its child for “music PR agency UK”. That is acceptable if Music PR is the money page.
- Who We Help pages repeat service language. Shared brand language is not automatically harmful. Labels & Managers is the weakest unique page.

**Do not create:** London/Kent doorway pages; a Poster Distribution route; a restored Street Teams route; WordPress comparison pages; hosting-as-a-service pages; “what is music marketing” filler.

---

## 7. On-page findings

### Title / description / H1

All indexable titles and descriptions are unique. Brand sits at the end except `/why-us`. No exact-match stuffing.

| Severity | Finding |
| --- | --- |
| MEDIUM | Several titles are long enough to truncate (`Festival Marketing Agency \| Ticket & Audience Growth \| Rolodex Rebels` = 69 characters; Music PR = 64; Artist Website = 63). Not a ranking defect. Shorten only if SERP CTR data later shows truncation pain. |
| MEDIUM | Many H1s are slogans (`STOP STARTING FROM ZERO.`, `BE FOUND BY PEOPLE WHO MATTER.`). Titles and opening paragraphs carry the query. Do **not** force exact-match H1s. Prefer keeping the voice and making the **first paragraph** explicit — which most pages already do. |
| LOW | Homepage title and default layout title match, which is correct. 404s inherit the homepage title but are `noindex`. |
| — | Descriptions are useful and written for humans. Keep that. |

### Semantic language (plain English vs missing entities)

Plain English still gives crawlers enough industry context on the whole. Do **not** return to jargon.

Natural presence on indexable HTML (approximate):

| Term | Present? | Notes |
| --- | --- | --- |
| music marketing | Yes, widely | |
| music PR | Yes on Get Heard / Music PR / some audience pages | |
| music publicity | Weak / absent as an exact phrase | Title uses “Release Publicity”. Optional natural use on Music PR only. |
| release marketing | Yes | |
| SEO | Yes (home, services, Get Seen) | |
| social media campaigns | Yes | |
| music promotion | Yes (mainly Grassroots) | |
| ticket marketing | Yes | |
| concert marketing | Title on Sell The Show; body prefers “ticket campaigns for gigs/tours” | Optional natural phrase, not stuffing |
| tour marketing | Yes | |
| festival marketing | Yes | |
| grassroots promotion | Yes | |
| street teams | **Absent on current indexable copy** | Correct after PR #14 |
| flyer / leaflet / flyering / hand-to-hand | Yes | |
| poster distribution / poster campaigns London | Yes, scoped to London | |
| artist / event / festival website design | Yes on the relevant pages | |
| venue website | Yes on promoters page | |
| music website | Sparse | Optional on artist-website page |
| London | Present; not overused | Home badge + poster geography |
| Kent | **Gone** with Street Teams | Do not re-add unless delivery exists |
| UK / United Kingdom | Present | |

---

## 8. Internal-link findings

Graph is a healthy hub-and-spoke. Homepage, Services, Who We Help, Why Us, Start a Project, Privacy and Cookies are densely linked via chrome. Commercial specialists are **not orphans**, but several money pages are weakly supported.

| URL | Distinct in-pages (approx) | Assessment |
| --- | --- | --- |
| `/services/music-pr` | 4 | Underlinked money page |
| `/services/grassroots/flyer-distribution` | 3 | Underlinked money page |
| `/services/get-heard` | 5 | Weaker than sibling pillars |
| `/services/festival-marketing` | 4 | Could use one more contextual link from Sell The Show / promoters |
| `/services/artist-website-design` | 4 | OK; homepage does not deep-link it |
| `/services/event-festival-websites` | 4 | OK |
| `/who-we-help/labels-managers` | 4 | Weak |
| `/services/grassroots/music-street-teams` | 0 | Correct; redirected |
| `/results`, `/insights` | 0 | Correct while paused |

Anchors are mostly descriptive, sometimes verbose card copy (`0 1 Get Heard PR and release campaigns…`). That is not keyword stuffing. A few “Explore …” / “See everything we do” anchors are vague but not a graph problem.

Practical-service anchors (`#poster-distribution`, `#seo-search-discovery`) are real in-page IDs, not fake hierarchy.

**Do not** footer-dump every service on every page.

---

## 9. Structured-data findings

Validated against Google Search Central structured-data intro (updated Dec 2025), Organization docs, and Schema.org. FAQ rich results were retired 7 May 2026; FAQ schema is **not** a Google rich-result play.

### Currently implemented

| Type | Where | Quality |
| --- | --- | --- |
| Organization | Site-wide | Name, URL, logo, description, email, telephone, ContactPoint. No fake reviews, ratings, clients, awards, or socials. |
| WebSite | Homepage | Publisher points at Organization `@id`. |
| BreadcrumbList | Internal pages | Matches visible crumbs; specialist paths are honest (Services → Grassroots → Flyer Distribution). |
| Service | Pillars + specialists | Matches visible services. Flyer Distribution omits a UK-wide `areaServed` restriction (correct). Others use Country = United Kingdom. Poster distribution is **not** typed as its own Service URL (correct). |

### Issues

| Finding | Severity | Effort | Confidence | Expected value |
| --- | --- | --- | --- | --- |
| `Organization.logo` is the wide transparent wordmark `1983×793` | P2 | S | HIGH | Google asks for a logo ≥112×112 that still looks right on a white background. A square mark (`icon.png` 192×192 exists) is the better logo candidate. Wordmark can remain on-page. |
| No `sameAs` | P2 | S | MEDIUM | Only add **real** public profiles. Do not invent LinkedIn/Instagram company pages. A personal LinkedIn is not automatically the organisation. |
| Service `name: "Grassroots"` is thinner than the page title | P3 | S | MEDIUM | Optional alignment to “Grassroots music promotion”. |
| Organization on every page including 404s | P3 | S | HIGH | Harmless if identical. Not schema spam. |
| No Event schema | — | — | HIGH | Correct. This is not an events publisher. |
| No FAQPage | — | — | HIGH | Correct. Do not add for rich-result chasing. |
| Do not put clients in schema | — | — | HIGH | Names on a homepage strip are not a `Organization.member` / `makesOffer` graph. Visible text is the honest proof. |

JSON-LD syntax in sampled pages parsed. No fabricated offers or prices.

---

## 10. Performance findings

**Field data:** not available. Search Console CWV report was not accessed. CrUX/PageSpeed API quota was exhausted in this environment (`429`). Vercel Web Analytics is **not enabled** (API: `web_analytics_not_enabled`).

**Lab / session evidence (not a substitute for field data):**

- Homepage HTML ~87 KB, prerendered, Vercel cache HIT.
- `/services` session: TTFB 68ms, FCP 348ms, DOMContentLoaded 171ms, load 250ms, CLS 0, 17 resources.
- Font `bebas.woff2` is preloaded.
- GA4 loads only after analytics consent.
- No heavy third-party stack beyond optional GA4.

**Verdict:** do not open a performance project. Re-check field LCP/INP/CLS in Search Console once traffic exists. Cookie banner and the marquee ticker are the only plausible CLS suspects; this session measured CLS 0.

---

## 11. Mobile findings

Checked at 375px (screenshot + overflow), 430px (overflow). 390px not separately screenshotted; 375 and 430 had **no horizontal overflow**.

| Check | Result |
| --- | --- |
| Viewport | `width=device-width, initial-scale=1` |
| Content parity | Same HTML as desktop; no mobile-only SEO cloaking |
| Practical services on `/services` | First substantive block after the intro. Keep it early. |
| Tap targets | Header CTA + Menu are usable. Cookie Accept/Reject present. |
| Sticky/fixed | Cookie bar is present; not a crawl issue |
| Hidden SEO text | None observed |
| Do not add | Large SEO text blocks on mobile |

Minor UX (not SEO): homepage ticker is a scrolling strip; it does not hide the H1 or intro.

---

## 12. Image / media findings

| Asset | Status |
| --- | --- |
| OG/social | `/rolodex-rebels-social.jpg` 200, JPEG, declared 1200×630 |
| Favicon.ico | 200, ICO, 3 sizes, crawlable |
| icon.png | 200, **192×192** PNG (meets Google’s >48px recommendation) |
| apple-icon.png | 200, 180×180 |
| Organization logo file | Transparent PNG 1983×793, ~543 KB — fine as a wordmark, poor as a knowledge-panel logo |
| Hero images | Descriptive alts present (`Crowd facing a brightly lit live music stage`) |
| Header/footer logos | `alt="Rolodex Rebels"` |
| Decorative marks | Some empty `alt` (correct if decorative) |
| Client logos | `alt` matches names; **no visible text** for Live Nation, Communion Music, Stick-Up Media, Metropolis Music |
| Image sitemap | Not needed at this size |
| Filenames | Brand filenames; do not keyword-stuff |

SERP favicon recrawl delay is **not** a defect.

---

## 13. Entity / brand findings

Search/AI systems can determine from on-page text:

- **Who:** Rolodex Rebels  
- **What:** UK music marketing agency  
- **Who it serves:** artists, labels, managers, promoters, venues, festivals  
- **What it does:** PR, SEO, social, websites, ticket campaigns, flyers, posters, grassroots, festival marketing  

They **cannot** confidently corroborate that entity off-site.

| Signal | Current |
| --- | --- |
| Site name consistency | Strong across titles, footer, schema, logo alts |
| Legal name / Companies House under “Rolodex Rebels” | Not found in public search during this audit. Do not invent a legalName. |
| Contact | `joanne@rolodexrebels.co.uk`, `+44 7934 419997` in schema and likely footer/email |
| sameAs | None |
| Social | No official company profiles linked. Jo Cerrone LinkedIn posts mention the brand. |
| Local business positioning | Correctly **not** a generic London LocalBusiness |
| Private architecture | Not exposed. Keep it that way. |

Public web search in this environment also surfaced unrelated “Rebel Rolodex” / Tax Rebels pages for branded-looking queries. That is entity noise, not a reason to rename the site. A real company profile and consistent NAP/sameAs would help disambiguation **if those properties exist**.

---

## 14. Client-proof findings

Approved names: SJM, DMPUK, Live Nation, Communion Music, Kilimanjaro, Stick-Up Media, Metropolis Music.

**Rendered homepage client strip:**

- Visible text: SJM, DMPUK, Kilimanjaro  
- Logo + `alt` only: Live Nation, Communion Music, Stick-Up Media, Metropolis Music  

Accessibility snapshot listed only the three text names as list items. Alts exist in the DOM, so Google can read them, but:

- Visible text is stronger for citation and humans.
- Logos alone are weak semantic proof.
- Wording “Current clients include” is factual. No testimonials, metrics, or endorsements. Good.
- Do **not** add clients to schema.

**Recommendation (P2, S, HIGH):** show the name as visible text next to every logo. Do not fabricate case studies to “activate Results”.

---

## 15. AI / LLM discoverability findings

Google (AI features + AI optimisation guide, 2025–2026):

- Same SEO fundamentals. No extra files, chunking, or special schema for AI Overviews / AI Mode.
- `llms.txt` is ignored by Google Search.
- Helpful, non-commodity, people-first content matters more than AEO hacks.
- Scaled low-value pages violate spam policy.

OpenAI: OAI-SearchBot for ChatGPT search; GPTBot for training; independently controllable. Site allows both via `*` plus an explicit OAI-SearchBot allow.

Anthropic / Perplexity: search bots vs training/user fetchers. Currently allowed via `*`.

**On-site, the site is understandable.** Headings, first paragraphs, service relationships and geography (where true) are clear. **Off-site, it is barely corroborated.** That is the AI-discovery problem, not missing `llms.txt`.

---

## 16. AI citability findings

Could an answer engine confidently cite Rolodex Rebels? Assessed from page substance, not from a single personalised SERP or chat answer.

| Query family | Authoritative page? | Answer explicit? | Geography? | Proof? | Specific enough? | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| music marketing agency UK | Homepage | Yes | UK | Partial (3 names visible) | Medium | Citable with weak corroboration |
| music PR agency UK | `/services/music-pr` | Yes | UK implied | Weak on-page | Medium–strong copy | Best on-site PR source; off-site lists ignore it |
| music street teams London | **No honest page** | No | — | — | — | Do not fake this. Competitors own it. |
| flyer distribution for gigs | Flyer page | Yes | Not limited to London | Weak | Strong process language | Best unique on-site citation candidate |
| poster distribution London music | Grassroots poster block | Yes | London explicit | Weak | Medium | Enough for a capability mention; not a deep guide |
| festival marketing agency UK | Festival page | Yes | UK | Weak | Strongest specialist copy | Good on-site source |
| artist website design UK | Artist website page | Yes | UK | Weak | Strong | Good |
| event website design agency UK | Event/festival websites | Yes | UK | Weak | Strong | Good |
| marketing for promoters | Who We Help promoters | Yes | Not London-only | Weak | Medium–strong | Good |
| concert / tour marketing | Sell The Show | Yes | UK | Weak | Medium | Good |

Ambiguity to avoid in future copy: do not imply street teams or campus campaigns. Do not imply all services are London-only.

---

## 17. Bot-access findings

Production `/robots.txt`:

```
User-Agent: *
Allow: /

User-Agent: OAI-SearchBot
Allow: /

Host: https://rolodexrebels.co.uk
Sitemap: https://rolodexrebels.co.uk/sitemap.xml
```

| Bot | Role | Current access | Notes |
| --- | --- | --- | --- |
| Googlebot / Googlebot-Image | Search (incl. AI features in Search) | Allowed via `*` | Correct. Google-Extended is a **training/grounding** token, not Search ranking. |
| Bingbot | Search | Allowed via `*` | Correct |
| OAI-SearchBot | ChatGPT search | Explicit allow | Correct for discovery |
| GPTBot | OpenAI training | Allowed via `*` | Product choice, not a bug |
| Claude-SearchBot | Anthropic search | Allowed via `*` | Fine; explicit allow is documentation-only |
| ClaudeBot | Anthropic training | Allowed via `*` | Product choice |
| PerplexityBot | Perplexity search | Allowed via `*` | Fine |
| ChatGPT-User / Perplexity-User / Claude-User | User-initiated fetch | May ignore robots.txt | Do not treat robots as a security control |

**Do not blindly disallow training crawlers.** For a small agency that wants brand recognition in models, allowing training is reasonable. Disallow GPTBot/ClaudeBot/Google-Extended only if the owner explicitly wants out of training. That is a **policy decision**, not an SEO defect.

Explicit extra `Allow: /` lines for every search bot are optional documentation. They do not change behaviour while `*` already allows them.

---

## 18. llms.txt recommendation

**Classification: NOT JUSTIFIED**

Evidence:

- Google Search Central AI optimisation guide: site owners do **not** need machine-readable AI files; Google Search does not use `llms.txt`; maintaining one neither helps nor hurts Google.
- OpenAI’s official crawler documentation discusses robots.txt (OAI-SearchBot / GPTBot), not third-party `llms.txt` consumption.
- Anthropic and Perplexity publish `llms.txt` for **their own docs**. That is not evidence they read yours at inference time.
- Maintenance cost: another file that can go stale and contradict page copy.
- The site already has a crawlable sitemap, clear pages, and robots.txt.

Optional later only if a specific integration (internal RAG, a partner agent) is configured to fetch it. Not for “AI SEO”.

---

## 19. Off-site authority findings

### Current authority

- Primary public entity is the website itself.
- Jo Cerrone LinkedIn posts (Jun–Jul 2026) mention Rolodex Rebels (PR/music marketing, “30 years”). Low engagement. Personal, not a company `sameAs`.
- This audit’s public web-search interface did **not** return `site:rolodexrebels.co.uk` hits and did **not** surface the production site for a bare “Rolodex Rebels” query (Tax Rebels “Rebel Rolodex” noise instead). **That is not a Google indexation report.** It is a weak-corroboration signal. Confirm in Search Console.
- No useful backlink dataset (Ahrefs/Majestic/Bing link explorer) was available. Do not invent link classifications.
- No industry “best music PR agencies UK 2026” list reviewed (Now Listen PR roundup and similar) included Rolodex Rebels.

### Future opportunities (not this slice)

- Genuine client/partner mentions **with permission**.
- Industry directories that are actually used (not bulk SEO directories).
- A real organisation LinkedIn/profile **if it exists or is worth creating as a business decision**.
- Original Insights that other sites would cite.
- Verified case studies when approved — then Results can come off `noindex`.

### Backlinks

**Not classified.** No link graph was available. Do not buy links, PBNs, guest-post spam, or reciprocal campaigns.

Public SERP competitors for **physical** promotion (Big Squid, InteractiveM, Kessel Runners, Mobius, StreetBlitz) are citation competitors, not a brief to copy their doorway pages.

---

## 20. Competitor / SERP gaps

SERP observations below are **illustrative of competing page types**, not ranking facts from one personalised search.

| Intent | Competing page types | Where Rolodex can be better |
| --- | --- | --- |
| Music marketing agency UK | Now Listen PR, The Sound Consultants, Polite Riot, HarmENT, LIBRE — mostly DSP/streaming/ads/playlisting | Physical + digital; live promoters/venues/festivals; named current clients; not a playlist mill |
| Music PR UK | Prescription, Liberty, Decent, Quite Great, Stampede, LMSUK — specialist press/radio shops and “best of” blogs | Joined-up PR → audience → tickets → grassroots. Needs proof and listings later, not a thinner PR clone |
| Street teams / flyering London | Big Squid, InteractiveM, Kessel Runners, Mobius, StreetBlitz — operators with prices, zones, staff | Rolodex should **not** pretend to be a street-team operator. Win on flyer/poster **plus campaign**, not on “nationwide street teams” |
| Festival marketing | Generic event agencies + specialist festival marketers | Existing festival page is already more specific than most agency homepages |
| Artist / event websites | Web studios and music-platform site builders | Music-industry brief (releases, dates, tickets, audience) is the information gain |

**Do not copy competitor outlines.** Information gain is the physical/digital join, live-music operators, and named clients — if those stay truthful.

---

## 21. Content gaps

Material gaps vs search/AI citation, **without** inventing pages:

1. Visible client names for all seven approved clients.
2. Approved, specific proof (even one paragraph of what was delivered, without fake metrics) — Results stays paused until that exists.
3. Off-site corroboration.
4. Original Insights with operator experience (see §22).
5. Street-teams intent is a **deliberate gap**.
6. Labels & Managers uniqueness.
7. Exact phrases `music publicity` / `concert marketing` are optional on existing pages only.

Not gaps: poster standalone URL; city pages; FAQ schema; word-count padding.

---

## 22. Future Insights opportunities

Do **not** publish during this phase. Publish only with original experience.

| Candidate | Search / audience support | Commercial relevance | Expertise fit | Verdict |
| --- | --- | --- | --- | --- |
| What should a promoter do when ticket sales slow down? | High commercial intent; diagnostic | Directly Sell The Show | Strong | **Priority Insights #1** when evidence exists |
| How to market a show in the final six weeks / six-week ticket campaign | High; planning query | Directly commercial | Strong | Keep |
| How far in advance should you promote a gig? | Real planning question | Sell The Show | Strong | Keep |
| Do flyers and posters still work for music promotion? | Evaluation query; competitors are thin operators | Grassroots money | Strong unique | Keep |
| How physical promotion connects to digital campaigns | Differentiation | Grassroots + Get Seen | Strong unique | Keep |
| How to turn gig attendees into the next-show audience | Retention | Build Your Audience | Strong | Keep |
| How should an independent artist market a new single? | Crowded; still a buyer question | Get Heard / Artists | Medium unless original timeline | Keep only with a real release timeline |
| Why an artist website should be more than a brochure | Supports the website money page | Artist websites | Strong | Keep |
| How festivals turn one weekend into a year-round audience | Festival page already exists; article can go deeper | Festival marketing | Strong | Keep |
| When should a promoter use street teams? | Was in the backlog | **Agency cannot deliver street teams** | — | **RETIRE** |

LLM/answer-engine shape that would actually get cited: processes, timelines, decision criteria, common mistakes, checklists. Not “What is festival marketing?”.

**FAQ strategy:** optional later on Flyer Distribution and Artist Website Design **as visible copy for users**, not FAQ schema for Google. Google FAQ rich results are gone. Do not add FAQs sitewide.

---

## 23. Measurement / conversion findings

| Layer | Status |
| --- | --- |
| GA4 | Present, consent-gated (`G-EZSJL5TG8N`). Default analytics_storage denied until Accept. |
| Vercel Web Analytics | Not enabled |
| GSC | **Not accessed.** Google HTML verification file `google5545d78fd95057bb.html` returns 200. Ownership inside the GSC UI is unverified here. |
| Bing Webmaster | `msvalidate.01` meta present. Account not accessed. |
| IndexNow | Key live. Useful for Bing/Yandex et al. **Not Google.** |
| Conversion events in code | `start_project_cta`, `service_page_enquiry`, `audience_route_selection`, `service_directory_selection`, `project_form_started`, `project_form_submitted`, `phone_click`, `email_click`, `ai_referral_landing`, `outbound_link` |
| Attribution | Landing page, originating page, service page, audience route, referrer (no query string), UTM source/medium/campaign/content/term. Session-scoped. Cleared if consent denied. Hidden fields on the project form. |
| Form submit | Code-reviewed, **not live-submitted** in this audit |
| Field CWV | Unknown |

This is **instrumentation-ready**, not **reporting-verified**.

---

## 24. Prioritised remediation backlog

Ordered by expected impact, not ease.

| Priority | Finding | URL/File | Why it matters | Action | Effort | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Stale Street Teams indexation risk | `/services/grassroots/music-street-teams` → `/services/grassroots`; `next.config.mjs` | Old “London & Kent street teams” snippets can outlive the offer | Request Google recrawl of old URL + destination; IndexNow notify deletion/update for Bing. Do **not** restore the page | S | HIGH |
| 2 | Off-site entity almost absent | Off-site | AI/search cannot corroborate the organisation | Business work: real profiles if they exist, permitted mentions, later Insights. Not a code hack | L | HIGH |
| 3 | GSC / Bing / CWV unverified | Account-level | Cannot see coverage, queries, or field experience | Confirm GSC property, sitemap success, URL inspection; Bing sitemap; ignore until then | S | HIGH |
| 4 | Client names logo-only for 4/7 clients | `app/client-proof.tsx`, homepage + grassroots | Weak visible/citable proof | Visible text beside every logo. Keep factual heading | S | HIGH |
| 5 | Specialist money pages underlinked | Music PR, flyer distribution, festival, artist websites | Crawlers and users over-weight pillars | Add a small number of contextual links from homepage/Who We Help/parent pillars. No footer dump | S | HIGH |
| 6 | Organization logo is a wide wordmark | `app/seo.ts` `organizationJsonLd.logo` | Knowledge-panel/logo eligibility | Point schema logo at the square mark; keep wordmark in the UI | S | HIGH |
| 7 | Labels & Managers / Who We Help hub thin uniqueness | `/who-we-help`, `/who-we-help/labels-managers` | Audience intent slightly blurred with services | One distinct job-to-be-done pass, not a rewrite of service pages | M | MEDIUM |
| 8 | Optional missing natural terms | Music PR, Sell The Show | Slightly weaker exact-phrase matching | Use `music publicity` / `concert marketing` once where true. No stuffing | S | MEDIUM |
| 9 | Insights backlog still contains street teams | `docs/seo/insights-backlog.md` item 5 | Would publish a service the agency cannot deliver | Retire that brief | S | HIGH |
| 10 | Homepage canonical vs sitemap slash | `app/seo.ts` / sitemap | Tiny duplicate-form inconsistency | Align to one homepage URL form | S | HIGH |
| 11 | `http://www` two-hop redirect | Hosting | Cosmetic crawl waste | Optional single-hop if easy in DNS/Vercel | S | HIGH |
| 12 | Bing IndexNow unused for the Street Teams deletion | `app/indexnow.ts` / API route | Bing may keep the old URL longer | One deletion ping, not a submission loop | S | MEDIUM |
| 13 | No `sameAs` | `app/seo.ts` | Weaker entity joining | Add only real organisation URLs | S | MEDIUM |
| 14 | Service schema short names | `serviceJsonLd` | Minor | Optional rename “Grassroots” → “Grassroots music promotion” | S | LOW |
| 15 | Field performance unknown | GSC | Cannot claim CWV health | Wait for field data; no perf project now | S | HIGH |

---

## 25. Things we explicitly should NOT do

- Keyword stuffing or exact-match H1 rewrites that kill the plain-English voice.
- Restore `/services/grassroots/music-street-teams` or campus campaigns.
- London / Kent / city doorway pages.
- Standalone Poster Distribution route without unique operational content and clear non-cannibalisation.
- Thin service variants (“music PR London”, “festival marketing London”).
- Fake FAQs, fake authors, fake reviews, fake case studies.
- FAQPage schema for Google rich results (feature retired May 2026).
- Mass AI Insights / scaled content.
- `llms.txt` / `llms-full.txt` / AI-only markdown pages.
- Schema spam (Review, AggregateRating, Event, LocalBusiness-as-London-shop, client `Organization` nodes).
- Bulk directories, paid link schemes, PBNs, guest-post spam, reciprocal campaigns.
- Arbitrary word-count targets or SEO-plugin scores.
- Blocking all AI crawlers by default.
- Exposing Raphael Domalik, Event Suite, Event Growth Studio, Last Train Home, Prestige ID, Allxs, or internal technology.
- Publishing Insights or activating Results in this phase.
- Turning hosting into a standalone marketed service.
- Chasing 100/100 Lighthouse.

---

## TOP 10 HIGH-CONFIDENCE QUICK WINS

Fewer than 10 items meet “useful + high confidence + low/moderate effort + non-speculative”. Do not pad.

1. Request Google URL inspection / recrawl for the retired Street Teams URL and `/services/grassroots`.
2. Put visible text names next to every client logo.
3. Point Organization `logo` at the square mark (192×192 `icon.png` or equivalent).
4. Confirm GSC: sitemap processed, no manual actions, representative URL inspection.
5. Confirm Bing Webmaster sitemap + IndexNow ping for the deleted Street Teams URL.
6. Add a few contextual internal links to Music PR, flyer distribution, festival marketing, and artist websites from already-relevant copy.
7. Retire the “When should a promoter use street teams?” Insights brief.
8. Align homepage canonical and sitemap homepage slash.

---

## TOP 5 LONGER-TERM SEO / AI AUTHORITY OPPORTUNITIES

1. **Original Insights** on ticket slowdowns, six-week live campaigns, and whether flyers/posters still work — only with real operator detail.
2. **Approved proof**: even one specific, permitted campaign story beats another service page. Then consider un-pausing Results.
3. **Industry citations** from clients/partners who can mention the work (earned, not bought).
4. **Organisation profile consistency** (real `sameAs` destinations) so the brand is not confused with unrelated “Rebel Rolodex” properties.
5. **Deeper live-music operator pages only if content is unique** — not a second festival URL.

---

## Implementation phases (do not start in this task)

**PHASE A — Critical technical / indexation**  
Recrawl retired Street Teams URL; confirm sitemap in GSC/Bing; IndexNow deletion ping. No architecture changes.

**PHASE B — Search intent / on-page / internal linking**  
Visible client names; a few natural terms; contextual money-page links; Labels & Managers uniqueness if still thin after proof work.

**PHASE C — Structured data / entity / AI discoverability**  
Square Organization logo; real `sameAs` only; optional Service name tidy. No `llms.txt`. No FAQ schema.

**PHASE D — Authority / citations / content**  
Insights with original evidence; permitted mentions; Results only with approved case studies.

**PHASE E — Measurement / iteration**  
GSC query/page mapping, branded vs non-branded, field CWV, organic → enquiry in GA4. Iterate titles only with CTR evidence.

---

## Final verdict

**SEO TECHNICAL HEALTH:** HEALTHY  

**SEARCH ARCHITECTURE:** HEALTHY  

**CONTENT / INTENT:** NEEDS WORK  

**AI / LLM DISCOVERABILITY:** NEEDS WORK  

**AUTHORITY / CITABILITY:** NEEDS WORK  

**MEASUREMENT:** NEEDS WORK  

---

## NEXT IMPLEMENTATION SLICE

**Entity, proof and money-page citability closeout**

One bounded slice on current master: visible client names; Organization square logo; contextual links to Music PR / flyer distribution / festival marketing / artist websites; retire the street-teams Insights brief; IndexNow/GSC recrawl of the deleted Street Teams URL; canonical/sitemap homepage slash alignment.

Do **not** publish Insights, add routes, restore Street Teams, or start a technical SEO rebuild.

---

## Audit method notes

- Production crawled 17 Sep 2026 with curl + HTML parse + browser session.
- Source read from `origin/master` (`57423cb`).
- Authoritative docs checked as listed in the header.
- GSC, Bing WMT UI, backlink databases, and PageSpeed/CrUX field data were **not** available.
- AI/search appearance tests in this environment are not ranking facts.
- Private brands were grepped in production HTML: no matches.

**STOP.** No fixes, no branches, no deploys.
