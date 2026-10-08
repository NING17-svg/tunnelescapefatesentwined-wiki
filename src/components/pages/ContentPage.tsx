import { AdSlot } from "@/components/ads/AdSlot";
import { AnswerSummary } from "@/components/content/AnswerSummary";
import { FAQBlock } from "@/components/content/FAQBlock";
import { AdModuleSequence, type ModuleAdAnchor } from "@/components/ads/AdModuleSequence";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { RightRail } from "@/components/layout/RightRail";
import { PageContents } from "@/components/content/PageContents";
import { PageHero } from "@/components/pages/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { theme } from "@/data/theme";
import { getFaqsForPage, getRelatedPages } from "@/lib/content";
import {
  articleSchema,
  breadcrumbSchema,
  collectionPageSchema,
  faqSchema,
} from "@/lib/schema";
import type { ThemeConfig } from "@/types/theme";
import type { PageContent } from "@/types/content";

export function ContentPage({ page, themeConfig = theme, adAnchors = [] }: { page: PageContent; themeConfig?: ThemeConfig; adAnchors?: ModuleAdAnchor[] }) {
  const faqs = getFaqsForPage(page);
  const related = getRelatedPages(page);
  const primarySchema =
    page.pageType === "wiki" || page.pageType === "guides"
      ? collectionPageSchema(page)
      : articleSchema(page);
  const variant =
    page.presentation.shell === "content"
      ? (page.presentation.variant ?? themeConfig.variants.content)
      : themeConfig.variants.content;

  return (
    <article className="content-page" data-variant={variant}>
      <JsonLd data={breadcrumbSchema(page)} />
      <JsonLd data={primarySchema} />
      {faqs.length ? <JsonLd data={faqSchema(faqs)} /> : null}
      <AdSlot slot="page-top" />
      <PageHero page={page} themeConfig={themeConfig} />
      <div className="content-layout" data-variant={variant}>
        <div className="article-body">
          <AnswerSummary
            answer={page.quickAnswer}
            context={page.quickAnswerContext}
            locale={page.locale}
          />
          <div className={variant === "reading-right-rail" ? "inline-contents mobile-contents" : "inline-contents"}><PageContents page={page} collapsible /></div>
          <AdSlot slot="guide-native" device="mobile" />
          <AdModuleSequence modules={page.modules} anchors={adAnchors} />
          <AdSlot slot="guide-before-faq" />
          <FAQBlock faqs={faqs} />
          <RelatedLinks pages={related} />
        </div>
        {variant === "reading-right-rail" ? <RightRail page={page} /> : null}
      </div>
    </article>
  );
}
