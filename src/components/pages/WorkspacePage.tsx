import { AdSlot } from "@/components/ads/AdSlot";
import { AnswerSummary } from "@/components/content/AnswerSummary";
import { FAQBlock } from "@/components/content/FAQBlock";
import { ModuleRenderer } from "@/components/content/ModuleRenderer";
import { RelatedLinks } from "@/components/content/RelatedLinks";
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
import type { PageContent } from "@/types/content";

export function WorkspacePage({
  page,
  workspace,
}: {
  page: PageContent;
  workspace?: React.ReactNode;
}) {
  const faqs = getFaqsForPage(page);
  const related = getRelatedPages(page);
  const primarySchema =
    page.pageType === "wiki" || page.pageType === "guides"
      ? collectionPageSchema(page)
      : articleSchema(page);
  const variant =
    page.presentation.shell === "workspace"
      ? (page.presentation.variant ?? theme.variants.workspace)
      : theme.variants.workspace;

  return (
    <article className="workspace-page" data-variant={variant}>
      <JsonLd data={breadcrumbSchema(page)} />
      <JsonLd data={primarySchema} />
      {faqs.length ? <JsonLd data={faqSchema(faqs)} /> : null}
      <AdSlot slot="page-top" />
      <PageHero page={page} />
      <div className="workspace-region" data-variant={variant}>
        {workspace ?? ((page.quickAnswer.trim() || page.quickAnswerContext?.trim()) ? (
          <section className="workspace-fallback" aria-label="Tool workspace">
            <AnswerSummary
              answer={page.quickAnswer}
              context={page.quickAnswerContext}
              locale={page.locale}
            />
          </section>
        ) : null)}
      </div>
      <ModuleRenderer modules={page.modules} />
      <RelatedLinks pages={related} />
      <FAQBlock faqs={faqs} />
    </article>
  );
}
