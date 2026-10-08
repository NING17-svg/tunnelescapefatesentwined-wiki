"use client";

import Image from "next/image";
import React, { useState } from "react";
import { assetManifest } from "@/data/assets";
import type { AssetManifest } from "@/types/assets";

interface AssetMediaProps { assetId?: string; className?: string; priority?: boolean; sizes?: string }

export function AssetMedia({ assetId, className = "", priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }: AssetMediaProps) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const assets: AssetManifest = assetManifest;
  const asset = assetId && Object.prototype.hasOwnProperty.call(assetManifest, assetId) ? assets[assetId] : undefined;
  if (!asset || failedSrc === asset.src) {
    const fallback = asset?.fallback ?? "surface";
    return <div className={`asset-media asset-fallback fallback-${fallback} ${fallback === "hide" ? "is-hidden" : ""} ${className}`} aria-hidden="true" />;
  }
  return <figure className={`asset-media ${className}`}>
    <Image unoptimized src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} priority={priority} sizes={sizes}
      onError={() => setFailedSrc(asset.src)} style={{ objectPosition: asset.objectPosition ?? "center" }} />
  </figure>;
}
