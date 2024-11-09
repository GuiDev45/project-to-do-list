import { forwardRef } from "react";

type InputProps = {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  defaultValue?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", maxLength, defaultValue, onBlur, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        maxLength={maxLength}
        defaultValue={defaultValue}
        className={className}
        placeholder={props.placeholder}
        onBlur={onBlur}
      />
    );
  },
);
