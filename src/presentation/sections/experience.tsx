"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { Container } from "@/presentation/components/ui/container";
import { SectionHeading } from "@/presentation/components/ui/section-heading";
import { Reveal } from "@/presentation/components/ui/reveal";
import { Experience as ExperienceEntity } from "@/domain/entities";
import { cn } from "@/presentation/utils/cn";

export function Experience() {
  const { content, locale } = usePortfolioContent();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={locale === "es" ? "Trayectoria" : "Journey"}
          title={locale === "es" ? "Experiencia profesional" : "Professional experience"}
          description={
            locale === "es"
              ? "Diez años construyendo productos móviles y web para banca y fintech, desde el código hasta la arquitectura."
              : "Ten years building mobile and web products for banking and fintech, from hands-on code to architecture."
          }
        />

        <div className="relative">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border-strong to-transparent sm:left-[19px]"
            aria-hidden
          />
          <ol className="space-y-4">
            {content.experiences.map((exp, index) => (
              <ExperienceItem key={exp.id} experience={exp} index={index} locale={locale} />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function ExperienceItem({
  experience,
  index,
  locale,
}: {
  experience: ExperienceEntity;
  index: number;
  locale: "es" | "en";
}) {
  const [open, setOpen] = useState(index === 0);
  const hasMore = experience.groups.length > 0;

  return (
    <Reveal delay={Math.min(index * 0.06, 0.3)}>
      <li className="relative pl-10 sm:pl-14">
        <span
          className={cn(
            "absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border sm:h-10 sm:w-10",
            experience.current
              ? "border-accent-strong bg-accent/20 text-accent-strong"
              : "border-border-strong bg-surface text-muted-foreground"
          )}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
        </span>

        <div className="glass-panel rounded-2xl border border-border p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">{experience.company}</h3>
                {experience.current && (
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent-strong">
                    {locale === "es" ? "Actual" : "Current"}
                  </span>
                )}
              </div>
              <p className="text-sm text-muted">{experience.role}</p>
            </div>
            <div className="flex flex-col items-end gap-1 text-right">
              <span className="font-mono text-xs text-muted-foreground">{experience.period}</span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin size={11} />
                {experience.location}
              </span>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {experience.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-strong" />
                {item}
              </li>
            ))}
          </ul>

          {hasMore && (
            <div className="mt-4">
              <button
                onClick={() => setOpen((o) => !o)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-3 py-1.5 text-xs text-muted transition-colors hover:text-foreground"
              >
                {open
                  ? locale === "es"
                    ? "Ocultar detalle"
                    : "Hide details"
                  : locale === "es"
                    ? "Ver detalle completo"
                    : "View full details"}
                <ChevronDown size={13} className={cn("transition-transform", open && "rotate-180")} />
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-5 border-t border-border pt-4">
                      {experience.groups.map((group) => (
                        <div key={group.label}>
                          <p className="text-xs font-medium uppercase tracking-wide text-accent-strong">{group.label}</p>
                          <ul className="mt-2 space-y-2">
                            {group.items.map((item) => (
                              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </li>
    </Reveal>
  );
}
