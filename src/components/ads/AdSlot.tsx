"use client";

import { useEffect, useState } from "react";
import { ads, adInventory } from "@/data/ads";
import { bannerSize, selectAdUnit } from "@/lib/ad-placement";
import type { AdDevice, AdInventory, AdPlacement } from "@/types/ads";

const inventory = adInventory as AdInventory;
const legacySlots: Record<AdPlacement, string> = {
  "responsive-banner": "page-top", "native-banner": "guide-native", "right-rail": "guide-rail",
};

function appendExecutableAdMarkup(container: HTMLElement, code: string): void {
  const template = document.createElement("template");
  template.innerHTML = code;
  for (const child of Array.from(template.content.childNodes)) {
    if (child instanceof HTMLScriptElement) {
      const script = document.createElement("script");
      for (const attribute of Array.from(child.attributes)) script.setAttribute(attribute.name, attribute.value);
      if (child.src && !child.hasAttribute("async")) script.async = false;
      script.text = child.text;
      container.appendChild(script);
    } else container.appendChild(document.importNode(child, true));
  }
}

function localPreview(): boolean {
  return ["127.0.0.1", "localhost", "[::1]"].includes(window.location.hostname) &&
    (window as Window & { __GAME_WORKFLOW_AD_PREVIEW__?: boolean }).__GAME_WORKFLOW_AD_PREVIEW__ === true;
}

/** Render a decided position. Alternatives fit their container; creatives are never CSS-scaled. */
export function AdSlot({ slot, placement, device }: { slot?: string; placement?: AdPlacement; device?: AdDevice }) {
  const slotId = slot ?? (placement ? legacySlots[placement] : "");
  const [host, setHost] = useState<HTMLDivElement | null>(null);
  const [frame, setFrame] = useState<HTMLDivElement | null>(null);
  const [measurement, setMeasurement] = useState<{ device: AdDevice; width: number; preview: boolean } | null>(null);
  useEffect(() => {
    if (!host) return;
    const update = () => setMeasurement({ device: window.innerWidth >= 900 ? "desktop" : "mobile", width: host.getBoundingClientRect().width, preview: localPreview() });
    const observer = new ResizeObserver(update);
    observer.observe(host);
    window.addEventListener("resize", update);
    update();
    return () => { observer.disconnect(); window.removeEventListener("resize", update); };
  }, [host]);
  const unit = measurement && (!device || measurement.device === device) ? selectAdUnit(inventory, slotId, measurement.device, measurement.width) : null;
  const code = unit ? ads.units[unit.key] ?? "" : "";
  const preview = measurement?.preview === true;
  const shown = !!unit && (preview || !!code.trim());
  const size = unit ? bannerSize(unit) : null;
  useEffect(() => {
    if (!frame) return;
    if (preview) return;
    frame.replaceChildren();
    if (!unit || unit.type === "Smartlink" || !code.trim()) return;
    appendExecutableAdMarkup(frame, code);
    return () => frame.replaceChildren();
  }, [frame, code, preview, unit]);
  return (
    <div ref={setHost} className="ad-position" data-ad-position={slotId}>
      {shown && unit ? (
        <aside className="ad-slot" aria-label="Advertisement" data-ad-provider="adsterra" data-ad-slot={slotId}
          data-ad-unit={unit.key} data-ad-device={measurement?.device} data-ad-size={unit.size ?? unit.type} data-ad-preview={preview ? "true" : undefined}>
          {unit.type === "Smartlink" ? (
            preview ? <span className="ad-preview-sponsored">Sponsored Link · {slotId}</span> :
              <a className="sponsored-link" href={code} target="_blank" rel="nofollow sponsored noopener noreferrer">Sponsored Link</a>
          ) : (
            <div ref={setFrame} className={preview ? "ad-frame ad-preview-frame" : "ad-frame"}
              style={size ? { width: size.width, height: size.height } : preview ? { width: "100%", minHeight: 120 } : undefined}>
              {preview ? <span>Advertisement · {unit.size ?? "Native"} · {slotId}</span> : null}
            </div>
          )}
        </aside>
      ) : null}
    </div>
  );
}

export function Smartlink() { return <AdSlot slot="footer-sponsored" />; }
