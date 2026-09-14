"use client";

import { Layers } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { Container } from "@/presentation/components/ui/container";
import { SectionHeading } from "@/presentation/components/ui/section-heading";
import { Reveal } from "@/presentation/components/ui/reveal";
import { Badge } from "@/presentation/components/ui/badge";
import { cn } from "@/presentation/utils/cn";

export function Projects() {
  const { content, locale } = usePortfolioContent();
  const featured = content.projects.filter((p) => p.featured);
  const rest = content.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={locale === "es" ? "Proyectos" : "Projects"}
          title={locale === "es" ? "Productos que ayudé a construir" : "Products I helped build"}
          description={
            locale === "es"
              ? "Casos reales de banca y fintech en producción — la mayoría bajo NDA, así que comparto el contexto y las decisiones técnicas."
              : "Real banking and fintech cases in production — most under NDA, so I share the context and the technical decisions instead."
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} className={cn(i === 0 && "sm:col-span-2 lg:col-span-2 lg:row-span-2")}>
              <ProjectCard project={project} large={i === 0} />
            </Reveal>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  large,
}: {
  project: import("@/domain/entities").Project;
  large?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent-strong/50 sm:p-7",
        large && "sm:p-9"
      )}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden />

      <div className="flex items-center justify-between">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-strong bg-background-elevated text-accent-strong">
          <Layers size={16} />
        </span>
        <span className="font-mono text-xs text-muted-foreground">{project.period}</span>
      </div>

      <h3 className={cn("mt-5 font-semibold tracking-tight text-foreground", large ? "text-2xl" : "text-lg")}>
        {project.title}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent-strong">{project.context}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </article>
  );
}
