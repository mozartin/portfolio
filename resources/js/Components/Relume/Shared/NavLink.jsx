import React from "react";
import { Link, usePage } from "@inertiajs/react";

export function NavLink({
  href,
  children,
  className = "",
  onClick,
  variant = "default",
}) {
  const { url } = usePage();
  const isActive =
    href === "/"
      ? url === "/"
      : url === href || url.startsWith(href + "/");
  const isLight = variant === "light";

  const activeClass = isLight
    ? "bg-white/15 text-white font-medium"
    : "bg-lavender/45 text-plum font-medium";

  const inactiveClass = isLight
    ? "text-white/75 hover:bg-white/10 hover:text-white"
    : "text-plum/80 hover:bg-lavender/25 hover:text-plum";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        block rounded-full px-4 py-2.5 text-center font-regular text-base
        transition-all duration-300 ease-out
        first:mt-2 lg:first:mt-0
        ${isActive ? activeClass : inactiveClass}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
