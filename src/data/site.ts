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
  name: "Tunnel Escape Fates Entwined Guide",
  brandMark: "TE",
  gameName: "Tunnel Escape Fates Entwined",
  domain: "tunnelescapefatesentwined.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://tunnelescapefatesentwined.wiki").replace(/\/$/, ""),
  description:
    "Unofficial fan guide for Tunnel Escape Fates Entwined: release, system requirements, story, characters, gameplay, and languages.",
  tagline: "Release info, story notes, gameplay tips, and language coverage for Tunnel Escape Fates Entwined.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Tunnel Escape Fates Entwined Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store page",
      href: "https://store.steampowered.com/app/4285110",
      description: "Official Steam store page for Tunnel Escape Fates Entwined (AppID 4285110).",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide. All game facts are sourced from the official Steam store page, SteamDB, and the Steam Community hub.",
};
