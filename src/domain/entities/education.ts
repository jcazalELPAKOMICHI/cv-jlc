export interface Education {
  readonly degree: string;
  readonly institution: string;
  readonly status: string;
}

export interface Certification {
  readonly name: string;
  readonly provider: string;
}

export interface LanguageSkill {
  readonly name: string;
  readonly level: string;
  readonly proficiency: number; // 0-100, used only for the visual meter
}
