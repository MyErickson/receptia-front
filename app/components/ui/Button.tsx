import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "react-router";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  external?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  disabled = false,
  className = "",
  external = false,
  fullWidth = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500",
    secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-xl",
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  const MotionComponent = motion.button;

  if (to) {
    return (
      <Link to={to} className={fullWidth ? "w-full" : ""}>
        <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes}>
          {children}
        </motion.span>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={fullWidth ? "w-full" : ""}
      >
        <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={classes}>
          {children}
        </motion.span>
      </a>
    );
  }

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={classes}
    >
      {children}
    </MotionComponent>
  );
}
