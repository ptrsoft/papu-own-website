# CRA -> Vite Migration — Verification

Mechanical build-tooling migration of `papu-own-website` from Create React App
(react-scripts 5) to Vite, mirroring the conventions already used by
`ptr-website`. No application source under `src/` was modified except for the
entry file swap. The `treat-js-as-jsx` Vite plugin lets all existing `.js`
component files keep their extensions and contents unchanged.

## Files created
- `vite.config.js` — js-as-jsx pre-plugin (regex `/\/src\/.*\.js$/`,
  esbuild loader `jsx`, jsx `automatic`), `@vitejs/plugin-react`, `@ -> ./src`
  alias, extensions `[.js,.jsx,.ts,.tsx,.json]`, `optimizeDeps` js->jsx loader,
  server `host: "::"` port 3000, `build.outDir: "dist"`.
- `index.html` (root) — converted from `public/index.html`: `%PUBLIC_URL%`
  removed in favor of root-absolute paths; FDE `<title>` and description meta
  kept verbatim; `banner.js` kept as `/banner.js`; added `<div id="root">` and
  `<script type="module" src="/src/main.jsx">`; `<noscript>` kept.
- `src/main.jsx` — from old `src/index.js`: bootstrap CSS import,
  `./assets/scss/styles.scss` import, `App` import, `createRoot` + StrictMode
  render. `reportWebVitals` import/call removed.
- `VERIFICATION.md` — this file.

## Files deleted
- `public/index.html` (stale CRA template with `%PUBLIC_URL%`)
- `src/index.js`
- `src/reportWebVitals.js`
- `src/App.test.js`
- `src/setupTests.js`

## Files modified
- `package.json` — added `"type": "module"`; scripts now `dev`/`build`/`preview`
  (vite); removed `react-scripts`, `web-vitals`, `@testing-library/jest-dom`,
  `@testing-library/react`, `@testing-library/user-event`, `sass-loader`;
  removed `eslintConfig` and `browserslist` blocks. Added devDeps
  `vite ^5.4.11`, `@vitejs/plugin-react ^4.3.4`. Kept runtime deps bootstrap,
  react-bootstrap, react-calendly, react, react-dom, react-router,
  react-router-dom, react-slick, sass. Kept `"private": true` and name.
- `.gitignore` — added `/dist`.

## Commands run and results
- `npm install` -> exit 0. "added 14 packages, removed 1468 packages, changed
  26 packages, and audited 120 packages". Only audit warnings (14
  vulnerabilities) — no peer-dep errors aborting install.
- `npm run build` (vite build) -> exit 0. "✓ 431 modules transformed."
  "✓ built in 15.13s". Emitted `dist/` with:
  - `dist/index.html` 0.98 kB
  - `dist/assets/index-Bho6sK5o.css` 278.52 kB (gzip 42.65 kB)
  - `dist/assets/index-BzHGNe4i.js` 368.16 kB (gzip 117.38 kB)
  - plus hashed image assets.
  SCSS deprecation warnings (nested-rule ordering in `home.scss`) are
  pre-existing in the source and are non-fatal; they were not introduced by
  this migration and no application source was changed to address them.

## Post-build checks
- `dist/index.html` references the bundled module `/assets/index-BzHGNe4i.js`
  (no `%PUBLIC_URL%`), and `<title>` is
  "Papu Bhattacharya — Forward Deployed Engineer (FDE)".
- Present: root `index.html`, `vite.config.js`, `src/main.jsx`.
- Gone: `public/index.html`, `src/index.js`, `src/reportWebVitals.js`,
  `src/App.test.js`, `src/setupTests.js`.
