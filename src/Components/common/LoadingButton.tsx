import { ButtonHTMLAttributes, ReactNode } from "react";

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

export const LoadingButton = ({
  loading = false,
  children,
  className = "",
  ...props
}: LoadingButtonProps) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`w-full bg-[#4269c2] hover:bg-[#2f55a3] text-white py-2 rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? "Saving..." : children}
    </button>
  );
};
