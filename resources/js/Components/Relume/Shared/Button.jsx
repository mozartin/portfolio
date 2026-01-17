import React from "react";

export function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  iconRight,
  ...props 
}) {
  const baseStyles = "font-regular inline-flex items-center justify-center gap-2 transition-all duration-200";
  
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    link: "text-text-primary hover:underline underline-offset-4",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {iconRight && <span className="text-lg">{iconRight}</span>}
    </button>
  );
}

