import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "guide-portal" },
  h1: "Tunnel Escape Fates Entwined — Wiki & Strategy Hub",
  seoTitle: "Tunnel Escape Fates Entwined Wiki: Strategy Hub & Guides",
  metaDescription:
    "Tunnel Escape Fates Entwined wiki with walkthrough, boss guide, weapon tier list, crafting combos, skill unlock order, and full combat strategy guides.",
  summary:
    "Walkthrough, weapon tier list, boss counters, crafting combos, and combat strategy for the Elzee / Saikey Studios zombie rogue-lite.",
  hero: {
    eyebrow: "Wiki & Strategy Hub",
    subtitle:
      "Cop Olivenia escorts a Special Agent through a zombie-infested city in this single-player rogue-lite RPG / ADV from Elzee and Saikey Studios. Combat fuses real-time gunplay with turn-based rounds, every run is shaped by random events, crafting recipes, and skill progression. Use the walkthrough, weapon tier list, and boss counters below to plan your run.",
    assetId: "hero-combat-surrounded",
    ctas: [
      { label: "Open Walkthrough", href: "/guides/walkthrough/" },
      { label: "Browse Weapons & Skills", href: "/guides/weapons-overview/" },
    ],
  },
  quickAnswer:
    "Tunnel Escape Fates Entwined is a single-player rogue-lite where Olivenia fights through Streets → Sewer → Forest Park → CEO Evacuation Route, then two Nightmare post-game modes. Six main firearms (Tactical Pistol through Rocket Launcher) plus two hidden Endless-mode guns (SMG and Magnum) form the arsenal; real-time kicks and gunplay layer on turn-based rounds with a red action bar that decides interrupts. Every run unlocks skills, ammo recipes, throwables, and shop upgrades that carry over, so the wiki below groups the canonical walkthrough, boss counters, weapon tier list, crafting combos, and combat rotations you need.",
  quickAnswerContext:
    "The wiki pages below are grouped by player task: getting through the campaign, mastering the weapons, managing crafting and throwables, and understanding the roguelite loop. Start with the Walkthrough and Boss Guide if you are new; jump to Gun Tier List or Combat Strategy if you are tuning a build.",
  keyFacts: [
    { label: "Genre", value: "Single-player rogue-lite exploration RPG / ADV" },
    { label: "Developer / Publisher", value: "Elzee / Saikey Studios" },
    { label: "Release", value: "Steam, October 2, 2026" },
    { label: "Stages", value: "4 story stages + 2 Nightmare post-game modes" },
    { label: "Arsenal", value: "6 main firearms + 2 hidden Endless-mode guns" },
    { label: "Combat", value: "Real-time kicks / gunplay layered on turn-based rounds" },
  ],
  modules: [
    {
      id: "start-here",
      type: "featured-guides",
      heading: "Start Here",
      lead: {
        title: "Walkthrough & Stage Guide",
        href: "/guides/walkthrough/",
        description:
          "Four story stages plus the two Nightmare post-game modes, boss prep, stage pickups, and the Shotgun Alchemy money farm.",
        assetId: "featured-zombie-firefight",
      },
      supporting: [
        {
          title: "Boss Guide",
          href: "/guides/boss-guide/",
          description:
            "Every stage boss, what to bring, and the standard opening rotations.",
        },
        {
          title: "Boss Weaknesses",
          href: "/guides/boss-weaknesses/",
          description:
            "Which flashbangs, molotovs, stimulants, and interrupts work on each fight.",
        },
      ],
    },
    {
      id: "weapons-skills-combat",
      type: "guide-index",
      heading: "Weapons, Skills, and Combat",
      columns: 1,
      groups: [
        {
          title: "Weapons",
          items: [
            {
              label: "Weapons Overview",
              href: "/guides/weapons-overview/",
              description:
                "The six main firearms and how to unlock each one.",
            },
            {
              label: "Gun Tier List",
              href: "/guides/gun-tier-list/",
              description:
                "Ranked Pistol through Rocket Launcher, plus the hidden SMG and Magnum.",
            },
            {
              label: "Pistol and Shotgun Skills",
              href: "/guides/pistol-shotgun-skills/",
              description:
                "Rapid Fire, Birdshot, and the per-weapon actives to learn first.",
            },
            {
              label: "Unique Guns (SMG & Magnum)",
              href: "/guides/unique-guns/",
              description:
                "Endless-mode unlock paths and crafted-ammo recipes.",
            },
          ],
        },
        {
          title: "Skills & Combat",
          items: [
            {
              label: "Skills & Unlock Order",
              href: "/guides/skills/",
              description:
                "Which skill tree to spend points on at each stage.",
            },
            {
              label: "Active and Passive Skills",
              href: "/guides/active-passive-skills/",
              description:
                "Every confirmed active and passive in the game.",
            },
            {
              label: "Combat System",
              href: "/guides/combat/",
              description:
                "How real-time kicks and turn-based rounds combine.",
            },
            {
              label: "Combat Strategy",
              href: "/guides/combat-strategy/",
              description:
                "Skill priority, per-stage tactics, and the boss stun-lock rotation.",
            },
          ],
        },
      ],
    },
    {
      id: "crafting-throwables-items",
      type: "guide-index",
      heading: "Crafting, Throwables, and Items",
      columns: 1,
      groups: [
        {
          title: "Crafting",
          items: [
            {
              label: "Crafting System",
              href: "/guides/crafting/",
              description:
                "When crafting unlocks and what categories of items it produces.",
            },
            {
              label: "Crafting Combos",
              href: "/guides/crafting-combos/",
              description:
                "Pistol bullets, SMG bullets, sniper bullets, and the Shotgun Alchemy money farm.",
            },
          ],
        },
        {
          title: "Throwables",
          items: [
            {
              label: "Throwables",
              href: "/guides/throwables/",
              description:
                "Flashbangs, molotovs, gas grenades, and stimulants — effects, sources, and boss priority.",
            },
          ],
        },
      ],
    },
    {
      id: "exploration-progression",
      type: "guide-index",
      heading: "Exploration and Progression",
      columns: 1,
      groups: [
        {
          title: "Encounters",
          items: [
            {
              label: "Random Events",
              href: "/guides/random-events/",
              description:
                "The four named event categories and how they trigger along the progress bar.",
            },
            {
              label: "Chests and Drinks",
              href: "/guides/chests-and-drinks/",
              description:
                "What chests can drop and how stat-altering drinks work.",
            },
          ],
        },
        {
          title: "Loop",
          items: [
            {
              label: "Enemies",
              href: "/guides/enemies/",
              description:
                "The five enemy classes and per-stage roster.",
            },
            {
              label: "Zombie Enemies",
              href: "/guides/zombie-enemies/",
              description:
                "Doctor Zombie, Revived Detective, Leech Humanoids, and their counters.",
            },
            {
              label: "Roguelite Progression & Shop Upgrades",
              href: "/guides/progression/",
              description:
                "What carries over between runs and what resets.",
            },
          ],
        },
      ],
    },
  ],
  faqIds: ["what-is-this-site", "is-official", "release-status", "starting-weapon"],
  relatedPageIds: ["walkthrough", "weapons-overview", "boss-guide", "crafting-combos", "combat-strategy"],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-09",
};