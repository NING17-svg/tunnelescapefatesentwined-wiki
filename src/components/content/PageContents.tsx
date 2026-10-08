import { getLocaleUiLabels } from "@/lib/localization";
import type { PageContent } from "@/types/content";

export function PageContents({ page, collapsible = false }: { page: PageContent; collapsible?: boolean }) {
  const title = getLocaleUiLabels(page.locale).onThisPage || "On this page";
  const links = page.modules.flatMap((module) => {
    const label = module.type === "callout" ? module.title : module.heading;
    return label ? [{ id: module.id, label }] : [];
  });
  if (links.length < 2) return null;
  const navigation = <nav className="rail-links" aria-label={title}>{links.map((link) => <a key={link.id} href={`#${link.id}`}>{link.label}</a>)}</nav>;
  return collapsible ? (
    <details className="page-contents"><summary>{title}</summary>{navigation}</details>
  ) : <section className="rail-contents"><h2>{title}</h2>{navigation}</section>;
}
