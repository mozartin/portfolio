"use client";

import React, { useRef } from "react";
import { Link } from "@inertiajs/react";
import { NavLink } from "./NavLink";
import { motion, useInView } from "framer-motion";

export function Footer7() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} id="footer" className="px-[5%] py-12 md:py-18 lg:py-20 bg-plum-bg text-white">
      <div className="container">
        <motion.div
          className="flex flex-col items-center pb-12 md:pb-18 lg:pb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
            <li>
              <NavLink href="/showcase" variant="light">Showcase</NavLink>
            </li>
          </ul>
        </motion.div>
        <div className="h-px w-full bg-white" />
        <motion.div
          className="flex flex-col-reverse items-center justify-between pb-4 pt-6 text-center text-sm md:flex-row md:pb-0 md:pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mt-8 md:mt-0 font-regular italic">© 2026 Olena Beliavska. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
