import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  {
    href: "/guides/walkthrough",
    labels: { "en-US": "Walkthrough" },
    children: [
      { href: "/guides/walkthrough", labels: { "en-US": "Stage Guide" } },
      { href: "/guides/boss-guide", labels: { "en-US": "Boss Guide" } },
      { href: "/guides/boss-weaknesses", labels: { "en-US": "Boss Weaknesses" } },
    ],
  },
  {
    href: "/guides/weapons-overview",
    labels: { "en-US": "Weapons" },
    children: [
      { href: "/guides/weapons-overview", labels: { "en-US": "Weapons Overview" } },
      { href: "/guides/pistol-shotgun-skills", labels: { "en-US": "Pistol & Shotgun Skills" } },
      { href: "/guides/unique-guns", labels: { "en-US": "Unique Guns" } },
      { href: "/guides/gun-tier-list", labels: { "en-US": "Gun Tier List" } },
    ],
  },
  {
    href: "/guides/crafting",
    labels: { "en-US": "Crafting" },
    children: [
      { href: "/guides/crafting", labels: { "en-US": "Crafting System" } },
      { href: "/guides/crafting-combos", labels: { "en-US": "Crafting Combos" } },
      { href: "/guides/throwables", labels: { "en-US": "Throwables" } },
    ],
  },
  {
    href: "/guides/skills",
    labels: { "en-US": "Skills" },
    children: [
      { href: "/guides/skills", labels: { "en-US": "Skills & Unlock Order" } },
      { href: "/guides/active-passive-skills", labels: { "en-US": "Active & Passive Skills" } },
    ],
  },
  {
    href: "/guides/combat",
    labels: { "en-US": "Combat" },
    children: [
      { href: "/guides/combat", labels: { "en-US": "Combat System" } },
      { href: "/guides/combat-strategy", labels: { "en-US": "Combat Strategy" } },
    ],
  },
  {
    href: "/guides/enemies",
    labels: { "en-US": "Enemies" },
    children: [
      { href: "/guides/enemies", labels: { "en-US": "Enemy Types" } },
      { href: "/guides/zombie-enemies", labels: { "en-US": "Zombie Enemies" } },
    ],
  },
  {
    href: "/guides/random-events",
    labels: { "en-US": "Random Events" },
    children: [
      { href: "/guides/random-events", labels: { "en-US": "Random Events" } },
      { href: "/guides/chests-and-drinks", labels: { "en-US": "Chests & Drinks" } },
    ],
  },
  { href: "/guides/progression", labels: { "en-US": "Progression" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
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