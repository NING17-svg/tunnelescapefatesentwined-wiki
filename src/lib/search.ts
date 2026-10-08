import { getIndexablePages } from "@/lib/content";
import type { PageContent } from "@/types/content";

export interface SearchIndexEntry {
  id: string;
  locale: string;
  url: string;
  title: string;
  summary: string;
  text: string;
}

export function getSearchIndexUrl(locale: string): string {
  return `/search-index/${encodeURIComponent(locale)}`;
}

export function buildLocaleSearchIndex(locale: string): SearchIndexEntry[] {
  return buildSearchIndex(getIndexablePages(), locale);
}

function moduleText(module: PageContent["modules"][number]): string {
  return JSON.stringify(module);
}

function normalizeSearchText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function buildSearchIndex(
  sourcePages: PageContent[],
  locale?: string,
): SearchIndexEntry[] {
  return sourcePages
    .filter((page) => !locale || page.locale === locale)
    .map((page) => {
      const title = page.h1 || page.seoTitle;
      const summary = page.summary || page.metaDescription;
      const text = normalizeSearchText(
        [
          title,
          page.seoTitle,
          summary,
          page.quickAnswer,
          ...page.modules.map(moduleText),
        ].join(" "),
      );
      return {
        id: page.id,
        locale: page.locale,
        url: page.url,
        title,
        summary,
        text,
      };
    })
    .sort((left, right) => {
      if (left.title !== right.title) return left.title < right.title ? -1 : 1;
      if (left.url === right.url) return 0;
      return left.url < right.url ? -1 : 1;
    });
}

export function searchIndex(
  entries: SearchIndexEntry[],
  query: string,
): SearchIndexEntry[] {
  const normalizedQuery = normalizeSearchText(query);
  const terms = normalizedQuery.split(" ").filter(Boolean);
  if (!terms.length) return [];

  function relevance(entry: SearchIndexEntry): number {
    const title = normalizeSearchText(entry.title);
    const summary = normalizeSearchText(entry.summary);
    if (title.includes(normalizedQuery)) return 4;
    if (terms.every((term) => title.includes(term))) return 3;
    if (summary.includes(normalizedQuery)) return 2;
    if (terms.every((term) => summary.includes(term))) return 1;
    return 0;
  }

  return entries
    .filter((entry) => terms.every((term) => entry.text.includes(term)))
    .sort((left, right) => relevance(right) - relevance(left));
}
