# Leadership Portfolio — "Leading by Design"

Static site for the BOH4M Business Leadership culminating portfolio. No framework,
no build step, no dependencies except Google Fonts. Deploys to GitHub Pages by
pushing files.

```
index.html            all markup, all content markers
styles.css            tokens, layout, print stylesheet
script.js             nav highlighting + dev word counter (nothing else)
assets/               portrait.jpg, idol.jpg — you supply these
CONTENT-CHECKLIST.md  tick these off before submitting
.nojekyll             stops GitHub Pages running Jekyll on the files
```

## Adding content

Every place your writing goes is marked twice: an HTML comment saying exactly what
belongs there, and a square-bracket placeholder on the line below it.

```html
<!-- CONTENT: §1 philosophy statement - ONE sentence -->
<p class="lede">[philosophy statement]</p>
```

Replace the bracketed text. Leave the tag and its class alone — the classes carry
the layout. To find every remaining slot:

```bash
grep -n "CONTENT:" index.html
```

And to find placeholders you have not filled in yet:

```bash
grep -n "\[.*\]" index.html
```

That second command is the one to run right before submitting. It should come back
empty except for optional slots you deliberately deleted.

### Where each section lives

Search `index.html` for these banner comments:

| Component | Banner | Notes |
|---|---|---|
| Cover | `COVER` | name, photo, course, instructor, theme, tagline |
| 01 Leadership Philosophy | `01 - LEADERSHIP` | one-sentence statement, then 2–3 paragraphs |
| 02 Leadership Quote | `02 - LEADERSHIP QUOTE` | quote, attribution, then explanation |
| 03 Vision and Mission | `03 - VISION` | two statements side by side, then prose |
| 04 Goals and Plans | `04 - GOALS` | three cards: Immediate, Medium-range, Long-range |
| 05 Personal Leadership Development | `05 - PERSONAL` | continuous prose, add `<p>` freely |
| 06 Management Skills | `06 - MANAGEMENT SKILLS` | 4 groups × 3 components = 12 |
| 07 Leader Idol | `07 - LEADER IDOL` | image slot + prose with in-text citations |
| 08 Personality Traits | `08 - PERSONALITY` | INTJ-A badge, prose, 5 career cards |
| 09 Ideal Employer | `09 - IDEAL EMPLOYER` | company name + 250–500 words |
| Works Cited | `WORKS CITED` | MLA 9, alphabetical, hanging indent |

### The theme line

Every section has one slot directly under its heading:

```html
<!-- CONTENT: §3 theme line -->
<p class="section__theme">[theme line]</p>
```

Nine short lines, one per section, each saying how "Leading by Design" shows up in
that component. The assignment asks for the theme to run through the whole
portfolio, and this is the thread that carries it. Keep them to one line — they are
set in condensed caps and will look wrong at three lines.

### Images

Two files, both referenced but not included:

- `assets/portrait.jpg` — you on the cover. Portrait crop, 4:5, at least 800px wide.
- `assets/idol.jpg` — your leader idol's portrait or company logo. Square, at least 600px.

Until you add them the browser shows the alt text in a grey frame, which is a useful
reminder that they are missing. Write real alt text for both — it is marked as a
content slot.

### Repeating a block

Need a fourth component under Planning, or a sixth Works Cited entry? Copy one
existing block. For §06 that is a whole `<article class="component">…</article>`,
including its three comment markers. The grid handles the rest, though note that
each function group is designed for three components and a fourth will wrap onto a
second row.

## Checking §09's word count

The Ideal Employer section has a 250–500 word requirement. Open the page with `?dev`
on the end of the URL:

```
index.html?dev
```

A counter appears under the company name showing the current count and the target.
It turns burgundy when you are outside the range. Placeholders in square brackets
are not counted, so it reads 0 until you have written something real.

Without `?dev` the counter does not render at all, so it cannot appear in the graded
version or in front of an employer. There is nothing to remember to delete.

## After the grade comes back

The cover carries your instructor's name and the submission date. That belongs there
for grading, but this URL is meant to outlive the course. Two ways to take it off:

1. **Delete it.** In `index.html`, remove everything between the `SUBMISSION BLOCK`
   comment and `END SUBMISSION BLOCK`. This is the real removal.
2. **Switch it off.** Change `<body data-mode="submission">` to
   `<body data-mode="public">`. One edit, reversible, but the text stays in the page
   source and in the repository history.

Use option 2 if you might need to show the graded version again; use option 1 once
you are done with it.

## Printing to PDF

The print stylesheet is the backup submission format. Ctrl+P in Chrome or Edge,
destination *Save as PDF*, background graphics off, margins default. The nav, the
scroll cue, and the word counter are all hidden; the cover gets its own page; and
no goal card, component card, career card, or Works Cited entry can break across a
page.

Browsers do not support CSS page numbers, so if you need them, turn on
*Headers and footers* in the print dialog.

## Deploying to GitHub Pages

The repository is already created and pushed. To turn on Pages:

1. Go to the repository on GitHub → **Settings** → **Pages**
2. Under *Build and deployment*, set Source to **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)** → **Save**

The site goes live a minute or two later. Every later push updates it:

```bash
git add -A && git commit -m "Add section 06 content" && git push
```

## Editing locally

Open `index.html` in a browser directly — no server needed. Refresh to see changes.
If you want a local server anyway:

```bash
python -m http.server 8000
```

## Accessibility and support notes

- Works with JavaScript disabled. JS only highlights the current nav item and runs
  the dev counter; it never renders content.
- Keyboard focus is visible on every link, and a skip link comes first in the tab order.
- Respects `prefers-reduced-motion` — smooth scrolling and transitions switch off.
- Responsive down to 360px. The section index becomes a horizontal bar under 1024px.
- Text contrast is at least 7.5:1 everywhere against the page background.
