# Design System — Main St. Barbershop

> Bergenfield, NJ · Established 2004
> Source of truth for Stitch screen generation, future-proofed against AI-generic
> defaults. When in doubt: heritage + charcoal + restraint, not glow + gradient + drama.

---

## 1. Visual Theme & Atmosphere

A heritage barbershop interface — masculine, warm, lived-in, and quiet. The
atmosphere reads like a real shop on a real Main Street: dark walls, cream
paper, brass fixtures, a single razor on the counter. Imperfect on purpose —
slight rotations on cards, hand-stamped marks, paper grain. Premium through
restraint, not decoration.

- **Density:** 5/10 — Daily App Balanced. Generous whitespace inside sections, dense bulletin-board moments inside cards.
- **Variance:** 6/10 — Offset Asymmetric. Hero is centered (deliberate brand exception). All other sections use a 12-col asymmetric split where the heading anchors one side and a small body block sits opposite.
- **Motion:** 8/10 — Cinematic Choreography. Full-screen logo build on load, video hero with split-text reveal, GSAP scroll-pinned parallax, cork cards lift on hover.

Reference temperature: dark charcoal walls, warm bone paper, brass and oxblood
as the only color punctuation. Never neon. Never gradient-heavy. Never glow.

---

## 2. Color Palette & Roles

All colors are absolute neutrals with one heritage accent. Single palette across
the entire site — no warm/cool gray fluctuation.

### Canvas / Surface
- **Off-Black Ink** `#0A0A0A` — primary dark canvas (Hero, Story, Team, Gallery, Visit, Footer)
- **Ink Elevated** `#121212` → `#1A1A1A` — sub-surfaces, card grounds in dark sections
- **Cork Charcoal** `#2A2622` — Services bulletin board base (only used here)
- **Bone Cream** `#EFE9DD` — primary foreground text on dark, primary background on light sections (Reviews, Services hero copy)
- **Bone Light** `#F7F2E8` — lightest cream surface, used for Services + Reviews backgrounds
- **Bone Lightest** `#FCFAF5` — paper-white interior of light cards

### Foreground / Type
- **Bone Primary** `#EFE9DD` — body text on dark canvas
- **Bone Muted** `rgba(239, 233, 221, 0.65)` — secondary copy on dark
- **Bone Whisper** `rgba(239, 233, 221, 0.10)` — large ghost numerals (vertical "2004" hero accent)
- **Ink Primary** `#0A0A0A` — text on bone surfaces
- **Ink Muted** `rgba(10, 10, 10, 0.65)` — body on bone

### Accent (used sparingly — never primary CTA)
- **Heritage Oxblood / Wine** `#5A1410` — minor accent only (hover stripes, single divider). Never used as button fill.
- **Brass** radial-gradient `#F4D99A → #B68A4E → #6E4F23` — physical objects only (thumbtack heads on cork board, badge crest detailing)

### Paper Stocks (cork bulletin only)
Cycle these six paper gradients across pinned cards for natural variance:
1. Kraft tan: `linear-gradient(135deg, #d6c2a3 → #c4ad88)`
2. Ivory: `linear-gradient(135deg, #f4ecdc → #e8dcc2)`
3. Aged white: `linear-gradient(135deg, #ebe3d2 → #d8cbb2)`
4. Warm kraft: `linear-gradient(135deg, #d3b894 → #b69c79)`
5. Bone paper: `linear-gradient(135deg, #efe9dd → #ded3bd)`
6. Dark kraft: `linear-gradient(135deg, #c1a880 → #a48a64)`

### Banned colors
- Pure black `#000000` (use Off-Black Ink)
- Any purple, violet, neon blue
- Any accent above 80% saturation
- Gradients on body text, headlines, or large surfaces
- Outer glow / neon shadow

---

## 3. Typography Rules

### Stack
- **Display & UI** `"Inter Tight"` — track-tight, weight 400–600, used for headlines, buttons, body.
  *Migration note: when budget allows, swap Display to `"Cabinet Grotesk"` or `"Satoshi"` for stronger character. Inter Tight is the present compromise — it is the tightened sister of Inter, not Inter itself.*
- **Editorial Accent** `"Instrument Serif"` italic only — small accents inside headlines (e.g. `*uncomplicated.*`, `*showing up*`). Never used for body. Never used at large sizes for headlines.
- **Mono** `"JetBrains Mono"` — meta strips, eyebrows ("THE STORY", "THE MENU"), coordinates, timecodes, hand-stamps. Always uppercase, letter-spacing `0.36em`.

### Scale
- **Hero wordmark words** `clamp(2.6rem, 7.2vw, 7.5rem)` weight 500, uppercase, tracking-tight
- **Hero "BARBERSHOP" line** `clamp(1.6rem, 4.2vw, 4.4rem)` weight 400, letter-spacing `0.06em`
- **Section H2** `clamp(1.8rem, 3.4vw, 3.1rem)` weight 500, leading 1.05, max-width 36rem, italic accent in Instrument Serif sized identically
- **Service card name** 26–30px, weight 500
- **Body** 13.5px, leading 1.75, max 65ch
- **Eyebrow / mono caps** 11px, letter-spacing `0.36em`, opacity 0.55–0.65
- **Footer wordmark** `clamp(2rem, 7.5vw, 6.5rem)` — confident but not 16rem

### Hierarchy is weight-and-color, not size
Two weights (400, 500–600) plus opacity tiers do most of the work. The
Instrument Serif italic provides typographic counterpoint without bloating
the system.

### Banned typography
- Inter (vanilla) for premium contexts — use Inter Tight or migrate to Geist/Satoshi/Cabinet
- Generic serifs: Times New Roman, Georgia, Garamond, Palatino
- Bodoni Moda for body text (we previously over-used it for headlines — moved to Instrument Serif italic only as an editorial accent)
- Massive 6-line text walls — the iron rule is 2–3 lines max for any headline
- All caps body copy
- Letter-spacing > `0.04em` on body text

---

## 4. Component Stylings

### `btn-primary` (cream slab → ink slide on hover)
- Background `#EFE9DD`, text `#0A0A0A`, border `1px #EFE9DD`
- Padding `1.05rem 1.7rem`
- Type: 12px Inter Tight 600 uppercase, letter-spacing `0.22em`
- Hover: `::after` pseudo-element of `#0A0A0A` translates from `100%` → `0%` y-axis (500ms `cubic-bezier(.2,.8,.2,1)`); text recolors to `#EFE9DD`
- No glow. No outer ring.

### `btn-ghost` (line → fill on hover)
- Transparent, 1px `rgba(239,233,221,0.32)` border, bone text
- Hover: border + bg become bone, text becomes ink

### `btn-light` (ink slab on cream sections)
- Inverse of `btn-primary` — ink fill, bone text. Hover swaps to outline-only ink.

### Cards
- **Pinned paper cards (cork bulletin only):**
  - Background: one of the 6 paper gradients
  - Border-radius `2px`
  - Box-shadow stack: `inset top white 0.4 / inset bottom black 0.06 / 14px 26px -6px black 0.55 / 5px 10px -3px black 0.4`
  - Each card carries a unique deterministic rotation: `-2.1°, +1.4°, -1.2°, +1.8°, -1.6°, +0.8°`
  - Brass thumbtack absolutely positioned `top:-10px` `left:50%`, with radial-gradient head, glint highlight, blurred drop shadow on the cork
  - Hover: `rotate(0)` + `translateY(-4px)`, shadow deepens, z-index lifts
- **Reviews cards (light section):**
  - Bone-light fill, 1px `rgba(10,10,10,0.15)` border, no rotation
  - Hover: invert to ink fill + bone text in 500ms

### Inputs (when needed)
- Label above (mono 10px caps), input below (Inter Tight 14px)
- 1px bottom border, no full box. Focus: border darkens to `#0A0A0A`
- No floating labels. No filled backgrounds.

### Loaders
- **Full-screen logo build** (initial mount + every home-logo click):
  - Cartouche stroke draws via `stroke-dashoffset` 1700→0 over 1.8s
  - Crest scales `0.4 → 1.0` after 1s
  - Text rises with `letter-spacing` cinch (16px → 9px) on the wordmark line
  - Counter ticker 000 → 100 over 2.8s
  - Top + bottom `6vh` crop bars slide in/out
  - Total runtime ≤ 3.85s, exits with `loaderFadeOut` lift + opacity
- **No spinners.** Skeleton dimensions match real layout when data loading is needed.

### Empty / Error states
- Compose with a single Ornament SVG (Swallow, Flourish) plus minimal mono caption
- Never "No data" placeholder text alone

---

## 5. Layout Principles

- **Containment:** every section uses `max-w-[1500px] mx-auto px-6 lg:px-10`. The hero allows `max-w-[1700px]` for the centered wordmark.
- **Section vertical rhythm:** `py-32 lg:py-44`. Adjacent sections must read as distinct chapters; no stacked padding collision.
- **Asymmetric split (default for sections):** 12-column grid. Heading + media occupies `col-span-7`, descriptive blurb sits in `col-span-4 col-start-9`. The empty space between is intentional and never filled.
- **Hero exception:** centered. Deliberate brand decision — wordmark is the entire visual statement. The "no centered hero" rule is overridden once and only here.
- **Big-font-on-the-side accent:** vertical ghost "2004" (`writing-mode: vertical-rl`, opacity 0.10) sits anchored to the left edge of the hero — the single asymmetric typographic moment that breaks the otherwise centered hero.
- **No 3-equal-cards row.** Services menu uses a 2×3 cork grid with paper-stock variation. Team uses 4 portrait columns at lg, collapsing to 2.
- **Bento gallery** uses `grid-flow-dense` with explicit row/col spans summing to fill — zero blank cells.
- **iOS Safari:** `min-h-[100svh]` only, never `100vh`.
- **Horizontal overflow:** the page wraps in `overflow-x-hidden`. Hero parallax (`scale: 1.22` on scroll) is contained.

### Banned layout patterns
- Three equal cards in a row
- Centered everything (only the hero is centered)
- `flexbox` with percentage `calc()` math
- Absolute-positioned elements stacking on each other in normal content flow
- Any `min-h-screen` with iOS Safari users

---

## 6. Responsive Rules

- **Below 768px:** every multi-column grid collapses to 1-col. The asymmetric 7+4 split becomes top heading → media → bottom blurb.
- **Cork bulletin on mobile:** 1-column grid, but rotations are damped to `±0.6°` so cards don't fall off the edge of the viewport. Pin stays centered.
- **Hero on mobile:**
  - Three stacked words remain stacked (MAIN / STREET / BARBERSHOP). Sizes scale via `clamp()`.
  - Vertical "2004" ghost accent hides below `lg` (clutter on small screens).
  - Top meta strip hides on small screens (`hidden md:flex`).
- **Touch targets:** all CTAs minimum 44px tap area. Service rows have 56px tap height.
- **Section padding:** `clamp(3rem, 8vw, 6rem)` per side at sub-tablet sizes.
- **Loader:** full-screen on every viewport, badge clamps `380px → 78vw → 1180px` so even on phones it fills convincingly without overflow.

---

## 7. Motion & Interaction

### Engine
- **GSAP** for hero parallax and the per-character split reveal
- **CSS transitions** for everything else — buttons, cards, link underlines
- **CSS keyframes** for marquee + Ken-Burns + grain rotation

### Easing language
- Default ease: `cubic-bezier(.16, 1, .3, 1)` (expo out — confident snap-arrival)
- Heavy-weight easing: `cubic-bezier(.2, .8, .2, 1)`
- Spring physics not used — the brand is mechanical, not bouncy. No overshoot beyond `1.04` scale.

### Cinematic moments
- **Loading screen** (3.85s) — described in Components
- **Hero reveal** (CSS transition delays cascading 0.20s → 1.55s after loader exits at 3.30s) — characters of MAIN, STREET, BARBERSHOP rise from `translateY(110%)` per-letter, then blurb + CTAs + stats follow
- **Hero scroll parallax** — GSAP ScrollTrigger scrubs video `yPercent: 22, scale: 1.22` over hero exit
- **Marquee** — 42s linear infinite, italic display caps with swallow + star ornaments
- **Cork card hover** — straighten rotation + lift 4px + deepen shadow over 550ms
- **Service icon hover** — opacity 0.5 → 1.0 + nudge translate-x

### Perpetual micro-loops
- Live-status pulse dots in nav + visit card (1s opacity 0.25 ↔ 1.0)
- Ken-Burns on hero stills (when video unavailable) — 14s alternate
- Grain SVG noise on every dark surface (static, but feels alive at low opacity)

### Performance constraints
- Animate `transform` + `opacity` exclusively
- Never animate `width / height / top / left`
- Grain noise lives on a fixed pseudo-element with `mix-blend-mode: overlay`, opacity 0.06–0.08
- Hardware-accelerate all transforms with `will-change` only on actively-animating elements

---

## 8. Imagery & Media

- **Hero video:** `/public/hero.mp4` — locally hosted, real barbering b-roll, 51s loop, ~1.6MB H.264, no audio. Falls back to a Pexels CDN URL, then to a B&W still. Always `grayscale(1) contrast(1.18) brightness(0.42)` and `scale(1.18)` to keep imagery atmospheric, not literal.
- **Photography:** B&W only, `grayscale(1) contrast(1.05)` baseline. Color images banned — they fight the palette.
- **Stock IDs:** verified working Unsplash IDs in `public/`-adjacent constants. Never trust an unsplash URL without verifying `naturalWidth > 0` first.
- **Decorative SVG:** Logo, Swallow, Scissors, Razor, Flourish, CircleStamp — all original geometry in `src/components/Ornaments.tsx` and `src/components/Logo.tsx`. Stroke-able for animation.
- **Map:** OpenStreetMap iframe with `invert(0.85) hue-rotate(180deg) grayscale(1) contrast(0.78) brightness(1.15)` to match the dark palette. Overlay address card with `bg-ink/85 backdrop-blur`.

---

## 9. Anti-Patterns (Banned)

These are the specific AI-design tells we refuse:

- No emojis anywhere. None.
- No `Inter` (vanilla). Use Inter Tight or migrate to Geist / Satoshi / Cabinet.
- No generic serifs (Times, Georgia, Garamond, Palatino, Bodoni for body).
- No pure `#000`. Off-Black Ink `#0A0A0A` only.
- No purple / blue neon / synthetic accent gradients.
- No outer-glow shadows on buttons or cards.
- No saturated > 80% accents.
- No 3-column equal-card feature row.
- No "Scroll to explore" / bouncy chevrons / arrow-down filler in the hero.
- No em dashes in user-facing copy. Use periods, commas, or middots (`·`).
- No cheap meta-labels: "SECTION 01", "QUESTION 05", "ABOUT US". Use noun phrases — "The Story", "The Menu", "The Barbers".
- No round number lies: `99.99%`, `50% off`, `100k+`. We say `21`, `04`, `5.0★`, `120k`.
- No AI copywriting: "Elevate", "Seamless", "Unleash", "Next-Gen", "Curated journey".
- No `John Doe` / `Acme` / `Lorem ipsum`. Use Eddie / Marco / Luis / Tony — real first names.
- No broken Unsplash URLs without health check.
- No centered headings outside the hero. (Hero is the deliberate exception.)
- No floating cursor-following preview images on hover (we tried, removed — felt off-putting).
- No giant section labels just to fill space.
- No iOS-Safari-breaking `100vh`.
- No "click here" link text.

---

## 10. Voice & Copy

- Heritage barbershop, Bergenfield local, second-generation owner.
- Short declarative sentences. Periods over em-dashes.
- No marketing verbs. We don't *elevate* anything. We give haircuts.
- Bilingual EN / ES — every visible string ships in both.
- Numbers spoken as numerals: "21 years", "Four chairs", "120k cuts".
- Eyebrows are noun phrases: *The Story · The Menu · The Barbers · The Work · The Word · The Visit*.

---

## 11. Localization

- Single context provider (`useI18n`) with `EN | ES` toggle, persisted in `localStorage` under `ms-lang`.
- Every visible string lives in `src/lib/i18n.tsx` — no hard-coded strings in components.
- Switching language re-runs the reveal observer so newly-rendered content animates in cleanly.
- ES copy is full translation (not auto-translated stub). Day names, day-of-week abbreviations, and meta strings all localized.

---

## 12. Source-of-Truth References

When generating new screens for this project, point Stitch at:
- `src/index.css` — full token + animation keyframe library
- `tailwind.config.js` — `ink`, `bone`, `wine` color scales + font families + custom keyframes
- `src/components/Logo.tsx` — animatable badge with `.logo-bg / .logo-stroke-outer / .logo-rule-top / .logo-crest / .logo-main` part classes
- `src/components/LoadingScreen.tsx` — full-screen build sequence
- `src/components/Hero.tsx` — centered-wordmark + video + GSAP cascade pattern
- `src/components/Services.tsx` — cork bulletin pattern
- `src/lib/i18n.tsx` — every string and the bilingual contract

This document supersedes any Stitch default and any cached AI-design heuristic.
