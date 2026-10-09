import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Page Builder replaces the sample inventory and leaves matching codes empty; only Adsterra Integrator supplies real codes.
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : 'ff7198bf48fa15e8f9ff9dc7d81a3453',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/ff7198bf48fa15e8f9ff9dc7d81a3453\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : '780aa81a150a2546296835d0cfce7383',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/780aa81a150a2546296835d0cfce7383\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : '7bb379de48d048914e175bc794f148e9',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7bb379de48d048914e175bc794f148e9\"></script>",
    "home-after-entry-native-banner": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/8925210ad5c991989031c3b7752e96ce\"></script>\n<div id=\"container-8925210ad5c991989031c3b7752e96ce\"></div>",
    "home-topic-break-728x90": "<script>\n  atOptions = {\n    'key' : 'ff7198bf48fa15e8f9ff9dc7d81a3453',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/ff7198bf48fa15e8f9ff9dc7d81a3453\"></script>",
    "home-topic-break-468x60": "<script>\n  atOptions = {\n    'key' : '780aa81a150a2546296835d0cfce7383',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/780aa81a150a2546296835d0cfce7383\"></script>",
    "home-topic-break-300x250": "<script>\n  atOptions = {\n    'key' : 'd267f6915615345c431e2c0b5b4f4966',\n    'format' : 'iframe',\n    'height' : 250,\n    'width' : 300,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/d267f6915615345c431e2c0b5b4f4966\"></script>",
    "home-directory-end-468x60": "<script>\n  atOptions = {\n    'key' : '780aa81a150a2546296835d0cfce7383',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/780aa81a150a2546296835d0cfce7383\"></script>",
    "home-directory-end-320x50": "<script>\n  atOptions = {\n    'key' : '7bb379de48d048914e175bc794f148e9',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7bb379de48d048914e175bc794f148e9\"></script>",
    "guide-native-native-banner": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/8925210ad5c991989031c3b7752e96ce\"></script>\n<div id=\"container-8925210ad5c991989031c3b7752e96ce\"></div>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : 'ff7198bf48fa15e8f9ff9dc7d81a3453',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/ff7198bf48fa15e8f9ff9dc7d81a3453\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : '780aa81a150a2546296835d0cfce7383',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/780aa81a150a2546296835d0cfce7383\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : '7bb379de48d048914e175bc794f148e9',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7bb379de48d048914e175bc794f148e9\"></script>",
    "guide-before-faq-468x60": "<script>\n  atOptions = {\n    'key' : '780aa81a150a2546296835d0cfce7383',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/780aa81a150a2546296835d0cfce7383\"></script>",
    "guide-before-faq-320x50": "<script>\n  atOptions = {\n    'key' : '7bb379de48d048914e175bc794f148e9',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/7bb379de48d048914e175bc794f148e9\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/674b40ce8bb28631797879ecb8929823",
  },
};

export const adInventory = inventory;