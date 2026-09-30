import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#13110E",
    surface1: "#1A1714",
    surface2: "#221E1A",
    surface3: "#2B2620",
    surfaceInverse: "#F2EDE2",
    textPrimary: "#EDE6D7",
    textMuted: "#A8A091",
    textInverse: "#17140E",
    textOnAccentPrimary: "#0F0D08",
    textLink: "#E0A85A",
    focusRing: "#FFB85C",
    line: "#2E2823",
    lineStrong: "#3F382F",
    accentPrimary: "#9CAE5B",
    accentSecondary: "#C28845",
    accentBright: "#E0A85A",
    statusConfirmed: "#7FB069",
    statusCaution: "#D9A441",
    statusUnknown: "#8C8F95",
  },
  typography: {
    headingFamily:
      "'Inter Tight', 'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif",
    bodyFamily:
      "'Inter', 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.35)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.55, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "compact-index",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;
