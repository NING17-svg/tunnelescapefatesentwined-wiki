export interface LocaleUiLabels {
  wikiNavigation?: string;
  homeDetails?: string;
  searchOpen: string;
  searchClose: string;
  searchPlaceholder: string;
  searchSubmit: string;
  searchLoading: string;
  searchError: string;
  searchNoResults: string;
  recentUpdates: string;
  lastReviewed: string;
  onThisPage?: string;
  answerContext?: string;
}

export interface SiteLocaleConfig {
  code: string;
  label: string;
  pathPrefix: string;
  htmlLang: string;
  openGraphLocale: string;
  ui: LocaleUiLabels;
}
