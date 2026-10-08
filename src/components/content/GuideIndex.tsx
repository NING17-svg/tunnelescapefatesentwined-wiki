import Link from "next/link";
import type { GuideIndexModule } from "@/types/modules";

export function GuideIndex({ guideModule }: { guideModule: GuideIndexModule }) {
  return (
    <section
      id={guideModule.id}
      className="content-module v4-guide-index"
      aria-labelledby={`${guideModule.id}-heading`}
    >
      <h2 id={`${guideModule.id}-heading`}>{guideModule.heading}</h2>
      <div
        className="v4-guide-index__groups"
        data-columns={guideModule.columns ?? "auto"}
      >
        {guideModule.groups.map((group, groupIndex) => (
          <section
            key={`${group.title}-${groupIndex}`}
            className="v4-guide-index__group"
            aria-labelledby={`${guideModule.id}-group-${groupIndex}`}
          >
            <h3 id={`${guideModule.id}-group-${groupIndex}`}>{group.title}</h3>
            {group.description ? <p>{group.description}</p> : null}
            <ul className="v4-guide-index__links">
              {group.items.map((item, itemIndex) => (
                <li key={`${item.href}-${itemIndex}`}>
                  <Link href={item.href} className="v4-guide-index__link">
                    <span className="v4-guide-index__link-main">
                      <span className="v4-guide-index__label">{item.label}</span>
                      {item.badge ? (
                        <span className="v4-guide-index__badge">{item.badge}</span>
                      ) : null}
                    </span>
                    {item.description ? (
                      <span className="v4-guide-index__description">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
