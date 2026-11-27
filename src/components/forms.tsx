import * as React from "react";
import { cn } from "../lib/cn";

const fieldBase =
  "w-full rounded-[var(--udon-radius-md)] bg-transparent text-base text-[var(--udon-text)] " +
  "placeholder:text-[var(--udon-muted)] focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-[var(--udon-primary)] focus-visible:ring-offset-1";

const fieldState = (invalid?: boolean, disabled?: boolean) =>
  cn(
    "border",
    invalid ? "border-2 border-[var(--udon-accent)]" : "border-[var(--udon-line-strong)]",
    disabled && "bg-[var(--udon-panel)] text-[var(--udon-muted)]",
  );

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  assistiveText?: string;
  invalid?: boolean;
  invalidText?: string;
  showCount?: boolean;
  maxLength?: number;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, assistiveText, invalid, invalidText, showCount, maxLength, className, disabled, id, ...props },
  ref,
) {
  const inputId = id ?? React.useId();
  const [count, setCount] = React.useState(String(props.defaultValue ?? props.value ?? "").length);
  return (
    <div className="flex w-full flex-col gap-1">
      {label ? (
        <label htmlFor={inputId} className="text-xs text-[var(--udon-muted)]">
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        id={inputId}
        maxLength={maxLength}
        aria-invalid={invalid || undefined}
        disabled={disabled}
        onChange={(e) => {
          setCount(e.currentTarget.value.length);
          props.onChange?.(e);
        }}
        className={cn(fieldBase, fieldState(invalid, disabled), "h-12 px-4", className)}
        {...props}
      />
      <div className="flex justify-between text-xs">
        <span className={invalid ? "text-[var(--udon-accent)]" : "text-[var(--udon-muted)]"}>
          {invalid ? invalidText : assistiveText}
        </span>
        {showCount && maxLength ? (
          <span className="text-[var(--udon-muted)]">
            {count}/{maxLength}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  assistiveText?: string;
  invalid?: boolean;
  invalidText?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, assistiveText, invalid, invalidText, className, disabled, id, ...props },
  ref,
) {
  const areaId = id ?? React.useId();
  return (
    <div className="flex w-full flex-col gap-1">
      {label ? (
        <label htmlFor={areaId} className="text-xs text-[var(--udon-muted)]">
          {label}
        </label>
      ) : null}
      <textarea
        ref={ref}
        id={areaId}
        aria-invalid={invalid || undefined}
        disabled={disabled}
        className={cn(fieldBase, fieldState(invalid, disabled), "min-h-24 px-4 py-3", className)}
        {...props}
      />
      <span className={cn("text-xs", invalid ? "text-[var(--udon-accent)]" : "text-[var(--udon-muted)]")}>
        {invalid ? invalidText : assistiveText}
      </span>
    </div>
  );
});

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, ...props },
  ref,
) {
  return (
    <label className="inline-flex items-center gap-3 text-base text-[var(--udon-text)]">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "size-6 appearance-none rounded-[4px] border-2 border-[var(--udon-line-strong)] bg-transparent",
          "checked:border-[var(--udon-primary)] checked:bg-[var(--udon-primary)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)] focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
});

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, className, ...props },
  ref,
) {
  return (
    <label className="inline-flex items-center gap-3 text-base text-[var(--udon-text)]">
      <input
        ref={ref}
        type="radio"
        className={cn(
          "size-6 appearance-none rounded-full border-2 border-[var(--udon-line-strong)] bg-transparent",
          "checked:border-[var(--udon-primary)]",
          "checked:bg-[radial-gradient(circle,var(--udon-primary)_40%,transparent_45%)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)] focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
});

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, className, ...props },
  ref,
) {
  return (
    <label className="inline-flex items-center gap-3 text-base text-[var(--udon-text)]">
      <span className="relative inline-flex">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className={cn(
            "peer size-14 h-8 appearance-none rounded-full bg-[var(--udon-line-strong)] transition-colors",
            "checked:bg-[var(--udon-primary)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)] focus-visible:ring-offset-2",
            className,
          )}
          {...props}
        />
        <span className="pointer-events-none absolute top-1 left-1 size-6 rounded-full bg-white transition-transform peer-checked:translate-x-6" />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
});

export interface HintTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  status?: "default" | "error";
}

export function HintText({ status = "default", className, children, ...props }: HintTextProps) {
  const error = status === "error";
  return (
    <p
      className={cn(
        "flex items-start gap-2 text-sm",
        error ? "text-[var(--udon-accent)]" : "text-[var(--udon-muted)]",
        className,
      )}
      {...props}
    >
      <svg viewBox="0 0 24 24" aria-hidden className="mt-0.5 size-4 shrink-0" fill="none"
        stroke={error ? "var(--udon-accent)" : "var(--udon-muted)"} strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" strokeLinecap="round" />
        <circle cx="12" cy="7.5" r="0.9" fill={error ? "var(--udon-accent)" : "var(--udon-muted)"} stroke="none" />
      </svg>
      <span>{children}</span>
    </p>
  );
}

export interface SegmentedControlProps {
  options: string[];
  value: string;
  onChange?: (value: string) => void;
  size?: "md" | "sm";
  disabled?: boolean;
}

export function SegmentedControl({ options, value, onChange, size = "md", disabled }: SegmentedControlProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex rounded-[var(--udon-radius-md)] bg-[var(--udon-panel)] p-1",
        disabled && "opacity-60",
      )}
    >
      {options.map((option) => (
        <button
          key={option}
          role="tab"
          type="button"
          aria-selected={option === value}
          disabled={disabled}
          onClick={() => onChange?.(option)}
          className={cn(
            "rounded-[var(--udon-radius-sm)] px-5 font-[var(--udon-font-heading)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--udon-accent)]",
            size === "sm" ? "h-8 text-xs" : "h-10 text-sm",
            option === value
              ? "bg-white font-bold text-[var(--udon-text)] shadow-[var(--udon-shadow-sm)]"
              : "text-[var(--udon-muted)]",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
