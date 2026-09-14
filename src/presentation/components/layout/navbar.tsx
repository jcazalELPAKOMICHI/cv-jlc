"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { trackEvent } from "@/infrastructure/analytics/firebase-client";
import { useActiveSection } from "@/presentation/hooks/use-active-section";
import { Container } from "@/presentation/components/ui/container";
import { Button } from "@/presentation/components/ui/button";
import { cn } from "@/presentation/utils/cn";

export function Navbar() {
  const { content, locale, toggleLocale } = usePortfolioContent();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Keep a stable array identity across renders — content.nav.links itself
  // is a stable reference (static per-locale content), so this only
  // recomputes when the locale actually changes.
  const sectionIds = useMemo(() => content.nav.links.map((l) => l.id), [content.nav.links]);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300",
            scrolled
              ? "border-border bg-background/90 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "border-transparent"
          )}
        >
          <a href="#hero" className="font-mono text-sm font-semibold tracking-tight text-foreground">
            JL<span className="text-accent-strong">.</span>Cazal
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {content.nav.links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  activeId === link.id ? "text-foreground" : "text-muted hover:text-foreground"
                )}
              >
                {activeId === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-hover"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLocale}
              aria-label="Toggle language"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-3 py-2 font-mono text-xs uppercase text-muted transition-colors hover:text-foreground"
            >
              <Languages size={14} />
              {locale}
            </button>
            <Button
              href={content.profile.resumeHref}
              download
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => trackEvent("download_cv", { locale, placement: "navbar" })}
            >
              {content.nav.resumeCta}
            </Button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface p-2.5 text-foreground md:hidden"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <Container className="mt-2">
              <div className="flex flex-col gap-1 rounded-2xl border border-border bg-background/95 p-3 shadow-lg shadow-black/30 backdrop-blur-xl">
                {content.nav.links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm",
                      activeId === link.id ? "bg-surface-hover text-foreground" : "text-muted"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  href={content.profile.resumeHref}
                  download
                  size="sm"
                  className="mt-1"
                  onClick={() => trackEvent("download_cv", { locale, placement: "mobile_menu" })}
                >
                  {content.nav.resumeCta}
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
