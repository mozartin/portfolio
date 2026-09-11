"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

export function ProjectsHero() {
  const m = useIsMobile();

  return (
    <section
      id="showcase-hero"
      className="relative overflow-hidden bg-mist px-[5%] py-16 text-plum md:py-24 lg:py-28"
    >
      <div className="container relative z-10 max-w-3xl">
        <motion.div
          initial={m ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={m ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 h-0.5 w-12 bg-lavender" />
          <p className="mb-3 font-regular italic text-purple md:mb-4">
            Selected work
          </p>
          <h1 className="mb-5 font-heading text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Projects
          </h1>
          <p className="max-w-xl font-regular text-plum/75 md:text-md">
            A few sites I&apos;ve designed and built, from client landing pages
            to full-stack web apps.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
