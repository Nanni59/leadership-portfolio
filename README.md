# Leadership Portfolio — "The Leadership Operating System"

Static site for the BOH4M Business Leadership culminating portfolio. No framework,
no build step, no dependencies except Google Fonts. Deploys to GitHub Pages by
pushing files.

```
index.html            all markup, all content
styles.css            tokens, layouts, print stylesheet
script.js             nav highlighting and the dev word counter, nothing else
assets/icons/         nine Chunk interface icons (used as CSS masks)
assets/illustrations/ eight pictograms, one per compositional slot
ASSETS.md             asset manifest: authors, licences, source URLs
CONTENT-CHECKLIST.md  tick these off before submitting
.nojekyll             stops GitHub Pages running Jekyll on the files
```

## What still needs you

Everything else is written and in place. These are the open items:

```bash
grep -n "OUTSTANDING" index.html
```

| Item | Where |
|---|---|
| Nine theme lines | one under each section heading, `[theme line]` |
| Cover tagline | `[one-line tagline]` |
| Submission date | `[date]` |
| `assets/portrait.webp` | supplied |
| `assets/idol.jpg` | optional — see ASSETS.md before choosing an image |
| Three prose passes | search `PENDING YOUR EDIT` |
| Laozi edition details | Works Cited |

To find every remaining placeholder:

```bash
grep -n "\[.*\]" index.html
```

That should come back empty before you submit.

## The visual system

**An editorial canvas with a dark rail.** Warm canvas `#F6F4EE` carries the whole
portfolio, over a 32px square grid, a light local grain, one large yellow glow
behind the cover, and a thin inset page frame on screens above 1024px. The
navigation is a dark ink rail bleeding to the left viewport edge. Exactly one
section — the Laozi quotation — inverts to a full ink field.

**Colour.** Ink `#0B0E1D` for text, `#5D626D` for secondary, `#D9DCDF` for borders,
white for raised surfaces. Luminous yellow `#FFE34F` for the cover glow, the
active nav indicator and the MBTI badge. Ultramarine `#5367FF` for large numerals
and icons; anything small switches to `#3B4FE0`, because the lighter value only
reaches 4:1 on canvas and fails at body size. One radius scale (6/12/18px) and
one shadow recipe across the whole page.

**Type, three families with three jobs.**

| Family | Job |
|---|---|
| Anton | the name, section numbers, chapter numerals, all titles |
| Instrument Serif | reflective text *only* — philosophy statement, the quotation, vision and mission |
| Inter | body copy, labels, navigation |

**Illustration.** Eight colourful pictograms from one SVG Repo collection, each
used once at 140–220px: four on the cover cluster, one per chapter transition,
one beside the employer mark. Nine Chunk interface icons do label work at 20px,
implemented as CSS masks so they inherit `currentColor`. Both families are stored
locally and credited in the footer — see ASSETS.md.

**No panels.** Sections sit directly on the canvas, separated by rules and space
rather than repeated rounded cards. Cards appear once, in the cover cluster,
which is what makes them read as a signature rather than a template.

**Motion.** Two patterns only: a staggered entrance for the five cover cards
(opacity and transform, so no layout shifts), and the cover cluster spreading on
hover or keyboard focus alongside the nav indicator tracking your scroll. No
reveal-on-scroll anywhere. Everything is disabled under `prefers-reduced-motion`.

## Section layouts

| Component | Layout | Where |
|---|---|---|
| Cover | enormous condensed name, five-card overlapping cluster, metadata strip | `COVER` |
| **Chapter I — Foundation** | illustration-led transition | `CHAPTER I` |
| 01 Philosophy | serif manifesto + three ruled evidence columns | `01 -` |
| 02 Quote | full ink field, quotation as centrepiece | `02 -` |
| 03 Vision & Mission | two serif statements joined by a directional path | `03 -` |
| **Chapter II — Practice** | illustration-led transition, flipped | `CHAPTER II` |
| 04 Goals | three-stage timeline on a yellow rule | `04 -` |
| 05 Development | reading column, three numbered stages | `05 -` |
| 06 Management Skills | four bordered quadrants, one icon each | `06 -` |
| **Chapter III — Direction** | illustration-led transition | `CHAPTER III` |
| 07 Leader Idol | case study, initials card + prose | `07 -` |
| 08 Personality | yellow badge, prose, numbered career list | `08 -` |
| 09 Ideal Employer | company mark, three stakeholder pillars | `09 -` |
| Works Cited | quiet, hanging indents | `WORKS CITED` |

Headings run h1 → h2 (chapters, Works Cited) → h3 (the nine components) → h4 → h5
with no skipped levels, so the chapter structure is real document structure, not
just a visual divider.

### Adding the portrait

The portrait is the front card of the cover cluster and is now in place:

```html
<img class="hcard__img" src="assets/portrait.webp"
     alt="Muhammad Ibrahim Sameer, in a dark suit jacket over a checked shirt."
     width="720" height="900">
```

It is a 4:5 cutout on a transparent background, which is why it sits directly
on the dark card. Replacing it means matching that ratio, or the card will
crop it.

§07 needs no photograph — the initials card is a finished treatment. See
ASSETS.md before adding one.

### Adding a component to §06

Copy one `<article class="item">` block inside the relevant `<section
class="quadrant">`, including its numeral span. Quadrants stretch to fit, so
there is no fixed capacity — but add one to every function if you add one
anywhere, so the four stay balanced. That is also what the rubric rewards.

## Checking §09's word count

Open the page with `?dev` on the end of the URL:

```
index.html?dev
```

A counter appears under the company name showing the count and the target,
inverting to ink-on-yellow when you fall outside 250–500. Bracketed placeholders
and the three structural pillar labels are excluded, so it counts only your
prose. Currently **426 words**.

Without `?dev` the counter does not render at all, so it cannot appear in the
graded version or in front of an employer.

## After the grade comes back

The cover carries your instructor's name and the submission date. That belongs
there for grading, but this URL is meant to outlive the course. Two ways to take
it off:

1. **Delete it.** In `index.html`, remove everything between the `SUBMISSION
   BLOCK` comment and `END SUBMISSION BLOCK`. This is the real removal.
2. **Switch it off.** Change `<body data-mode="submission">` to
   `<body data-mode="public">`. One edit, reversible, but the text stays in the
   page source and in the repository history.

## Printing to PDF

The print stylesheet is the backup submission format, and it does real work here.
The grid, grain, glow and page frame all switch off, the ink quotation panel and
every tinted surface go to white, the decorative card overlap flattens into a
plain row, and the icons follow their text to solid black.

Ctrl+P in Chrome or Edge, destination *Save as PDF*, background graphics **off**,
margins default. The nav and word counter are hidden, the cover takes its own
page, each chapter starts a new page, and no heading is left stranded from the
paragraph beneath it.

Browsers do not support CSS page numbers, so if you need them, turn on *Headers
and footers* in the print dialog.

## Deploying to GitHub Pages

The repository is already created and pushed. To turn on Pages:

1. Repository on GitHub → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)** → **Save**

Every later push updates it:

```bash
git add -A && git commit -m "Add theme lines" && git push
```

## Editing locally

Open `index.html` in a browser directly — no server needed. If you want one:

```bash
python -m http.server 8000
```

## Accessibility and support notes

- Works with JavaScript disabled. JS only highlights the current nav item, runs
  the reveals, and shows the dev counter; it never renders content.
- Nothing is hidden behind an interaction. Every word is visible to a marker
  scrolling the page and to the printed PDF.
- Keyboard focus is visible on every link, and a skip link comes first in the tab
  order.
- Respects `prefers-reduced-motion` — reveals, transitions, and smooth scrolling
  all switch off.
- Responsive down to 360px with no horizontal scrolling. The section index
  becomes a horizontal bar under 1024px.
- Body text on both dark and paper surfaces clears WCAG AA.
