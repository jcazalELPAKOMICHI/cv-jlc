export type SocialPlatform = "github" | "linkedin" | "whatsapp" | "email";

/**
 * A single external / contact link shown in the UI (navbar, hero, footer).
 * Kept intentionally minimal — the domain layer only cares about the shape
 * of the data, never about how it is rendered.
 */
export interface SocialLink {
  readonly platform: SocialPlatform;
  readonly label: string;
  readonly href: string;
}
