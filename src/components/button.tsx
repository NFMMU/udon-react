import * as React from "react";
import { cn } from "../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--udon-radius-md)] " +
  "font-[var(--udon-font-heading)] font-bold leading-none transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)] focus-visible:ring-offset-2 " +
  "ring-offset-[var(--udon-bg)] disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--udon-primary)] text-white hover:opacity-90 disabled:bg-[var(--udon-panel)] disabled:text-[var(--udon-muted)]",
  secondary:
    "border-2 border-[var(--udon-primary)] text-[var(--udon-primary)] hover:bg-[var(--udon-secondary)]/40 " +
    "disabled:border-transparent disabled:bg-[var(--udon-panel)] disabled:text-[var(--udon-muted)]",
  ghost:
    "text-[var(--udon-primary)] hover:bg-[var(--udon-secondary)]/40 " +
    "disabled:bg-transparent disabled:text-[var(--udon-muted)]",
  danger:
    "bg-[var(--udon-accent)] text-white hover:opacity-90 disabled:bg-[var(--udon-panel)] disabled:text-[var(--udon-muted)]",
};

const sizes = {
  md: "h-14 px-6 text-base",
  sm: "h-10 px-4 text-sm",
} as const;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: keyof typeof sizes;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
});

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  active?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, active = false, className, type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "inline-flex size-14 items-center justify-center rounded-[var(--udon-radius-md)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)] focus-visible:ring-offset-2",
        active
          ? "bg-[var(--udon-primary)] text-white"
          : "border-2 border-[var(--udon-primary)] text-[var(--udon-primary)]",
        "disabled:border-transparent disabled:bg-[var(--udon-panel)] disabled:text-[var(--udon-muted)]",
        className,
      )}
      {...props}
    />
  );
});

export interface ClickableProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Clickable = React.forwardRef<HTMLButtonElement, ClickableProps>(function Clickable(
  { className, type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center gap-1 font-bold text-[var(--udon-primary)] underline-offset-4",
        "hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)] focus-visible:ring-offset-2",
        "disabled:text-[var(--udon-muted)] disabled:no-underline",
        className,
      )}
      {...props}
    />
  );
});

export interface FocusRingProps extends React.HTMLAttributes<HTMLSpanElement> {}

/** フォーカス中の要素を包むための輪。キーボード操作の視認性を揃える。 */
export function FocusRing({ className, children, ...props }: FocusRingProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-[var(--udon-radius-lg)] outline outline-2 outline-offset-2 outline-[var(--udon-primary)]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
