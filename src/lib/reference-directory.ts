import type { EntityGridModule } from "@/types/modules";

export type ReferenceBadgeFilter =
  | { kind: "all" }
  | { kind: "exact"; value: string }
  | { kind: "unlabeled" };

type ReferenceItem = EntityGridModule["items"][number];

function slugSegment(value: string): string {
  const normalized = value.normalize("NFKC").toLocaleLowerCase("en-US").trim();
  const readable = normalized
    .replace(/[\s\p{P}\p{S}]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  if (readable) return readable;

  const codePoints = Array.from(normalized, (character) =>
    character.codePointAt(0)?.toString(16),
  ).filter((codePoint): codePoint is string => Boolean(codePoint));
  return codePoints.length ? `u-${codePoints.join("-")}` : "item";
}

/** Build one stable fragment ID. `occurrence` is 1-based for repeated names. */
export function referenceAnchor(
  moduleId: string,
  title: string,
  occurrence = 1,
): string {
  const moduleSegment = slugSegment(moduleId) || "reference";
  const titleSegment = slugSegment(title);
  const duplicateIndex = Number.isFinite(occurrence)
    ? Math.max(1, Math.floor(occurrence))
    : 1;
  const suffix = duplicateIndex > 1 ? `-${duplicateIndex}` : "";
  return `${moduleSegment}-${titleSegment}${suffix}`;
}

/** Create unique anchors in source order; pass the complete item list for previews. */
export function referenceAnchors(
  moduleId: string,
  items: ReadonlyArray<Pick<ReferenceItem, "title">>,
): string[] {
  const nextOccurrenceByTitle = new Map<string, number>();
  const reservedBaseAnchors = new Set(
    items.map(({ title }) => referenceAnchor(moduleId, title)),
  );
  const usedAnchors = new Set<string>();

  return items.map(({ title }) => {
    const titleSegment = slugSegment(title);
    let occurrence = nextOccurrenceByTitle.get(titleSegment) ?? 1;
    let anchor = referenceAnchor(moduleId, title, occurrence);

    while (
      usedAnchors.has(anchor) ||
      (occurrence > 1 && reservedBaseAnchors.has(anchor))
    ) {
      occurrence += 1;
      anchor = referenceAnchor(moduleId, title, occurrence);
    }

    usedAnchors.add(anchor);
    nextOccurrenceByTitle.set(titleSegment, occurrence + 1);
    return anchor;
  });
}

/** Filter existing source items without sorting, rewriting, or deriving new entries. */
export function filterReferenceItems<T extends ReferenceItem>(
  items: readonly T[],
  query = "",
  badgeFilter: ReferenceBadgeFilter = { kind: "all" },
): T[] {
  const needle = query.trim().toLocaleLowerCase("en-US");
  return items.filter((item) => {
    const badge = item.badge?.trim() ? item.badge : undefined;
    const matchesBadge =
      badgeFilter.kind === "all" ||
      (badgeFilter.kind === "exact" && item.badge === badgeFilter.value) ||
      (badgeFilter.kind === "unlabeled" && badge === undefined);
    if (!matchesBadge) return false;
    if (!needle) return true;

    const searchableText = `${item.title} ${item.badge ?? ""} ${item.summary}`;
    return searchableText.toLocaleLowerCase("en-US").includes(needle);
  });
}

/** Only a plain same-page link is redirected to the item's own generated anchor. */
export function isSameReferencePageHref(href: string, currentUrl: string): boolean {
  if (
    !href ||
    !currentUrl ||
    href.startsWith("//") ||
    /[?#]/.test(href) ||
    /[?#]/.test(currentUrl)
  ) {
    return false;
  }

  try {
    const current = new URL(currentUrl, "https://reference-directory.invalid");
    const target = new URL(href, current);
    if (current.search || current.hash || target.search || target.hash) return false;
    if (target.origin !== current.origin) return false;

    const normalizePath = (pathname: string) =>
      pathname.replace(/\/+$/, "") || "/";
    return normalizePath(target.pathname) === normalizePath(current.pathname);
  } catch {
    return false;
  }
}
