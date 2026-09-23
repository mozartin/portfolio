"use client";

import React, { useRef } from "react";
import { Link } from "@inertiajs/react";
import { NavLink } from "./NavLink";
import { StudioLogo } from "./StudioLogo";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../../hooks/useIsMobile";

export function Footer7() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const m = useIsMobile();
  const shouldAnimate = m || isInView;

  return (
    <footer
      ref={ref}
      id="footer"
      className="relative overflow-hidden bg-[#0f0a1a] px-[5%] py-12 text-white md:py-18 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124, 92, 184, 0.18), transparent 70%)",
        }}
      />
      <div className="container relative z-10">
        <motion.div
          className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20"
          initial={m ? false : { opacity: 0, y: 30 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={m ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        >
          <Link href="/" className="mb-8 inline-flex">
            <StudioLogo tone="light" layout="horizontal" />
          </Link>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li>
              <NavLink href="/" variant="light">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" variant="light">
                About
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact" variant="light">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink href="/services" variant="light">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink href="/showcase" variant="light">
                Showcases
              </NavLink>
            </li>
          </ul>
        </motion.div>
        <div className="h-px w-full bg-white/15" />
        <motion.div
          className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8"
          initial={m ? false : { opacity: 0 }}
          animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
          transition={m ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
        >
          <p className="mt-8 font-regular italic text-white/55 md:mt-0">
            © 2026 Olena Beliavska. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
