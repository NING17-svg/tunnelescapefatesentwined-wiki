# AGENTS.md

## Project Snapshot

`example.com` is a generated game guide site. After launch, treat the generated project as a live content property, not as the central workflow repo or a template.

The site uses Next.js App Router, TypeScript, data-driven content in `src/data`, generated metadata, JSON-LD, sitemap, robots, and Next.js static export deployed through Cloudflare Workers Static Assets. Production guide sites must not route ordinary page requests through an OpenNext or other Worker JS runtime.

## Mandatory Agent Workflow

For every growth-relevant edit:

1. Read this file before making changes.
2. Check `CONTENT_INDEX.md` to identify affected pages.
3. Inspect only the files relevant to the requested change.
4. Make the smallest change that solves the task.
5. Run narrow verification proportional to the change.
6. Update `GROWTH_LOG.md`.
7. Update `CONTENT_INDEX.md` if any URL, route, page type, keyword, CTA, title, H1, canonical, schema, or internal-link role changes.

A growth-relevant task is not complete until `GROWTH_LOG.md` is updated.

## Site Structure Rules

- Content source of truth is `src/data/pages/*.ts`, `src/data/entities.ts`, `src/data/faq.ts`, `src/data/site.ts`, and `src/data/navigation.ts`.
- Page shell selection is stored in each page's `presentation.shell`; shell components live in `src/components/pages/`, and shared guide modules are defined in `src/types/modules.ts` and rendered by `src/components/content/ModuleRenderer.tsx`.
- Make visual-theme changes in `src/data/theme.ts`, not in route-specific CSS.
- Keep visual assets local under `public/` and register every used asset with complete traceability in `src/data/assets.ts`.
- Do not use official game logos.
- Read `AD_LAYOUT.md`. Page Builder chooses semantic positions after planning the site's actual pages, implements the exact `ad-placement-manifest.json`, and leaves every matching code in `src/data/ads.ts` empty. Empty codes make no requests; only the visible device variant executes. The launch Builder checks that the approved positions survive deployment; only `adsterra-integrator` supplies real codes after launch through the existing browser automation. Desktop and all guide-body placements prohibit 300x250; mobile home topic gaps may use it. Social Bar is excluded. Preserve inventory/bindings during content updates; do not silently migrate legacy sites. Real Adsterra code must run in the page DOM container and must not be wrapped in a sandboxed `srcDoc` iframe.
- Preserve the fixed AdSense ownership trio: the Google DIRECT record in `public/ads.txt`, the `google-adsense-account` meta tag, and the AdSense script in the root layout. They are public publisher identifiers, not secrets.
- Use the Workspace shell as the layout boundary for a specialized map, calculator, planner, or other tool, and implement the tool itself as separate feature code.
- `src/data/site.ts` owns `primaryLocale` and locale path prefixes. The primary locale stays on the root path; every additional locale needs a unique non-empty prefix.
- Every localized page must declare `translationKey`, `locale`, `routeKind`, `slug`, and final `url`; pages sharing a `translationKey` are hreflang alternates. Every declared locale also needs Header/Footer labels in `src/data/navigation.ts`.
- Entity families use one base fact package from `src/data/entities.ts`; do not duplicate collection per locale. Locale copy changes labels and display text, not the underlying fact boundary.
- Preserve existing URLs unless there is a deliberate redirect plan.
- Preserve the static deployment contract: `next.config.ts` uses `output: "export"`, `wrangler.jsonc` serves `./out` with no `main` Worker script, dynamic content routes are fully enumerated at build time, and `public/_headers` owns the fixed security response headers.
- Every new page must be reachable through related links, homepage modules, nav, or an obvious hub page.
- Legal and trust pages stay factual and plain.

## V4 页面装配

- 装配和更新页面前读取 `PAGE_DESIGN.md`，按玩家任务选择模块组合，首页第一个模块承接已批准的玩法／攻略入口；设备、平台、发售资料放批准独立页。
- Markdown 通过共享 RichText 渲染，保留段落、列表和链接；不得改回单个 p 或直接执行原始 HTML。图片沿用本地 asset 合同。
- 长页保留桌面/移动端目录；新增导航子项必须指向已规划、同语言的现有页面。
- 构建后在当前站的实际 HTML 中核对正文段落、列表、链接、表格和目录目标；针对本次变更按需编写一次性检查，不把共享模板的示例测试复制到单站。

## Content Standards

- Consume validated Collector gameplay material, including verifiable current-game wiki, community guides and real gameplay videos; use official sources for official release/platform facts. Keep source tiers, checked dates and version boundaries internal.
- Return essential missing facts for collection instead of padding player pages with unknown/future-update declarations.
- Do not invent puzzle solutions, boss tactics, item tables, maps, performance settings, preorder details, editions, release dates, or walkthrough steps.

## Technical SEO Notes

- `npm run verify` checks TypeScript, lint, and the static build. It does not claim page-content or SEO acceptance.
- For the current site, check actual routes, internal links, sitemap, canonical metadata, hreflang, robots, applicable schema, and public ownership tags against its own content. Current launch tasks also run the central `validate_content_assembly.py` after route validation.
- `npm run indexnow:submit -- --submit --site-url https://example.com --url https://example.com/changed-page` submits only the live URLs changed by the current update. It prints one line and a remote submission failure does not roll back or block an otherwise verified publish.
- `npm run routes:manifest` prints the final fixed, tool, entity-Hub, and entity-detail routes; use `-- --output route-manifest.json` when Page Builder or the launch Builder needs a machine-readable file.
- Add one-off checks for the exact shared-code or site change being made when the build alone cannot prove the behavior.

## Risk Warnings

- Do not treat the site as only a starter template after it is launched.
- Do not publish rumor as fact.
- Do not change deployment, Cloudflare, GA4, GSC, Bing Webmaster, or domain settings without explicit authorization.
- Keep the generated `public/indexnow-*.txt` file. It is the site's public IndexNow ownership token and is intentionally committed with the generated site.

## Documentation Files

- `AGENTS.md`: stable project and growth rules.
- `CONTENT_INDEX.md`: page inventory and page-level SEO/GEO/conversion map.
- `GROWTH_LOG.md`: chronological growth-relevant change log.

## Adopted V4 assembly

When docs/design/page-assembly.json exists, preserve its page-family composition, game identity and genuine data-v4-layout/data-v4-region markers. New pages reuse a suitable family. Do not restore an old shell or flatten semantic content. Page Builder checks the composition with local build, reading, content, and ad-contract checks; the launch Builder verifies the published result without redesigning the pages. Absence does not authorize migration.

## Public player content

Use modules only when the player task needs them. Key facts, quick answers, FAQ and media are optional; do not fill empty components. Never automatically render source tiers, review dates, Steam IDs, version/remake declarations or a site disclaimer. Preserve internal data for verification. Homepage device/release/pricing facts belong on approved independent routes. Required Collector maps/screenshots must be visible local assets; decorative fallback cannot hide an essential answer image. During launch assembly, maintain docs/build/content-assembly.json and rerun the central local gate after changing mapped content; final launch additionally checks actual public HTML. After launch, retain the mapping as a launch record; subsequent updates follow the content-updater contract.

## Shared guide Worker deployment

Production is served by Worker `game-guide-new-pool-001` in `new-guide-pool-001`. `.shared-worker.json` is the authoritative mapping; deployment repository: `NING17-svg/game-guide-new-pool-001`. The source remains static export. Main pushes call the configured shared deploy hook. Never deploy this source with Wrangler or recreate an independent Worker. Verify publication with central `cloudflare_push_verify.py --repo-root <source>`; source SHA, successful shared build, 100% active version and domain marker must agree.
