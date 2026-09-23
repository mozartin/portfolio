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
    ? "text-white font-medium underline decoration-lavender/70 underline-offset-[6px] decoration-2"
    : "text-plum font-medium underline decoration-purple underline-offset-[6px] decoration-2";

  const inactiveClass = isLight
    ? "text-white/75 hover:text-white"
    : "text-plum/70 hover:text-plum";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        block px-3 py-2.5 text-center font-regular text-base
        transition-colors duration-300 ease-out
        first:mt-2 lg:first:mt-0
        ${isActive ? activeClass : inactiveClass}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
