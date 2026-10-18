# FDE rebrand of the personal portfolio site

Rebrands the Create React App portfolio at `papu-own-website` from a DevOps identity to a Forward Deployed Engineer (FDE) identity. The change is content and asset only — hero copy, portrait, the portfolio section, service/experience/testimonial copy, and site metadata — with no new dependencies, no TypeScript, and no routing changes. The portfolio section is the one structural rewrite: the old DevOps items that opened detail-page modals are replaced by a react-slick slider of 8 Nexus case-study images, each opening a simple lightbox Modal. Eight PNGs were copied into `src/assets/img/case-studies/` from `nexus-website` (read-only source), and the hero now points at the pre-existing `my-photo.png`.

Watch for: nothing blocking. The `nexus-website` repo shows two deleted top-level zip archives (`FDE-Training.zip`, `NOCSense.zip`) that are unrelated to this task's read-only copy and out of scope (possible). The hero quote and FDE positioning string are repeated verbatim across hero/footer/meta, which is intentional messaging consistency, not a defect (confirmed).

**Verdict**: APPROVED

## High-level view

The portfolio rewrite is the only part that changes structure. It drops the three `../../Portfolio/*` detail-page imports and their per-card modals in favor of a module-level array of 8 case studies mapped into the existing `services-box` card markup, with a single `xl`/`centered` Modal that enlarges whichever card was clicked. The `id="portfolio"` anchor, the react-slick `settings` object with its responsive breakpoints, and the reused SCSS classes are all preserved, so header/footer anchor links and the visual language stay intact.

Every other file is a text swap. Hero title becomes "Forward Deployed Engineer (FDE)", the quote becomes the FDE positioning line, the portrait import flips from `main-papu-sir.png` to `my-photo.png` while keeping the `MainPapuSir` identifier so the JSX usage is untouched. Services keeps all three cards, their image imports, modal structure, state handlers, and routes — only the display copy moves to AI/FDE themes. Experience, why-hire, and testimonials reword DevOps copy to AI framing while keeping company names, dates, metrics, author names, roles, and ratings. Header/Footer alt text and the footer blurb, plus `index.html` title/description and `manifest.json` name, all move to FDE wording with nav targets unchanged.

The asset side is clean: 8 case-study PNGs are present locally and imported from the local folder (not from `nexus-website`), `my-photo.png` is referenced and present, and no `main-papu-sir.png` reference survives in `src/`. The build evidence (`npm run build`, exit 0, "Compiled with warnings", new title present in `build/index.html`) is recorded in the plan file and was not re-run.

<details>
<summary>Issues (1)</summary>

1. **Unrelated deletions in nexus-website** — the `nexus-website` working tree shows two deleted top-level zips (`FDE-Training.zip`, `NOCSense.zip`); they are not touched by this task and the `src/assets/case-studies/` source is intact, so this is out of scope but worth noting to the author (possible).

</details>

<details>
<summary>Details</summary>

### Portfolio section: detail-page modals replaced by an image lightbox

The old `MyPortfolio` imported `SassAutomation`, `MicroservicesTransformation`, and `SREFrameworkDevelopment` from `../../Portfolio/*` and wrapped each in its own modal with separate `*ModalShow` state flags. The rewrite removes all of that. A module-level `caseStudies` array holds the 8 entries with the exact titles and image bindings the plan specified, in order (RevSense/callsense, Econet/econet-alarm-management, Passive Network/telco-noc-passive-network, Reliance Jio/reliance-jio, Toyota/toyota, MedFusion/medfusion, Indian Defense/indian-defense-dr, Indian Meteorology/indian-meteorology). State collapses to a single `selected`, and the slider `.map()`s the array into the existing `services-box`/`name`/`image`/`safe-img` markup. Clicking a card or its arrow button sets `selected`; one `Modal` (`size="xl"`, `centered`, `show={selected !== null}`) renders the enlarged image with a Close button.

No dead imports survive this rewrite — `grep` for `../../Portfolio/` in the file returns nothing, and the old portfolio image imports are gone. The 8 imports resolve to `src/assets/img/case-studies/*.png`, which is the local copied folder, not the `nexus-website` path. `id="portfolio"` is retained so the header/footer `#portfolio` anchors still land here, and the react-slick `settings` (3 slides plus 992/767/568 breakpoints) are unchanged.

### Hero: title, quote, portrait, experience label

The portrait import swaps `main-papu-sir.png` for `my-photo.png` while keeping the `MainPapuSir` identifier. `my-photo.png` is present (1.6 MB) and no `main-papu-sir.png` reference remains anywhere in `src/`. One easy-to-mistake point: the separate `AnimateVector` import still points at `main-papu-sir-animate.png`, which is a distinct, still-present asset the plan deliberately left alone — not a stale reference. The `<h2>` trailing line reads "Forward Deployed Engineer (FDE)", the active quote is the single FDE positioning line (the old commented-out line was removed, so there is no double text), and the `25 Years` label's `experince` div now reads "Turning business problems into production-grade AI" with its wrapper and `style` intact.

### Services, experience, testimonials, metadata: copy-only swaps

Services keeps all three cards and their modals; only display strings change (card names to "Applied AI Solutioning", "GenAI / LLM Systems in Production", "AI for Operations & Reliability", plus matching modal headings, intros, list items, and accelerator text). The image imports (`MigrationAndModernization`, `CloudAutiomation`, `SRE`) are still imported and still referenced at the card `src` attributes, so nothing went dead, and the diff touches no `onClick`/state/`settings`/route code.

Experience keeps the four company blocks, dates, titles, and metrics while rewording to AI/FDE framing. Testimonials reword the heading intro and the six quote bodies; the diff shows no change to the `<strong>` author names, `<span>` roles, or the `5.0` ratings, matching the "no fabricated endorsements" constraint. Header (3 logo `alt`s) and Footer (1 `alt` plus the about-text blurb) move to FDE wording with every `to=`/`href=`/anchor unchanged. `index.html` title and meta description and `manifest.json` short_name/name are updated to the FDE identity.

### Build and scope verification

The build evidence lives in the plan file: `npm run build` run from the project root, exit 0, "Compiled with warnings" with only pre-existing ESLint `no-unused-vars` / `jsx-no-target-blank` warnings and no module-not-found or failed-to-compile errors, and `build/index.html` confirmed to carry the new title. Per the review instructions this was not re-run. A missing import or missing case-study file would have broken this CRA build, so the clean compile corroborates the import/asset wiring checked above.

On scope: the 8 source PNGs under `nexus-website/src/assets/case-studies/` are all still present and unmodified, consistent with a read-only copy. The `nexus-website` working tree does show two deleted top-level zip archives (`FDE-Training.zip`, `NOCSense.zip`); these are unrelated to the case-study copy, are not part of this task, and don't affect the rebrand — flagged only so the author is aware they're sitting uncommitted in that repo.

</details>

<details>
<summary>Files changed</summary>

- `public/index.html` — title and meta description to FDE positioning.
- `public/manifest.json` — short_name/name to Papu Bhattacharya / FDE.
- `src/components/Header/index.js` — three logo `alt` strings to FDE; nav unchanged.
- `src/components/Footer/index.js` — logo `alt` and about-text blurb to FDE; links unchanged.
- `src/pages/Home/MainBanner/index.js` — hero title, quote, experience label, portrait import to `my-photo.png`.
- `src/pages/Home/MyPortfolio/index.js` — rewritten to an 8-item case-study slider with a single image-lightbox Modal; old detail-page and portfolio image imports removed.
- `src/pages/Home/MyServices/index.js` — three card titles plus modal copy to AI/FDE; imports/structure/routes unchanged.
- `src/pages/Home/MyWorkExperince/index.js` — descriptions reworded to AI/FDE; names/dates/metrics unchanged.
- `src/pages/Home/WhyHireMe/index.js` — why-hire paragraph reworded; stat counts unchanged.
- `src/pages/Home/Testimonials/index.js` — heading intro and six quote bodies reworded; author names/roles/ratings unchanged.
- `src/assets/img/case-studies/*.png` (8 files) — copied from nexus-website.
- `src/assets/img/my-photo.png` — new hero portrait (referenced by MainBanner).

Full diff: `git diff origin/main` from `c:\mycode\nexus\website\papu-own-website`.

</details>
