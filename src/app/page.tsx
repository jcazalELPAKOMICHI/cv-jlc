import { getPortfolioContent } from "@/infrastructure/composition/container";
import { LocaleProvider } from "@/presentation/providers/locale-provider";
import { HomeView } from "@/presentation/home-view";
import { Locale } from "@/domain/entities";

const DEFAULT_LOCALE: Locale = "es";

// Server Component: the only place that talks to the use case /
// composition root. Both locales are resolved here so the client can
// switch languages instantly, with no refetch.
export default async function Home() {
  const [es, en] = await Promise.all([getPortfolioContent("es"), getPortfolioContent("en")]);

  return (
    <LocaleProvider initialLocale={DEFAULT_LOCALE} contentByLocale={{ es, en }}>
      <HomeView />
    </LocaleProvider>
  );
}
