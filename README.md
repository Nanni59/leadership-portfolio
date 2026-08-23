# Leadership Portfolio — "The Leadership Operating System"

Static site for the BOH4M Business Leadership culminating portfolio. No framework,
no build step, no dependencies except Google Fonts. Deploys to GitHub Pages by
pushing files.

```
index.html            all markup, all content, the icon sprite
styles.css            tokens, layouts, print stylesheet
script.js             nav highlighting, entrance reveals, dev word counter
assets/icons/         nine original SVG icons (source files)
ASSETS.md             asset manifest, licences, and the two missing photographs
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
| `assets/portrait.jpg` | required by the assignment |
| `assets/idol.jpg` | optional — see ASSETS.md before choosing an image |
| Three prose passes | search `PENDING YOUR EDIT` |
| Laozi edition details | Works Cited |

To find every remaining placeholder:

```bash
grep -n "\[.*\]" index.html
```

That should come back empty before you submit.

## The visual system

**Surfaces.** The page sits on deep ink `#08111F` with a faint 32px blueprint
grid. Long-form reading happens on warm paper panels (`.panel`, `#F4F1EA`) inset
into that dark field. Sections alternate deliberately — dark manifesto, dark
quote break, paper reading panels, dark quadrants — so the page never repeats one
template eleven times.

**Colour.** Cobalt `#6C7CFF` is the primary accent on dark; on paper it deepens to
`#3B49C9` so body-size text still clears contrast requirements. Warm orange
`#FF8A3D` is the signal colour and appears only in three places: the active nav
indicator, the §06 component numerals, and the §09 rule under the company name.

**Type.** Instrument Serif for display — the cover name, section titles, the
manifesto, the pull quote, stage markers. Inter for everything you actually read
and every interface label. Body copy holds 60–70 characters per line.

**Icons.** Nine original thin-line SVGs, inlined once as a `<symbol>` sprite at
the top of `index.html` and referenced with `<use>`. Source files are in
`assets/icons/`. See ASSETS.md — including why the licence position is clean.

**Motion.** Entrance reveals of 16px over 380ms, once per element, plus a 3px card
lift on hover and the animated nav indicator. Everything is gated behind
`prefers-reduced-motion`, and behind a `.js` class so nothing is hidden if the
script fails. A 3-second failsafe reveals everything unconditionally.

## Section layouts

| Component | Layout | Where |
|---|---|---|
| Cover | dark two-column hero, portrait right, metadata strip below | `COVER` |
| 01 Philosophy | oversized manifesto + three numbered evidence cards | `01 -` |
| 02 Quote | full-bleed dark break, quote as centrepiece | `02 -` |
| 03 Vision & Mission | two asymmetric cards joined by a directional path | `03 -` |
| 04 Goals | three-stage timeline with icons | `04 -` |
| 05 Development | paper reading column, three visual stages | `05 -` |
| 06 Management Skills | four quadrants, one icon each, three items inside | `06 -` |
| 07 Leader Idol | editorial case study, image aside + prose | `07 -` |
| 08 Personality | badge, prose, five career cards with chip titles | `08 -` |
| 09 Ideal Employer | company mark, three stakeholder pillars | `09 -` |
| Works Cited | quiet paper panel, hanging indents | `WORKS CITED` |

### Adding the photographs

Neither image is referenced by an `<img>` tag yet, so there are no broken images
and no console 404s. Each slot shows a designed placeholder naming the file it
wants. Beside each one is a comment with the exact tag to paste in:

```html
<img class="media__img" src="assets/portrait.jpg"
     alt="[describe the photo in a few words]" width="800" height="1000">
```

Delete the `<div class="media">…</div>` block, paste that in, and write the alt
text. Read the licence note in ASSETS.md before choosing an image for §07.

### Adding a component to §06

Copy one `<article class="item">` block inside the relevant `<section
class="quadrant">`, including its numeral span. Quadrants stretch to fit, so
unlike the previous layout there is no fixed capacity — but add one to every
function if you add one anywhere, so the four stay balanced. That is also what
the rubric rewards.

## Checking §09's word count

Open the page with `?dev` on the end of the URL:

```
index.html?dev
```

A counter appears under the company name showing the count and the target,
turning orange when you fall outside 250–500. Bracketed placeholders and the
three structural pillar labels are excluded, so it counts only your prose.
Currently **426 words**.

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

The print stylesheet is the backup submission format, and it does real work here:
the dark design collapses entirely to white paper with hairline rules, because a
dark page is unreadable printed and ruinous on toner.

Ctrl+P in Chrome or Edge, destination *Save as PDF*, background graphics **off**,
margins default. The nav and word counter are hidden, the cover takes its own
page, entrance reveals are forced visible, and no card, timeline stage, quadrant
item, career card, or Works Cited entry can break across a page.

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
