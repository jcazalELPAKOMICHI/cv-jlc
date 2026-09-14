import { Locale, PortfolioContent } from "../entities";

/**
 * Port defined by the domain layer. Infrastructure provides the
 * adapter (today: static in-memory content; tomorrow, if needed: a
 * headless CMS or API) without the application layer ever knowing
 * which one is plugged in.
 */
export interface PortfolioRepository {
  getContent(locale: Locale): Promise<PortfolioContent>;
}
