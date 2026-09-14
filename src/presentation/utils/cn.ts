import { type ClassValue, clsx } from "clsx";

/** Tiny className combinator — keeps conditional Tailwind classes readable. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
