import { cn } from "@/presentation/utils/cn";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong bg-surface px-2.5 py-1 font-mono text-xs text-muted transition-colors",
        className
      )}
    >
      {children}
    </span>
  );
}
