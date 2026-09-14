import { Profile } from "./profile";
import { Experience } from "./experience";
import { SkillGroup } from "./skill";
import { Project } from "./project";
import { Highlight } from "./highlight";
import { Education, Certification, LanguageSkill } from "./education";

/**
 * Everything the presentation layer needs to render one locale of the
 * site. This is the return type of the top-level use case
 * (`GetPortfolioContent`) — the single seam between the domain/
 * application layers and the React tree.
 */
export interface PortfolioContent {
  readonly locale: Locale;
  readonly profile: Profile;
  readonly experiences: Experience[];
  readonly skillGroups: SkillGroup[];
  readonly projects: Project[];
  readonly highlights: Highlight[];
  readonly education: Education[];
  readonly certifications: Certification[];
  readonly languages: LanguageSkill[];
  readonly nav: NavCopy;
}

export type Locale = "es" | "en";

export interface NavCopy {
  readonly links: { readonly id: string; readonly label: string }[];
  readonly resumeCta: string;
  readonly availableBadge: string;
}
