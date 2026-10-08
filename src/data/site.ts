import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Tunnel Escape Fates Entwined Wiki",
  brandMark: "TEFE",
  gameName: "Tunnel Escape Fates Entwined",
  domain: "tunnelescapefatesentwined.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://tunnelescapefatesentwined.wiki").replace(/\/$/, ""),
  description:
    "Unofficial Tunnel Escape Fates Entwined strategy hub: walkthrough, boss guide, weapon tier list, crafting combos, skill unlock order, and combat strategy.",
  tagline:
    "Walkthrough, weapon tier list, boss counters, crafting combos, and combat strategy for the Elzee / Saikey Studios zombie rogue-lite.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this guide and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "Tunnel Escape Fates Entwined Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Tunnel Escape Fates Entwined on Steam",
      href: "https://store.steampowered.com/app/4285110/Tunnel_Escape_Fates_Entwined/",
      description: "Official Steam store page for the game.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. Game facts are sourced from the official Steam description and player coverage. Cross-check with the store page for the latest patch notes.",
};