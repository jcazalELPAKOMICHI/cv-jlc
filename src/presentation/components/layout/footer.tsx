"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { Container } from "@/presentation/components/ui/container";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/presentation/components/ui/icons";

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, whatsapp: WhatsappIcon, email: Mail };

export function Footer() {
  const { content, locale } = usePortfolioContent();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm text-foreground">
            JL<span className="text-accent-strong">.</span>Cazal
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {year} {content.profile.name}.{" "}
            {locale === "es" ? "Construido con Next.js." : "Built with Next.js."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {content.profile.socialLinks.map((link) => {
            const Icon = ICONS[link.platform];
            return (
              <a
                key={link.platform}
                href={link.href}
                target={link.platform === "email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface text-muted transition-colors hover:border-accent-strong/60 hover:text-foreground"
              >
                <Icon size={16} />
              </a>
            );
          })}
          <a
            href="#hero"
            className="inline-flex h-10 items-center gap-1 rounded-full border border-border-strong bg-surface px-4 text-xs text-muted transition-colors hover:text-foreground"
          >
            {locale === "es" ? "Volver arriba" : "Back to top"}
            <ArrowUpRight size={13} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
