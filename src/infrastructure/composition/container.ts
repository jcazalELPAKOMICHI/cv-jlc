import { Locale, PortfolioContent } from "@/domain/entities";
import { GetPortfolioContent } from "@/application/use-cases";
import { StaticPortfolioRepository } from "../repositories/static-portfolio-repository";

/**
 * Composition root. This is the one place in the codebase that is
 * allowed to know about concrete implementations — everywhere else
 * depends only on the domain interfaces/use cases. Called exclusively
 * from Server Components (see `src/app/page.tsx`).
 */
const portfolioRepository = new StaticPortfolioRepository();
const getPortfolioContentUseCase = new GetPortfolioContent(portfolioRepository);

export function getPortfolioContent(locale: Locale): Promise<PortfolioContent> {
  return getPortfolioContentUseCase.execute(locale);
}
