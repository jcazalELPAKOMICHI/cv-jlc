"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Locale, PortfolioContent } from "@/domain/entities";

interface LocaleContextValue {
  locale: Locale;
  content: PortfolioContent;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
  initialLocale: Locale;
  contentByLocale: Record<Locale, PortfolioContent>;
  children: React.ReactNode;
}

/**
 * Both locales are fetched once on the server (via the use case) and
 * handed to this provider — switching languages is then instant,
 * client-side state with no refetch and no layout flash.
 */
export function LocaleProvider({ initialLocale, contentByLocale, children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      content: contentByLocale[locale],
      toggleLocale: () => setLocale((prev) => (prev === "es" ? "en" : "es")),
    }),
    [locale, contentByLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function usePortfolioContent() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("usePortfolioContent must be used within a LocaleProvider");
  }
  return ctx;
}
