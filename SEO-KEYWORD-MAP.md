# PDR Court — Keyword → Page Map

A plan that ties each ranking target to the page that should win it. Built from the
site's actual routes (see `app/sitemap.ts`).

## How to use this

- **Primary keyword** = the one search term each page is *built to win*. One primary per page — don't make two pages chase the same term (they'd cannibalise each other).
- **Intent** — match the page type to why people search:
  - *Informational* = learning ("what is ODR") → guides / articles
  - *Commercial* = comparing/choosing ("online arbitration services") → service & solution pages
  - *Transactional* = ready to act ("file a dispute online") → lodge / buy / contact
  - *Navigational* = looking for you ("PDR Court") → homepage
- **Difficulty / volume are ESTIMATES** (directional, India market). Validate exact numbers free in **Google Keyword Planner**, and let **Search Console** tell you what you actually rank for after ~4–8 weeks.
- **Priority**: P1 = do first (high intent × winnable), P2 = next, P3 = nice-to-have.

> ⚠️ Reality check: the homepage and generic head terms ("arbitration", "ADR") are
> competitive and slow. Your fastest wins are **brand terms**, **long-tail
> industry/transactional phrases**, and **informational articles** — most of which
> are currently un-served because the blog is `noindex`'d.

---

## Tier 1 — Brand & Homepage (rank fastest)

| Page | Primary keyword | Secondary / long-tail | Intent | Difficulty | Priority |
|---|---|---|---|---|---|
| `/` | online dispute resolution platform India | ODR India, resolve disputes online, alternative to court, ODR platform | Navigational / Commercial | Med–High | **P1** |
| `/` (brand) | PDR Court | PDR Court ODR, pdrcourt | Navigational | Low (you'll own it) | **P1** |

---

## Tier 2 — Service & Method pages (core commercial value)

| Page | Primary keyword | Secondary / long-tail | Intent | Difficulty | Priority |
|---|---|---|---|---|---|
| `/services` | alternative dispute resolution services | ADR services India, dispute resolution services, ADR platform | Commercial | Med–High | **P1** |
| `/solutions/arbitration` | online arbitration India | online arbitration services, arbitration platform India, institutional arbitration online | Commercial | Med–High | **P1** |
| `/solutions/mediation` | online mediation India | online mediation services, commercial mediation India | Commercial | Med | **P1** |
| `/solutions/conciliation` | online conciliation services | conciliation services India, conciliation vs mediation | Commercial | Low–Med | P2 |
| `/solutions/negotiation` | facilitated negotiation dispute resolution | online negotiation settlement | Commercial | Low | P3 |
| `/how-it-works` | how online dispute resolution works | ODR process, how online arbitration works, steps in arbitration | Informational | Med | P2 |
| `/pricing` | online arbitration cost India | arbitration fees India, dispute resolution fees, cost of arbitration | Commercial / Transactional | Med | P2 |

---

## Tier 3 — Industry / Audience pages (high intent, very winnable)

These long-tail, India-specific phrases are where you can rank *soonest* — lower
competition, buyers with real intent.

| Page | Primary keyword | Secondary / long-tail | Intent | Difficulty | Priority |
|---|---|---|---|---|---|
| `/msmes` | MSME payment dispute resolution | recover MSME dues, delayed payment to MSME, MSME Samadhaan alternative | Commercial | Low–Med | **P1** |
| `/financial-institutions` | loan default dispute resolution | NBFC loan recovery online, debt recovery arbitration, bank dispute resolution platform | Commercial | Med | **P1** |
| `/individuals` | consumer dispute resolution online | resolve a dispute without going to court, dispute resolution for individuals | Commercial / Informational | Low–Med | P2 |
| `/enterprise` | enterprise dispute resolution platform | corporate dispute resolution, vendor dispute resolution | Commercial | Med | P2 |

---

## Tier 4 — Transactional (bottom-of-funnel, money pages)

| Page | Primary keyword | Secondary / long-tail | Intent | Difficulty | Priority |
|---|---|---|---|---|---|
| `/lodge-dispute` | file a dispute online | lodge arbitration case online, start arbitration online India, raise a dispute | Transactional | Low (highest intent) | **P1** |
| `/buy` | dispute resolution agreement online | buy arbitration agreement | Transactional | Low | P2 |
| `/appointment` / `/talk-to-us` / `/contact` | book dispute resolution consultation | talk to an arbitration expert | Transactional / Navigational | Low | P3 |

---

## Tier 5 — Trust, Panel & Recruitment

| Page | Primary keyword | Secondary / long-tail | Intent | Difficulty | Priority |
|---|---|---|---|---|---|
| `/neutrals` | panel of arbitrators India | empanel as arbitrator, become a mediator India, arbitrator empanelment | Commercial / Recruitment | Low–Med | P2 |
| `/about` · `/company` · `/ethos` | PDR Court about / leadership | who we are, ODR company India | Navigational (trust/E-E-A-T) | Low | P3 |
| `/careers/*` | arbitrator jobs India | mediator jobs, case manager job India | Recruitment | Low | P3 |

---

## Tier 6 — Informational hub + CONTENT GAPS (your biggest opportunity)

Map existing hubs first, then **create articles** for the high-volume questions you
currently don't answer. These top-of-funnel queries pull in people *before* they're
ready to buy, then your internal links funnel them to the service pages above.

**Existing hubs:**

| Page | Primary keyword | Secondary / long-tail | Intent |
|---|---|---|---|
| `/knowledge-center` | what is alternative dispute resolution | ADR meaning, types of ADR | Informational |
| `/beginner-guide` | what is online dispute resolution | ODR explained, ODR for beginners | Informational |
| `/information` | arbitration and conciliation act summary | ADR laws India | Informational |

**Content gaps — no dedicated page yet (create these; ideally re-enable a *quality* blog):**

| Target query (high India volume) | Why it matters | Suggested page |
|---|---|---|
| cheque bounce case procedure / Section 138 NI Act | Massive search volume; direct fit for a recovery platform | New article → links to `/financial-institutions`, `/lodge-dispute` |
| MSME Samadhaan / delayed payment to MSME | High volume govt-scheme query; your `/msmes` ICP | New article → links to `/msmes` |
| arbitration clause sample / format | High volume; captures people drafting contracts | New article → links to `/solutions/arbitration`, `/buy` |
| difference between arbitration, mediation & conciliation | Classic explainer; ranks well, earns links | New article → links to all `/solutions/*` |
| is an arbitration award legally binding in India | Trust/objection-handling query | New article → `/how-it-works` |
| how to recover unpaid invoices legally in India | Strong commercial intent | New article → `/msmes`, `/financial-institutions` |
| litigation vs arbitration: cost & time | Decision-stage comparison | New article → `/pricing`, `/services` |

---

## Recommended order of attack (first 90 days)

1. **Brand + homepage** — submit to Search Console, confirm `/` ranks for "PDR Court".
2. **`/msmes` + `/financial-institutions`** — your most winnable high-intent commercial pages. Expand the copy to genuinely target the keywords above.
3. **`/lodge-dispute`** — optimise the bottom-funnel transactional page.
4. **`/solutions/arbitration` + `/solutions/mediation`** — your flagship method pages.
5. **3–5 gap articles** (cheque bounce, MSME Samadhaan, arbitration clause, ADR comparison) — re-open the blog for *these*, written to a high E-E-A-T standard (named author + credentials), each internally linking to the matching service page.

## Things to remember while executing

- **One primary keyword per page** — if two pages target the same term, merge or differentiate them.
- **Write for the searcher's intent**, then place the keyword naturally in the `<title>`, `<h1>`, first paragraph, and a couple of subheads. No stuffing.
- **Internal links**: every new article should link *down* to the relevant money page; every money page should link *across* to its siblings.
- **Legal = YMYL**: real author names, credentials, citations, and review/trust signals materially affect whether these rank.
- **Measure, then iterate**: after 6–8 weeks, open Search Console → "Queries", find pages ranking on page 2 (positions 11–20), and strengthen those first — they're closest to breaking through.
