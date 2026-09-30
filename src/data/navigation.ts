import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "Overview" } },
  { href: "/release", labels: { "en-US": "Release" } },
  { href: "/story", labels: { "en-US": "Story" } },
  { href: "/characters", labels: { "en-US": "Characters" } },
  { href: "/gameplay", labels: { "en-US": "Gameplay" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "Overview" } },
  { href: "/steam", labels: { "en-US": "Steam" } },
  { href: "/platforms", labels: { "en-US": "Platforms" } },
  { href: "/languages", labels: { "en-US": "Languages" } },
  { href: "/demo", labels: { "en-US": "Demo" } },
  { href: "/trailer", labels: { "en-US": "Trailer" } },
  { href: "/achievements", labels: { "en-US": "Achievements" } },
  { href: "/price", labels: { "en-US": "Price" } },
  { href: "/content-disclosure", labels: { "en-US": "Content Disclosure" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
