import * as React from "react";
import { cn } from "../lib/cn";

export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: "default" | "error";
  action?: React.ReactNode;
}

export function Snackbar({ status = "default", action, className, children, ...props }: SnackbarProps) {
  const error = status === "error";
  return (
    <div
      role="status"
      className={cn(
        "flex min-h-12 items-center justify-between gap-4 rounded-[var(--udon-radius-md)] px-4 text-sm",
        error ? "bg-[var(--udon-accent)] text-white" : "bg-[var(--udon-panel)] text-[var(--udon-text)]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {action}
    </div>
  );
}

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: "default" | "error";
}

export function Toast({ status = "default", className, children, ...props }: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        "inline-flex min-h-12 items-center rounded-[var(--udon-radius-md)] px-4 text-sm text-white",
        status === "error" ? "bg-[var(--udon-accent)]" : "bg-[var(--udon-text)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ModalProps {
  open: boolean;
  title: string;
  children?: React.ReactNode;
  destructive?: boolean;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function Modal({
  open,
  title,
  children,
  destructive,
  confirmLabel = "OK",
  cancelLabel = "取消",
  onConfirm,
  onCancel,
}: ModalProps) {
  const titleId = React.useId();
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onCancel]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[var(--udon-text)]/40 p-4" onClick={onCancel}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-sm rounded-[var(--udon-radius-lg)] bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id={titleId} className="font-[var(--udon-font-heading)] text-base font-bold text-[var(--udon-text)]">{title}</h2>
        <div className="mt-3 text-sm text-[var(--udon-muted)]">{children}</div>
        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="h-10 rounded-[var(--udon-radius-md)] border border-[var(--udon-line-strong)] px-5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)]"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={cn(
              "h-10 rounded-[var(--udon-radius-md)] px-5 text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)] focus-visible:ring-offset-2",
              destructive ? "bg-[var(--udon-accent)]" : "bg-[var(--udon-primary)]",
            )}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export interface LoadingSpinnerProps {
  size?: "md" | "sm";
  label?: string;
  overlay?: boolean;
}

export function LoadingSpinner({ size = "md", label = "読み込み中", overlay }: LoadingSpinnerProps) {
  return (
    <span
      role="status"
      className={cn(
        "inline-flex items-center gap-3",
        overlay && "rounded-[var(--udon-radius-md)] bg-[var(--udon-panel)] p-4",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "animate-spin rounded-full border-2 border-[var(--udon-line-strong)] border-t-[var(--udon-primary)]",
          size === "sm" ? "size-7" : "size-12",
        )}
      />
      <span className="text-sm text-[var(--udon-muted)]">{label}</span>
    </span>
  );
}
