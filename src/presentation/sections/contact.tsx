"use client";

import { Mail, ArrowUpRight, FileDown } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { Container } from "@/presentation/components/ui/container";
import { Reveal } from "@/presentation/components/ui/reveal";
import { Button } from "@/presentation/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/presentation/components/ui/icons";

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, email: Mail };

export function Contact() {
  const { content, locale } = usePortfolioContent();
  const { profile } = content;

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[2.5rem] border border-border-strong px-6 py-16 text-center sm:px-16">
            <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-25" aria-hidden />

            <span className="relative inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent-strong">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {locale === "es" ? "Contacto" : "Contact"}
            </span>

            <h2 className="relative mx-auto mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {locale === "es" ? (
                <>
                  ¿Un proyecto en mente<span className="gradient-text">?</span> Hablemos.
                </>
              ) : (
                <>
                  Have a project in mind<span className="gradient-text">?</span> Let&apos;s talk.
                </>
              )}
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-sm text-muted sm:text-base">
              {profile.availability} · {profile.location}
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href={`mailto:${profile.socialLinks.find((s) => s.platform === "email")?.label}`}>
                <Mail size={15} />
                {locale === "es" ? "Escribime" : "Email me"}
              </Button>
              <Button href={profile.resumeHref} download variant="secondary">
                <FileDown size={15} />
                {content.nav.resumeCta}
              </Button>
            </div>

            <div className="relative mt-10 flex items-center justify-center gap-3">
              {profile.socialLinks
                .filter((l) => l.platform !== "email")
                .map((link) => {
                  const Icon = ICONS[link.platform];
                  return (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-4 py-2 text-xs text-muted transition-colors hover:text-foreground"
                    >
                      <Icon size={13} />
                      {link.label}
                      <ArrowUpRight size={11} />
                    </a>
                  );
                })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
