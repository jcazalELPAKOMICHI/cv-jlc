"use client";

import { Code2, Users, Wrench, Database, LineChart } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { Container } from "@/presentation/components/ui/container";
import { SectionHeading } from "@/presentation/components/ui/section-heading";
import { Reveal } from "@/presentation/components/ui/reveal";
import { Badge } from "@/presentation/components/ui/badge";

const ICONS = [Users, Code2, Wrench, Database, LineChart];

export function Skills() {
  const { content, locale } = usePortfolioContent();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={locale === "es" ? "Stack técnico" : "Tech stack"}
          title={locale === "es" ? "Herramientas que uso a diario" : "Tools I reach for every day"}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.skillGroups.map((group, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={group.category} delay={i * 0.06} className={i === 0 ? "lg:col-span-2" : undefined}>
                <div className="glass-panel h-full rounded-3xl border border-border p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-background-elevated text-accent-strong">
                    <Icon size={17} />
                  </span>
                  <h3 className="mt-4 text-sm font-medium text-foreground">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} className="hover:border-accent-strong/50 hover:text-foreground">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
