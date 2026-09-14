import { SocialLink } from "./social-link";

/**
 * The person at the center of the portfolio. One `Profile` exists per
 * locale — the copy changes, the identity doesn't.
 */
export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly tagline: string;
  readonly summary: string;
  readonly location: string;
  readonly availability: string;
  readonly avatarSrc: string;
  readonly resumeHref: string;
  readonly socialLinks: SocialLink[];
  readonly stats: ProfileStat[];
}

export interface ProfileStat {
  readonly value: string;
  readonly label: string;
}
