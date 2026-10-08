import type { StepsModule } from "@/types/modules";
import { RichText } from "@/components/content/RichText";
import { AssetMedia } from "@/components/media/AssetMedia";

export function StepList({ guideModule }: { guideModule: StepsModule }) {
  return (
    <section id={guideModule.id} className="content-module">
      <h2>{guideModule.heading}</h2>
      <ol className="step-list">
        {guideModule.items.map((item, index) => (
          <li key={`${item.title}-${index}`} className="step-item">
            <span className="step-number" aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <h3>{item.title}</h3>
              <RichText text={item.body} />
              {item.assetId ? (
                <AssetMedia
                  assetId={item.assetId}
                  className="v4-step-media"
                  sizes="(max-width: 760px) 100vw, 36vw"
                />
              ) : null}
              {item.caption ? (
                <p className="v4-step-caption">{item.caption}</p>
              ) : null}
              {item.doneCondition ? (
                <p className="module-note">
                  <strong>Done when:</strong> {item.doneCondition}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
