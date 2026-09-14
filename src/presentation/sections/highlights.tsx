"use client";

import { Trophy, Moon, ArrowUpRight } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { trackEvent } from "@/infrastructure/analytics/firebase-client";
import { Container } from "@/presentation/components/ui/container";
import { SectionHeading } from "@/presentation/components/ui/section-heading";
import { Reveal } from "@/presentation/components/ui/reveal";
import { Badge } from "@/presentation/components/ui/badge";
import { ImageCarousel } from "@/presentation/components/ui/image-carousel";
import type { Highlight, Locale } from "@/domain/entities";

const ICONS = [Trophy, Moon];

export function Highlights() {
  const { content, locale } = usePortfolioContent();

  if (content.highlights.length === 0) return null;

  return (
    <section id="highlights" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={locale === "es" ? "Destacados" : "Highlights"}
          title={locale === "es" ? "Momentos que compart\u00ed en LinkedIn" : "Moments I shared on LinkedIn"}
          description={
            locale === "es"
              ? "Historias puntuales donde arquitectura, dise\u00f1o y un poco de terquedad se combinaron para resolver algo distinto \u2014 con las capturas reales de cada post."
              : "Specific stories where architecture, design, and a bit of stubbornness combined to solve something different \u2014 with the real screenshots from each post."
          }
        />

        <div className="space-y-6">
          {content.highlights.map((highlight, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={highlight.id} delay={i * 0.08}>
                <HighlightCard highlight={highlight} icon={Icon} locale={locale} />
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function HighlightCard({
  highlight,
  icon: Icon,
  locale,
}: {
  highlight: Highlight;
  icon: typeof Trophy;
  locale: Locale;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent-strong/50 sm:p-8">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="grid gap-6 sm:grid-cols-[minmax(0,180px)_1fr] sm:items-start lg:grid-cols-[minmax(0,220px)_1fr]">
        <ImageCarousel images={highlight.images} alt={highlight.title} className="mx-auto w-full max-w-[220px] sm:mx-0" />

        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border-strong bg-background-elevated text-accent-strong">
              <Icon size={16} />
            </span>
            <span className="font-mono text-xs text-muted-foreground">{highlight.period}</span>
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{highlight.title}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent-strong">{highlight.context}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{highlight.summary}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 sm:max-w-sm">
            {highlight.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd className="text-xl font-semibold text-foreground sm:text-2xl">{metric.value}</dd>
                <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {highlight.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <a
              href={highlight.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("highlight_post_click", { id: highlight.id })}
              className="inline-flex items-center gap-1 text-xs font-medium text-accent-strong transition-colors hover:text-foreground"
            >
              {locale === "es" ? "Ver publicaci\u00f3n" : "View post"}
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
