import React from "react";
import { Link, usePage } from "@inertiajs/react";

export function NavLink({ href, children, className = "" }) {
  const { url } = usePage();
  const isActive = url === href || url.startsWith(href + '/');

  return (
    <Link
      href={href}
      className={`
        block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 font-regular
        relative transition-all duration-300 ease-out
        hover:text-plum
        after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
        after:h-0.5 after:bg-plum after:transition-all after:duration-300
        ${isActive ? 'text-plum after:w-full' : 'after:w-0 hover:after:w-full'}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}

