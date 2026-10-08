import Link from "next/link";
import { AssetMedia } from "@/components/media/AssetMedia";
import type { FeaturedGuidesModule } from "@/types/modules";

export function FeaturedGuides({
  guideModule,
}: {
  guideModule: FeaturedGuidesModule;
}) {
  const { lead, supporting } = guideModule;

  return (
    <section
      id={guideModule.id}
      className="content-module v4-featured-guides"
      aria-labelledby={`${guideModule.id}-heading`}
    >
      <h2 id={`${guideModule.id}-heading`}>{guideModule.heading}</h2>
      <Link
        href={lead.href}
        className="v4-featured-guides__lead"
        data-has-image={Boolean(lead.assetId)}
      >
        {lead.assetId ? (
          <AssetMedia
            assetId={lead.assetId}
            className="v4-featured-guides__lead-media"
            sizes="(max-width: 760px) 100vw, 42vw"
          />
        ) : null}
        <span className="v4-featured-guides__lead-copy">
          <span className="v4-featured-guides__lead-title">{lead.title}</span>
          {lead.description ? (
            <span className="v4-featured-guides__description">
              {lead.description}
            </span>
          ) : null}
        </span>
      </Link>
      {supporting.length ? (
        <ul className="v4-featured-guides__supporting">
          {supporting.map((guide, index) => (
            <li key={`${guide.href}-${index}`}>
              <Link
                href={guide.href}
                className="v4-featured-guides__support-link"
                data-has-image={Boolean(guide.assetId)}
              >
                {guide.assetId ? (
                  <AssetMedia
                    assetId={guide.assetId}
                    className="v4-featured-guides__support-media"
                    sizes="(max-width: 760px) 25vw, 8vw"
                  />
                ) : null}
                <span className="v4-featured-guides__support-copy">
                  <span className="v4-featured-guides__support-title">
                    {guide.title}
                  </span>
                  {guide.description ? (
                    <span className="v4-featured-guides__description">
                      {guide.description}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
