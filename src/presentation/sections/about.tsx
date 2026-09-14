"use client";

import { GraduationCap, Award, Globe2 } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { Container } from "@/presentation/components/ui/container";
import { SectionHeading } from "@/presentation/components/ui/section-heading";
import { Reveal } from "@/presentation/components/ui/reveal";

export function About() {
  const { content, locale } = usePortfolioContent();
  const { profile, education, certifications, languages } = content;

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={locale === "es" ? "Sobre mí" : "About"}
          title={locale === "es" ? "Mi experencia" : "My experience"}
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="glass-panel rounded-3xl border border-border p-8 sm:p-10">
            <p className="text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <InfoPill icon={Globe2} label={profile.location} />
              <InfoPill icon={GraduationCap} label={education[0]?.status ?? ""} />
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1} className="glass-panel rounded-3xl border border-border p-6">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <GraduationCap size={16} className="text-accent-strong" />
                {locale === "es" ? "Educación" : "Education"}
              </h3>
              <ul className="mt-4 space-y-3">
                {education.map((edu) => (
                  <li key={edu.degree} className="text-sm">
                    <p className="font-medium text-foreground">{edu.degree}</p>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="mt-0.5 text-xs text-accent-strong">{edu.status}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.18} className="glass-panel rounded-3xl border border-border p-6">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Award size={16} className="text-accent-strong" />
                {locale === "es" ? "Certificaciones" : "Certifications"}
              </h3>
              <ul className="mt-4 space-y-2">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{cert.name}</span>
                    <span className="text-xs text-muted-foreground">{cert.provider}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="glass-panel rounded-3xl border border-border p-6">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Globe2 size={16} className="text-accent-strong" />
                {locale === "es" ? "Idiomas" : "Languages"}
              </h3>
              <ul className="mt-4 space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{lang.name}</span>
                      <span className="text-xs text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-hover">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                        style={{ width: `${lang.proficiency}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoPill({ icon: Icon, label }: { icon: typeof Globe2; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1.5 text-xs text-muted">
      <Icon size={13} className="text-accent-strong" />
      {label}
    </span>
  );
}
