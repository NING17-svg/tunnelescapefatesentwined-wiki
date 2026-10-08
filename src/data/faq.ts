import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-this-site",
    question: "What is the Tunnel Escape Fates Entwined wiki for?",
    answer:
      "This is an unofficial strategy hub for Tunnel Escape Fates Entwined. It collects the confirmed walkthrough, weapon tier list, boss counters, crafting combos, and combat rotations from the official Steam description and community coverage so players spend less time re-deriving them.",
    pageIds: ["home", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "is-official",
    question: "Is this an official game website?",
    answer:
      "No. This site is an unofficial fan guide. Official release timing, platforms, and patch notes come from Elzee / Saikey Studios and the Steam store page.",
    pageIds: ["home", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "release-status",
    question: "When did Tunnel Escape Fates Entwined launch?",
    answer:
      "Tunnel Escape Fates Entwined was released on Steam on October 2, 2026, by Elzee (developer) and Saikey Studios (publisher). The Steam App ID is 4285110.",
    pageIds: ["home"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "starting-weapon",
    question: "Which weapon should I invest skill points in first?",
    answer:
      "Stack early skill points into the Tactical Pistol. Its low ammo cost (1 round per shot), 2 shots/sec fire rate, 50% AGI passive, 5-Hit Combo, and knockback strike give it the longest sustained boss uptime of any weapon, so most Chinese reviewers explicitly call it the strongest in the game.",
    pageIds: ["home", "gun-tier-list", "weapons-overview", "skills"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "boss-flashbang",
    question: "Which bosses are vulnerable to flashbangs?",
    answer:
      "The Streets boss and the CEO Evacuation Route boss can be stunned by flashbangs. The Sewer first boss resists status effects, the Forest Park boss is immune to stun (its blue shield blocks layer damage), so flashbangs are skipped there.",
    pageIds: ["home", "boss-weaknesses", "boss-guide", "throwables"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "money-farm",
    question: "What is the most efficient money farm?",
    answer:
      "The documented money farm is Shotgun Alchemy: convert small metal into Shotgun Shells at the crafting bench for roughly a 10× profit per metal, then either use them against grouped bosses or sell them. SMG bullets are the second-best small-metal conversion at about a 3.3× markup.",
    pageIds: ["home", "crafting-combos", "walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "hidden-weapons",
    question: "How do I unlock the SMG and Magnum?",
    answer:
      "The SMG unlocks after defeating The Manager (a triangular-headed boss that spawns roughly every 20 floors in Endless mode), picking up The Wig, using a White Flag to escape, and then meeting the commissioner again so Beatrice turns in the Wig. The Magnum requires entering the Power Supply Zone, finding the Switch Room side room (RNG), and defeating the '????' monster inside.",
    pageIds: ["home", "unique-guns", "gun-tier-list"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "internal",
  },
];