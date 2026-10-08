"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AssetMedia } from "@/components/media/AssetMedia";
import {
  filterReferenceItems,
  isSameReferencePageHref,
  referenceAnchors,
  type ReferenceBadgeFilter,
} from "@/lib/reference-directory";
import type { EntityGridModule } from "@/types/modules";

export interface ReferenceDirectoryLabels {
  searchLabel: string;
  searchPlaceholder: string;
  badgeFilterLabel: string;
  allBadgesLabel: string;
  unbadgedLabel: string;
  entryCount: string;
  entryCountOne: string;
  resultCount: string;
  entryLinkLabel: string;
  pageLinkLabel: string;
  emptyLabel: string;
  noResultsLabel: string;
  clearFiltersLabel: string;
}

export const defaultReferenceDirectoryLabels: ReferenceDirectoryLabels = {
  searchLabel: "Search this reference",
  searchPlaceholder: "Name, label, or detail",
  badgeFilterLabel: "Filter by label",
  allBadgesLabel: "All",
  unbadgedLabel: "No label",
  entryCount: "{total} entries",
  entryCountOne: "1 entry",
  resultCount: "{visible} of {total} shown",
  entryLinkLabel: "Link to {title} in this list",
  pageLinkLabel: "Open {title}",
  emptyLabel: "No entries are available.",
  noResultsLabel: "No entries match.",
  clearFiltersLabel: "Clear search and filters",
};

function formatLabel(
  template: string,
  values: { total?: number; visible?: number; title?: string },
): string {
  return template.replace(/\{(total|visible|title)\}/g, (placeholder, key: string) => {
    return String(values[key as keyof typeof values] ?? placeholder);
  });
}

export function ReferenceDirectory({
  guideModule,
  currentUrl,
  labels = defaultReferenceDirectoryLabels,
}: {
  guideModule: EntityGridModule;
  currentUrl: string;
  /** Supply a complete label set when composing the directory in another language. */
  labels?: ReferenceDirectoryLabels;
}) {
  const [query, setQuery] = useState("");
  const [badgeFilter, setBadgeFilter] = useState<ReferenceBadgeFilter>({ kind: "all" });
  const searchId = `${guideModule.id}--reference-search`;
  const headingId = `${guideModule.id}--reference-heading`;

  const badges = useMemo(
    () =>
      [...new Set(
        guideModule.items.flatMap((item) =>
          item.badge?.trim() ? [item.badge] : [],
        ),
      )],
    [guideModule.items],
  );
  const hasUnbadgedItems = guideModule.items.some((item) => !item.badge?.trim());
  const showBadgeFilters = badges.length > 1 || (badges.length > 0 && hasUnbadgedItems);
  const matches = useMemo(
    () => filterReferenceItems(guideModule.items, query, badgeFilter),
    [guideModule.items, query, badgeFilter],
  );
  const matchingItems = new Set(matches);
  const anchors = useMemo(
    () => referenceAnchors(guideModule.id, guideModule.items),
    [guideModule.id, guideModule.items],
  );
  const hasActiveFilters = Boolean(query.trim()) || badgeFilter.kind !== "all";

  return (
    <section
      id={guideModule.id}
      className="v4-reference-directory"
      aria-labelledby={headingId}
    >
      <div className="v4-reference-heading">
        <h2 id={headingId}>{guideModule.heading}</h2>
        <p>
          {formatLabel(
            guideModule.items.length === 1 ? labels.entryCountOne : labels.entryCount,
            { total: guideModule.items.length },
          )}
        </p>
      </div>

      <div className="v4-reference-controls">
        <div className="v4-reference-search">
          <label htmlFor={searchId}>{labels.searchLabel}</label>
          <input
            id={searchId}
            type="search"
            value={query}
            placeholder={labels.searchPlaceholder}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        {showBadgeFilters ? (
          <div
            className="v4-reference-filters"
            role="group"
            aria-label={labels.badgeFilterLabel}
          >
            <button
              type="button"
              aria-pressed={badgeFilter.kind === "all"}
              onClick={() => setBadgeFilter({ kind: "all" })}
            >
              {labels.allBadgesLabel}
            </button>
            {badges.map((badge) => (
              <button
                key={badge}
                type="button"
                aria-pressed={badgeFilter.kind === "exact" && badgeFilter.value === badge}
                onClick={() => setBadgeFilter({ kind: "exact", value: badge })}
              >
                {badge}
              </button>
            ))}
            {hasUnbadgedItems ? (
              <button
                type="button"
                aria-pressed={badgeFilter.kind === "unlabeled"}
                onClick={() => setBadgeFilter({ kind: "unlabeled" })}
              >
                {labels.unbadgedLabel}
              </button>
            ) : null}
          </div>
        ) : null}

        <p className="v4-reference-result-count" aria-live="polite">
          {formatLabel(labels.resultCount, {
            visible: matches.length,
            total: guideModule.items.length,
          })}
        </p>
      </div>

      <div className="v4-reference-entries">
        {guideModule.items.map((item, index) => {
          const anchor = anchors[index];
          const samePage = item.href
            ? isSameReferencePageHref(item.href, currentUrl)
            : false;
          const href = item.href
            ? samePage
              ? `#${anchor}`
              : item.href
            : undefined;

          return (
            <article
              id={anchor}
              key={anchor}
              className="v4-reference-entry"
              hidden={!matchingItems.has(item)}
            >
              <div className="v4-reference-entry-name">
                <h3>{item.title}</h3>
                {item.badge ? <span>{item.badge}</span> : null}
              </div>
              <p>{item.summary}</p>
              {item.assetId ? <AssetMedia assetId={item.assetId} /> : null}
              {href ? (
                <Link
                  href={href}
                  className="v4-reference-entry-link"
                  aria-label={
                    samePage
                      ? formatLabel(labels.entryLinkLabel, { title: item.title })
                      : formatLabel(labels.pageLinkLabel, { title: item.title })
                  }
                >
                  {samePage
                    ? formatLabel(labels.entryLinkLabel, { title: item.title })
                    : formatLabel(labels.pageLinkLabel, { title: item.title })}
                </Link>
              ) : null}
            </article>
          );
        })}
      </div>

      {guideModule.items.length === 0 || matches.length === 0 ? (
        <div className="v4-reference-empty">
          <p>
            {guideModule.items.length === 0 ? labels.emptyLabel : labels.noResultsLabel}
          </p>
          {guideModule.items.length > 0 && hasActiveFilters ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setBadgeFilter({ kind: "all" });
              }}
            >
              {labels.clearFiltersLabel}
            </button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
