"use client";

import { motion } from "framer-motion";
import { cn } from "@/presentation/utils/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("mb-12 max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent-strong">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>}
    </motion.div>
  );
}
