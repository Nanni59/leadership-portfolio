# Asset manifest

Every visual asset used by this site, with its source and licence. Nothing is
loaded from a third-party CDN or an unstable remote URL, and nothing is
AI-generated or scraped from an icon marketplace.

## Editorial illustrations — seven, inline in `index.html`

One family, one drawing style: single-weight ink line (2.5px, round caps and
joins) laid over one flat accent shape in either luminous yellow or ultramarine.
No gradients, no third colour, no filled figures.

| Illustration | Where | Accent |
|---|---|---|
| Systems — three linked nodes | cover cluster card | yellow |
| Technology — monitor and cursor | cover cluster card | ultramarine |
| Collaboration — three figures at a table | cover cluster card | yellow |
| Growth — ascending stair and arrow | cover cluster card | ultramarine |
| Foundation — stacked blocks and a set square | Chapter I transition | yellow |
| Practice — gear and wrench | Chapter II transition | ultramarine |
| Direction — signpost, path and sun | Chapter III transition | yellow |

**Why inline rather than a sprite:** each of the seven appears exactly once, and
inlining lets the stylesheet reach the accent shapes. That matters for print,
where `.il .ac-y` and `.il .ac-b` are hidden so the illustrations print as pure
line art instead of flooding a page with yellow.

**Editing one:** the ink lines live inside `<g class="ln">` and take their colour
from `currentColor`. The accent shape is a single element with `class="ac-y"` or
`class="ac-b"`, drawn first so it sits behind. All seven use a 220×170 viewBox.

## Functional icons — `assets/icons/`

Nine small icons for labels only, inlined once as a `<symbol>` sprite and
referenced with `<use>`.

| File | Used for | Sprite id |
|---|---|---|
| `target.svg` | §06 Planning | `#i-target` |
| `layers.svg` | §06 Organizing | `#i-layers` |
| `users.svg` | §06 Leading | `#i-users` |
| `gauge.svg` | §06 Controlling | `#i-gauge` |
| `calendar.svg` | §04 Immediate goal | `#i-calendar` |
| `compass.svg` | §04 Medium-range goal | `#i-compass` |
| `cap.svg` | §04 Long-range goal | `#i-cap` |
| `arrow.svg` | §03 local → wider impact path | `#i-arrow` |
| `image.svg` | portrait slot on the cover | `#i-image` |

24×24 viewBox, 1.5px stroke, outline only, `currentColor`. The files here are the
editable source; if you change one, copy the paths back into the sprite in
`index.html`.

## Source and licence — illustrations and icons

Original work, drawn for this project. No third-party icon library, no
AI-generated asset, nothing requiring attribution. If a marker asks, they are
yours.

## Photographs — `assets/`

| File | Status | Used for |
|---|---|---|
| `portrait.jpg` | **Required, not yet supplied** | front card of the cover cluster. Portrait crop, 4:5, 800px wide or more. |
| `idol.jpg` | Optional | §07. Square, 600px or more. |

Neither is referenced by an `<img>` tag, so there are no broken images and no
404s. `index.html` carries a comment beside each slot with the exact tag to paste
in.

**§07 needs no photograph.** The initials card is a finished editorial treatment,
not a placeholder — the section reads as complete without an image. Add one only
if you want to, and if you do, use an NVIDIA corporate image. Do not use an
uncredited photograph on a document that carries a Works Cited page.

**The cover portrait is different.** The assignment requires a photograph of you,
so that slot does need filling. It sits as the front card of the cluster, which
means the cover composition already works — dropping the photo in completes it
rather than rescuing it.

## Fonts

| Family | Job |
|---|---|
| Anton | the name, section numbers, chapter numerals, section and card titles |
| Instrument Serif | reflective text only — the philosophy statement, the Laozi quotation, the vision and mission statements |
| Inter | body copy, labels, navigation, everything read at length |

All three from Google Fonts under the SIL Open Font License 1.1. These are the
only external requests the page makes.
