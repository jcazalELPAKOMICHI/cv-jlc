"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/presentation/utils/cn";

/**
 * A small image carousel for showing a sequence of screenshots inside
 * a card (phone-mockup aspect ratio by default). Two ways to navigate:
 * the prev/next buttons (always visible — a touch screen never fires
 * `:hover`, so gating them behind group-hover, as an earlier version
 * did, made them invisible on phones) and a swipe/drag gesture on the
 * image itself for touch users.
 */
export function ImageCarousel({
  images,
  alt,
  className,
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (images.length === 0) return null;

  const go = (delta: number) => {
    setDirection(delta);
    setIndex((prev) => (prev + delta + images.length) % images.length);
  };

  const jump = (target: number) => {
    setDirection(target > index ? 1 : -1);
    setIndex(target);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const swipe = info.offset.x;
    const velocity = info.velocity.x;
    if (swipe < -40 || velocity < -400) {
      go(1);
    } else if (swipe > 40 || velocity > 400) {
      go(-1);
    }
  };

  return (
    <div
      className={cn(
        "group/carousel relative overflow-hidden rounded-2xl border border-border-strong bg-background-elevated",
        className
      )}
    >
      <div className="relative aspect-[9/16] w-full touch-pan-y overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction >= 0 ? 32 : -32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -32 : 32 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`${alt} — ${index + 1}/${images.length}`}
              fill
              draggable={false}
              sizes="(min-width: 1024px) 260px, 45vw"
              className="object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="absolute left-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-80 backdrop-blur-md transition-opacity hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Imagen siguiente"
            className="absolute right-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground opacity-80 backdrop-blur-md transition-opacity hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronRight size={15} />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a la imagen ${i + 1}`}
                onClick={() => jump(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
