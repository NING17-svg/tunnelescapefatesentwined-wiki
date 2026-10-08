import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder replaces the sample inventory and leaves matching codes empty; only Adsterra Integrator supplies real codes.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "",
    "page-top-468x60": "",
    "page-top-320x50": "",
    "home-after-entry-native-banner": "",
    "home-topic-break-728x90": "",
    "home-topic-break-468x60": "",
    "home-topic-break-300x250": "",
    "home-directory-end-468x60": "",
    "home-directory-end-320x50": "",
    "guide-native-native-banner": "",
    "guide-section-break-728x90": "",
    "guide-section-break-468x60": "",
    "guide-section-break-320x50": "",
    "guide-before-faq-468x60": "",
    "guide-before-faq-320x50": "",
    "footer-sponsored-smartlink": "",
  },
};

export const adInventory = inventory;