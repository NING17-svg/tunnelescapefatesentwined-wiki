import type { ThemeConfig } from "@/types/theme";

// Tunnels, neon hazard tape, rust, and chemical decay. Warm accent against dark surfaces.
export const theme: ThemeConfig = {
  mode: "dark",
  navigation: "wiki-sidebar",
  tokens: {
    pageBg: "#0a0e10",
    surface1: "#161b20",
    surface2: "#1f262c",
    surface3: "#2a323a",
    surfaceInverse: "#f4e7d2",
    textPrimary: "#f0ece4",
    textMuted: "#a9b3bd",
    textInverse: "#0a0e10",
    textOnAccentPrimary: "#0a0e10",
    textLink: "#f0a04b",
    focusRing: "#f0a04b",
    line: "#2f3a42",
    lineStrong: "#4a5760",
    accentPrimary: "#d97706",
    accentSecondary: "#65a30d",
    accentBright: "#f0a04b",
    statusConfirmed: "#65a30d",
    statusCaution: "#d97706",
    statusUnknown: "#9ca3af",
  },
  typography: {
    headingFamily: '"Rajdhani", "Inter", system-ui, sans-serif',
    bodyFamily: '"Inter", system-ui, sans-serif',
    headingWeight: 700,
  },
  shape: { radius: "8px", borderWidth: "1px", shadow: "0 1px 2px rgba(0,0,0,.4)", hoverLift: "2px" },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.6, position: "center" },
  variants: { home: "guide-portal", hub: "grouped-list", content: "reading-right-rail", workspace: "full-width" },
  decoration: { motif: "lines", intensity: "low" },
};