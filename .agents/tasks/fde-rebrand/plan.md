# Implementation Plan — FDE Rebrand of papu-own-website

Rebrand the Create React App portfolio at `c:\mycode\nexus\website\papu-own-website` from a DevOps identity to a Forward Deployed Engineer (FDE) identity. Content + asset changes only — class components, react-bootstrap, SCSS. No new dependencies, no TypeScript, no routing changes. All commands run from `c:\mycode\nexus\website\papu-own-website`.

## Facts confirmed during exploration
- CRA app; build command is `npm run build` (react-scripts 5.0.1). `node_modules` present. No `.kiro/steering`, no AGENTS.md/CONTRIBUTING.
- Home section order (`src/pages/Home/index.js`): MainBanner, MyServices, MyWorkExperince, WhyHireMe, MyPortfolio, Blogs, Testimonials, AwsomeProject. Keep this order.
- `MyPortfolio/index.js` and `MyServices/index.js` BOTH use the SCSS classes `services-container`, `services-box`, `services-inner`, `name`, `image`, `safe-img`, `safe-img-hover`, `heading` — these are the classes to reuse for the portfolio cards.
- `MyPortfolio/index.js` currently imports the detail-page components `SassAutomation`, `MicroservicesTransformation`, `SREFrameworkDevelopment` from `../../Portfolio/*` and wraps each in a Modal. These imports must be removed.
- New portrait `src/assets/img/my-photo.png` ALREADY EXISTS (1.6 MB). Do NOT create or copy it; only reference it.
- Source case-study PNGs confirmed present in `c:\mycode\nexus\website\nexus-website\src\assets\case-studies\`: callsense.png, econet-alarm-management.png, telco-noc-passive-network.png, reliance-jio.png, toyota.png, medfusion.png, indian-defense-dr.png, indian-meteorology.png. Target folder `src/assets/img/case-studies/` does NOT exist yet (the cp will create it).
- `App.js` routes for `/service/*` and `/portfolio/*` detail pages remain in place (left unused). Do NOT touch `App.js`.
- Decision: keep the portfolio lightbox simple — reuse the existing `react-slick` slider + `services-box` card markup, and open each image in a react-bootstrap `Modal` that shows just the enlarged image. This matches the existing visual language with minimal new SCSS and no dependency on the `Portfolio/*` detail pages. (Rationale: react-slick, react-bootstrap Modal, and the SCSS classes already exist and are already used in this exact component.)

---

- [ ] 1. Copy the 8 case-study PNGs into the personal site via a shell copy.
      Run this exact command (bash) from anywhere; it creates the target folder:
      `mkdir -p "c:/mycode/nexus/website/papu-own-website/src/assets/img/case-studies" && cp "c:/mycode/nexus/website/nexus-website/src/assets/case-studies/"{callsense,econet-alarm-management,telco-noc-passive-network,reliance-jio,toyota,medfusion,indian-defense-dr,indian-meteorology}.png "c:/mycode/nexus/website/papu-own-website/src/assets/img/case-studies/"`
      Files: creates `src/assets/img/case-studies/{callsense,econet-alarm-management,telco-noc-passive-network,reliance-jio,toyota,medfusion,indian-defense-dr,indian-meteorology}.png`
      Verify: `ls src/assets/img/case-studies/` lists exactly 8 .png files matching the names above. Never modify anything under nexus-website.

- [ ] 2. Update the Main banner hero in `src/pages/Home/MainBanner/index.js` — title, quote, experience label, and portrait import. Four edits in one file:
      (a) Change the portrait import line `import MainPapuSir from "../../../assets/img/main-papu-sir.png";` to `import MainPapuSir from "../../../assets/img/my-photo.png";` (keep the identifier name `MainPapuSir` so the `<img src={MainPapuSir} ...>` usage is unchanged). Leave the `AnimateVector` import (`main-papu-sir-animate.png`) as-is.
      (b) In the `<h2>`, change the text `I’m <span>Papu Bhattacharya</span>, <br /> DevOps Expert` so the trailing line reads `Forward Deployed Engineer (FDE)` instead of `DevOps Expert` (keep the `I’m <span>Papu Bhattacharya</span>, <br />` prefix and the `.heading-vector` block).
      (c) Replace the quote paragraph. The active `<p>` currently renders `Writing Open DevSecOps Tools/ Frameworks to do "More in Less with Cloud"`. Replace that text with: `I turn complex business problems into production-grade AI solutions with measurable business impact.` (Leave the commented-out `{/* ... */}` line alone or remove it; do not leave two active texts.)
      (d) In the `content-right` block, keep `<div className="years">25 Years</div>` unchanged and change the `experince` div text from `in DevOps Product Development` to `Turning business problems into production-grade AI` (keep it short so layout is intact; keep the surrounding div and its `style`).
      Files: `src/pages/Home/MainBanner/index.js`
      Verify: covered by the production build in step 8; after build, confirm no reference to `main-papu-sir.png` remains in this file and the hero text reads "Forward Deployed Engineer (FDE)".

- [ ] 3. Rewrite the Portfolio component `src/pages/Home/MyPortfolio/index.js` to show the 8 Nexus case studies as a react-slick slider of image cards, each opening a react-bootstrap Modal with the enlarged image. This is one cohesive rewrite of the active (non-commented) portion:
      - Remove the three detail-page imports (`SassAutomation`, `MicroservicesTransformation`, `SREFrameworkDevelopment` from `../../Portfolio/*`) and the three Modal classes (`SAASAutomationModal`, `MicrosoftTransmodal`, `SREFrameworkDevelopmentModal`) and their three `<...Modal>` usages and the three `*ModalShow` state flags/handlers. Also remove the now-unused image imports for the old portfolio (`MigrationAndModernization`, `CloudAutiomation`, `SRE`, `MicroservicesTransformationimg`, `SaasAuto`) and any other imports no longer referenced after the rewrite (`ServiceImage1`, `ServiceImage2` were already unused). Keep: `React, { Component }`, `Slider` from react-slick, `{ Container, Modal, Button }` from react-bootstrap, and the background/hover images actually rendered (`ServicesBgLeft`, `ServicesBgCenter`, `ServicesBgRight`, `SafeImage`, `SafeImageHover`). `Link` from react-router-dom may be dropped since cards no longer navigate.
      - Add 8 image imports from the new folder, e.g. `import RevSense from "../../../assets/img/case-studies/callsense.png";` and likewise `econet-alarm-management.png`, `telco-noc-passive-network.png`, `reliance-jio.png`, `toyota.png`, `medfusion.png`, `indian-defense-dr.png`, `indian-meteorology.png`.
      - Define a module-level array of the 8 `{ title, img }` entries using these exact titles in this order:
        1. "RevSense — AI-Powered Revenue Acceleration Platform" (callsense.png)
        2. "Econet Wireless — AI-Powered Alarm Management & NOC Intelligence" (econet-alarm-management.png)
        3. "Passive Network Detection & Automated Revenue Recovery" (telco-noc-passive-network.png)
        4. "Reliance Jio — Hyper-Scale Real-Time Network Monitoring" (reliance-jio.png)
        5. "Toyota Motor — Microservices & Hybrid Cloud Transformation" (toyota.png)
        6. "MedFusion Inc — End-to-End Cloud Resource Provisioning Automation" (medfusion.png)
        7. "Indian Defense — Lightweight Script-Based Disaster Recovery" (indian-defense-dr.png)
        8. "Indian Meteorology Department — Intelligent Satellite Data Staging" (indian-meteorology.png)
      - Component state: a single `{ selected: null }` (or `lightboxImg`/`show`) to track which case study is enlarged. Render the slider by `.map()`-ing the array into the existing `services-box` card markup (card title in `<div className="name">`, the case-study image inside `<div className="d-block image"><img .../></div>`); clicking the card or its arrow button sets `selected` to that entry.
      - Keep the heading block but set it to: `<h2>My <span>Portfolios</span></h2>` plus a short subheading paragraph `Selected AI case studies with measurable business impact` (use the existing `heading` wrapper so styling holds).
      - At the bottom render ONE react-bootstrap `Modal` (size `xl`, `centered`) that is shown when `selected` is set and renders just the enlarged image (`<img src={selected.img} alt={selected.title} style={{ width: "100%" }} />`) plus the existing `Modal.Footer` Close button that clears `selected`.
      - Keep `id="portfolio"` on the outer container (header/footer anchor links target `#portfolio`) and keep the react-slick `settings` object (3 slides + responsive breakpoints) intact.
      Files: `src/pages/Home/MyPortfolio/index.js`
      Verify: covered by step 8 build (an unused import or missing file would fail the CRA build). After build, confirm the file has no remaining `../../Portfolio/` import and no reference to the old portfolio images.

- [ ] 4. Rewrite the service copy in `src/pages/Home/MyServices/index.js` to AI/FDE offerings — display text only, same 3 cards, same modal structure, same image imports, same routes. Edits:
      - Card titles (the `<div className="name">` values) and their modal headings: change "Migration and Modernization" → "Applied AI Solutioning"; "Cloud Automation" → "GenAI / LLM Systems in Production"; "System Reliability Engineering" → "AI for Operations & Reliability". Update the matching modal `main-heading` text (e.g. `Microservices <span>Transformation in Cloud</span>` → `Applied <span>AI Solutioning</span>`, etc.) and the `alt` attributes to match.
      - Rewrite each modal's intro `<p>`, the `key services includes:` `<li>` items, and the `Accelerators` text to AI/FDE themes (e.g. for GenAI/LLM: RAG pipelines, LLM evaluation/guardrails, inference cost control; for AI Ops: anomaly detection, incident prediction, observability for ML). Keep the same number of list items so card/modal sizing is unaffected. Keep the top intro paragraph in the `heading` Row generic/AI-oriented.
      - Do NOT change image imports, variable names, `onClick`/state handlers, `settings`, or SCSS classes. Do NOT change `App.js` routes (they stay as-is; cards open modals, not routes).
      Files: `src/pages/Home/MyServices/index.js`
      Verify: covered by step 8 build. After build, confirm the three card names read the new AI titles and no "DevOps"/"Migration and Modernization" display text remains in this file.

- [ ] 5. Update DevOps-themed copy to FDE positioning in the experience, why-hire, and testimonials sections — text only, structure unchanged:
      - `src/pages/Home/MyWorkExperince/index.js`: keep all four company blocks, dates, and titles; reword the DevOps-centric descriptions to AI/FDE framing (e.g. CTO blurb: "led a 50+ engineer team building a cross-cloud AI/SRE platform…"; Trilogy: "product development and AI/solutions consulting"). Keep metrics and company names.
      - `src/pages/Home/WhyHireMe/index.js`: reword the `why-hire-text` `<p>` from the DevOps capex/opex sentence to an FDE sentence, e.g. "Consistently delivered production-grade AI solutions that turn complex business problems into measurable business impact." Keep the `100+ / 10+ / 50+` stat blocks and labels (or lightly retheme labels; keep counts).
      - `src/pages/Home/Testimonials/index.js`: keep every author `<strong>` name and `<span>` role EXACTLY as-is (do not fabricate or rename). Reword only the quote `contents` text and the heading intro `<p>` ("More with less in cloud") to be AI/FDE-themed and generic. Keep both sliders, images, ratings, and the `settings` object.
      Files: `src/pages/Home/MyWorkExperince/index.js`, `src/pages/Home/WhyHireMe/index.js`, `src/pages/Home/Testimonials/index.js`
      Verify: covered by step 8 build. After build, confirm author names in Testimonials are unchanged and the heading no longer says "More with less in cloud".

- [ ] 6. Update Header and Footer visible taglines in `src/components/Header/index.js` and `src/components/Footer/index.js` — text only, nav links unchanged:
      - Both files: change the logo `alt="I’m Papu Bhattacharya, DevOps Expert"` (Header has 3 occurrences across desktop/small-screen logos; Footer has 1) to `alt="Papu Bhattacharya — Forward Deployed Engineer (FDE)"`.
      - Footer `about-text` paragraph: replace the AWS/Kubernetes/DevOps/"More with Less in cloud" blurb with an FDE blurb, e.g. "Forward Deployed Engineer who turns complex business problems into production-grade AI solutions with measurable business impact." Keep contact details, nav links (`#services`, `#portfolio`, `#blogs`, github), and social links unchanged.
      - Do NOT change any `to=`/`href=` routes or anchor targets in either file.
      Files: `src/components/Header/index.js`, `src/components/Footer/index.js`
      Verify: covered by step 8 build. After build, confirm no "DevOps Expert" string remains in either file and nav anchors still point to `#services`/`#portfolio`.

- [ ] 7. Update site metadata in `public/index.html` and `public/manifest.json`:
      - `public/index.html`: change `<title>I’m Papu Bhattacharya, DevOps Expert</title>` to `<title>Papu Bhattacharya — Forward Deployed Engineer (FDE)</title>`, and change the `<meta name="description" content="Web site created using create-react-app" />` to `content="Papu Bhattacharya — Forward Deployed Engineer (FDE). I turn complex business problems into production-grade AI solutions with measurable business impact."`. Leave the `banner.js` script tag and favicon/manifest links untouched.
      - `public/manifest.json`: set `"short_name": "Papu Bhattacharya"` and `"name": "Papu Bhattacharya — Forward Deployed Engineer (FDE)"`. Leave icons/colors as-is.
      Files: `public/index.html`, `public/manifest.json`
      Verify: covered by step 8 build; after build, confirm `build/index.html` contains the new title/description.

- [ ] 8. Run the production build and confirm it compiles.
      Run from `c:\mycode\nexus\website\papu-own-website`: `npm run build`
      Files: none (verification step)
      Verify: build exits 0 with "Compiled successfully" (or "compiled with warnings" — pre-existing ESLint warnings are acceptable, but there must be NO module-not-found / failed-to-compile errors). If the build fails due to a missing dependency, REPORT it rather than adding/changing any dependency. A failed compile from a dropped/renamed import in steps 2–4 must be fixed in the offending file, not by altering the dependency set.

## Notes / assumptions
- The old `src/pages/Portfolio/*` and `src/pages/Service/*` detail pages and their `App.js` routes are intentionally LEFT in place (unused) to minimize risk; only `MyPortfolio` stops importing the Portfolio detail pages. Nothing else should start or stop importing them.
- Calendly `PopupWidget` and the Home section order stay exactly as they are.
- The `my-photo.png` import keeps the existing `MainPapuSir` identifier so no JSX usage changes are needed beyond the import line.

## Execution evidence (first iteration)

Build command run (from `c:\mycode\nexus\website\papu-own-website`): `npm run build`
Build result: SUCCESS — exit code 0, "Compiled with warnings" / "The build folder is ready to be deployed". No module-not-found or failed-to-compile errors. Warnings are all pre-existing ESLint `no-unused-vars` and `react/jsx-no-target-blank` warnings (unchanged from before this task, mostly in untouched `src/pages/Service/*` and `src/pages/Portfolio/*` detail pages, plus the pre-existing unused imports in `MyServices`). Built `build/index.html` confirmed to contain the new title "Papu Bhattacharya — Forward Deployed Engineer (FDE)".

Images copied (bash cp from nexus-website, folder created with mkdir -p) into `src/assets/img/case-studies/` (8 files, verified present):
callsense.png, econet-alarm-management.png, telco-noc-passive-network.png, reliance-jio.png, toyota.png, medfusion.png, indian-defense-dr.png, indian-meteorology.png.
Hero portrait: `src/assets/img/my-photo.png` (pre-existing, 1.6 MB) is now the imported hero image; `main-papu-sir.png` is no longer referenced anywhere in `src/`.

Files changed:
- `src/pages/Home/MainBanner/index.js` — title → "Forward Deployed Engineer (FDE)"; new positioning quote; experience label → "Turning business problems into production-grade AI"; portrait import → my-photo.png.
- `src/pages/Home/MyPortfolio/index.js` — rewritten to a react-slick slider of the 8 Nexus case studies, each opening a react-bootstrap Modal with the enlarged image; removed all `../../Portfolio/*` detail-page imports and old portfolio image imports; kept `id="portfolio"`; added subheading.
- `src/pages/Home/MyServices/index.js` — 3 card titles + 3 modal headings/intros/lists/accelerators reworded to AI/FDE (Applied AI Solutioning, GenAI / LLM Systems in Production, AI for Operations & Reliability); imports/variables/routes/structure unchanged.
- `src/pages/Home/MyWorkExperince/index.js` — DevOps-centric descriptions reworded to AI/FDE; names, dates, titles, metrics unchanged.
- `src/pages/Home/WhyHireMe/index.js` — why-hire paragraph reworded to FDE; stat blocks/counts unchanged.
- `src/pages/Home/Testimonials/index.js` — heading intro + 6 quote texts reworded to AI/FDE themed; all author names/roles/ratings unchanged.
- `src/components/Header/index.js` — logo alt text → FDE; nav links unchanged.
- `src/components/Footer/index.js` — logo alt text → FDE; about-text → FDE blurb; links/contact unchanged.
- `public/index.html` — title + meta description → FDE.
- `public/manifest.json` — short_name/name → Papu Bhattacharya / FDE.

Grep verification: no user-facing `DevOps` / `DevSecOps` strings and no `main-papu-sir.png` reference remain in `src/**/*.js`; `MyPortfolio/index.js` has no `../../Portfolio/` import.
