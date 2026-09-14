import { cn } from "@/presentation/utils/cn";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent-strong disabled:opacity-50";

const variants = {
  primary:
    "bg-accent text-white shadow-[0_0_0_1px_rgba(14,165,255,0.4),0_8px_24px_-8px_rgba(14,165,255,0.65)] hover:bg-accent-strong hover:shadow-[0_0_0_1px_rgba(56,189,255,0.5),0_10px_30px_-6px_rgba(56,189,255,0.75)] active:scale-[0.98]",
  secondary:
    "border border-border-strong bg-surface text-foreground hover:border-accent-strong/60 hover:bg-surface-hover active:scale-[0.98]",
  ghost: "text-muted hover:text-foreground",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-4 py-2 text-xs",
};

/** Renders an `<a>` when `href` is passed, otherwise a `<button>`. */
export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonAsLink | ButtonAsButton) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof props.href === "string") {
    const { href, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
