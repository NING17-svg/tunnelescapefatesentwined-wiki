"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Responsive chapter/guide navigation; appearance and breakpoint belong to the caller. */
export function GuideDisclosure({ title, className = "", desktopMinWidth = 800, children }: {
  title: string; className?: string; desktopMinWidth?: number; children: ReactNode;
}) {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${desktopMinWidth}px)`);
    const update = () => setOpen(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [desktopMinWidth]);
  return <details className={className} open={open} onToggle={event => setOpen(event.currentTarget.open)}>
    <summary>{title}</summary>{children}
  </details>;
}
