import { Locale, PortfolioContent } from "@/domain/entities";
import { PortfolioRepository } from "@/domain/repositories";
import { esContent } from "../content/es";
import { enContent } from "../content/en";

const CONTENT_BY_LOCALE: Record<Locale, PortfolioContent> = {
  es: esContent,
  en: enContent,
};

/**
 * Adapter for `PortfolioRepository` backed by static, locally-authored
 * content. Swapping this for a CMS-backed repository later only means
 * writing a new adapter here — nothing above this layer changes.
 */
export class StaticPortfolioRepository implements PortfolioRepository {
  async getContent(locale: Locale): Promise<PortfolioContent> {
    return CONTENT_BY_LOCALE[locale];
  }
}
