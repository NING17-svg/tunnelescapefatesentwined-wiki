import Link from "next/link";
import { AssetMedia } from "@/components/media/AssetMedia";
import type { ProgressionModule } from "@/types/modules";

export function Progression({ guideModule }: { guideModule: ProgressionModule }) {
  return (
    <section
      id={guideModule.id}
      className="content-module v4-progression"
      aria-labelledby={`${guideModule.id}-heading`}
    >
      <h2 id={`${guideModule.id}-heading`}>{guideModule.heading}</h2>
      <ol className="v4-progression__stages">
        {guideModule.stages.map((stage, index) => (
          <li key={`${stage.href}-${index}`} className="v4-progression__stage">
            <span className="v4-progression__index" aria-hidden="true">
              {index + 1}
            </span>
            {stage.visual ? (
              <div className="v4-progression__visual">{stage.visual}</div>
            ) : stage.assetId ? (
              <AssetMedia
                assetId={stage.assetId}
                className="v4-progression__media"
                sizes="(max-width: 760px) 100vw, 36vw"
              />
            ) : null}
            {stage.label ? (
              <p className="v4-progression__label">{stage.label}</p>
            ) : null}
            <h3>
              <Link href={stage.href}>{stage.title}</Link>
            </h3>
            {stage.description ? <p>{stage.description}</p> : null}
            {stage.caption ? <p className="v4-progression__caption">{stage.caption}</p> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
