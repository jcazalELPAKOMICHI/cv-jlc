export interface Project {
  readonly id: string;
  readonly title: string;
  readonly context: string;
  readonly period: string;
  readonly description: string;
  readonly tags: string[];
  readonly featured: boolean;
}
