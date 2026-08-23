# Asset manifest

Every visual asset used by this site, with its source and licence. Nothing is
loaded from a third-party CDN or an unstable remote URL.

## Icons — `assets/icons/`

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
| `image.svg` | Designed placeholders for missing photographs | `#i-image` |

**Source and licence:** original work, drawn for this project. No third-party
icon library, no AI-generated asset, nothing requiring attribution. You can
state that the icons are your own if a marker asks.

**Family rules:** 24×24 viewBox, 1.5px stroke, round caps and joins, outline
only — no filled icons anywhere on the page. All use `currentColor`, so they
take the colour of whatever text they sit next to.

**How they render:** the nine icons are inlined once as a `<symbol>` sprite at
the top of `index.html` and referenced with `<svg><use href="#i-name"></svg>`.
That means one HTTP request instead of nine, correct recolouring, no JavaScript,
and they still print. The files in `assets/icons/` are the editable source — if
you change one, copy the paths back into the sprite in `index.html`.

**Adding an icon:** draw it on the same 24×24 grid at 1.5px stroke, save it
here, add a `<symbol>` to the sprite, and add a row to the table above.

## Photographs — `assets/`

| File | Status | Used for |
|---|---|---|
| `portrait.jpg` | **Required, not yet supplied** | Cover. Portrait crop, 4:5, 800px wide or more. |
| `idol.jpg` | Optional, not yet supplied | §07 Leader Idol. Square, 600px or more. |

Neither file is referenced by an `<img>` tag yet, so there are no broken images
and no 404s in the console. Each slot currently renders a designed placeholder
showing the required filename. `index.html` carries a comment beside each one
with the exact `<img>` tag to paste in once the file exists.

**Licence note for `idol.jpg`:** use an NVIDIA corporate image or leave the slot
empty. Do not use an uncredited photograph — a graded assignment with a Works
Cited page should not carry an unattributed image.

## Fonts

Instrument Serif and Inter, both served by Google Fonts under the SIL Open Font
License 1.1. These are the only external requests the page makes.
