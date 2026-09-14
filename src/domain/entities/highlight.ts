export interface HighlightMetric {
  readonly value: string;
  readonly label: string;
}

/**
 * A standout, story-driven moment worth surfacing on its own — distinct
 * from `Project` (which lists the systems/products built). Each
 * highlight links back to the original LinkedIn post it was shared in.
 */
export interface Highlight {
  readonly id: string;
  readonly title: string;
  readonly context: string;
  readonly period: string;
  readonly summary: string;
  readonly metrics: HighlightMetric[];
  readonly tags: string[];
  readonly linkedinUrl: string;
  /** Paths under /public — the screenshots shown in the card's carousel. */
  readonly images: string[];
}
