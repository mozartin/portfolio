import React from "react";
import { Link } from "@inertiajs/react";

export function Button({ 
  children, 
  variant = "primary", 
  className = "", 
  iconRight,
  href,
  ...props 
}) {
  const baseStyles = "font-regular inline-flex items-center justify-center gap-2 transition-all duration-200";
  
  const variants = {
    primary: "btn-primary bg-mist text-plum",
    secondary: "btn-secondary text-white border-white border-2",
    "primary-light": "btn-primary text-mist bg-purple border-purple border-2 text-white",
    "secondary-light": "btn-secondary text-purple border-purple border-2",
    link: "text-text-primary hover:underline underline-offset-4",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    // External links or target="_blank" — use a regular <a> tag
    const isExternal = href.startsWith("http") || props.target === "_blank";

    if (isExternal) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
          {iconRight && <span className="text-lg">{iconRight}</span>}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...props}>
        {children}
        {iconRight && <span className="text-lg">{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {iconRight && <span className="text-lg">{iconRight}</span>}
    </button>
  );
}

