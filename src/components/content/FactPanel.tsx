import Link from "next/link";
import type { FactPanelModule } from "@/types/modules";

export function FactPanel({ guideModule }: { guideModule: FactPanelModule }) {
  return (
    <section
      id={guideModule.id}
      className="content-module v4-fact-panel"
      aria-labelledby={`${guideModule.id}-heading`}
    >
      <h2 id={`${guideModule.id}-heading`}>{guideModule.heading}</h2>
      <dl className="v4-fact-panel__facts">
        {guideModule.facts.map((fact, index) => (
          <div key={`${fact.label}-${index}`} className="v4-fact-panel__fact">
            <dt>{fact.label}</dt>
            <dd>
              {fact.href ? <Link href={fact.href}>{fact.value}</Link> : fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
