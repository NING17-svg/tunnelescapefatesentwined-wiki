import { WikiNavigation } from "@/components/layout/WikiNavigation";
import type { ThemeConfig } from "@/types/theme";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { theme } from "@/data/theme";
import { getLocaleConfig } from "@/lib/localization";
import { themeClassName, themeStyle } from "@/lib/theme";

export function PageShell({
  children,
  locale,
  currentUrl = "/",
  themeConfig = theme,
  navigationDesktopMinWidth,
}: {
  children: React.ReactNode;
  locale: string;
  currentUrl?: string;
  themeConfig?: ThemeConfig;
  navigationDesktopMinWidth?: number;
}) {
  const localeConfig = getLocaleConfig(locale);

  return (
    <div
      className={themeClassName(themeConfig)}
      style={themeStyle(themeConfig)}
      data-locale={locale}
    >
      <Header locale={locale} />
      <div className="site-workspace">
        {themeConfig.navigation === "wiki-sidebar" ? <WikiNavigation locale={locale} currentUrl={currentUrl} desktopMinWidth={navigationDesktopMinWidth} /> : null}
        <main lang={localeConfig.htmlLang}>{children}</main>
      </div>
      <Footer locale={locale} />
    </div>
  );
}
