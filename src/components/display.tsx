import * as React from "react";
import { cn } from "../lib/cn";

export interface TagItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  size?: "md" | "sm";
  onRemove?: () => void;
  removeLabel?: string;
}

export function TagItem({ active, size = "md", onRemove, removeLabel = "外す", className, children, ...props }: TagItemProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        size === "sm" ? "h-6 px-3 text-xs" : "h-8 px-4 text-sm",
        active ? "bg-[var(--udon-primary)] text-white" : "bg-[var(--udon-secondary)] text-[var(--udon-text)]",
        className,
      )}
      {...props}
    >
      <span className="truncate">{children}</span>
      {onRemove ? (
        <button
          type="button"
          aria-label={removeLabel}
          onClick={onRemove}
          className="inline-flex size-4 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)]"
        >
          <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      ) : null}
    </span>
  );
}

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  selectable?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  meta?: React.ReactNode;
}

export function Card({ selectable, title, description, meta, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--udon-radius-md)] bg-white p-5",
        selectable ? "border-2 border-[var(--udon-primary)]" : "border border-[var(--udon-line-strong)]",
        className,
      )}
      {...props}
    >
      {title ? <h3 className="font-[var(--udon-font-heading)] text-base font-bold text-[var(--udon-text)]">{title}</h3> : null}
      {description ? <p className="mt-2 text-sm leading-relaxed text-[var(--udon-muted)]">{description}</p> : null}
      {children}
      {meta ? <p className="mt-6 text-xs text-[var(--udon-muted)]">{meta}</p> : null}
    </div>
  );
}

export interface ListItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  selected?: boolean;
}

export const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(function ListItem(
  { title, description, selected, className, type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-current={selected || undefined}
      className={cn(
        "flex w-full items-center gap-3 rounded-[var(--udon-radius-sm)] px-3 py-2 text-left",
        selected ? "bg-[var(--udon-panel)]" : "hover:bg-[var(--udon-panel)]/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)]",
        className,
      )}
      {...props}
    >
      <span className="size-10 shrink-0 rounded-full bg-[var(--udon-secondary)]" aria-hidden />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-bold text-[var(--udon-text)]">{title}</span>
        {description ? <span className="block truncate text-xs text-[var(--udon-muted)]">{description}</span> : null}
      </span>
      <span aria-hidden className="text-[var(--udon-muted)]">›</span>
    </button>
  );
});

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  size?: "md" | "sm";
  badge?: boolean;
}

export function Avatar({ name, size = "md", badge, className, ...props }: AvatarProps) {
  const initial = name.trim().slice(0, 1);
  return (
    <span className={cn("relative inline-flex", className)} {...props}>
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-[var(--udon-secondary)] font-bold text-[var(--udon-text)]",
          size === "sm" ? "size-8 text-xs" : "size-10 text-sm",
        )}
        aria-hidden
      >
        {initial}
      </span>
      <span className="sr-only">{name}</span>
      {badge ? (
        <span className="absolute right-0 bottom-0 size-3 rounded-full border-2 border-white bg-[var(--udon-success)]" aria-hidden />
      ) : null}
    </span>
  );
}

export interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくず">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-[var(--udon-muted)]">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {item.href ? (
              <a href={item.href} className="underline-offset-2 hover:underline">{item.label}</a>
            ) : (
              <span className={cn(i === items.length - 1 && "font-bold text-[var(--udon-text)]")}>{item.label}</span>
            )}
            {i < items.length - 1 ? <span aria-hidden>›</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  const id = React.useId();
  return (
    <span className="relative inline-flex group">
      <span aria-describedby={id}>{children}</span>
      <span
        role="tooltip"
        id={id}
        className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-[var(--udon-radius-sm)] bg-[var(--udon-text)] px-3 py-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {label}
      </span>
    </span>
  );
}

export interface TextEllipsisProps extends React.HTMLAttributes<HTMLParagraphElement> {
  lines?: 1 | 2 | 3;
}

export function TextEllipsis({ lines = 1, className, children, ...props }: TextEllipsisProps) {
  return (
    <p
      className={cn("overflow-hidden text-sm text-[var(--udon-text)]", className)}
      style={
        lines === 1
          ? { whiteSpace: "nowrap", textOverflow: "ellipsis" }
          : { display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: lines }
      }
      {...props}
    >
      {children}
    </p>
  );
}

export interface CarouselProps {
  items: React.ReactNode[];
  label?: string;
}

export function Carousel({ items, label = "カルーセル" }: CarouselProps) {
  return (
    <div role="region" aria-label={label} className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
      {items.map((item, i) => (
        <div key={i} className="w-64 shrink-0 snap-start rounded-[var(--udon-radius-md)] bg-[var(--udon-panel)] p-4">
          {item}
        </div>
      ))}
    </div>
  );
}
