import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";
import { PageContents } from "@/components/content/PageContents";
import { KeyFacts } from "@/components/content/KeyFacts";
import { getRelatedPages } from "@/lib/content";
import type { PageContent } from "@/types/content";

export function RightRail({ page }: { page: PageContent }) {
  const related = getRelatedPages(page);

  return (
    <aside className="right-rail" aria-label="Page summary">
      <PageContents page={page} />
      <section>
        <h2>Key Facts</h2>
        <KeyFacts facts={page.keyFacts} />
      </section>
      {related.length ? (
        <section>
          <h2>Next Pages</h2>
          <nav className="rail-links" aria-label="Related pages">
            {related.map((relatedPage) => (
              <Link key={relatedPage.id} href={relatedPage.url}>
                {relatedPage.h1}
              </Link>
            ))}
          </nav>
        </section>
      ) : null}
      <AdSlot slot="guide-rail" />
    </aside>
  );
}
