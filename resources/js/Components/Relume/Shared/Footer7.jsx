"use client";

import React from "react";
import { Link } from "@inertiajs/react";
import { NavLink } from "./NavLink";

export function Footer7() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 bg-plum text-white">
      <div className="container">
        <div className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20">
          <Link href="/" className="mb-8">
            <img
              src="/images/logo.png"
              alt="Logo image"
              className="inline-block h-10 w-auto"
            />
          </Link>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li>
              <NavLink href="/" variant="light">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about" variant="light">About</NavLink>
            </li>
            <li>
              <NavLink href="/contact" variant="light">Contact</NavLink>
            </li>
            <li> 
              <NavLink href="/services" variant="light">Services</NavLink>
            </li>
          </ul>
        </div>
        <div className="h-px w-full bg-white" />
        <div className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8">
          <p className="mt-8 md:mt-0 font-regular italic">© 2026 Beliavska Web Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

