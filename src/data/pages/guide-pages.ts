import type { PageContent } from "@/types/content";

export const guidePages: PageContent[] = [
  // 1. walkthrough
  {
    id: "walkthrough",
    translationKey: "walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/walkthrough",
    url: "/guides/walkthrough/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Walkthrough: Stage and Bosses",
    seoTitle: "Tunnel Escape Fates Entwined Walkthrough: Stage and Bosses",
    metaDescription:
      "Tunnel Escape Fates Entwined walkthrough covering Streets, Sewer, Forest Park, and CEO Evacuation Route with stage pickups, boss prep, and money farming tips.",
    summary:
      "The four story stages plus the two post-game Nightmare modes, each ending in a unique boss.",
    hero: {
      eyebrow: "Walkthrough",
      subtitle:
        "From Noah's computer-room hub, Olivenia picks a mission, explores along a left-side progress bar, and triggers the boss once the bar fills. Use the four story stages below as the canonical order, then the Nightmare repeat modes for post-game content.",
      ctas: [
        { label: "Boss Guide", href: "/guides/boss-guide/" },
        { label: "Combat System", href: "/guides/combat/" },
      ],
    },
    quickAnswer:
      "Play the four story stages in order: Streets → Sewer → Forest Park → CEO Evacuation Route, then Nightmare and Endless Nightmare. Each stage ends in a unique boss; the Sewer also has a hidden police-zombie boss after the 'police officer's body has vanished' event. Bring at least one Stimulant, two flashbangs, and one molotov or firebomb to every boss attempt.",
    quickAnswerContext:
      "The cross-stage rules that always apply: hub shops are guaranteed only on the first arrival at a new hub, Machine Gun eats 5 rounds per shot so do not invest early points into it, Leeches cannot be interrupted by status effects, and a full defeat returns Olivenia to the hub but keeps her skills and EXP.",
    keyFacts: [
      { label: "Stage order", value: "Streets → Sewer → Forest Park → CEO Evacuation Route → Nightmare → Endless Nightmare" },
      { label: "Universal boss prep", value: "1 Stimulant + 2 Flashbangs + 1 Molotov" },
      { label: "Money farm", value: "Shotgun Alchemy — small metal → Shotgun Shells (~10× profit)" },
      { label: "Carry-over", value: "Skills, EXP, level, purchased gear" },
    ],
    modules: [
      {
        id: "overview",
        type: "prose",
        heading: "Walkthrough Overview",
        body:
          "Use the four story stages below as the canonical order: Streets → Sewer → Forest Park → CEO Evacuation Route, then the two Nightmare repeat modes. Each stage page lists the boss to bring, the key pickups to grab on a clean run, and the cross-stage rules that apply to every mission.",
      },
      {
        id: "stage-1-streets",
        type: "prose",
        heading: "Stage 1 — Streets",
        body:
          "You learn the basics here: kick + small pistol for interrupts, med management, and the Tactical Pistol. The Freemen's Laboratory sits mid-stage; opening its chest on a clean run (no forced events before it) destroys the chest and later unlocks Virtual Battle Mode at the hub. Save pistol ammo for the boss — the Streets boss is vulnerable to flashbangs. After clearing it the first time, replaying Streets is a cheap way to bank ~1,000 currency and ~150 ammo for a Machine Gun loadout before moving on.",
      },
      {
        id: "stage-2-sewer",
        type: "prose",
        heading: "Stage 2 — Sewer",
        body:
          "Buy the Machine Gun from the hub shop before entering. Bring molotovs and flashbangs for the trash groups; leeches are not interrupted by status effects, so use machine-gun fire on them. Two bosses await:\n\n1. **Main Sewer boss** — broadly resists status effects. Open with Gun Dance, swap to the Machine Gun, mount it, and fire basic attacks until the boss drops. Hold ~50 boss ammo.\n2. **Hidden police-zombie boss** — triggered by the 'the police officer's body has vanished' event. Enter the Ventilation Shaft and fight the revived detective. Pop a Stimulant right before this fight for +30% damage; a strong build can skip its healing phase entirely. The Auto Shotgun is the reward.",
      },
      {
        id: "stage-3-forest-park",
        type: "prose",
        heading: "Stage 3 — Forest Park",
        body:
          "Lumberjack-class enemies are easiest finished with kick + breath to save ammo — only do this when a single enemy remains. Regular Harpies are vulnerable to flashbangs. The boss has a 3-turn invincible blue shield; chip it with the Tactical Pistol rather than spending heavy ammo while the shield is up. The Harpy boss is immune to stun. Rest at the Quiet Place while still in a clean-run state to pick up the Devotion weapon.",
      },
      {
        id: "stage-4-ceo",
        type: "prose",
        heading: "Stage 4 — CEO Evacuation Route",
        body:
          "Recommended boss opener: Gun Dance → swap to Sniper Rifle → cast 'I Want Quiet' → Target Lock → Hold Breath Shot. The boss summons adds at low HP; both boss and adds are weak to flashbangs. Reaching 80% exploration here auto-awards the Everlasting Pen accessory (flat attack bonus).",
      },
      {
        id: "stage-5-nightmare",
        type: "prose",
        heading: "Stage 5 — Nightmare and Stage 6 — Endless Nightmare",
        body:
          "Nightmare and Endless Nightmare are post-game / repeat-content modes that unlock after the four main stages. They escalate enemy density, modifier load, and boss difficulty.",
      },
      {
        id: "cross-stage-rules",
        type: "prose",
        heading: "Cross-Stage Rules",
        body:
          "- Hub shops are guaranteed only on the first arrival at a new hub. On later runs you must randomly meet the 'Annoying Otaku' NPC to trade.\n- Shop priority: Meds > upgrade Materials > trade currency. Save trade currency for rare items.\n- Do not invest early skill points in the Machine Gun — each shot costs 5 bullets and ammo is scarce. The Tactical Pistol remains the recommended primary because its low ammo use and AGI/dodge/follow-up actives let Olivenia interrupt wind-ups and survive longer.\n- Leeches cannot be interrupted with status effects.\n- Defeat returns Olivenia to the hub but keeps learned skills and earned EXP, so re-run low-difficulty stages to bank resources before retrying harder content.",
      },
      {
        id: "stage-pickups",
        type: "prose",
        heading: "Stage-Specific Pickups",
        body:
          "- **Electronic Chip** — Streets, Freemen's Lab chest on a clean run.\n- **Auto Shotgun** — Sewer, after the vanished-cop event → Ventilation Shaft.\n- **Devotion** — Forest Park, rest at Quiet Place on a clean run.\n- **Everlasting Pen** — CEO Evacuation Route, auto at 80% exploration.\n- **Berries** — random black-cat encounters across stages; carrying Fish raises the spawn rate.",
      },
      {
        id: "money-farming",
        type: "prose",
        heading: "Money Farming",
        body:
          "For money farming, 'Shotgun Alchemy' is the documented efficient grind: convert small metal → Shotgun Shells at the crafting bench (best profit per metal). Don't craft pistol ammo — buy it at the hub instead.",
      },
    ],
    faqIds: ["starting-weapon", "boss-flashbang", "money-farm"],
    relatedPageIds: ["boss-guide", "boss-weaknesses", "weapons-overview", "combat-strategy"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 2. boss-guide
  {
    id: "boss-guide",
    translationKey: "boss-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/boss-guide",
    url: "/guides/boss-guide/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Boss Guide: Every Stage Boss and How to Prepare",
    seoTitle: "Tunnel Escape Fates Entwined Boss Guide: Every Stage Boss",
    metaDescription:
      "Tunnel Escape Fates Entwined boss guide covering Streets, Sewer, Forest Park, CEO Evacuation Route, and Nightmare bosses with universal prep and rotations.",
    summary:
      "Every stage ends with a unique boss battle; this page lists universal prep and the per-stage opening rotations.",
    hero: {
      eyebrow: "Boss Guide",
      subtitle:
        "Every stage of Tunnel Escape Fates Entwined ends with a unique boss battle. Confirmed progression in the v0.16.0a–v1.0.7 builds: Streets → Sewer (two bosses) → Forest Park → CEO Evacuation Route, then Nightmare and Endless Nightmare as post-game content.",
      ctas: [
        { label: "Boss Weaknesses", href: "/guides/boss-weaknesses/" },
        { label: "Combat System", href: "/guides/combat/" },
      ],
    },
    quickAnswer:
      "Bring at least one Stimulant, two flashbangs, and one molotov or firebomb to every boss attempt; never start a boss fight with an empty grenade stack. Stack early skill points into the Tactical Pistol's AGI passives so you can interrupt and counterattack through the longest portion of every boss fight.",
    quickAnswerContext:
      "Boss grab attacks cannot be escaped once they connect, but they do not break a clean run. Some bosses gain a healing-potion skill (added in v0.16.0a) that must be interrupted on the action bar to prevent a full HP restore.",
    keyFacts: [
      { label: "Universal prep", value: "1 Stimulant + 2 Flashbangs + 1 Molotov" },
      { label: "Skill focus", value: "Tactical Pistol AGI / counter passives" },
      { label: "Grab attack", value: "Cannot escape, but does not break a clean run" },
      { label: "Heal interrupt", value: "Required in v0.16.0a+ on action-bar red zone" },
    ],
    modules: [
      {
        id: "universal-prep",
        type: "prose",
        heading: "Universal Prep",
        body:
          "Bring at least one Stimulant, two flashbangs, and one molotov or firebomb to every boss attempt; never start a boss fight with an empty grenade stack. Skill point investment in the Tactical Pistol's AGI-boosting actives is stronger than spreading points across multiple guns — the pistol's low ammo cost and counter-attack window cover the longest portion of every boss fight.\n\nBoss grab attacks cannot be escaped once they connect, but they do not break a clean run. Some bosses gain a healing-potion skill (added in v0.16.0a) that must be interrupted on the action bar to prevent a full HP restore.",
      },
      {
        id: "stage-1-streets",
        type: "prose",
        heading: "Stage 1 — Streets",
        body:
          "A boss encounter is tied to the Freemen's Lab exploration event near the end of the stage. Looting the lab chest as a clean run unlocks the Electronic Chip, which adds a Virtual Battle training mode at the hub. The encounter teaches the core interrupt mechanic: when an enemy enters the red zone on its action bar, a kick or a small-pistol shot cancels its action. The Streets boss is vulnerable to flashbangs.",
      },
      {
        id: "stage-2-sewer",
        type: "prose",
        heading: "Stage 2 — Sewer (Two Bosses)",
        body:
          "### Boss 1 — Main Sewer Boss\n\nBroadly resists status effects, so flashbangs and stuns are unreliable. Recommended rotation: Gun Dance → swap to Machine Gun → set-up stance → basic attacks until the boss is dead.\n\n### Boss 2 — Hidden Police-Zombie Boss\n\nTriggered by the 'police corpse has disappeared' random event. Enter the Ventilation Shaft to fight a police-zombie boss; the Auto Shotgun is awarded on victory. Pop a Stimulant right before this fight for +30% damage; a strong build can one-shot the boss and skip its healing phase.",
      },
      {
        id: "stage-3-forest-park",
        type: "prose",
        heading: "Stage 3 — Forest Park",
        body:
          "The boss is immune to stun and surrounds itself with a blue shield that grants three turns of invincibility. The shield must be waited out or peeled off with small-pistol fire. Most of its attacks are interruptible on the red zone, so kicks and small-pistol taps are the safest damage windows; switch to the Machine Gun for burst damage when the shield drops. Resting at a Quiet Place while still in a clean state grants the Devotion weapon here.",
      },
      {
        id: "stage-4-ceo",
        type: "prose",
        heading: "Stage 4 — CEO Evacuation Route",
        body:
          "The boss is vulnerable to flashbangs and summons minions at low HP — those minions are also flashbang-vulnerable, so save throwables for this phase. Recommended combo: Gun Dance → swap to Sniper Rifle → 'I Want Quiet' self-buff → Target Lock → Hold Breath Shot; crits plus the breathing damage bonus can shred the boss from full to near-zero. Reaching 80% exploration here auto-awards the Everlasting Pen accessory (flat attack bonus).",
      },
      {
        id: "post-game",
        type: "prose",
        heading: "Post-Game — Nightmare and Endless Nightmare",
        body:
          "These modes escalate enemy density, modifier load, and boss difficulty. The Endless Nightmare boss is vulnerable to flash grenades; later boss floors introduce enemies that resist status effects.",
      },
    ],
    faqIds: ["boss-flashbang"],
    relatedPageIds: ["boss-weaknesses", "walkthrough", "combat", "throwables"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 3. boss-weaknesses
  {
    id: "boss-weaknesses",
    translationKey: "boss-weaknesses",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/boss-weaknesses",
    url: "/guides/boss-weaknesses/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Boss Weaknesses and Counters",
    seoTitle: "Tunnel Escape Fates Entwined Boss Weaknesses and Counters",
    metaDescription:
      "Tunnel Escape Fates Entwined boss weaknesses covering flashbang, molotov, stimulant, kick, blue shield, grab attacks, and the healing-potion interrupt trick.",
    summary:
      "There is no elemental resistance chart; weakness comes from the interrupt (action-bar red zone) system and specific throwables.",
    hero: {
      eyebrow: "Boss Weaknesses",
      subtitle:
        "Each section below covers a single item or mechanic that produces the named weakness. Use the quick-reference table at the end to match the right item to each fight.",
      ctas: [
        { label: "Boss Guide", href: "/guides/boss-guide/" },
        { label: "Throwables", href: "/guides/throwables/" },
      ],
    },
    quickAnswer:
      "Boss weakness is not elemental — it comes from the action-bar red-zone interrupt system and from specific throwable items. Carrying two flashbangs into the CEO fight is the standard opening; popping a Stimulant before the Sewer police-zombie boss adds ~30% damage. Forest Park's boss 3-turn blue shield cannot be stripped with damage and must be waited out.",
    keyFacts: [
      { label: "Flashbang — Streets / CEO", value: "Stun-vulnerable" },
      { label: "Stimulant — Sewer boss 2", value: "+30% damage buff" },
      { label: "Molotov — Walker Flower", value: "Kills outright" },
      { label: "Blue shield — Forest Park", value: "Wait out 3 turns, chip with pistol" },
    ],
    modules: [
      {
        id: "flashbang",
        type: "prose",
        heading: "Flashbang (致盲/眩暈手雷)",
        body:
          "Effective against the CEO Evacuation Route boss and its summoned minions. NOT effective against the Sewer first boss (resists status effects) or against the Forest Park boss (immune to stun, blue shield ignores soft CC). Carrying two flashbangs into the CEO fight is the standard opening.",
      },
      {
        id: "stimulant",
        type: "prose",
        heading: "Stimulant (興奮劑)",
        body:
          "Pre-fight consumable that adds about +30% damage to Olivenia's attacks for the duration of the boss fight. The standard opener for the Sewer second encounter, where the burst can let a strong build skip the boss's healing phase entirely.",
      },
      {
        id: "molotov",
        type: "prose",
        heading: "Molotov / Firebomb (燃燒瓶)",
        body:
          "Sets groups of enemies (and boss adds) on fire; burn damage is percentage-based, so it stays relevant through late-game boss HP pools. Most useful on the CEO adds and on groups leading into boss rooms. A single Molotov kills the Walker Flower enemy in Forest Park outright.",
      },
      {
        id: "kick-interrupt",
        type: "prose",
        heading: "Kick + Small Pistol Interrupt",
        body:
          "Olivenia's kick and a single tap from her small pistol both cancel the current action when an enemy is in the red zone of its action bar. This is the universal 'weakness' of every boss — every boss action can be interrupted except the grab. Interrupting a charging attack (especially the boss's potion-heal cast) is the main way to control the fight's tempo.",
      },
      {
        id: "blue-shield",
        type: "prose",
        heading: "Forest Park Boss — Blue Shield",
        body:
          "Three turns of invincibility. Cannot be stripped with damage; must be waited out. While the shield is up, only small-pistol taps and kicks are safe damage options. The Harpy boss is immune to stun.",
      },
      {
        id: "grab-attacks",
        type: "prose",
        heading: "Boss Grab Attacks",
        body:
          "Cannot be escaped once they connect, but they do not break a clean run. Treat them as scripted damage; avoid stacking them by interrupting earlier in the action bar.",
      },
      {
        id: "healing-potion",
        type: "prose",
        heading: "Healing Potion Skill (added in v0.16.0a)",
        body:
          "When the boss begins the cast, the action bar shows a heal cast — it must be interrupted with a kick or a small-pistol shot before it resolves, or the boss restores a large chunk of HP. This applies across stage bosses; it is not tied to one specific enemy.",
      },
      {
        id: "pistol-actives",
        type: "prose",
        heading: "Tactical Pistol Active Skills Work on Bosses",
        body:
          "Bosses are weak to the same Tactical Pistol active skills (Gun Dance, Target Lock, 'I Want Quiet') that work on regular enemies, because the skill system is uniform across encounters. Investing skill points into the pistol's AGI and counter-attack passives increases both Olivenia's evasion and her follow-up damage, which is more impactful on boss fights than spreading points into heavier guns with high ammo costs.",
      },
      {
        id: "quick-reference",
        type: "prose",
        heading: "Quick Reference by Boss",
        body:
          "- **Streets boss** — vulnerable to flashbangs; interrupt its red-zone actions with kick or small pistol.\n- **Sewer boss 1** — resists status effects; rotation is Gun Dance → Machine Gun → basic attacks, no flashbang reliance.\n- **Sewer boss 2 (police-zombie)** — pop a Stimulant for +30% damage and interrupt the heal cast.\n- **Forest Park boss** — wait out the 3-turn blue shield with small-pistol taps; immune to stun.\n- **CEO Evacuation Route boss** — commit two flashbangs here, interrupt the heal cast, and finish with the Sniper breathing combo.",
      },
    ],
    faqIds: ["boss-flashbang"],
    relatedPageIds: ["boss-guide", "throwables", "combat-strategy"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 4. weapons-overview
  {
    id: "weapons-overview",
    translationKey: "weapons-overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/weapons-overview",
    url: "/guides/weapons-overview/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Weapons Guide: Every Firearm",
    seoTitle: "Tunnel Escape Fates Entwined Weapons Guide: Every Firearm",
    metaDescription:
      "Tunnel Escape Fates Entwined weapons guide covering the six main firearms and two hidden guns, with ammo costs, fire rates, and unlock paths per stage.",
    summary:
      "All six main firearms plus two hidden ones, with per-weapon unlock paths and skill anchors.",
    hero: {
      eyebrow: "Weapons Overview",
      subtitle:
        "After each mission Olivenia can buy new guns, upgrades, and useful items from the hub. Every gun has its own active and passive skills, and ammo is severely limited — kicks (especially high-heel kicks) are the cheap way to interrupt enemies and save bullets.",
      assetId: "gameplay-street-pistol",
      ctas: [
        { label: "Gun Tier List", href: "/guides/gun-tier-list/" },
        { label: "Pistol & Shotgun Skills", href: "/guides/pistol-shotgun-skills/" },
      ],
    },
    quickAnswer:
      "The Tactical Pistol is the starting weapon and stays relevant end-game because of its 1 round/shot ammo cost, 2 shots/sec fire rate, 50% AGI passive, and 5-Hit Combo. Auto Shotgun, Machine Gun, Sniper Rifle, Grenade Launcher, and Rocket Launcher fill the other five main slots; the SMG and Magnum are Endless-mode hidden unlocks.",
    keyFacts: [
      { label: "Main firearms", value: "6 (Pistol, Shotgun, MG, Sniper, GL, RPG)" },
      { label: "Hidden firearms", value: "2 (SMG, Magnum)" },
      { label: "Pistol fire rate", value: "2 shots/sec, 1 round per shot" },
      { label: "Machine Gun cost", value: "5 rounds per shot — do not invest early" },
    ],
    modules: [
      {
        id: "tactical-pistol",
        type: "prose",
        heading: "1. Tactical Pistol (Starter)",
        body:
          "Olivenia's starting weapon. 1 round per shot, 2 shots per second, fast enough to interrupt enemies on basic attacks. Active skills include Rapid Fire, a 5-hit combo, a powerful knockback strike, and a 50% speed boost passive. Chinese reviewers call it the strongest, most over-tuned weapon in the game because its low ammo cost lets you sustain through every fight.",
      },
      {
        id: "auto-shotgun",
        type: "prose",
        heading: "2. Auto Shotgun",
        body:
          "Found in the Sewer. Trigger: clear Streets twice, then the 'police corpse disappears' event opens a Ventilation Shaft; beat the resurrected detective to receive the Auto Shotgun. Fires 3 shells per shot at 100 ammo per shell, slow at 0.8 shots/sec but devastating at close range. Headline active is Birdshot, which hits every enemy on screen at once.",
      },
      {
        id: "machine-gun",
        type: "prose",
        heading: "3. Machine Gun",
        body:
          "Bought from the Sewer hub for 1,000 + 1,500 currency plus 150 rounds. Fires a 5-round burst at 5 shots/sec but cannot stagger enemies. Skills include Suppressive Fire and a deploy/turret mode. Side-grade passive 'MG Ammo Carrier' adds +50 MG ammo. Drawback: it eats ammo faster than any other weapon, so don't pour early skill points into it.",
      },
      {
        id: "sniper-rifle",
        type: "prose",
        heading: "4. Sniper Rifle",
        body:
          "Bought on the CEO Evacuation Route. Highest single-shot damage (50) at 0.5 shots/sec with 5 ammo per shot. Active skills: 'I Want Quiet,' Target Lock, and Breath Shot. Only ~5 rounds are needed per boss fight, and the rifle can interrupt an enemy sniper's aim. Weakness: leaves Olivenia exposed if a boss summons adds.",
      },
      {
        id: "grenade-launcher",
        type: "prose",
        heading: "5. Grenade Launcher",
        body:
          "Universal-timer skills include Smoke Grenade, Energy Shield, and Inferno — the Grenade Launcher is the backbone of the standard boss stun-lock rotation, with Inferno as its standout skill. Per-shot actives: Flechette Shot, Slug Shot, Dragon Breath.",
      },
      {
        id: "rocket-launcher",
        type: "prose",
        heading: "6. Rocket Launcher / RPG",
        body:
          "Slow one-shot AoE; all skills are AoE with very high turn/ammo cost. Good for clearing trash mobs, weak against fast combo-heavy final bosses.",
      },
      {
        id: "smg",
        type: "prose",
        heading: "Submachine Gun (SMG)",
        body:
          "Defeat the random boss 'The Manager' in Endless mode (he spawns roughly every 20 floors and can summon four fast Nurses mid-fight). Pick up The Wig and use a White Flag to escape and save; the next time you meet the commissioner, Beatrice turns in the Wig and Olivenia gets the SMG plus 150 SMG rounds and the ammo-crafting recipe. The SMG inherits all Machine Gun skills and passives plus the SMG-only skill Rush B (Beatrice throws a Flashbang, +2x AGI for 3 turns, Shell Rain consumes no ammo). See the unique-guns page for the full unlock.",
      },
      {
        id: "magnum",
        type: "prose",
        heading: "Magnum",
        body:
          "Found in a random side room inside the Power Supply Zone's Switch Room. Defeat the ???? monster there; an 'old friend' character drops the Magnum and its ammo-crafting recipe. Spawn is RNG, so you may need to re-enter the Power Supply Zone several times. Keeping Olivenia in 'true virgin' status boosts Magnum damage by +30%, but this conflicts with some hidden-room chip events.",
      },
      {
        id: "combat-tips",
        type: "prose",
        heading: "Combat Tips",
        body:
          "- Aim for enemy weak zones.\n- Time gunshots and grenade throws to interrupt red-zone actions.\n- Stack passives that boost defense and ammo efficiency.\n- Use the crafting bench between fights to assemble recovery items and the secret weapons' ammo.",
      },
    ],
    faqIds: ["starting-weapon"],
    relatedPageIds: ["gun-tier-list", "pistol-shotgun-skills", "unique-guns", "skills"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 5. pistol-shotgun-skills
  {
    id: "pistol-shotgun-skills",
    translationKey: "pistol-shotgun-skills",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/pistol-shotgun-skills",
    url: "/guides/pistol-shotgun-skills/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Pistol and Shotgun Skills: Tips",
    seoTitle: "Tunnel Escape Fates Entwined Pistol and Shotgun Skills: Tips",
    metaDescription:
      "Tunnel Escape Fates Entwined pistol and shotgun skills: Rapid Fire, Birdshot, 5-Hit Combo, knockback, AGI boost, and per-weapon passive synergies, plus tactics.",
    summary:
      "Every gun has its own active skill tree plus a large shared library of universal passives; the Pistol and Shotgun are the clearest examples.",
    hero: {
      eyebrow: "Pistol & Shotgun Skills",
      subtitle:
        "Every gun has its own active skill tree plus a large shared library of universal passives that boost defense, AGI, attack, and ammo efficiency; the Pistol and Shotgun are the clearest examples of per-weapon design.",
      ctas: [
        { label: "Active & Passive Skills", href: "/guides/active-passive-skills/" },
        { label: "Skills & Unlock Order", href: "/guides/skills/" },
      ],
    },
    quickAnswer:
      "Pair Rapid Fire with the 5-Hit Combo and the 50% AGI passive to give the pistol top-tier sustained DPS. On the Shotgun, Birdshot is the headline AoE clear active; pair it with kick follow-up on the last survivor and plan ammo around the 100-ammo-per-shell cost.",
    keyFacts: [
      { label: "Pistol headline", value: "Rapid Fire + 5-Hit Combo + 50% AGI" },
      { label: "Shotgun headline", value: "Birdshot AoE clear" },
      { label: "Shotgun cost", value: "3 shells per shot at 100 ammo per shell" },
    ],
    modules: [
      {
        id: "pistol-skills",
        type: "prose",
        heading: "Pistol Skills",
        body:
          "The Tactical Pistol is the only weapon that can interrupt enemy actions cheaply — most Chinese guides recommend stacking all early skill points into pistol passives rather than unlocking the bigger guns.\n\n- **Rapid Fire** — the headline pistol active. Dumps multiple rounds per action and stacks with the pistol's built-in low-ammo profile.\n- **5-Hit Combo** — chain of basic attacks that staggers/interrupts most enemies, including enemies in the red action zone. Saves pistol ammo by letting Olivenia kick through vulnerable windows.\n- **Powerful Knockback Strike** — single hard-hitting shot that pushes enemies back and creates space. Very useful when surrounded.\n- **50% Speed Boost** — passive that raises Olivenia's AGI when wielding the pistol, raising dodge chance and letting her act more often than heavier gun users.\n- **General tip** — pair Rapid Fire with the 5-Hit Combo and the 50% AGI passive to give the pistol top-tier sustained DPS.",
      },
      {
        id: "shotgun-skills",
        type: "prose",
        heading: "Shotgun (Auto Shotgun) Skills",
        body:
          "- **Birdshot** — the headline shotgun active. Turns a shell into a wide spread that hits every enemy on screen for an area-of-effect clear. Synergizes with the shotgun's 25 per-shell damage and 3-shells-per-shot burst.\n- **Ventilation Shaft Unlock Trigger** — the shotgun itself is gated behind the Sewers side-event 'police corpse disappears,' which opens the Ventilation Shaft where the resurrected detective must be fought. Winning drops the Auto Shotgun.\n- **High-Cost Burst** — the shotgun's downside is 3 shells per shot at 100 ammo per shell, so Birdshot combos must be planned around limited ammo. Pair it with passives that add shotgun ammo capacity or refund shells on kill.\n- **Kick Follow-up** — a high-heel kick after Birdshot can interrupt any survivors in the red zone, making the shotgun a strong boss-killing weapon despite its slow 0.8 shots/sec fire rate.\n- **General tip** — Birdshot makes the shotgun the best crowd-control weapon in the game, but ammo scarcity means it shines brightest in short boss fights rather than long mob corridors.",
      },
      {
        id: "universal-skills",
        type: "prose",
        heading: "Universal Skills Shared Across All Guns",
        body:
          "- **Throwables** — fire bottles (burn DoT), flashbangs (stun), smoke and gas grenades.\n- **Passives** — Gene Codex (random temporary skills with mutation side effects), Everlasting Pen (flat attack bonus, found in the CEO Evacuation Route at 80% exploration), Healing Donut (crafted recovery for HP and SP, recipe in Sewers), MG Ammo Carrier (+50 MG ammo for Machine Gun users).",
      },
    ],
    faqIds: ["starting-weapon"],
    relatedPageIds: ["weapons-overview", "active-passive-skills", "skills", "gun-tier-list"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 6. unique-guns
  {
    id: "unique-guns",
    translationKey: "unique-guns",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/unique-guns",
    url: "/guides/unique-guns/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Unique Guns: SMG and Magnum",
    seoTitle: "Tunnel Escape Fates Entwined Unique Guns: SMG and Magnum",
    metaDescription:
      "Tunnel Escape Fates Entwined unique guns: hidden SMG and Magnum unlock paths, Rush B combo, Endless Manager boss, Switch Room RNG, and crafted ammo recipes.",
    summary:
      "The two hidden Endless-mode guns with no normal shop or boss-drop route; both feed on crafted ammunition rather than picked-up ammo.",
    hero: {
      eyebrow: "Unique Guns",
      subtitle:
        "Both unlock after the 5th floor / Endless mode, and both feed on crafted ammunition rather than picked-up ammo.",
      ctas: [
        { label: "Gun Tier List", href: "/guides/gun-tier-list/" },
        { label: "Crafting Combos", href: "/guides/crafting-combos/" },
      ],
    },
    quickAnswer:
      "SMG unlocks by defeating 'The Manager' (random Endless boss, ~every 20 floors), picking up The Wig, using a White Flag to escape, then letting Beatrice turn in the Wig on the next commissioner encounter. Magnum needs the RNG Switch Room in the Power Supply Zone and defeating the '????' monster. Both need crafted ammo unlocked on pickup.",
    keyFacts: [
      { label: "SMG unlock", value: "Defeat The Manager → Wig → White Flag → next commissioner" },
      { label: "Magnum unlock", value: "Switch Room RNG in Power Supply Zone" },
      { label: "Ammo source", value: "Catalyst + base material crafting" },
    ],
    modules: [
      {
        id: "smg",
        type: "prose",
        heading: "Submachine Gun (SMG)",
        body:
          "The SMG inherits every Machine Gun skill and passive (including passives like MG Ammo Carrier) and adds one SMG-only skill: **Rush B**, a 99-turn cooldown that has Beatrice throw a Flashbang and grants Olivenia +2x AGI for 3 turns while making Shell Rain consume no ammo (Shell Rain keeps its 5-turn cooldown).",
      },
      {
        id: "smg-unlock",
        type: "prose",
        heading: "SMG Unlock Quest",
        body:
          "1. Reach Endless mode by clearing the four main stages.\n2. Look for the commissioner's event, where he is attacked by a triangular-headed boss called 'The Manager' and loses his wig. The Manager spawns randomly in Endless mode roughly every 20 floors.\n3. Defeat The Manager. Warning: he can summon four very fast Nurses mid-fight, so stack AGI boosts and AoE before they appear.\n4. The fight does not auto-save. Pick up The Wig, use a White Flag item to escape, and save immediately.\n5. The next time you meet the commissioner (after the next boss kill), Beatrice automatically turns in the Wig. The SMG is added to Olivenia's arsenal along with 150 SMG rounds and the ammo-crafting recipe.",
      },
      {
        id: "smg-combo",
        type: "prose",
        heading: "Optimal SMG Combo",
        body:
          "Rush B → Shell Rain → So Hot → Shell Rain. With enough Flashbangs the SMG can clear fights even with limited crafted ammo.",
      },
      {
        id: "magnum",
        type: "prose",
        heading: "Magnum",
        body:
          "The Magnum is a single high-damage sidearm that also runs on crafted ammunition.",
      },
      {
        id: "magnum-unlock",
        type: "prose",
        heading: "Magnum Unlock Quest",
        body:
          "1. In Endless mode, enter the Power Supply Zone (the first area).\n2. Look specifically for a side room called the 'Switch Room.' It only spawns on some runs, so re-enter the Power Supply Zone until the Switch Room appears.\n3. Inside the Switch Room, defeat the '????' monster. An 'old friend' character drops the Magnum along with the ammo-crafting recipe.",
      },
      {
        id: "magnum-bonus",
        type: "prose",
        heading: "Bonus Interaction",
        body:
          "Keeping Olivenia in 'true virgin' status boosts Magnum damage by +30%, but this conflicts with some hidden-room chip events. Decide based on whether the +30% damage or the chip unlocks matter more for your build.",
      },
      {
        id: "crafted-ammo",
        type: "prose",
        heading: "Crafted Ammo",
        body:
          "Both weapons draw on the standard catalyst-plus-base-material crafting economy — recipes unlock on pickup. Specific ingredient quantities are not yet publicly documented, but the ammo is assembled at the same hub bench where you craft pistol bullets, shotgun shells, and recovery items.",
      },
    ],
    faqIds: ["hidden-weapons"],
    relatedPageIds: ["weapons-overview", "gun-tier-list", "crafting-combos"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 7. gun-tier-list
  {
    id: "gun-tier-list",
    translationKey: "gun-tier-list",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/gun-tier-list",
    url: "/guides/gun-tier-list/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Gun Tier List and Best Picks",
    seoTitle: "Tunnel Escape Fates Entwined Gun Tier List and Best Picks",
    metaDescription:
      "Tunnel Escape Fates Entwined gun tier list ranking Pistol, Auto Shotgun, Sniper, Machine Gun, Rocket Launcher, and hidden SMG and Magnum by usefulness.",
    summary:
      "Tactical Pistol tops every tier list; Rocket Launcher sinks to the bottom; SMG and Magnum outscale once unlocked.",
    hero: {
      eyebrow: "Gun Tier List",
      subtitle:
        "No official S/A/B/C tier list exists, but Chinese player reviews on NGA and Traditional-Chinese walkthrough blogs have converged on the rankings below. Use this list as a starting point — boss resistances and your skill investment shift the answer.",
      ctas: [
        { label: "Weapons Overview", href: "/guides/weapons-overview/" },
        { label: "Unique Guns", href: "/guides/unique-guns/" },
      ],
    },
    quickAnswer:
      "Pistol tops every tier list (Tier S); Auto Shotgun and Sniper Rifle are Tier A — strong but situational; Machine Gun is Tier B (niche / MG Ammo Carrier-dependent); Rocket Launcher is Tier C. Hidden SMG and Magnum sit above the main roster when unlocked but require crafted ammo and late-game RNG.",
    keyFacts: [
      { label: "Tier S", value: "Pistol (overpowered / over-tuned)" },
      { label: "Tier A", value: "Auto Shotgun, Sniper Rifle" },
      { label: "Tier B", value: "Machine Gun (niche, MG Ammo Carrier)" },
      { label: "Tier C", value: "Rocket Launcher (trash clearer)" },
      { label: "Hidden", value: "SMG / Magnum (crafted ammo, late game)" },
    ],
    modules: [
      {
        id: "at-a-glance",
        type: "prose",
        heading: "Gun Tier List At a Glance",
        body:
          "Use this list to decide where to spend skill points first. The Tactical Pistol tops every tier list because of its low ammo cost and interrupt utility; the Rocket Launcher sinks to the bottom because its slow windup cannot keep up with fast boss combos.",
      },
      {
        id: "tier-s",
        type: "prose",
        heading: "Tier S — Strongest (Recommended for All Runs)",
        body:
          "**Pistol (Tactical Pistol).** Cheapest ammo cost (1 round per shot), 2 shots/sec fire rate, basic attacks that stagger/interrupt, a 50% speed boost skill, 5-hit combo, and a powerful knockback strike. Chinese reviewers explicitly call the pistol 'overpowered' (超标) and recommend investing all early skill points into it instead of chasing bigger guns. The official Steam description highlights 'unlocking the potential of rapid fire for the pistol' as a key example skill.",
      },
      {
        id: "tier-a",
        type: "prose",
        heading: "Tier A — Strong but Situational",
        body:
          "- **Auto Shotgun.** Highest per-shot damage in the main roster (25 per shell × 3 shells) and the Birdshot active hits every enemy at once. Devastating against groups and bosses that are weak to scatter, but expensive (100 ammo per shell) and slow at 0.8 shots/sec.\n- **Sniper Rifle.** Highest single-target burst damage (50 per shot) with 20% crit, and skills like 'I Want Quiet,' Target Lock, and Breath Shot let it interrupt enemy actions. Strong against bosses but fragile in mob rooms because the charge time leaves Olivenia exposed.",
      },
      {
        id: "tier-b",
        type: "prose",
        heading: "Tier B — Average, Niche Use",
        body:
          "**Machine Gun.** 5 shots/sec at 12 damage, with Suppressive Fire and deploy/turret mode. The 5-round burst cannot stagger, so it relies on the MG Ammo Carrier passive (+50 MG ammo) to stay viable. Considered 'ammo-eating' by Chinese reviewers and a sidegrade rather than an upgrade over the pistol.",
      },
      {
        id: "tier-c",
        type: "prose",
        heading: "Tier C — Weakest, Hard to Justify",
        body:
          "**Rocket Launcher / RPG.** Slow windup, one-shot AoE, all skills AoE, very high ammo/turn cost. Useful for clearing trash but disastrous against the fast, multi-hit final bosses that the late game throws at you.",
      },
      {
        id: "hidden-tier",
        type: "prose",
        heading: "Hidden Tier — Secret Weapons (Best-in-Slot When Unlocked)",
        body:
          "SMG and Magnum both outscale the main roster once unlocked, but only the SMG is reliably farmable through The Manager boss every ~20 Endless floors, and the Magnum requires pure RNG in the Power Supply Zone Switch Room. Both need crafted ammo rather than picked-up ammo, so they feel like late-game pay-offs rather than general picks.",
      },
      {
        id: "skill-investment",
        type: "prose",
        heading: "How the List Should Drive Skill Investment",
        body:
          "- The Tactical Pistol's interrupt utility is what carries early runs — pouring points into its 50% AGI passive and 5-Hit Combo keeps you alive longer than any bigger gun.\n- The Machine Gun looks tempting but the 5-rounds-per-shot cost eats your ammo pool without staggering, so only commit to it once MG Ammo Carrier is unlocked.\n- The Rocket Launcher is a trash clearer, not a boss weapon — treat it as situational AoE rather than a main carry.",
      },
    ],
    faqIds: ["starting-weapon", "hidden-weapons"],
    relatedPageIds: ["weapons-overview", "unique-guns", "pistol-shotgun-skills", "skills"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 8. throwables
  {
    id: "throwables",
    translationKey: "throwables",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/throwables",
    url: "/guides/throwables/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Throwables Guide: Full List",
    seoTitle: "Tunnel Escape Fates Entwined Throwables Guide: Full List",
    metaDescription:
      "Tunnel Escape Fates Entwined throwables guide covering flashbangs, molotovs, gas grenades, and stimulants: effects, how to obtain, and per-fight priority.",
    summary:
      "All four named types Olivenia can carry, with per-fight priority.",
    hero: {
      eyebrow: "Throwables",
      subtitle:
        "Throwables are a sub-weapon category that produce four distinct battle effects: blast/explosion, blind, stun, and ignite. Because combat fuses real-time gunplay with turn-based rounds, a throwable spends one action in the turn order and consumes one from inventory; the resulting status applies to the enemy turn of the same round.",
      ctas: [
        { label: "Boss Weaknesses", href: "/guides/boss-weaknesses/" },
        { label: "Combat Strategy", href: "/guides/combat-strategy/" },
      ],
    },
    quickAnswer:
      "Carry at least one flashbang to every boss arena and commit it only when the boss is confirmed vulnerable. Keep one Molotov for the Walker Flower in Forest Park (kills outright). Consume a Stimulant right before engaging a boss for +30% damage.",
    keyFacts: [
      { label: "Effects", value: "Blast, blind, stun, ignite" },
      { label: "Boss priority", value: "Flashbang → Stimulant → Molotov" },
      { label: "Walker Flower", value: "One Molotov kills it outright" },
    ],
    modules: [
      {
        id: "flashbang",
        type: "prose",
        heading: "Flashbang (閃光彈)",
        body:
          "Applies the blind/stun effect. The most reliable throwable against bosses — the Streets boss and the CEO Evacuation Route boss can both be stunned, giving Olivenia a free turn to burst or reposition. In the Sewers it is recommended for trash waves because the blind lets the party alpha-strike without return fire. Some Sewer bosses resist status effects and shrug off flashbangs; check before committing.",
      },
      {
        id: "molotov",
        type: "prose",
        heading: "Firebomb / Molotov (燃燒瓶)",
        body:
          "Applies the ignite effect and deals burn damage over time. A single Molotov kills the Walker Flower outright in Forest Park. Burn damage on bosses is a percentage of max HP, so Molotovs stay relevant against late-game HP pools and are the recommended answer to clustered enemies in the sewer.",
      },
      {
        id: "gas-grenade",
        type: "prose",
        heading: "Gas Grenade",
        body:
          "The third throwable family in the standard arsenal, carried alongside flashbangs and firebombs as a crowd-control option for trash waves. Treat it as a flexible pick; boss arena slots take priority.",
      },
      {
        id: "stimulant",
        type: "prose",
        heading: "Stimulant (興奮劑)",
        body:
          "A single-use consumable community guides treat like a throwable. Grants about +30% damage and is consumed right before a boss is engaged, once the blue excitement bar is nearly full, so the boosted window overlaps the burst turn. The standard opener for the Sewer second encounter.",
      },
      {
        id: "how-to-get",
        type: "prose",
        heading: "How to Get Throwables",
        body:
          "1. **Loot drops** from chests, random events, and enemy drops during a stage. Patch notes record rebalancing of specific enemy drop tables, so throwables roll on enemy loot tables.\n2. **Crafting** at Noah's computer-room hub between battles. Crafting is unavailable during an active battle. Recipes for flashbangs and Molotovs are reported as stage pickups.\n3. **Purchase** from merchants between stages; merchant inventories have also been rebalanced in patch notes.",
      },
      {
        id: "priority",
        type: "prose",
        heading: "Priority for Boss Fights",
        body:
          "- Bring at least one flashbang to every boss arena, and commit it only when the boss is confirmed vulnerable (Sewer boss 1 and Forest Park boss are status-resistant).\n- Keep one Molotov for the Walker Flower in Forest Park, which it kills outright.\n- Consume a Stimulant right before engaging a boss.\n- Treat gas grenades as a flexible trash-wave pick; the boss list above takes priority over gas in boss arenas.",
      },
    ],
    faqIds: ["boss-flashbang"],
    relatedPageIds: ["boss-weaknesses", "boss-guide", "combat-strategy", "crafting"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 9. crafting
  {
    id: "crafting",
    translationKey: "crafting",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/crafting",
    url: "/guides/crafting/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Crafting Guide: Full System",
    seoTitle: "Tunnel Escape Fates Entwined Crafting Guide: Full System",
    metaDescription:
      "Tunnel Escape Fates Entwined crafting guide covering recovery items, regular ammo, secret-weapon ammo, throwables, and the catalyst-plus-base-material economy.",
    summary:
      "Combine scavenged items into new or stronger ones whenever Olivenia is not in an active battle.",
    hero: {
      eyebrow: "Crafting System",
      subtitle:
        "Once unlocked, Olivenia can combine scavenged items into new or stronger ones whenever she is not in an active battle — during exploration and at Noah's computer-room hub between mission segments. Crafting is disabled mid-combat, so plan ahead and stock up before boss fights.",
      ctas: [
        { label: "Crafting Combos", href: "/guides/crafting-combos/" },
        { label: "Throwables", href: "/guides/throwables/" },
      ],
    },
    quickAnswer:
      "Crafting groups outputs into four categories: recovery items, regular firearm ammunition, secret-weapon ammunition, and throwables. The menu is unavailable mid-battle — stockpile small metal and catalysts at the hub and convert them into Shotgun Shells or SMG bullets just before a known tough fight.",
    keyFacts: [
      { label: "Categories", value: "Recovery / regular ammo / secret ammo / throwables" },
      { label: "Mid-battle", value: "Crafting menu is disabled" },
      { label: "Best stockpile", value: "Small metal + catalysts at the hub" },
    ],
    modules: [
      {
        id: "what-you-can-craft",
        type: "prose",
        heading: "What You Can Craft",
        body:
          "- **Recovery items** — healing consumables such as the Healing Donut, plus state-cure items that clear poison or infection status.\n- **Regular firearm ammunition** — pistol rounds, submachine gun (SMG) rounds, sniper rounds, and shotgun shells.\n- **Secret-weapon ammunition** — for the SMG and Magnum, which require crafted ammo rather than picked-up ammo. The exact ingredient lists are not publicly documented beyond a 'catalyst + base material' requirement.\n- **Throwables used during combat** — fire bottles (burn DoT), flashbangs (stun), smoke grenades, gas/poison grenades.",
      },
      {
        id: "how-the-system-is-played",
        type: "prose",
        heading: "How the System Is Played",
        body:
          "Crafting draws on materials scavenged in each run (small metal, large metal, cloth, medicinal herbs, gunpowder, scrap, catalysts) plus any healing/buff drinks and stat-altering beverages bought from event vendors. Because runs are rogue-lite and resources are scarce, Chinese guides recommend stockpiling catalysts and metals at the computer room and only converting them into ammo just before a known tough fight.\n\nUniversal passive skills that interact with crafting include MG Ammo Carrier (+50 MG ammo capacity) and craft-related recipes such as Healing Donut (found as a recipe in the Sewers).",
      },
      {
        id: "rules-of-thumb",
        type: "prose",
        heading: "Crafting Rules of Thumb",
        body:
          "- The crafting menu is unavailable mid-battle. Plan your conversion before you enter a fight.\n- Small metal and large metal are the two primary inputs. Stockpile them at the hub rather than spending on impulse crafts.\n- Catalysts boost certain recipes' yields. Save them for boss-fight ammo bursts rather than steady-state conversion.\n- Stat-altering drinks from event vendors can shift your build for the better; they are bought separately from the crafting bench.",
      },
    ],
    faqIds: ["money-farm"],
    relatedPageIds: ["crafting-combos", "throwables", "progression", "walkthrough"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 10. crafting-combos
  {
    id: "crafting-combos",
    translationKey: "crafting-combos",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/crafting-combos",
    url: "/guides/crafting-combos/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Crafting Combos: Profit Table",
    seoTitle: "Tunnel Escape Fates Entwined Crafting Combos: Profit Table",
    metaDescription:
      "Tunnel Escape Fates Entwined crafting combos with the per-recipe profit table, Shotgun Alchemy money farm, and which metal conversions to avoid at the hub.",
    summary:
      "The 'base material + catalyst' economy and the four documented ammo recipes that drive the money farm.",
    hero: {
      eyebrow: "Crafting Combos",
      subtitle:
        "Numbers below come from the in-game currency used at Noah's hub. The same combo rules apply whether you are just trying to keep Olivenia alive or farming money between stages.",
      ctas: [
        { label: "Crafting System", href: "/guides/crafting/" },
        { label: "Unique Guns", href: "/guides/unique-guns/" },
      ],
    },
    quickAnswer:
      "The best profit in the game is small metal → Shotgun Shells (~10× markup, 'Shotgun Alchemy'). The second-best small-metal conversion is SMG bullets (~3.3×). Avoid crafting pistol bullets — they lose money; buy pistol ammo at the hub instead.",
    keyFacts: [
      { label: "Best profit", value: "Small metal → Shotgun Shells (~10×)" },
      { label: "Second best", value: "Small metal → SMG bullets (~3.3×)" },
      { label: "Avoid", value: "Pistol bullets — loses money" },
    ],
    modules: [
      {
        id: "documented-recipes",
        type: "prose",
        heading: "Documented Ammo Recipes (Per Round / Per Shell)",
        body:
          "| Ammo | Inputs | Cost | Sell Price | Net Profit | Verdict |\n| --- | --- | --- | --- | --- | --- |\n| Pistol Bullets | 1 small metal + catalyst | 10 | 20 | −5 per metal | Do not craft; loses money. Buy at hub. |\n| SMG Bullets | 1 small metal + catalyst | 50 | 100 | +35 per metal | Best small-metal profit (~3.3× markup). |\n| Sniper Bullets | 1 small metal + catalyst | 30 | 50 | +5 per metal | Marginal; convert only when you need sniper rounds. |\n| Shotgun Shells | 1 small metal + catalyst + 45-metal base | 35 | 420 | ~+128 per metal | Best profit in the game (~10× markup). 'Shotgun Alchemy.' |",
      },
      {
        id: "practical-combo-rules",
        type: "prose",
        heading: "Practical Combo Rules",
        body:
          "- **Small metal → Shotgun Shells** — best profit per metal, also the highest per-shell damage (25 × 3 shells) and best against grouped bosses. Keep about 5 small-metal units in reserve before converting.\n- **Small metal → SMG bullets** — second-best profit; good for selling surplus.\n- **Large metal → SMG bullets** — preferred for late game when only large metal drops; ~3× markup.\n- **Avoid metal → pistol bullets** unless you need pistol ammo for its interrupt/stagger utility, because it loses money.\n- **Healing and throwable recipes** exist but exact ingredient lists (Healing Donut cloth + herbs, smoke = fuel + canister) have not been transcribed into public wikis because the game is one week post-release.",
      },
      {
        id: "money-farming-trick",
        type: "prose",
        heading: "Money-Farming Trick",
        body:
          "'Shotgun Alchemy': convert small metal into Shotgun Shells and either use them against grouped bosses or sell them for ~10× profit per metal. Do this between encounters (the menu is unavailable mid-battle).\n\nThe same combination rules apply whether the player is trying to keep Olivenia alive or farming money: spend catalysts on shotgun/SMG conversions, save metals for the next boss fight, and use the crafting bench only between encounters.",
      },
    ],
    faqIds: ["money-farm"],
    relatedPageIds: ["crafting", "unique-guns", "progression"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 11. skills
  {
    id: "skills",
    translationKey: "skills",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/skills",
    url: "/guides/skills/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Skills Guide: System and Order",
    seoTitle: "Tunnel Escape Fates Entwined Skills Guide: System and Order",
    metaDescription:
      "Tunnel Escape Fates Entwined skills guide covering the system, recommended unlock order, Tactical Pistol passives first, Birdshot, Breath Shot, and Gun Dance.",
    summary:
      "Skill points from level-ups are spent at the hub between missions; trees are gated by owned weapons.",
    hero: {
      eyebrow: "Skills & Unlock Order",
      subtitle:
        "This skills guide covers both the deep skill system — Olivenia can learn hundreds of active and passive skills, and each weapon she carries has its own dedicated active-skill tree — and the recommended unlock path for a new player.",
      ctas: [
        { label: "Active & Passive Skills", href: "/guides/active-passive-skills/" },
        { label: "Weapons Overview", href: "/guides/weapons-overview/" },
      ],
    },
    quickAnswer:
      "Early game: stack points into the Tactical Pistol tree — Rapid Fire and AGI/counter passives. Do not buy random side guns; ammo is too scarce. Mid game: add armor, stamina, and drop-rate passives. Save Birdshot for before Forest Park and Breath-hold Shot for before the CEO Evacuation Route.",
    quickAnswerContext:
      "Skill papers drop from chests, defeated bosses, and corpse searches between hub purchases, so the active tree at the hub is only part of your build. On a full defeat or 100% virus infection, Olivenia returns to the hub but keeps every skill, passive, level, and experience already earned.",
    keyFacts: [
      { label: "Recommended start", value: "Tactical Pistol actives + AGI/counter passives" },
      { label: "Avoid early", value: "Machine Gun (5 rounds/shot)" },
      { label: "Stage-gated", value: "Birdshot before Forest Park; Breath Shot before CEO" },
    ],
    modules: [
      {
        id: "how-the-system-works",
        type: "prose",
        heading: "How the System Works",
        body:
          "Skill points are awarded when Olivenia levels up, and they are spent at the computer-room/base hub between missions. Each gun has its own active-skill tree; activating a node in a gun's tree requires that gun (or its unlock prerequisite) to be in your possession, so skill progression is gated by which weapons you have bought or found.\n\nNew guns, armor upgrades, and useful items are purchased at the same between-mission hub using collected resources. Shops are guaranteed only the first time you reach a new hub for a given stage; after that, restocking depends on randomly encountering the merchant NPC during exploration.\n\nPassives that are not purchased with points can also be acquired in-run as 'skill papers' from treasure chests, defeated bosses, corpse searches, and (with the Caress-type steal ability) certain special interactions; they are permanently added for the run. On a full defeat or 100% virus infection, Olivenia returns to the hub but keeps every skill, passive, level, and experience already earned, so progress is never lost.",
      },
      {
        id: "recommended-unlock-order",
        type: "prose",
        heading: "Recommended Unlock Order",
        body:
          "1. **Early game** — spend points on the Tactical Pistol's active tree first: Rapid Fire and the AGI/counter passives. Do not buy the random side guns that appear in shops. Ammo is too scarce to feed guns like the Machine Gun that chew through five rounds per shot.\n2. **Mid game** — once the pistol tree is comfortable, add general defensive passives (armor, stamina, drop-rate) to survive the harder stages.\n3. **Stage progression** — Streets → Sewers → Forest Park → CEO Evacuation Route → Nightmare → Endless Nightmare. Unlock the Shotgun's Birdshot before Forest Park, the Sniper's Breath-hold Shot before the CEO Evacuation Route, and the SMG / Magnum actives only after you have a reliable ammo supply. Most players farm low-difficulty runs between stages to stockpile ammo, materials, and skill points before pushing forward.\n4. **Boss preparation** — keep Flashbang stock high and reserve Gun Dance for boss engagements so its cooldown is not wasted on trash. Pair Gun Dance with a weapon swap to a Machine Gun, then a mounted burst and melee finisher as the standard boss opener.",
      },
      {
        id: "why-pistol-first",
        type: "prose",
        heading: "Why the Tactical Pistol Comes First",
        body:
          "The Tactical Pistol has the lowest ammo cost (1 round per shot), the fastest fire rate (2 shots/sec), basic attacks that interrupt enemies in the red action zone, a 50% AGI boost passive, a 5-Hit Combo, and a powerful knockback strike. Chinese reviewers explicitly call it the strongest weapon in the game and recommend stacking all early skill points into pistol passives rather than unlocking the bigger guns.",
      },
      {
        id: "stage-linked-unlocks",
        type: "prose",
        heading: "Stage-Linked Unlocks",
        body:
          "- **Birdshot (Shotgun)** — unlock before Forest Park.\n- **Breath-hold Shot (Sniper)** — unlock before CEO Evacuation Route.\n- **SMG actives** — only after reliable ammo supply.\n- **Magnum actives** — only after unlocking the Magnum via the Power Supply Zone Switch Room RNG.",
      },
    ],
    faqIds: ["starting-weapon"],
    relatedPageIds: ["active-passive-skills", "weapons-overview", "gun-tier-list", "combat-strategy"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 12. active-passive-skills
  {
    id: "active-passive-skills",
    translationKey: "active-passive-skills",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/active-passive-skills",
    url: "/guides/active-passive-skills/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Active and Passive Skills List",
    seoTitle: "Tunnel Escape Fates Entwined Active and Passive Skills List",
    metaDescription:
      "Tunnel Escape Fates Entwined active and passive skills per weapon tree: Rapid Fire, Birdshot, Gun Dance, Breath-hold, Focus, Rush B, and passives fully listed.",
    summary:
      "Every skill confirmed by the official Steam description or by Chinese coverage of the Elzee release.",
    hero: {
      eyebrow: "Active & Passive Skills",
      subtitle:
        "Every gun has its own active-skill tree, and there is a large shared library of passives that boost defense, stamina, attack, ammo efficiency, and item drop rates.",
      ctas: [
        { label: "Skills & Unlock Order", href: "/guides/skills/" },
        { label: "Pistol & Shotgun Skills", href: "/guides/pistol-shotgun-skills/" },
      ],
    },
    quickAnswer:
      "Pistol actives: Rapid Fire. Shotgun actives: Birdshot. Sniper actives: 'I Want Quiet,' Target Lock, Breath Shot. Machine Gun actives: Spray, Shell Rain, Rubber Shot. Grenade Launcher actives: Flechette Shot, Slug Shot, Dragon Breath, plus universal-timer Smoke Grenade / Energy Shield / Inferno. SMG-only active: Rush B. Throwables (Flash Grenade, Molotov, Gas) operate independently.",
    keyFacts: [
      { label: "Per-weapon actives", value: "Rapid Fire, Birdshot, Rush B, etc." },
      { label: "Universal actives", value: "Gun Dance, Focus, Pivot Reload, Precision Shot, High Alert" },
      { label: "Universal-timer GL", value: "Smoke Grenade, Energy Shield, Inferno" },
    ],
    modules: [
      {
        id: "weapon-specific",
        type: "prose",
        heading: "Weapon-Specific Active Skills",
        body:
          "| Active | Weapon | What It Does |\n| --- | --- | --- |\n| Rapid Fire | Pistol | Unlocks the pistol's rapid-fire potential, firing multiple rounds per action. Stacks with the Tactical Pistol's low-ammo profile. |\n| Birdshot | Shotgun | Wide spread that hits every enemy on screen for an area-of-effect clear. |\n| Gun Dance (槍舞) | Universal | Close-range gun-fu attack that interweaves with melee hits. The named boss combo chains Gun Dance into a weapon swap to a Machine Gun, then a mounted burst and melee finisher. |\n| Breath-hold Shot (屏息射擊) | Sniper Rifle | Pauses breath for a single high-damage aimed round; the canonical sniper payoff move. |\n| Spray | Machine Gun | Confirmed active in the Machine Gun's tree. |\n| Shell Rain | Machine Gun | Confirmed active in the Machine Gun's tree. |\n| Rubber Shot | Machine Gun | Confirmed active in the Machine Gun's tree. |\n| Flechette Shot | Grenade Launcher | Per-shot active in the Grenade Launcher tree. |\n| Slug Shot | Grenade Launcher | Per-shot active in the Grenade Launcher tree. |\n| Dragon Breath | Grenade Launcher | Per-shot active in the Grenade Launcher tree. |\n| Rush B | SMG | SMG-only skill (99-turn cooldown). Beatrice throws a Flashbang; Olivenia gains +2x AGI for 3 turns and Shell Rain consumes no ammo (Shell Rain keeps its 5T cooldown). |",
      },
      {
        id: "non-weapon-actives",
        type: "prose",
        heading: "Non-Weapon Active Skills",
        body:
          "- **Kick (踢擊)** — close-range interrupt that staggers enemies and breaks their attack chain. Used to save ammo when only one enemy remains.\n- **Breathing (呼吸)** — stamina/recovery active that lowers the cost of subsequent actions in a turn, again for ammo-saving on the last enemy.\n- **Pivot Reload** — universal combat skill usable regardless of equipped weapon.\n- **Precision Shot** — universal combat skill.\n- **Focus** — sniper-style precision shot that pushes the enemy's action bar back.\n- **High Alert** — universal combat skill.\n- **Smoke Grenade** — universal combat skill, also a Grenade Launcher universal-timer skill.\n- **Energy Shield** — universal combat skill, also a Grenade Launcher universal-timer skill.\n- **Inferno** — Grenade Launcher universal-timer skill; the standout GL active and a key part of the boss stun-lock rotation.",
      },
      {
        id: "passives",
        type: "prose",
        heading: "Confirmed Passive Skills",
        body:
          "- **Tactical Pistol mastery passives** — boost AGI (dodge chance) and grant a counterattack proc after a successful dodge. The passive stack that makes the starting pistol viable as an end-game weapon.\n- **Armor passives** — increase damage reduction.\n- **Stamina / endurance passives** — extend action economy.\n- **Drop-rate passives** — raise the chance of finding ammo, materials, and skill books in chests and on corpses.\n- **Gene Codex** — random temporary skills with mutation side effects (universal passive).\n- **Everlasting Pen** — flat attack bonus (found in CEO Evacuation Route at 80% exploration).\n- **Healing Donut** — crafted recovery for HP and SP; recipe found in the Sewers.\n- **MG Ammo Carrier** — +50 MG ammo for Machine Gun users.\n- **Scavenger** — more ammo drops. Recommended first passive to take.\n- **H-related passives** — let you steal skills from encounters; recommended second-priority.",
      },
      {
        id: "weapon-roster",
        type: "prose",
        heading: "Weapon Roster and Skill Trees",
        body:
          "Seven guns to collect across the campaign (six main + one hidden): Tactical Pistol (starting), Machine Gun, Shotgun, Sniper Rifle, Grenade Launcher, Rocket Launcher / RPG, and the hidden SMG plus Magnum in the Endless tier.\n\nThrowables (Flash Grenade, Incendiary / Molotov, and EMP / Grenade) operate independently of gun-skill trees and can blind, stun, or ignite enemies. Flash Grenade is the named anti-boss tool against most stage bosses and stunnable Nightmare variants.",
      },
    ],
    faqIds: ["starting-weapon"],
    relatedPageIds: ["skills", "pistol-shotgun-skills", "weapons-overview", "combat-strategy"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 13. combat
  {
    id: "combat",
    translationKey: "combat",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/combat",
    url: "/guides/combat/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Turn-Based Combat and Real-Time",
    seoTitle: "Tunnel Escape Fates Entwined Turn-Based Combat and Real-Time",
    metaDescription:
      "Tunnel Escape Fates Entwined turn-based combat blending with real-time gunplay, the red action bar, throwables, and the five enemy families fully explained.",
    summary:
      "Real-time gunplay layered on top of turn-based rounds inside a rogue-lite exploration RPG loop.",
    hero: {
      eyebrow: "Combat System",
      subtitle:
        "Olivenia fights in turn-based rounds while a red action zone governs turn order; enemies about to act fill the red zone, and a kick or pistol shot can interrupt them mid-action.",
      ctas: [
        { label: "Combat Strategy", href: "/guides/combat-strategy/" },
        { label: "Enemies", href: "/guides/enemies/" },
      ],
    },
    quickAnswer:
      "Real-time kicks and gunplay let you reposition and stagger between rounds; turn-based rounds resolve damage, throwables, and skill cooldowns on a strict action order. A red action zone shows when an enemy is about to act; interrupting in the red zone cancels the action and creates a free turn for Olivenia.",
    keyFacts: [
      { label: "Real-time layer", value: "Kicks + gunplay for reposition" },
      { label: "Turn-based layer", value: "Damage, throwables, cooldowns on action order" },
      { label: "Red action zone", value: "Interrupting it cancels the action" },
    ],
    modules: [
      {
        id: "how-two-modes-combine",
        type: "prose",
        heading: "How the Two Modes Combine",
        body:
          "Real-time kicks and gunplay let you reposition and stagger between rounds. Turn-based rounds resolve damage, throwables, and skill cooldowns on a strict action order. A red action zone shows when an enemy is about to act; interrupting in the red zone cancels the action and creates a free turn for Olivenia.",
      },
      {
        id: "weapons-skill-trees",
        type: "prose",
        heading: "Weapons and Skill Trees",
        body:
          "Each weapon has its own active skill set:\n\n- **Pistol** can learn Rapid Fire for high-frequency shots.\n- **Shotgun** can unlock Birdshot to hit all enemies at once.\n- **Machine Gun** learns Spray, Shell Rain, and Rubber Shot.\n- **Grenade Launcher** can fire Flechette Shot, Slug Shot, and Dragon Breath.\n- **SMG** can use Rush B.",
      },
      {
        id: "throwables-status",
        type: "prose",
        heading: "Throwables as a Status-Effect Layer",
        body:
          "Throwables are a dedicated status-effect layer that runs alongside guns:\n\n- **Grenades and firebombs** can blast enemies into pieces.\n- **Flashbangs** blind and stun them.\n- **Molotov cocktails / fire effects** set them on fire.\n\nBurn damage on bosses works as a percentage of total HP, making Molotovs a top-tier opener on boss fights.",
      },
      {
        id: "boss-weaknesses-resistance",
        type: "prose",
        heading: "Boss Weaknesses and Status Resistance",
        body:
          "Bosses have explicit weaknesses, and many are flashbang-resistant. A few late-game bosses can be immune to certain debuffs, so players must read each encounter rather than rely on a single stun. Boss grab attacks cannot be escaped once they connect, but they do not break a clean run.",
      },
      {
        id: "universal-skills",
        type: "prose",
        heading: "Universal Combat Skills",
        body:
          "A small set of universal combat skills is usable regardless of equipped weapon and is where the turn-based core lives:\n\n- **Gun Dance** — increases Olivenia's attack frequency.\n- **Focus** — sniper-style precision shot that pushes the enemy's action bar back.\n- **Pivot Reload, Precision Shot, High Alert, Smoke Grenade, Energy Shield, Inferno** — the rest of the universal set, with Inferno as the standout Grenade Launcher shockwave.",
      },
      {
        id: "enemy-families",
        type: "prose",
        heading: "Enemy Families",
        body:
          "Enemies span five visual families: zombies, mutated creatures, infected animals, living plants, and weaponised machinery. Each stage ends in a unique boss whose weakness the player must learn.",
      },
    ],
    faqIds: ["boss-flashbang"],
    relatedPageIds: ["combat-strategy", "boss-guide", "enemies", "skills"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 14. combat-strategy
  {
    id: "combat-strategy",
    translationKey: "combat-strategy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/combat-strategy",
    url: "/guides/combat-strategy/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Combat Strategy: Boss Plans",
    seoTitle: "Tunnel Escape Fates Entwined Combat Strategy: Boss Plans",
    metaDescription:
      "Tunnel Escape Fates Entwined combat strategy covering skill priority, per-stage tactics, the standard boss stun-lock rotation, and edge-case boss counters.",
    summary:
      "Skill investment, per-stage tactics, and boss rotations form a single feedback loop.",
    hero: {
      eyebrow: "Combat Strategy",
      subtitle:
        "Treat skill investment, per-stage tactics, and boss rotations as a single feedback loop — your early skill picks decide which loadouts you can sustain, which in turn decides which boss rotations are safe.",
      ctas: [
        { label: "Combat System", href: "/guides/combat/" },
        { label: "Boss Guide", href: "/guides/boss-guide/" },
      ],
    },
    quickAnswer:
      "Skill priority: Scavenger → H-related passives → Grenade Launcher + Shotgun weapon actives (Inferno stands out) → damage and AGI → ATK → item capacity. Use Potion of Mammon to refund a point if needed. The boss stun-lock rotation chains Molotov → Flash Bang → GL Energy Shield → GL Smoke → Pistol Gun Dance → MG Focus → Shotgun Offensive Defense → GL Inferno → Shotgun Birdshot → SMG Rush B.",
    keyFacts: [
      { label: "First passive", value: "Scavenger (ammo drops)" },
      { label: "Refund item", value: "Potion of Mammon (−1 level, +1 point)" },
      { label: "Stun-lock", value: "11-step rotation looping from step 1" },
    ],
    modules: [
      {
        id: "skill-investment-priority",
        type: "prose",
        heading: "Skill Investment Priority",
        body:
          "1. **Scavenger** — more ammo drops. First passive to take.\n2. **H-related passives** — let you steal skills from encounters. Second-priority.\n4. **Grenade Launcher and Shotgun weapon actives and passives** (Inferno for the GL is the standout).\n5. **Damage passives and AGI skills** — so Olivenia acts first.\n6. **ATK skills**.\n7. **Item-capacity skills** last.\n\nIf you need to refund a perk point, the **Potion of Mammon** lowers your level by 1 and returns a point. It costs 10 Red + 10 Blue + 10 Purple Mammon Ore plus 50 Active Catalyst. Farmed in Endless Nightmare: Red from bosses, Purple from elites, Blue from side rooms, Catalyst from trash.",
      },
      {
        id: "per-stage-tactics",
        type: "prose",
        heading: "Per-Stage Tactics (Hard Difficulty)",
        body:
          "- **Streets** — use Breath + Kick on the last enemy to conserve pistol ammo.\n- **Sewers** — buy the Machine Gun as soon as the shop opens. Pop a Stimulant (+30% damage) right before the boss once the blue excitement bar is almost full.\n- **Forest Park** — take down Lumberjacks with Kick + Breath. Chip the boss's 3-turn blue invincibility shield with pistol shots.\n- **CEO Evacuation Route** — Machine Gun suppression + auto-attack for grouped enemies. Save Flashbangs for the boss. Sniper Focus Shot → Target Lock → Breath Shot on vulnerable windows.",
      },
      {
        id: "boss-stun-lock",
        type: "prose",
        heading: "Boss Stun-Lock Rotation",
        body:
          "The general rotation is:\n\n1. Molotov — stacks Carnival of Maiden AGI up to 100.\n2. Flash Bang — slows with Flashbang Mastery.\n3. GL Energy Shield if the Lighter is equipped — offsets its self-damage (Lighter removes 20% boss HP at the cost of taking damage back).\n4. GL Smoke Grenade — push enemies back to start.\n5. Switch to Pistol and use Gun Dance.\n6. Switch to Machine Gun and use Focus.\n7. Switch to Shotgun and use Offensive Defense.\n8. Switch to GL and finish with Inferno.\n9. Survivors take Birdshot from the Shotgun.\n10. Rare survivors take SMG Rush B to be knocked back to start.\n11. Loop back to step 1 for a theoretical infinite stun-lock.",
      },
      {
        id: "per-weapon-tactics",
        type: "prose",
        heading: "Per-Weapon Tactics",
        body:
          "- **Pistol** — interrupt enemies on the red zone with a single tap. Stack AGI/counter passives.\n- **Shotgun** — Birdshot for groups; pair with Kick Follow-up on the last survivor. Plan ammo around the 100-ammo-per-shell cost.\n- **Machine Gun** — relies on Suppressive Fire plus deploy/turret mode. Take MG Ammo Carrier for +50 ammo.\n- **Sniper Rifle** — Focus Shot → Target Lock → Breath Shot on vulnerable windows. Reserve ~5 rounds per boss fight.\n- **Grenade Launcher** — Universal-timer skills (Smoke Grenade, Energy Shield, Inferno) are the rotation backbone.",
      },
      {
        id: "edge-case-bosses",
        type: "prose",
        heading: "Edge-Case Bosses and Enemies",
        body:
          "- Some Manager-type bosses only need the Shotgun rotation.\n- If a boss resists Flashbang, the 'I Want to Be Quiet' (我想静静) passive guarantees the stun.\n- Monkey enemies hit very fast and can combo-lock, so keep HP above 50% and avoid being surrounded.\n- Inferno is also used deliberately to keep HP below 50% so the three <50% HP passive bonuses stay active.\n- SP-drain enemies (e.g. teddy bear) should be fought by switching to a small pistol + Kick to save Machine Gun ammo.\n\nWeapons can degrade and misfire, so weigh short-term damage against long-term reliability. Always recover HP / craft ammunition during the non-combat moments between fights.",
      },
    ],
    faqIds: ["starting-weapon", "boss-flashbang"],
    relatedPageIds: ["combat", "boss-guide", "boss-weaknesses", "skills", "throwables"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 15. random-events
  {
    id: "random-events",
    translationKey: "random-events",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/random-events",
    url: "/guides/random-events/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Random Events: How They Work",
    seoTitle: "Tunnel Escape Fates Entwined Random Events: How They Work",
    metaDescription:
      "Tunnel Escape Fates Entwined random events covering the four named categories, progress-bar triggers, black-cat encounters, Quiet Place, and Annoying Otaku NPC.",
    summary:
      "Each stage is selected from Noah's computer-room hub and Olivenia explores via a progress-bar system; random events trigger as the bar fills.",
    hero: {
      eyebrow: "Random Events",
      assetId: "loot-street-choice",
      subtitle:
        "As the progress bar fills, random events trigger; once the bar is full, that stage's boss is reached. Because the events are seeded by exploration progress rather than chosen from a menu, the same stage can play out very differently from run to run.",
      ctas: [
        { label: "Chests and Drinks", href: "/guides/chests-and-drinks/" },
        { label: "Walkthrough", href: "/guides/walkthrough/" },
      ],
    },
    quickAnswer:
      "Four named random-event categories: meet other characters, open chests with valuable loot, buy stat-altering drinks, defeat thieving little rodents. Additional: black-cat encounters (Fish raises rate), stage-specific scripted triggers (Sewer ventilation event, Forest Park Quiet Place), and the 'Annoying Otaku' trader NPC after the first hub visit.",
    keyFacts: [
      { label: "Named categories", value: "4 (NPC, chests, drinks, rodents)" },
      { label: "Trigger", value: "Progress bar fills during exploration" },
      { label: "Trader NPC", value: "'Annoying Otaku' after first hub visit" },
    ],
    modules: [
      {
        id: "four-named-categories",
        type: "prose",
        heading: "The Four Named Event Categories",
        body:
          "The official English store description explicitly lists four random event categories that 'can be encountered at random':\n\n1. **Meet other characters** — Olivenia can run into survivors and NPCs during exploration, branching into dialogue, trading, or combat.\n2. **Open chests with valuable loot** — treasure chests drop valuable loot. Documented example: the Freemen's Laboratory chest in the Streets (Stage 1) opens on a clean run, destroys the chest, and later unlocks Virtual Battle Mode at the hub.\n3. **Buy stat-altering drinks** — Olivenia can purchase drinks that modify her stats. Specific drink names and exact stat values are not publicly listed; treat the drinks as stat-altering pickups without expecting a documented recipe list.\n4. **Defeat thieving little rodents** — combat encounters with small rodent enemies (the Pirate Mouse event enemy) that steal from Olivenia; she must defeat them to recover or protect her supplies.\n\nThe description closes with 'among many other events that can be encountered at random,' meaning the four listed categories are not exhaustive.",
      },
      {
        id: "additional-events",
        type: "prose",
        heading: "Additional Events Seen in Play",
        body:
          "- **Random black-cat encounters** across stages. Each cat type grants a different stat boost; carrying Fish raises the encounter rate.\n- **Stage-specific scripted triggers** — Sewers' 'the police officer's body has vanished' prompt leads into the Ventilation Shaft; Forest Park's 'Quiet Place' rest event unlocks the Devotion weapon on a clean run.\n- **Rare vendor spawns** — the 'Annoying Otaku' trader NPC appears at random after the first visit to a new hub. The first hub visit itself always has a guaranteed shop.",
      },
      {
        id: "hub-shop-rules",
        type: "prose",
        heading: "Hub Shop Rules",
        body:
          "The hub shop is guaranteed only on the first arrival at a new base. On later runs, you must randomly encounter the 'Annoying Otaku' NPC to trade.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["chests-and-drinks", "enemies", "progression", "walkthrough"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 16. chests-and-drinks
  {
    id: "chests-and-drinks",
    translationKey: "chests-and-drinks",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/chests-and-drinks",
    url: "/guides/chests-and-drinks/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Chests and Drinks: Loot Rules",
    seoTitle: "Tunnel Escape Fates Entwined Chests and Drinks: Loot Rules",
    metaDescription:
      "Tunnel Escape Fates Entwined chests and drinks as random events: chest loot, the clean-run Freemen's Lab trigger, stat-altering drinks, and shop context.",
    summary:
      "Two of the four named random-event categories surfaced in the official Steam description.",
    hero: {
      eyebrow: "Chests and Drinks",
      assetId: "random-event-hospital-npc",
      subtitle:
        "Both are encountered at random while Olivenia's exploration progress bar fills during a stage.",
      ctas: [
        { label: "Random Events", href: "/guides/random-events/" },
        { label: "Progression", href: "/guides/progression/" },
      ],
    },
    quickAnswer:
      "Chests contain 'valuable loot' according to the official description, but exact loot tables are not publicly listed. The only confirmed story-flagged chest is the Freemen's Laboratory chest in the Streets (clean-run only). Drinks are stat-altering consumables bought from a random vendor; specific names and values are not yet published.",
    keyFacts: [
      { label: "Story chest", value: "Freemen's Lab chest (clean run)" },
      { label: "Drink vendor", value: "Random NPC (Annoying Otaku)" },
      { label: "Stat details", value: "Not publicly documented" },
    ],
    modules: [
      {
        id: "chests",
        type: "prose",
        heading: "Chests",
        body:
          "- Chests contain 'valuable loot' according to the official description, but the exact loot table per chest is not publicly listed.\n- Documented chest examples from playtest / walkthrough coverage: the Freemen's Laboratory chest in the Streets (Stage 1) — opening it while on a clean run (Olivenia has not been forced into any prior event that removes that state) destroys the chest and later unlocks Virtual Battle Mode at the hub. This is the only chest whose contents are tied to a specific story flag.\n- Chests are not guaranteed; they appear at random along the exploration bar and their contents can vary by run.",
      },
      {
        id: "drinks",
        type: "prose",
        heading: "Drinks",
        body:
          "- The official description says Olivenia can 'buy stat-altering drinks' as a random encounter. The drinks are consumable purchases rather than pickups.\n- No specific drink name, no specific stat changed, and no exact magnitude is given in any available description of the game. Specific drink names, exact stat changes, magnitudes, prices, and spawn conditions are currently undocumented publicly.\n- The previous game's English text describes drinks as dispensed from vending machines, but the Fates Entwined store description only says 'buy drinks' / 'drinks that change stats' without naming a vendor.",
      },
      {
        id: "shop-context",
        type: "prose",
        heading: "Surrounding Shop Context",
        body:
          "- The hub shop where Olivenia 'buys new guns, upgrades, and useful items' is guaranteed only on the first arrival at a new hub. On subsequent runs, you must randomly encounter the 'Annoying Otaku' (厄介オタク) trader NPC to buy/sell. This is the same kind of random NPC encounter as the 'Meet other characters' line of the random-event description.\n- Stat-boost consumables also exist outside the random-event system: the Sewer walkthrough recommends a Stimulant (+30% damage) right before the second Sewer boss as a buffing item used outside of random events.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["random-events", "progression", "walkthrough"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 17. enemies
  {
    id: "enemies",
    translationKey: "enemies",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/enemies",
    url: "/guides/enemies/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Enemy Types: Per-Stage Roster",
    seoTitle: "Tunnel Escape Fates Entwined Enemy Types: Per-Stage Roster",
    metaDescription:
      "Tunnel Escape Fates Entwined enemy types across the five families with per-stage roster, counter-mechanics, and general strategy against groups and bosses.",
    summary:
      "Five broad classes: zombies, mutated creatures, infested animals, living plants, and weaponized machinery.",
    hero: {
      eyebrow: "Enemy Types",
      subtitle:
        "Every stage features a unique selection drawn from these categories and is capped by a stage boss. Random non-combat encounters include thieving little rodents (the Pirate Mouse event enemy), which steal loot until defeated.",
      ctas: [
        { label: "Zombie Enemies", href: "/guides/zombie-enemies/" },
        { label: "Boss Guide", href: "/guides/boss-guide/" },
      ],
    },
    quickAnswer:
      "Against groups: Molotov cocktails, flash grenades, or machine-gun suppression fire. Against a single remaining foe: Olivenia's kick saves ammunition. Against a boss that heals (added in v0.16.0a): interrupt the heal cast on the action bar with a kick or small-pistol shot. Pre-fight Stimulant (+30% damage) is best consumed when the blue stamina bar is nearly full.",
    keyFacts: [
      { label: "Families", value: "5 (zombies / mutated / animals / plants / machines)" },
      { label: "Heal interrupt", value: "Required for v0.16.0a+ bosses" },
      { label: "Stimulant timing", value: "Blue stamina bar near full" },
    ],
    modules: [
      {
        id: "counter-mechanic",
        type: "prose",
        heading: "Counter-Mechanic by Threat Type",
        body:
          "Throwable items are a major counter-mechanic:\n\n- **Flash grenades** blind or stun.\n- **Molotov cocktails** set targets on fire.\n- **High-explosive grenades** can blast enemies apart.\n\nWeapons and skills also matter: each gun has its own active skills (Rapid Fire for the pistol, Birdshot for the shotgun) and Olivenia can stack passive defenses. Some boss enemies are outright immune to certain negative status effects (introduced in v0.20.0a).",
      },
      {
        id: "per-stage-roster",
        type: "prose",
        heading: "Per-Stage Enemy Roster",
        body:
          "- **Stage 1 / Streets** — ordinary zombies alongside lab-themed monsters such as Subject F (a biological-weapon specimen) and Doctor Zombie.\n- **Stage 2 / Sewer** — Leech Humanoids and unique sewer bosses. Some sewer bosses resist abnormal effects; the Endless Nightmare boss is vulnerable to flash grenades.\n- **Stage 3 / Forest Park** — walking plants (Walkers, killed in one Molotov), Woodcutters (defeated with a kick and breath attack to save ammo), and Harpies (vulnerable to flash grenades). The Forest Park boss is immune to flash and stun and is protected by a 3-turn blue shield.\n- **Hidden** — the Revived Detective zombie is fought in the Sewers' Ventilation Shaft, unlocked by the 'police officer's body has vanished' random event; defeating it drops the Auto Shotgun.",
      },
      {
        id: "counter-strategies",
        type: "prose",
        heading: "General Counter-Strategies",
        body:
          "- Against groups: Molotov cocktails, flash grenades, or machine-gun suppression fire.\n- Against a single remaining foe: Olivenia's kick saves ammunition.\n- Against a boss that heals (added in v0.16.0a): interrupt the heal cast on the action bar with a kick or small-pistol shot.\n- Pre-fight Stimulant (+30% damage) is best consumed when the blue stamina bar is nearly full but not capped.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["zombie-enemies", "boss-guide", "combat-strategy"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 18. zombie-enemies
  {
    id: "zombie-enemies",
    translationKey: "zombie-enemies",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/zombie-enemies",
    url: "/guides/zombie-enemies/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Zombie Enemies and Counters",
    seoTitle: "Tunnel Escape Fates Entwined Zombie Enemies and Weaknesses",
    metaDescription:
      "Tunnel Escape Fates Entwined zombie enemies including Doctor Zombie, Revived Detective, Subject F, generic shambling zombies, and Leech Humanoids plus counters.",
    summary:
      "The story begins with a deadly virus outbreak; every stage is populated with undead variants.",
    hero: {
      eyebrow: "Zombie Enemies",
      subtitle:
        "Below are the confirmed named zombie-type enemies and their counters. Leeches and Boss-tier zombies get their own paragraphs because their counter rotations differ from generic shamblers.",
      ctas: [
        { label: "Enemy Types", href: "/guides/enemies/" },
        { label: "Throwables", href: "/guides/throwables/" },
      ],
    },
    quickAnswer:
      "Doctor Zombie: cheap kick. Revived Detective: Boss-tier, brings Stimulant and interrupts the heal cast. Subject F: lab specimen, bring molotovs. Generic shamblers: kick + pistol taps. Leech Humanoids: groups, cannot be interrupted by status — use machine-gun fire rather than flashbangs.",
    keyFacts: [
      { label: "Doctor Zombie", value: "Cheaply neutralized with kick" },
      { label: "Revived Detective", value: "Boss-tier — Stimulant + heal interrupt" },
      { label: "Leech Humanoids", value: "Status-immunity; machine-gun fire" },
    ],
    modules: [
      {
        id: "confirmed-roster",
        type: "prose",
        heading: "Confirmed Zombie Enemies",
        body:
          "| Enemy | Where | Counter |\n| --- | --- | --- |\n| Doctor Zombie | Stage 1 Street and Freeman's Laboratory area | Cheaply neutralized with Olivenia's kick. Has its own dedicated defeat animation. |\n| Revived Detective zombie | Sewers' Ventilation Shaft, after the 'police officer's body has vanished' event | Drops the Auto Shotgun. Boss-tier encounter; bring a Stimulant and interrupt its heal cast. |\n| Subject F | Lab-themed enemy tied to the underground laboratory arc; the Stage 2 boss drops its recipe | Treat as a lab specimen with biological-weapon properties; bring molotovs and finish with the same boss rotation. |\n| Generic shambling zombies | Street and Sewer stages | Kick to interrupt their red-zone telegraph; finish with pistol shots to save ammo. |\n| Leech Humanoids | Sewers | Attack in groups; cannot be interrupted by status effects, so use machine-gun fire rather than flashbangs. |",
      },
      {
        id: "how-to-beat",
        type: "prose",
        heading: "How to Beat Zombie Groups",
        body:
          "- Molotov cocktails (fire sets them alight) and flash grenades (blind them) are the headline counters.\n- Clusters of zombies in the sewer and forest park should be handled with throwables or machine-gun suppression fire.\n- A single remaining zombie can be kicked to conserve ammo.\n- Kicking and the pistol are also reliable for interrupting zombie attacks during the red telegraph zones that warn of incoming strikes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["enemies", "throwables", "boss-guide"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },

  // 19. progression
  {
    id: "progression",
    translationKey: "progression",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/progression",
    url: "/guides/progression/",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Tunnel Escape Fates Entwined Roguelite Progression: Shop",
    seoTitle: "Tunnel Escape Fates Entwined Roguelite Progression and Shop",
    metaDescription:
      "Tunnel Escape Fates Entwined roguelite progression covering what carries over between runs, hub shop categories, crafting overlap, and shop-timing rules.",
    summary:
      "What persists between missions and what resets each run.",
    hero: {
      eyebrow: "Roguelite Progression",
      subtitle:
        "What persists between missions and what resets each run are easy to track once you know what to look for, and this page also covers the hub shop categories that gate most of the per-stage upgrades.",
      ctas: [
        { label: "Crafting Combos", href: "/guides/crafting-combos/" },
        { label: "Skills & Unlock Order", href: "/guides/skills/" },
      ],
    },
    quickAnswer:
      "Carries over between missions: unlocked skills, purchased and looted equipment, EXP and level (even on a full defeat or 100% virus infection). Resets each run: regular ammo, healing and consumable situational items, and per-run state like clean-run / virgin state. Hub shop sells new guns, armor upgrades, tactical accessories, and consumables.",
    keyFacts: [
      { label: "Carries over", value: "Skills, gear, EXP, level" },
      { label: "Resets", value: "Ammo, healing items, clean-run state" },
      { label: "Shop guarantee", value: "Only on first arrival at a new hub" },
    ],
    modules: [
      {
        id: "what-carries-over",
        type: "prose",
        heading: "What Carries Over Between Missions",
        body:
          "- **Unlocked skills** — every active and passive you spent skill points on at the hub stays unlocked.\n- **Purchased and looted equipment** — new guns, armor upgrades, and useful items bought at the hub stay in your roster.\n- **EXP and level** — even on a full defeat or 100% virus infection, Olivenia returns to the hub but keeps every skill, passive, level, and experience already earned. Progress is never lost.",
      },
      {
        id: "what-resets",
        type: "prose",
        heading: "What Resets Each Run",
        body:
          "- **Ammo** for regular firearms (pistol, shotgun, machine gun, sniper, GL, RPG).\n- **Healing and consumable situational items** (Med kits, Healing Donut, Stimulants, throwables in your pouch).\n- **Per-run state** like clean-run / virgin state for unlocking Freemen's Lab chest, Devotion, Magnum, etc.",
      },
      {
        id: "hub-shop",
        type: "prose",
        heading: "What the Hub Shop Sells",
        body:
          "The hub shop is the between-missions merchant where the roguelite economy lives. Per the official Steam description, the shop sells 'new guns, upgrades, and useful items.' Confirmed shop categories:\n\n- **New guns** — including the Machine Gun (bought from the Sewer hub for 1,000 + 1,500 currency plus 150 rounds) and the Sniper Rifle (bought from the CEO Evacuation Route).\n- **Armor upgrades** — purchased between missions using collected resources.\n- **Tactical accessories** — permanent stat boosters and unlock items.\n- **Consumables** — meds, throwables, and ammo refills.",
      },
      {
        id: "crafting-loop",
        type: "prose",
        heading: "Crafting as Part of the Same Loop",
        body:
          "The Crafting System is unlocked during a run and overlaps with the shop: recovery items, stronger consumables, and ammunition for a secret weapon can be assembled outside of battle, and these crafted goods are what you buy or refine at the merchant. Convert metal into Shotgun Shells (best profit) or SMG bullets (second best) at the crafting bench between encounters.",
      },
      {
        id: "shop-like-sources",
        type: "prose",
        heading: "Two Other Shop-Like Sources of Upgrades Inside Runs",
        body:
          "1. **Random-event vending machines** — Olivenia can buy stat-altering drinks that permanently modify her stats for that run. Specific drink names and exact stat values are not publicly listed.\n2. **Hidden chests** — drop 'valuable loot' from random encounters; contents are run-dependent.",
      },
      {
        id: "weapons-upgrades",
        type: "prose",
        heading: "Weapons Upgrades via the Skill Tree",
        body:
          "Each gun has its own active skill tree unlocked over time, with named examples being Rapid Fire for the pistol and Birdshot for the shotgun. Passives supplement those actives by boosting defenses, AGI, attack, and ammo efficiency. Some bosses drop unique accessories (e.g. Everlasting Pen from the CEO Evacuation Route at 80% exploration) that act as flat upgrade items.",
      },
      {
        id: "shop-timing-rule",
        type: "prose",
        heading: "Shop Timing Rule",
        body:
          "Shops are guaranteed only the first time you reach a new hub for a given stage. After that, restocking depends on randomly encountering the merchant NPC (the 'Annoying Otaku') during exploration. Plan major purchases — especially weapons — for the first hub visit of each new stage.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["crafting-combos", "skills", "walkthrough"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-09",
  },
];