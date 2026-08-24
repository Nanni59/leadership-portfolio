# Asset manifest

Every visual asset used by this site, with its author, licence and source URL.
All files are stored locally in `assets/` — the published site makes no runtime
request to SVG Repo or any other asset host.

**None of these assets are original to this project.** The two families below
were downloaded from SVG Repo and recoloured to the portfolio palette. If a
marker asks about the artwork, the credits on this page are the answer.

---

## Pictogram illustrations — `assets/illustrations/`

Collection: [Business And Accounting Vectors](https://www.svgrepo.com/collection/business-and-accounting-vectors/)
Author: [inipagi studio](https://www.svgrepo.com/author/inipagi%20studio/)
Licence: **CC Attribution** — credit is required and is printed in the site footer.
Modification: original cyan/coral/mint colours remapped to `#5367FF`, `#3B4FE0`,
`#FFE34F`, `#0B0E1D`, `#F6F4EE` and pale tints of those.

| File | Where it appears | Source |
|---|---|---|
| `networking.svg` | cover cluster — Systems | https://www.svgrepo.com/svg/417129/networking |
| `checklist.svg` | cover cluster — Technology | https://www.svgrepo.com/svg/417114/checklist |
| `team-work.svg` | cover cluster — Collaboration | https://www.svgrepo.com/svg/417142/team-work |
| `graph.svg` | cover cluster — Growth | https://www.svgrepo.com/svg/417122/graph |
| `diamond.svg` | Chapter I — Foundation | https://www.svgrepo.com/svg/417121/diamond |
| `idea.svg` | Chapter II — Practice | https://www.svgrepo.com/svg/417125/idea |
| `investment.svg` | Chapter III — Direction | https://www.svgrepo.com/svg/417127/investment |
| `pie-chart.svg` | §09 Ideal Employer — evidence | https://www.svgrepo.com/svg/417132/pie-chart |

### Required credit

This appears in the site footer and must stay there while the illustrations are
used:

> Illustrations by inipagi studio via SVG Repo, used under CC Attribution;
> colours adapted for this portfolio.

### Usage rules

Each of the eight is used **once**, at 140–220px, with a compositional job —
anchoring a cover card, balancing a chapter heading, or sitting beside the
employer mark. They are not scattered as decoration, and no other illustration
family is mixed in. All are marked `alt="" aria-hidden="true"`, because in every
case an adjacent heading or caption already carries the meaning.

The four cover pictograms load eagerly (they are above the fold); the four below
the fold use `loading="lazy"`.

---

## Functional icons — `assets/icons/`

Collection: [Chunk 16px Thick Interface Icons](https://www.svgrepo.com/collection/chunk-16px-thick-interface-icons/)
Author: Noah Jacobus
Licence: **Public Domain (PD)** as published by SVG Repo — no attribution
required, but the source is recorded here anyway.

| File | Used for | Source |
|---|---|---|
| `target.svg` | §06 Planning | https://www.svgrepo.com/svg/535678/target |
| `layers.svg` | §06 Organizing | https://www.svgrepo.com/svg/535467/layers |
| `users.svg` | §06 Leading | https://www.svgrepo.com/svg/535714/users |
| `gauge.svg` | §06 Controlling | https://www.svgrepo.com/svg/535407/gauge-high |
| `calendar.svg` | §04 Immediate goal | https://www.svgrepo.com/svg/535244/calendar |
| `compass.svg` | §04 Medium-range goal | https://www.svgrepo.com/svg/535327/compass |
| `education.svg` | §04 Long-range goal | https://www.svgrepo.com/svg/535223/book-open |
| `arrow-right.svg` | §03 vision → mission path | https://www.svgrepo.com/svg/535153/arrow-right |
| `image.svg` | cover portrait placeholder | https://www.svgrepo.com/svg/535454/image |

### How they are implemented

As **CSS masks**, not `<img>` and not filters:

```css
.i          { background-color: currentColor; mask: var(--icon) center/contain no-repeat; }
.i--target  { --icon: url("assets/icons/target.svg"); }
```

The packaged files are pre-filled `#5367FF`, but a mask only reads the alpha
channel, so that fill is irrelevant — each icon takes the colour of the text it
sits beside. That is what lets the same file render ultramarine on canvas, yellow
inside the dark portrait card, and solid black in print.

Rendered at 20px, inside the 18–24px band the collection is designed for. This is
the only functional icon family on the page.

---

## Photographs — `assets/`

| File | Status | Used for |
|---|---|---|
| `portrait.jpg` | **Required, not yet supplied** | front card of the cover cluster |
| `idol.jpg` | Optional | §07 |

Neither is referenced by an `<img>` tag, so there are no broken images and no
404s. `index.html` carries a comment beside each slot with the exact tag to paste
in.

**The cover portrait must stay a real photograph.** It is an assignment
requirement and an illustration cannot stand in for it. The slot is a clearly
marked placeholder naming the file it wants — honest about being unfinished
rather than disguised.

**§07 needs no photograph.** The initials card is a finished editorial treatment.
If you do add one, use an NVIDIA corporate image; do not use an uncredited
photograph on a document that carries a Works Cited page.

---

## Fonts

| Family | Job | Licence |
|---|---|---|
| Anton | name, section numbers, chapter numerals, titles | SIL OFL 1.1 |
| Instrument Serif | reflective text only — philosophy statement, the quotation, vision and mission | SIL OFL 1.1 |
| Inter | body copy, labels, navigation | SIL OFL 1.1 |

Served by Google Fonts. These are the only external requests the page makes.
