// src/components/InputField/InputField.jsx
import React, { forwardRef, useId, useState } from "react";
import PropTypes from "prop-types";
import { cn } from "../../lib/cn";

const InputField = forwardRef(
  (
    {
      id,
      label,
      value,
      onChange,
      placeholder,
      helperText,
      errorMessage,
      disabled = false,
      invalid = false,
      loading = false,
      variant = "outlined",
      size = "md",
      type = "text",
      clearable = false,
      showPasswordToggle = false,
      className,
      inputProps = {},
      ...props
    },
    ref
  ) => {
    const inputId = useId();
    const describedById = `${inputId}-desc`;
    const [showPw, setShowPw] = useState(false);

    const sizeClasses = {
      sm: "px-2 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    };

    const variantClasses = {
      outlined: "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900",
      filled: "bg-gray-100 dark:bg-gray-800 border border-transparent",
      ghost: "bg-transparent border border-transparent",
    };

    return (
      <div className={cn("w-full", className)} {...props}>
        {label && (
          <label
            htmlFor={id || inputId}
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            id={id || inputId}
            ref={ref}
            type={showPw ? "text" : type}
            value={value}
            onChange={onChange}
            disabled={disabled || loading}
            placeholder={placeholder}
            aria-describedby={helperText || errorMessage ? describedById : undefined}
            aria-invalid={invalid || !!errorMessage}
            className={cn(
              "w-full rounded-md focus:outline-none focus:ring-2",
              sizeClasses[size],
              variantClasses[variant],
              errorMessage ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400",
              (disabled || loading) && "opacity-60 cursor-not-allowed"
            )}
            {...inputProps}
          />

          {!loading && clearable && value && !disabled && (
            <button
              type="button"
              onClick={() => onChange?.({ target: { value: "" } })}
              className="absolute inset-y-0 right-2.5 my-auto inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Clear input"
            >
              ×
            </button>
          )}

          {type === "password" && showPasswordToggle && !loading && (
            <button
              type="button"
              onClick={() => setShowPw((s) => !s)}
              className="absolute inset-y-0 right-2.5 my-auto inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? "🙈" : "👁️"}
            </button>
          )}
        </div>

        {(helperText || errorMessage) && (
          <p
            id={describedById}
            className={cn(
              "mt-1.5 text-xs",
              errorMessage ? "text-red-600" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(["filled", "outlined", "ghost"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.string,
  clearable: PropTypes.bool,
  showPasswordToggle: PropTypes.bool,
  className: PropTypes.string,
  inputProps: PropTypes.object,
};

export default InputField;
