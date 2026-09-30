# Tunnel Escape Fates Entwined Guide

Unofficial fan guide site for **Tunnel Escape Fates Entwined** (Steam AppID 4285110 by
Elzee / Saikey Studios), deployed at https://tunnelescapefatesentwined.wiki.

The site is built from the shared V3 `game-guide-site-template` and is configured per
the approved Site Plan, content package, and theme specification tracked in
`site-launch/tasks/tunnelescapefatesentwined-wiki/`.

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
  file that Builder and Verifier can compare with the Site Plan.

## Production Configuration

- Visual system lives in `src/data/theme.ts` and `src/styles/theme.css`, configured
  to the approved Theme Spec for this game.
- Local visual assets live under `public/` and are registered in
  `src/data/assets.ts` with source URL, credit, usage, and dimensions.
- Ads are pre-positioned but empty in `src/data/ads.ts`; `adsterra-integrator`
  populates the six values after launch.
- AdSense ownership is preinstalled through `public/ads.txt`, the
  `google-adsense-account` meta tag, and the account script in the root layout.

## Setup and Verification

```bash
npm install
npm run indexnow:setup
npm run validate:template
npm run routes:manifest
npm run verify
npm run dev
```

## Environment and Deployment

- `NEXT_PUBLIC_SITE_URL`: canonical site origin.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: GA4 measurement ID. Empty until GA4 connector runs.
- `NEXT_PUBLIC_BING_SITE_AUTH_CODE`: Bing Webmaster verification code.

Production deploys via Cloudflare Workers Static Assets; `wrangler.jsonc` points
directly at `out/` and intentionally has no Worker `main` script. `public/_headers`
preserves the security response headers at the static asset layer.
