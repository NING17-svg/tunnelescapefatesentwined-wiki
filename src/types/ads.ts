export const adUnitKeys = [
  "native-banner",
  "banner-728x90",
  "banner-468x60",
  "banner-320x50",
  "banner-160x600",
  "smartlink",
] as const;

export type AdUnitKey = (typeof adUnitKeys)[number];
export type AdPlacement = "responsive-banner" | "native-banner" | "right-rail";

export interface AdConfig {
  units: Record<string, string>;
}

export type AdDevice = "desktop" | "mobile";
export interface AdUnitSpec {
  key: string;
  type: "Banner" | "Native Banner" | "Smartlink";
  size?: string;
}
export interface AdPosition {
  id: string;
  page_kind: "all" | "home" | "guide" | "hub" | "workspace";
  desktop: string[];
  mobile: string[];
}
export interface AdInventory {
  schema: "adsterra-placement-inventory-v1";
  layout_version: string;
  adUnits: AdUnitSpec[];
  slots: AdPosition[];
}
