import { Locale, PortfolioContent } from "@/domain/entities";
import { PortfolioRepository } from "@/domain/repositories";

/**
 * The only use case this site needs today: resolve the full content
 * bundle for a given locale. It knows nothing about Next.js, React,
 * or where the data actually lives — it only depends on the
 * `PortfolioRepository` port.
 */
export class GetPortfolioContent {
  constructor(private readonly repository: PortfolioRepository) {}

  execute(locale: Locale): Promise<PortfolioContent> {
    return this.repository.getContent(locale);
  }
}
