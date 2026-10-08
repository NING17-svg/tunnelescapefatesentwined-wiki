import Link from "next/link";
import React from "react";
import { AssetMedia } from "@/components/media/AssetMedia";
import { theme } from "@/data/theme";
import type { ThemeConfig } from "@/types/theme";
import type { PageContent } from "@/types/content";

export function PageHero({
  page,
  priority = false,
  themeConfig = theme,
}: {
  page: PageContent;
  priority?: boolean;
  themeConfig?: ThemeConfig;
}) {
  const presentation = page.presentation;
  const variant = presentation.variant ?? themeConfig.variants[presentation.shell];
  const heroClassName = [
    "page-hero",
    `${presentation.shell}-hero`,
    page.hero.assetId ? "hero-with-media" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={heroClassName} data-variant={variant}>
      <div className="hero-copy">
        {page.hero.eyebrow ? <p className="eyebrow">{page.hero.eyebrow}</p> : null}
        <h1>{page.h1}</h1>
        {page.hero.subtitle.trim() ? <p>{page.hero.subtitle}</p> : null}
        {page.hero.ctas.length ? (
          <div className="cta-row">
            {page.hero.ctas.map((cta) => (
              <Link key={cta.href} className={`btn ${cta === page.hero.ctas[0] ? "btn-primary" : "btn-secondary"}`} href={cta.href}>
                {cta.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      {page.hero.assetId ? (
        <AssetMedia
          assetId={page.hero.assetId}
          className="hero-media"
          priority={priority}
          {...((variant === "media-hero" || variant === "visual-cover")
            ? { sizes: "(max-width: 1180px) 100vw, 1180px" }
            : {})}
        />
      ) : null}
    </header>
  );
}
