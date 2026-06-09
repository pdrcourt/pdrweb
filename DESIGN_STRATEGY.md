# PDR Court — Premium Redesign Strategy & Motion System

> **Creative direction:** award-tier legal-tech polish (Apple / Stripe / Linear restraint), built on the **existing light gold system** — warm gold `#834009`, cream `#faf8f5`, espresso `#12100e`. We keep trust-first clarity and the SEO foundation already shipped, and layer in cinematic motion + a single tasteful 3D moment. We deliberately **reject** the dark-navy/electric-blue direction from the original brief because (a) it would discard the shipped light system and (b) legal-tech buyers convert on trust and speed, not spectacle.

---

## 1. Sitemap

```
/                         Home (hero, stats, services, process, features, partners, CTA)
├── /about                Brand storytelling
│   ├── /company  /investors  /offices  /neutrals  /partners
├── /services             Enterprise feature showcase
│   ├── /individuals  /msmes  /financial-institutions  /enterprise
│   └── /solutions/{arbitration,conciliation,mediation,negotiation}
├── /how-it-works         5-step process storytelling
├── /pricing
├── /buy                  Dispute Resolution Paper purchase
├── /lodge-dispute        File a dispute
├── /appointment          Appoint arbitrator / conciliator
├── /talk-to-us           Conversational support + callback
├── /contact              Multi-channel contact
├── /information          Corporate info directory
│   ├── /beginner-guide  /ethos  /case-studies  /member-stories
├── /knowledge-center     Searchable learning hub
│   └── /articles  /articles/[slug]
├── /media-center         Editorial newsroom
│   ├── /newsroom  /newsroom/[slug]  /media-kit  /press-release  /faqs
├── /join-us              Careers
│   └── /careers/{arbitrator,conciliator,case-manager,erp-management,it-developers}
└── /resources-legal      Legal documentation hub
    └── /rules  /arbitration-rules  /mediation-rules  /proceeding-rules
        /terms-conditions  /privacy-policy  /disclaimer  /cookie-policy
```

Machine-readable: `app/sitemap.ts` (416 URLs) · `app/robots.ts` · `app/manifest.ts` — already live.

---

## 2. UX Strategy

**Primary persona — the Claimant (SME owner / individual).** Anxious, time-poor, non-lawyer. Needs: "Can this actually resolve my dispute, fast, legally, without a courtroom?" → Hero promise + 5-step clarity + cost transparency + one obvious CTA (*Lodge a Dispute*).

**Secondary — Enterprise / Bank legal ops.** Evaluating vendor trust. Needs: compliance, security, SLAs, scale proof, neutral panel. → Stats band, security section, enterprise card, case studies.

**Tertiary — Neutrals / talent.** → `/join-us`.

**Conversion spine (every page):** eyebrow → emotional headline → proof → single primary CTA → supportive secondary. One primary action per viewport; never two competing gold buttons.

**Trust ladder:** badges ("70+ Banks · 500+ Enterprises") → animated stats → security/compliance → neutral panel → case outcomes → legal framework. Surface progressively as the user scrolls.

---

## 3. Wireframe Structure (Home)

```
┌─ NAV (slim, centred logo bubble, split links) ─────────────┐
├─ HERO  ┌ left: kinetic headline + sub + 2 CTA + trust pills │
│        └ right: 3D gold-glass scene (R3F) / parallax        │
├─ STATS  4 animated counters on espresso band               │
├─ SLIDER / proof points                                     │
├─ PARTNERS  logo marquee                                    │
├─ SERVICES  bento of capability cards (mouse-glow)          │
├─ PROCESS  5-step connected timeline                        │
├─ FEATURES  AI-platform showcase (alt layout)               │
├─ ADVISORY  council / neutrals                              │
├─ CTA  cinematic gold band + particles                      │
└─ FOOTER  callback + newsletter + link grid                 │
```

---

## 4. Visual Design System (as shipped)

| Token | Value | Use |
|---|---|---|
| `primary` (gold) | `#834009` | brand, CTAs, accents |
| gold scale | `50 #fbf1e3 … 500 #834009 … 900 #2c1603` | tints/shades |
| gradient | `#834009 → #a85220 → #c66e1c` | buttons, gold-text |
| cream | `#faf8f5` / `200 #f4efe8` / `300 #ebe4d8` | backgrounds, hairlines |
| espresso (dark) | `#12100e` / `800 #1c1917` | dark bands, footer |
| `bg-royal-mesh` | espresso + gold radial glow | premium dark panels |

**Type:** Cinzel (brand/serif accents) · Poppins (display headings) · Inter (body).
**Radii:** cards `rounded-3xl` (1.5rem) · pills `9999px` · bands `2rem`.
**Elevation:** `shadow-gold` / `shadow-gold-lg` (warm), `shadow-glass` (neutral).
**Signature components:** `.btn-primary` (pill + circular arrow badge), `.eyebrow`, `.surface-card`, `.gradient-border`, `.accent-serif`, `.gold-text`, `.watermark`, `.bg-hero-gradient`.

---

## 5. Motion System

**Easing tokens**
- `ease-out-expo` `cubic-bezier(0.16,1,0.3,1)` — entrances (the house easing)
- `ease-in-out` — ambient loops (float, pulse)
- spring `{stiffness:320,damping:18}` — interactive press/hover

**Timing**
- micro (hover/tap) 150–250 ms · reveal 400–800 ms · hero stagger 60–90 ms/item · ambient float 5–8 s loops.

**Rules**
1. Entrances are `whileInView` + `once:true` (no replay on scroll-back).
2. Respect `prefers-reduced-motion` — gate 3D + parallax + ambient loops.
3. Transform/opacity only (GPU); never animate layout props.
4. One focal animation per viewport; supporting elements stagger behind it.

---

## 6. Animation Specifications

| Pattern | Spec |
|---|---|
| **Kinetic headline** | per-line blur-reveal: `opacity 0→1`, `y 24→0`, `filter blur(8px)→0`, stagger 80 ms, expo |
| **Stat counters** | `useMotionValue`+`animate` count-up, 2.5 s ease-out, fires on `useInView` *(shipped)* |
| **Scroll reveals** | `y 24→0` + fade, 450 ms, `margin:"-40px"` trigger |
| **Bento card hover** | `-translate-y-1`, `shadow-gold`, pointer-tracked radial glow follows cursor |
| **Process timeline** | connector line draws via `scaleX 0→1` on enter; nodes pop with spring |
| **3D hero** | gold-glass scales rotate `y` slowly; parallax to pointer (±6°) + scroll depth; particles drift |
| **CTA particles** | canvas dot-field, slow upward drift, gold at 6% opacity |
| **Magnetic CTA** | primary button translates ≤6px toward cursor within 80px radius |

---

## 7. AI Image Generation Prompts (20)

> Style suffix to append to each: *"— ultra realistic, cinematic, 8K, premium commercial photography, volumetric lighting, warm gold-and-cream palette (#834009 gold, #faf8f5 cream), shallow depth of field, professional legal-tech branding, no text, no watermark."*

1. A serene modern arbitration chamber bathed in warm gold morning light, empty designer chairs around a curved oak table, floor-to-ceiling windows, soft bokeh.
2. Close-up of a brass justice scale on a cream marble desk, a laptop glowing softly beside it, warm rim light, depth blur.
3. A diverse panel of professionals in a sunlit virtual-hearing room, large screen showing remote participants, gold accent lighting.
4. Macro of a digital contract being signed with a stylus on a tablet, golden UI glow, fingertip in focus, creamy background.
5. An abstract network of glowing gold nodes connecting courthouse silhouettes across a soft-focus map of India at dusk.
6. A calm SME owner smiling at a laptop in a warm home office, relief on her face, gold sunlight, candid documentary feel.
7. A futuristic yet warm law office interior, floating holographic case files in soft gold, wood and cream materials, no cold blue.
8. Overhead flat-lay of legal documents, a fountain pen, a brass scale and a smartphone on cream linen, gold hour light.
9. A secure data-vault concept rendered in warm tones — glowing gold padlock made of light, soft particle field, cream backdrop.
10. Hands shaking across a polished table after a settlement, motion-blurred background of a bright modern office, gold tone.
11. A single elegant brass gavel resting on a cream pedestal under a focused warm spotlight, museum-quality product shot.
12. A mediator and two parties in a bright, plant-filled modern room reaching agreement, natural warm light, hopeful mood.
13. Isometric illustration-photo hybrid of a dispute-resolution app journey, gold UI cards floating in cream space.
14. A glowing analytics dashboard reflected in a designer's glasses, warm gold data visualisations, dark-cream studio.
15. Time-lapse-style long exposure of a city business district at golden hour, light trails forming a subtle scale-of-justice shape.
16. A close, trustworthy portrait of an experienced arbitrator (50s, neutral expression) in warm window light, shallow DOF.
17. Macro of fibre-optic strands glowing warm gold, abstract metaphor for secure digital justice, cream negative space.
18. A paper agreement dissolving into golden particles that reassemble as a digital document, conceptual, warm palette.
19. A welcoming reception of a premium dispute-resolution centre, brass signage reading nothing legible, cream marble, gold light.
20. Aerial of a calm professional walking through a sunlit atrium with a tablet, long shadows, gold-cream architectural photography.

---

## 8. AI Video Prompts (2)

**Video 1 — "Justice, Reinvented" (30s hero loop / brand film)**
> Cinematic 4K, Unreal Engine / Octane realism, warm gold-and-cream grade (NOT cold/teal). Slow, confident camera. Sequence: (1) golden-hour Indian business skyline, light trails; (2) camera glides into a warm modern arbitration chamber; (3) a brass justice scale balances as glowing gold data threads weave between two parties' documents; (4) a remote hearing resolves on a bright screen; (5) a relieved SME owner closes her laptop and smiles; (6) macro of a digital signature blooming into gold particles. Premium corporate, volumetric warm light, shallow DOF, no text overlays, gentle ambient score.

**Video 2 — "Resolution Without Boundaries" (20s)**
> Futuristic-yet-warm legal-tech commercial, 4K, gold-cream palette. Scenes: people in different Indian cities joining one virtual hearing; secure digital signatures glowing gold; an AI panel surfacing case insights on a warm dashboard; two hands meeting in agreement; a final wide of a sunlit resolution centre. High-end, volumetric lighting, slow push-ins, hopeful tone, no cold blues.

---

## 9. GSAP / Scroll Concepts (optional layer)

> We default to **Framer Motion + Lenis** (lighter, React-native). Use GSAP ScrollTrigger only where pinning is essential.

- **Pinned process** — pin `/how-it-works` timeline; scrub the 5 steps horizontally as the user scrolls vertically.
- **Hero depth scrub** — `ScrollTrigger` maps scroll progress to 3D camera dolly + headline parallax.
- **Stats reveal** — `batch()` stagger as the band enters (or keep the shipped Framer counters).
- **CTA particle intensity** — scrub particle density/opacity up as the final CTA pins.
- **Lenis** — global smooth scroll, `lerp: 0.1`, synced to ScrollTrigger via `requestAnimationFrame`.

---

## 10. Mobile-First Responsive Strategy

- Breakpoints: base (375) → `sm` 640 → `md` 768 → `lg` 1024 → `xl` 1280.
- **3D hero is desktop-only** (`lg+`); mobile gets the lightweight parallax illustration + floating badges (already present) — protects mobile LCP.
- Nav collapses to slim bar + drawer (logo moves into the drawer) at `<md` — shipped.
- Bento grids reflow 1-col; timelines go vertical; stat grid 2×2.
- Tap targets ≥44px; sticky bottom "Lodge a Dispute" CTA on mobile article/detail pages (recommended add).

---

## 11. Accessibility

- `prefers-reduced-motion`: disable 3D, parallax, ambient loops, count-ups (show final value).
- Colour contrast: body text `dark/80` on cream passes AA; verify gold-on-cream is used for **non-text** accents or ≥AA large text only.
- All interactive elements keyboard-reachable; visible focus rings (add `focus-visible:ring-2 ring-primary/50`).
- 3D `<canvas>` gets `aria-hidden` + a text alternative in the hero copy.
- Semantic landmarks (`<nav> <main> <footer>`), one `<h1>`/page, alt text on all imagery.
- Forms: label every field, error text tied via `aria-describedby`.

---

## 12. Conversion Optimisation

- **One primary CTA per viewport** — *Lodge a Dispute* is the money action; *Talk to an Expert* secondary.
- Hero trust pills above the fold ("70+ Banks · 500+ Enterprises", "No credit card required").
- Cost transparency early (₹100–2500 messaging) kills the #1 objection.
- Sticky mobile CTA; exit-intent callback offer (recommended).
- Social proof adjacency: place stats + case outcomes immediately before each CTA band.
- Reduce form friction: progressive disclosure on the contact form (already multi-step-friendly).
- Measure: GA4 + scroll-depth + CTA click events; A/B headline ("Resolve Disputes. Faster. Smarter. Online." vs outcome-led variant).

---

## 13. Component Hierarchy

```
RootLayout (fonts, JSON-LD, metadata)
└── (page)
    ├── Navbar  ── desktop split nav · centred logo bubble · mobile drawer
    ├── <Hero3D> (client, lazy, lg+)  ── <Canvas> scene + kinetic headline
    │     └── HeroScene · FloatingScales · Particles · CameraRig
    ├── StatsSection ── AnimatedNumber ×4
    ├── SliderSection / PartnersSection
    ├── ServicesSection ── GlowCard ×N
    ├── ProcessSection ── Step ×5 + Connector
    ├── FeaturesSection · AdvisoryCouncilSection
    ├── CtaSection ── ParticleField + magnetic CTA
    └── Footer ── TopBarForm ×2 · link grid · social
Shared: Button · SectionWrapper · Badge · LucideIcon · ContactForm
```

---

## 14. Tech Stack (recommended vs shipped)

| Layer | Shipped | Recommended add |
|---|---|---|
| Framework | **Next.js 14** (App Router) | stay (15 optional later) |
| Styling | **Tailwind 3.4** | — |
| Motion | **Framer Motion 12** | + **Lenis** smooth scroll |
| 3D | — | **three + @react-three/fiber + drei** (hero only, lazy) |
| Micro-interactions | Framer | optional **GSAP ScrollTrigger** for pinning |
| Icons | **lucide-react** | — |
| Lottie | — | optional for security/iconography |
| UI primitives | bespoke | shadcn/ui optional (don't fight the design system) |

**Performance guardrails:** 3D lazy-loaded behind `next/dynamic` + `IntersectionObserver`, desktop-only, `prefers-reduced-motion` gated, draco-free low-poly geometry, capped DPR (≤1.5). Target: keep LCP < 2.5s and protect the SEO already in place.

---

*Document reconciled to the live light-gold system. The original brief's dark-navy/electric-blue direction was intentionally not adopted; gold `#834009` remains the single source of brand truth.*
