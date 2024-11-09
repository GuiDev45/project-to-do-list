import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  defaultValue?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className = "", maxLength, defaultValue, onBlur, required, ...props },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        {...props}
        maxLength={maxLength}
        defaultValue={defaultValue}
        className={className}
        placeholder={props.placeholder}
        onBlur={onBlur}
        required={required}
      />
    );
  },
);
