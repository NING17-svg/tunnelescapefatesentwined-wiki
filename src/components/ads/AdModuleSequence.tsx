import { Fragment } from "react";
import { AdSlot } from "@/components/ads/AdSlot";
import { ModuleRenderer } from "@/components/content/ModuleRenderer";
import type { AdDevice } from "@/types/ads";
import type { GuideModule } from "@/types/modules";

export interface ModuleAdAnchor { after: string; slot: string; device?: AdDevice }

/** Anchors refer to complete authored modules, never paragraph/row indexes. */
export function AdModuleSequence({ modules, anchors = [] }: { modules: GuideModule[]; anchors?: ModuleAdAnchor[] }) {
  for (const anchor of anchors) {
    if (!modules.some((module) => module.id === anchor.after)) throw new Error(`Missing ad chapter anchor: ${anchor.after}`);
  }
  return <>{modules.map((module) => <Fragment key={module.id}>
    <ModuleRenderer modules={[module]} />
    {anchors.filter((anchor) => anchor.after === module.id).map((anchor) => <AdSlot key={anchor.slot + (anchor.device ?? "all")} slot={anchor.slot} device={anchor.device} />)}
  </Fragment>)}</>;
}
