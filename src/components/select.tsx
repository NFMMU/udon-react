import * as React from "react";
import { cn } from "../lib/cn";

const shell =
  "w-full rounded-[var(--udon-radius-md)] border bg-transparent text-base text-[var(--udon-text)] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-primary)] focus-visible:ring-offset-1";

export interface DropdownSelectorProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  assistiveText?: string;
  invalid?: boolean;
  invalidText?: string;
  options: { value: string; label: string; disabled?: boolean }[];
}

export const DropdownSelector = React.forwardRef<HTMLSelectElement, DropdownSelectorProps>(
  function DropdownSelector(
    { label, assistiveText, invalid, invalidText, options, className, disabled, id, ...props },
    ref,
  ) {
    const selectId = id ?? React.useId();
    return (
      <div className="flex w-full flex-col gap-1">
        {label ? (
          <label htmlFor={selectId} className="text-xs text-[var(--udon-muted)]">{label}</label>
        ) : null}
        <select
          ref={ref}
          id={selectId}
          aria-invalid={invalid || undefined}
          disabled={disabled}
          className={cn(
            shell,
            "h-12 px-4 appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22><path d=%22M1 1l5 5 5-5%22 fill=%22none%22 stroke=%22%233A2A1C%22 stroke-width=%221.75%22 stroke-linecap=%22round%22/></svg>')] bg-[length:12px_8px] bg-[right_16px_center] bg-no-repeat",
            invalid ? "border-2 border-[var(--udon-accent)]" : "border-[var(--udon-line-strong)]",
            disabled && "bg-[var(--udon-panel)] text-[var(--udon-muted)]",
            className,
          )}
          {...props}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value} disabled={o.disabled}>
              {o.label}
            </option>
          ))}
        </select>
        <span className={cn("text-xs", invalid ? "text-[var(--udon-accent)]" : "text-[var(--udon-muted)]")}>
          {invalid ? invalidText : assistiveText}
        </span>
      </div>
    );
  },
);

export interface MultiSelectProps {
  label?: string;
  values: string[];
  options: string[];
  onChange?: (values: string[]) => void;
  disabled?: boolean;
  assistiveText?: string;
}

export function MultiSelect({ label, values, options, onChange, disabled, assistiveText }: MultiSelectProps) {
  const listId = React.useId();
  const toggle = (value: string) => {
    onChange?.(values.includes(value) ? values.filter((v) => v !== value) : [...values, value]);
  };
  return (
    <div className="flex w-full flex-col gap-2">
      {label ? <span className="text-xs text-[var(--udon-muted)]">{label}</span> : null}
      <div
        className={cn(
          "flex min-h-12 flex-wrap items-center gap-2 rounded-[var(--udon-radius-md)] border px-3 py-2",
          disabled ? "border-[var(--udon-line)] bg-[var(--udon-panel)]" : "border-[var(--udon-line-strong)]",
        )}
        aria-labelledby={listId}
      >
        {values.length === 0 ? (
          <span className="text-sm text-[var(--udon-muted)]">選択してください</span>
        ) : (
          values.map((v) => (
            <span key={v} className="inline-flex h-7 items-center gap-2 rounded-full bg-[var(--udon-secondary)] px-3 text-xs text-[var(--udon-text)]">
              {v}
              {!disabled ? (
                <button type="button" aria-label={`${v} を外す`} onClick={() => toggle(v)} className="text-[var(--udon-text)]">
                  ×
                </button>
              ) : null}
            </span>
          ))
        )}
      </div>
      <ul id={listId} className="flex flex-wrap gap-2">
        {options.map((o) => (
          <li key={o}>
            <button
              type="button"
              disabled={disabled}
              aria-pressed={values.includes(o)}
              onClick={() => toggle(o)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)]",
                values.includes(o)
                  ? "border-[var(--udon-primary)] bg-[var(--udon-primary)] text-white"
                  : "border-[var(--udon-line-strong)] text-[var(--udon-text)]",
              )}
            >
              {o}
            </button>
          </li>
        ))}
      </ul>
      {assistiveText ? <span className="text-xs text-[var(--udon-muted)]">{assistiveText}</span> : null}
    </div>
  );
}
