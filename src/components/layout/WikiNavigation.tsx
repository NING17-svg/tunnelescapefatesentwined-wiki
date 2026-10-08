import Link from "next/link";
import { GuideDisclosure } from "@/components/layout/GuideDisclosure";
import { navigationLabel, primaryNavigation, type LocalizedNavigationItem } from "@/data/navigation";
import { getLocaleUiLabels, localizePath } from "@/lib/localization";

function Tree({ items, locale, currentUrl }: { items: LocalizedNavigationItem[]; locale: string; currentUrl: string }) {
  return <ul>{items.map((item) => {
    const href = localizePath(item.href, locale);
    return <li key={href}>
      <Link href={href} aria-current={href === currentUrl ? "page" : undefined}>{navigationLabel(item, locale)}</Link>
      {item.children?.length ? <Tree items={item.children} locale={locale} currentUrl={currentUrl} /> : null}
    </li>;
  })}</ul>;
}

export function WikiNavigation({
  locale,
  currentUrl,
  desktopMinWidth = 901,
}: {
  locale: string;
  currentUrl: string;
  desktopMinWidth?: number;
}) {
  // Native details remains usable without JavaScript on both desktop and mobile.
  return <aside className="wiki-sidebar">
    <GuideDisclosure title={getLocaleUiLabels(locale).wikiNavigation ?? "Guide index"} desktopMinWidth={desktopMinWidth}>
      <nav aria-label={getLocaleUiLabels(locale).wikiNavigation ?? "Guide index"}>
        <Tree items={primaryNavigation} locale={locale} currentUrl={currentUrl} />
      </nav>
    </GuideDisclosure>
  </aside>;
}
