import Link from "next/link";
import { Smartlink } from "@/components/ads/AdSlot";
import { footerNavigation, navigationLabel } from "@/data/navigation";
import { localizePath } from "@/lib/localization";

export function Footer({ locale }: { locale: string }) {
  return (
    <footer className="site-footer">
      <nav aria-label="Footer navigation">
        {footerNavigation.map((item) => {
          const href = localizePath(item.href, locale);
          return (
            <Link key={href} href={href}>
              {navigationLabel(item, locale)}
            </Link>
          );
        })}
      </nav>
      <Smartlink />
    </footer>
  );
}
