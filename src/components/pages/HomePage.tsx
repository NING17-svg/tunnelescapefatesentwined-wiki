import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";
import { AnswerSummary } from "@/components/content/AnswerSummary";
import { FAQBlock } from "@/components/content/FAQBlock";
import { KeyFacts } from "@/components/content/KeyFacts";
import { AdModuleSequence, type ModuleAdAnchor } from "@/components/ads/AdModuleSequence";
import { ModuleRenderer } from "@/components/content/ModuleRenderer";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { PageHero } from "@/components/pages/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { theme } from "@/data/theme";
import { getLocaleUiLabels } from "@/lib/localization";
import { getFaqsForPage, getRecentUpdates, getRelatedPages } from "@/lib/content";
import { collectionPageSchema, faqSchema, websiteSchema } from "@/lib/schema";
import type { ThemeConfig } from "@/types/theme";
import type { PageContent } from "@/types/content";

export function HomePage({ page, themeConfig = theme, recentPages, adAnchors = [] }: { page: PageContent; themeConfig?: ThemeConfig; recentPages?: PageContent[]; adAnchors?: ModuleAdAnchor[] }) {
  const faqs = getFaqsForPage(page);
  const related = getRelatedPages(page);
  const recentUpdates = recentPages ?? getRecentUpdates(page.locale);
  const labels = getLocaleUiLabels(page.locale);
  const entryModules = page.modules.slice(0, 1);
  const detailModules = page.modules.slice(1);
  const variant =
    page.presentation.shell === "home"
      ? (page.presentation.variant ?? themeConfig.variants.home)
      : themeConfig.variants.home;

  const portal = variant === "guide-portal" || variant === "reference-desk";
  const supplementaryExpanded = page.presentation.shell === "home" && page.presentation.supplementary === "expanded";
  const hasSupplementaryContent = Boolean(
    page.quickAnswer.trim() || recentUpdates.length || related.length || faqs.length,
  );

  return (
    <article className="home-page" data-variant={variant}>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={collectionPageSchema(page)} />
      <JsonLd data={faqSchema(faqs)} />
      <AdSlot slot="page-top" />
      <div className={`home-opening ${portal ? "opening-portal" : "opening-cover"}`}>
        <PageHero page={page} priority themeConfig={themeConfig} />
        {entryModules.length ? (
          <div className="home-entry"><ModuleRenderer modules={entryModules} /></div>
        ) : null}
      </div>
      <AdSlot slot="home-after-entry" />
      {page.keyFacts.length ? (
        <section className="home-facts" aria-label={labels.homeDetails ?? "About this guide"}>
          <KeyFacts facts={page.keyFacts} />
        </section>
      ) : null}
      {detailModules.length ? <AdModuleSequence modules={detailModules} anchors={adAnchors} /> : null}
      {hasSupplementaryContent ? (
        <details className="home-supplementary" open={supplementaryExpanded}>
          <summary>{labels.homeDetails ?? "About this guide and recent updates"}</summary>
          {page.quickAnswer.trim() ? (
            <section className="home-summary">
              <AnswerSummary
                answer={page.quickAnswer}
                context={page.quickAnswerContext}
                locale={page.locale}
              />
            </section>
          ) : null}
          {recentUpdates.length ? (
            <section className="recent-updates" aria-labelledby="recent-updates-heading">
              <h2 id="recent-updates-heading">{labels.recentUpdates}</h2>
              <div className="recent-updates-grid">
                {recentUpdates.map((recentPage) => (
                  <Link key={recentPage.id} href={recentPage.url} className="recent-update-card">
                    <strong>{recentPage.h1}</strong>
                    <span>{recentPage.summary}</span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
          {related.length ? <RelatedLinks pages={related} /> : null}
          {faqs.length ? <FAQBlock faqs={faqs} /> : null}
        </details>
      ) : null}
    </article>
  );
}
