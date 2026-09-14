/**
 * A named group of bullet points within a role, e.g. "Key achievements"
 * or "Earlier role within the same company". Optional — most entries
 * only need the top-level `highlights`.
 */
export interface ExperienceGroup {
  readonly label: string;
  readonly items: string[];
}

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly period: string;
  readonly current: boolean;
  readonly highlights: string[];
  readonly groups: ExperienceGroup[];
}
