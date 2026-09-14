"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { usePortfolioContent } from "@/presentation/providers/locale-provider";
import { Container } from "@/presentation/components/ui/container";
import { Button } from "@/presentation/components/ui/button";

export function Hero() {
  const { content, locale } = usePortfolioContent();
  const { profile } = content;

  // The "scroll down" cue only makes sense while the user is still at
  // the very top — fade it out early so it never lingers into the
  // next section under the sticky navbar.
  const [pastTop, setPastTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setPastTop(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/3" aria-hidden />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1.5 text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            {content.nav.availableBadge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
            className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="gradient-text mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects">
              <Sparkles size={15} />
              {locale === "es" ? "Ver proyectos" : "View projects"}
            </Button>
            <Button href="#contact" variant="secondary">
              {locale === "es" ? "Hablemos" : "Let's talk"}
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25, ease: "easeOut" }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold text-foreground sm:text-3xl">{stat.value}</dd>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-accent-secondary/10 to-transparent blur-2xl" aria-hidden />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-border-strong p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src={profile.avatarSrc}
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-cover grayscale-[15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-border-strong bg-background/60 px-3 py-2 backdrop-blur-md">
                <span className="text-xs text-muted">{profile.location}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: pastTop ? 0 : 1 }}
        transition={{ duration: 0.3, delay: pastTop ? 0 : 0.4 }}
        style={{ pointerEvents: pastTop ? "none" : "auto" }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
        aria-label="Scroll down"
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
