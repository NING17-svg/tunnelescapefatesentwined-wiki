# V4 game guide site template

V4 keeps the V3 route, locale, entity and deployment contracts. It upgrades reading, task-led home entry points and grouped navigation. Read [PAGE_DESIGN.md](PAGE_DESIGN.md) before assembling pages. The existing four shells and nine modules are composed by player task; no game-specific template fork is needed.

`npm run verify` runs typecheck, lint, and the static build. Site-specific content, SEO, and rendered-page checks belong to the current build task rather than permanent template tests. `prose.body`, steps, callouts and table cells accept Markdown; register images as local assets. `primaryNavigation[].children` enables a grouped navigation menu. Translate `ui.onThisPage` for launch locales.

## Game Guide Site Template

This is the V4-capable Next.js starting template for the draft Page Builder role. It provides
stable page shells, guide modules, configuration-driven locale routes, generic entity
pages, SEO rendering, and Cloudflare deployment wiring while leaving each
generated site responsible for its Guide Editor content, Page Builder assembly plan,
entity package, and traceable local assets.

The neutral theme and empty asset manifest are development fallbacks only. Page
Builder gives each game its own visual system and page assembly before local handoff.

## Stable Rendering Contract

Pages select one of four shells through their `presentation.shell` value:

- Home: the primary landing-page composition.
- Hub: a browsable collection or guide index.
- Content: a reading or reference page, with optional right rail.
- Workspace: a full-width layout boundary for a specialized feature.

The shell components live in `src/components/pages/`. Workspace does not provide
map, calculator, planner, or other tool logic; add that behavior as separate
feature code and render it inside the Workspace boundary.

`src/components/content/ModuleRenderer.tsx` supports nine guide module types:

- `prose`
- `entity-grid`
- `data-table`
- `steps`
- `recipes`
- `schedule`
- `comparison`
- `media-gallery`
- `callout`

## V3 Locale and Entity Contract

- Configure `primaryLocale` and `locales` in `src/data/site.ts`. The primary locale
  uses the root path; every additional locale uses one unique path prefix.
- Every `PageContent` record declares `translationKey`, `locale`, `routeKind`,
  `slug`, and the final `url`. Pages sharing a `translationKey` become hreflang
  alternates. Add locale-specific Header/Footer labels in `src/data/navigation.ts`.
- Add approved entity families to `src/data/entities.ts`. One base record set can
  serve multiple locales through family-level locale copy and optional localized
  record display overrides.
- Entity route patterns may contain `{locale}` and must contain `{slug}`. The
  template generates a generic Hub and detail page for each declared locale,
  including source links, relationships, and optional registered local images.
- Run `npm run routes:manifest` for a human-readable JSON route list, or
  `npm run routes:manifest -- --output route-manifest.json` for a machine-readable
  file that Page Builder and the launch Builder can compare with the page plan.

## Discovery and Review Contract

- The header search is fully static and lazy-loaded: a force-static
  `/search-index/{locale}` route emits one locale JSON resource from the final
  indexable page collection. The initial page payload contains only the locale,
  resource URL, and labels; the client fetches that resource when search opens,
  then filters locally and links directly to each page's declared final `url`.
  There is no search backend or cross-locale fallback.
- The homepage renders a deterministic `Recent updates` section from reviewed
  content pages in the same locale. Home, trust/system pages, and tools are
  excluded; `lastReviewed` is the source of ordering.
- Every page hero exposes a locale-aware `Last reviewed` label and the existing
  ISO review date, including entity hubs and details.
- `src/app/manifest.ts`, `src/app/icon.svg`, and root metadata provide a neutral
  favicon and web manifest. `next.config.ts` adds the baseline security headers
  without a CSP that could interfere with approved ad or analytics integrations.

## Production Configuration

- Configure the approved visual system in `src/data/theme.ts`. Do not create a
  production site by leaving the neutral development fallback unchanged.
- Store visual files under `public/` and register every used asset in
  `src/data/assets.ts` with its source URL, source page, usage, dimensions,
  alt text, and page references. Source fields are internal asset records;
  the image component renders the image and its alt text without a public credit line.
- Do not use official game logos. Brand presentation must use permitted,
  traceable local assets or the text brand mark.
- Ads use semantic position inventory; read `AD_LAYOUT.md`. Page Builder selects positions after planning the actual pages, replaces the template inventory with only those positions, and leaves all required codes empty. The launch Builder preserves that layout during deployment; Adsterra Integrator creates and binds real units later. Current-device variants are selected by container fit. Legacy sites remain unchanged unless explicitly migrated.

- AdSense ownership is preinstalled through all three public carriers:
  `public/ads.txt`, the `google-adsense-account` meta tag, and the account script
  in the root layout. Page Builder leaves the configured publisher values intact;
  the launch Builder checks them on the published site.

## Baseline Sample URLs

The current nine primary-locale URLs are baseline sample content. They must be replaced or deliberately adapted for
each Guide Editor page plan. Additional locale and entity routes are generated from
configuration rather than hardcoded here:

- `/`
- `/wiki`
- `/guides`
- `/release-date`
- `/faq`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`

## Setup and Verification

```bash
npm install
npm run routes:manifest
npm run verify
npm run dev
```

`verify` proves that the project typechecks, passes lint, and exports statically. Before deployment, inspect the actual site's content, routes, metadata, and responsive pages; create a focused one-off check when a change needs one. The copied template does not carry reusable test fixtures.

## Growth Handoff Files

- `AGENTS.md`: generated-site operating rules for future content updates.
- `CONTENT_INDEX.md`: URL inventory, search intent map, and internal-link map.
- `GROWTH_LOG.md`: chronological record for growth-relevant changes.

Page Builder replaces the sample page inventory and local assembly records for
the real game. The launch Builder fills deployment details; `site-growth` uses
the completed site files after launch.

## Environment and Deployment

- `NEXT_PUBLIC_SITE_URL`: canonical site origin, such as `https://example.com`.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: optional GA4 measurement ID. If empty, no
  Google tag is rendered.
- `NEXT_PUBLIC_BING_SITE_AUTH_CODE`: Bing Webmaster Tools verification code.
  `bing-sitemap-submitter` fills it during launch; it is public and is not the API key.

`npm run indexnow:setup` generates one site-specific `public/indexnow-*.txt`
verification file. The generated site commits and keeps that public file. Initial
launch uses the script's `--from-sitemap` mode because every URL is new; later
content updates pass only the URLs changed by that update with repeated `--url`
arguments. Submission prints one line, and a remote IndexNow rejection does not
block an otherwise valid publish.

The production template uses Next.js static export and Cloudflare Workers Static
Assets. `next.config.ts` emits the deployable site to `out/`; `wrangler.jsonc`
points directly at that directory and intentionally has no Worker `main` script.
`public/_headers` preserves the security response headers at the static asset
layer. The template has no OpenNext production dependency; the retained
`open-next.config.ts` compatibility stub is inert and must not be used for deployment.
The launch Builder should replace the Wrangler project name, configure
build environment variables, connect the generated GitHub repository to
Cloudflare Builds, bind the exact authorized domain, verify that a push updates
the live site, and then verify GA4, GSC, Bing Webmaster sitemap submission, and
the initial IndexNow notification.

## V4 composition and visual system

Read [PAGE_DESIGN.md](PAGE_DESIGN.md) and [V4_ASSEMBLY.md](V4_ASSEMBLY.md). V4 adds three homepage compositions, optional recursive Wiki navigation, caller-supplied colors, fonts and assets, and `guide-index`, `featured-guides`, `progression`, and `fact-panel` modules. Old page/module contracts remain supported. Missing optional images fall back rather than block a build.

Production configuration does not select a named skin or task recipe. Neutral sample values make the empty template runnable; each game supplies its own visual identity and component assembly. Review the built pages for that game rather than copying a template showcase.
