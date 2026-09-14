"use client";

import { motion } from "framer-motion";
import { Braces, Code2, Cpu, Database, GitBranch, Layers, Smartphone, Terminal } from "lucide-react";

/**
 * A faint field of dev-flavored icons drifting behind the hero content.
 * Deliberately placed along the edges/corners (not the center) so it
 * reads as texture from any distance, never competes with the text,
 * and never depends on the section's height.
 */
const ICONS = [
  { Icon: Code2, top: "6%", left: "4%", size: 30, duration: 7.5, delay: 0, tone: "muted" as const },
  { Icon: GitBranch, top: "7%", left: "92%", size: 28, duration: 8.5, delay: 0.6, tone: "muted" as const },
  { Icon: Cpu, top: "4%", left: "48%", size: 22, duration: 9, delay: 1.2, tone: "accent" as const },
  { Icon: Layers, top: "42%", left: "2%", size: 26, duration: 8, delay: 0.3, tone: "muted" as const },
  { Icon: Database, top: "58%", left: "97%", size: 30, duration: 7, delay: 0.9, tone: "accent" as const },
  { Icon: Terminal, top: "90%", left: "6%", size: 34, duration: 7.8, delay: 0.4, tone: "muted" as const },
  { Icon: Smartphone, top: "87%", left: "92%", size: 32, duration: 8.2, delay: 1.4, tone: "muted" as const },
  { Icon: Braces, top: "94%", left: "70%", size: 26, duration: 6.8, delay: 0.7, tone: "accent" as const },
];

export function TechBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {ICONS.map(({ Icon, top, left, size, duration, delay, tone }, i) => (
        <motion.div
          key={i}
          className={tone === "accent" ? "absolute text-accent/[0.16]" : "absolute text-muted-foreground/[0.18]"}
          style={{ top, left }}
          animate={{ y: [-8, 8, -8], rotate: [-6, 6, -6] }}
          transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={size} strokeWidth={1.25} />
        </motion.div>
      ))}
    </div>
  );
}
