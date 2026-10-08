import type { AdDevice, AdInventory, AdUnitSpec } from "@/types/ads";

export function bannerSize(unit: AdUnitSpec): { width: number; height: number } | null {
  if (unit.type !== "Banner") return null;
  const [width, height] = (unit.size ?? "").split("x").map(Number);
  return width > 0 && height > 0 ? { width, height } : null;
}

export function selectAdUnit(inventory: AdInventory, slotId: string, device: AdDevice, availableWidth: number): AdUnitSpec | null {
  const slot = inventory.slots.find((position) => position.id === slotId);
  if (!slot || availableWidth <= 0) return null;
  for (const key of slot[device]) {
    const unit = inventory.adUnits.find((item) => item.key === key);
    if (!unit) continue;
    if (unit.size === "300x250" && (device !== "mobile" || slot.page_kind !== "home")) continue;
    const size = bannerSize(unit);
    if (!size || size.width <= availableWidth) return unit;
  }
  return null;
}

export function validateAdInventory(inventory: AdInventory): string[] {
  const errors: string[] = [];
  const allowedSizes = new Set(["728x90", "468x60", "320x50", "160x300", "160x600", "300x250"]);
  const id = /^[a-z][a-z0-9-]*$/;
  if (inventory.schema !== "adsterra-placement-inventory-v1" || !inventory.layout_version?.trim()) errors.push("Invalid ad inventory schema/version");
  const units = new Map(inventory.adUnits.map((unit) => [unit.key, unit]));
  if (!units.size || units.size !== inventory.adUnits.length) errors.push("Ad unit keys must be nonempty and unique");
  for (const unit of inventory.adUnits) {
    if (!id.test(unit.key) || !["Banner", "Native Banner", "Smartlink"].includes(unit.type)) errors.push(`Invalid ad unit ${unit.key}`);
    if (unit.type === "Banner" ? !allowedSizes.has(unit.size ?? "") : unit.size !== undefined) errors.push(`Invalid size for ${unit.key}`);
  }
  const referenced = new Set<string>();
  const slots = new Set<string>();
  const usages: Array<{ slot: string; kind: string; device: AdDevice; key: string }> = [];
  for (const slot of inventory.slots) {
    if (!id.test(slot.id) || slots.has(slot.id) || !["all", "home", "guide", "hub", "workspace"].includes(slot.page_kind)) errors.push(`Invalid ad slot ${slot.id}`);
    slots.add(slot.id);
    if (!slot.desktop.length && !slot.mobile.length) errors.push(`${slot.id}: no enabled device`);
    for (const device of ["desktop", "mobile"] as const) {
      if (new Set(slot[device]).size !== slot[device].length) errors.push(`${slot.id}: duplicate variant`);
      const formats = new Set<string>();
      for (const key of slot[device]) {
        const unit = units.get(key);
        if (!unit) { errors.push(`${slot.id}: unknown unit ${key}`); continue; }
        referenced.add(key); formats.add(unit.type);
        if (unit.size === "300x250" && (device !== "mobile" || slot.page_kind !== "home")) errors.push(`${slot.id}: 300x250 only on mobile home`);
        if (device === "mobile" && ["728x90", "468x60", "160x300", "160x600"].includes(unit.size ?? "")) errors.push(`${slot.id}: desktop size on mobile`);
        usages.push({ slot: slot.id, kind: slot.page_kind, device, key });
      }
      if (formats.size > 1) errors.push(`${slot.id}: mixed candidate formats`);
    }
  }
  for (const [i, usage] of usages.entries()) {
    if (units.get(usage.key)?.type === "Smartlink") continue;
    for (const other of usages.slice(i + 1)) {
      if (other.slot !== usage.slot && other.key === usage.key && other.device === usage.device && (other.kind === usage.kind || [other.kind, usage.kind].includes("all"))) errors.push(`Coexisting slots reuse ${usage.key}`);
    }
  }
  if (!slots.size || referenced.size !== units.size) errors.push("Empty slots or unreferenced ad units");
  return errors;
}
