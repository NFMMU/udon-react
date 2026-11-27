import * as React from "react";
import { cn } from "../lib/cn";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange?: (page: number) => void;
  size?: "md" | "sm";
  disabled?: boolean;
}

export function Pagination({ page, totalPages, onChange, size = "md", disabled }: PaginationProps) {
  const pages = React.useMemo(() => {
    const window = 2;
    const from = Math.max(1, page - window);
    const to = Math.min(totalPages, page + window);
    return Array.from({ length: to - from + 1 }, (_, i) => from + i);
  }, [page, totalPages]);

  const cell =
    "inline-flex items-center justify-center rounded-[var(--udon-radius-sm)] border text-sm " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)] " +
    (size === "sm" ? "size-8 text-xs" : "size-10");

  return (
    <nav aria-label="ページ送り" className={cn("flex items-center gap-2", disabled && "pointer-events-none opacity-60")}>
      <button
        type="button"
        aria-label="前のページ"
        disabled={page <= 1}
        onClick={() => onChange?.(page - 1)}
        className={cn(cell, "border-transparent text-[var(--udon-muted)] disabled:opacity-40")}
      >
        ‹
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          aria-current={p === page ? "page" : undefined}
          onClick={() => onChange?.(p)}
          className={cn(
            cell,
            p === page
              ? "border-[var(--udon-primary)] bg-[var(--udon-primary)] font-bold text-white"
              : "border-[var(--udon-line-strong)] text-[var(--udon-text)]",
          )}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        aria-label="次のページ"
        disabled={page >= totalPages}
        onClick={() => onChange?.(page + 1)}
        className={cn(cell, "border-transparent text-[var(--udon-muted)] disabled:opacity-40")}
      >
        ›
      </button>
    </nav>
  );
}
