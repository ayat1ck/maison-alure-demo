import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BaseFieldProps {
  label: string;
  error?: string;
  success?: string;
}

interface InputFieldProps extends BaseFieldProps, InputHTMLAttributes<HTMLInputElement> {}
interface TextareaFieldProps extends BaseFieldProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function InputField({ label, error, success, className, ...props }: InputFieldProps) {
  return (
    <label className="grid gap-2 text-sm text-beige">
      <span>{label}</span>
      <input
        className={cn(
          "w-full rounded-2xl border border-gold/30 bg-[#130e0b] px-4 py-3 text-cream outline-none transition placeholder:text-beige/50 focus:border-gold focus:ring-1 focus:ring-gold",
          error && "border-red-400/80 focus:border-red-400 focus:ring-red-400/70",
          success && "border-emerald-400/80 focus:border-emerald-400 focus:ring-emerald-400/70",
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs text-red-300">{error}</span> : null}
      {success ? <span className="text-xs text-emerald-300">{success}</span> : null}
    </label>
  );
}

export function TextareaField({ label, error, success, className, ...props }: TextareaFieldProps) {
  return (
    <label className="grid gap-2 text-sm text-beige">
      <span>{label}</span>
      <textarea
        className={cn(
          "w-full rounded-2xl border border-gold/30 bg-[#130e0b] px-4 py-3 text-cream outline-none transition placeholder:text-beige/50 focus:border-gold focus:ring-1 focus:ring-gold",
          error && "border-red-400/80",
          success && "border-emerald-400/80",
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs text-red-300">{error}</span> : null}
      {success ? <span className="text-xs text-emerald-300">{success}</span> : null}
    </label>
  );
}
