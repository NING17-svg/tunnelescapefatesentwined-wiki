import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const fixtureLastReviewed = "2026-09-30";

const guidesFixturePage: PageContent = {
  id: "guides",
  translationKey: "guides",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides",
  url: "/guides",
  pageType: "guides",
  presentation: { shell: "hub" },
  h1: `${site.gameName} Guides`,
  seoTitle: `${site.gameName} Guides | Beginner Tips and Starter Help`,
  metaDescription:
    "Browse beginner guides, story recap notes, gameplay explainers, and reference material for Tunnel Escape Fates Entwined.",
  summary:
    "Browse beginner guides, story recap notes, gameplay explainers, and reference material for Tunnel Escape Fates Entwined.",
  hero: {
    eyebrow: "Guides",
    subtitle:
      "Start with story recap and gameplay explainers, then expand into reference material once verified demand appears.",
    ctas: [
      { label: "Overview", href: "/about" },
      { label: "Gameplay", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "The guides index organizes beginner, story, gameplay, and reference content around the Steam release of Tunnel Escape Fates Entwined.",
  keyFacts: [
    { label: "Guide depth", value: "Starter structure" },
    { label: "Avoid", value: "Unverified builds, loot, maps, or quest steps" },
    { label: "Next upgrade", value: "Full guide pages after content research" },
  ],
  modules: [
    {
      id: "beginner",
      type: "prose",
      heading: "Beginner guide",
      body:
        "Use this section for safe onboarding advice grounded in official descriptions. Avoid specific tactics unless they are verified by official material or later play research.",
    },
    {
      id: "systems",
      type: "prose",
      heading: "Systems guide categories",
      body:
        "Add confirmed categories such as combat, crafting, classes, exploration, quests, equipment, difficulty, or co-op only after official sources support them.",
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["CollectionPage", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: fixtureLastReviewed,
};

const wikiFixturePage: PageContent = {
  id: "wiki",
  translationKey: "wiki",
  locale: "en-US",
  routeKind: "fixed",
  slug: "wiki",
  url: "/wiki",
  pageType: "wiki",
  presentation: { shell: "hub" },
  h1: `${site.gameName} Wiki`,
  seoTitle: `${site.gameName} Wiki | Facts, Systems, and Starter Notes`,
  metaDescription:
    "A wiki index of confirmed facts, systems, characters, and reference notes for Tunnel Escape Fates Entwined.",
  summary:
    "A wiki index of confirmed facts, systems, characters, and reference notes for Tunnel Escape Fates Entwined.",
  hero: {
    eyebrow: "Wiki",
    subtitle:
      "Collect official facts, systems, platforms, and starter references in one stable page.",
    ctas: [
      { label: "Story", href: "/story" },
      { label: "Characters", href: "/characters" },
    ],
  },
  quickAnswer:
    "Use this wiki page as the verified fact hub for the game. Do not add unconfirmed mechanics, maps, characters, items, or dates.",
  keyFacts: [
    { label: "Fact source", value: "Official sources only" },
    { label: "Content depth", value: "Starter wiki notes" },
    { label: "Update rule", value: "Expand after launch signals appear" },
  ],
  modules: [
    {
      id: "overview",
      type: "prose",
      heading: "Game overview",
      body:
        "Replace this overview with confirmed information from official store pages, press kits, developer posts, or publisher pages. Keep uncertain details out of the page.",
    },
    {
      id: "systems",
      type: "prose",
      heading: "Systems to document",
      body:
        "Use this section for confirmed systems such as combat, progression, exploration, multiplayer, crafting, quests, or modes. If official sources do not confirm a system, leave it out.",
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["CollectionPage", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: fixtureLastReviewed,
};

const faqFixturePage: PageContent = {
  id: "faq",
  translationKey: "faq",
  locale: "en-US",
  routeKind: "fixed",
  slug: "faq",
  url: "/faq",
  pageType: "faq",
  presentation: { shell: "content", variant: "reading-full" },
  h1: `${site.gameName} FAQ`,
  seoTitle: `${site.gameName} FAQ | Common Questions`,
  metaDescription:
    "Frequently asked questions about Tunnel Escape Fates Entwined release, platforms, story, and languages.",
  summary:
    "Common questions and short answers about release, platforms, story, and languages.",
  hero: {
    eyebrow: "FAQ",
    subtitle:
      "Quick answers about release, platforms, story, gameplay, and languages.",
    ctas: [
      { label: "Release", href: "/release" },
      { label: "Platforms", href: "/platforms" },
    ],
  },
  quickAnswer:
    "Use this FAQ for short answers about release, platforms, story, gameplay, and languages based on official Steam sources.",
  keyFacts: [
    { label: "FAQ source", value: "Official Steam sources" },
    { label: "Update rule", value: "Refresh when launch facts change" },
    { label: "Schema", value: "FAQ JSON-LD enabled" },
  ],
  modules: [
    {
      id: "faq-policy",
      type: "prose",
      heading: "FAQ policy",
      body:
        "Keep answers short, source-aware, and easy to update. Avoid speculative claims about release dates, platforms, gameplay systems, or technical details.",
    },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["FAQPage", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: fixtureLastReviewed,
};

export const trustPages: PageContent[] = [
  guidesFixturePage,
  wikiFixturePage,
  faqFixturePage,

  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact Tunnel Escape Fates Entwined Guide for corrections, official source updates, and site feedback.",
    summary: "Reach out for corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, official source updates, and site feedback.",
      ctas: [{ label: "About", href: "/about" }],
    },
    quickAnswer:
      "Send corrections or official source updates to the site maintainer through the support channel listed on the About page.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Source policy", value: "Official sources only" },
      { label: "Privacy", value: "Do not request account credentials" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "How to reach us",
        body: `Email corrections, official source links, and feedback to support@${site.domain}. Messages are reviewed for source quality before any guide page is updated.`,
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "When reporting an error, include the page URL, the exact claim that needs to change, and a link to the official source that confirms the correction. Reports without an official source are queued for review but cannot be acted on immediately.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for Tunnel Escape Fates Entwined Guide covering analytics, contact messages, and third-party services.",
    summary:
      "Privacy policy covering analytics, contact messages, and third-party services.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "What data this site collects, why it is used, and how to make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "The site uses GA4 analytics (when configured) and Cloudflare hosting. It does not host accounts, comments, or payment systems.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body:
          "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If you send a message to the support address, the email contents are kept only as long as needed to resolve your request. Do not send sensitive personal information through the contact channel.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for Tunnel Escape Fates Entwined Guide, an unofficial fan site covering release, story, gameplay, and language information.",
    summary:
      "Terms of use for an unofficial fan guide covering release, story, gameplay, and language information.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Unofficial fan site. Informational use only. No warranty of accuracy.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This is an unofficial fan guide. Game facts are sourced from official Steam store, SteamDB, and Steam Community pages and may change.",
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Trademarks", value: "Belong to their respective owners" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with Elzee, Saikey Studios, Steam, or Valve unless explicitly stated. All game names, logos, and brands are property of their respective owners and are used here for identification and informational purposes only.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Guide information may change as official details are updated. Use official sources for final purchase, platform, and release decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-30",
  },
];
