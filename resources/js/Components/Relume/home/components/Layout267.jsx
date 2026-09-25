"use client";

import { Button } from "../../Shared/Button";
import { StudioRule } from "../../Shared/StudioRule";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

const columns = [
  {
    title: "End-to-end development",
    text: "Concept → design → code → deploy.",
  },
  {
    title: "Modern stack",
    text: "React, Laravel, Tailwind, Inertia, Docker — and I'm always learning new tools to improve performance, UX, and developer experience.",
  },
  {
    title: "Clean architecture",
    text: "Readable code. Thoughtful UX. Maintainable systems.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
};

const colFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Layout267({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useIsMobile();
  const shouldAnimate = m || (canAnimate && isInView);

  return (
    <section
      ref={ref}
      id="approach"
      className="relative overflow-hidden px-[5%] py-16 text-plum md:py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(180deg, #E8E1F0 0%, #F3F0F6 38%, #F3F0F6 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-lavender/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-purple/10 blur-3xl"
        aria-hidden
      />

      <motion.div
        className="container relative z-10"
        initial={m ? false : { opacity: 0, y: 60 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={m ? { duration: 0 } : { duration: 0.8, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (shouldAnimate && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
      >
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <StudioRule className="mb-6" />
          <p className="mb-3 font-regular italic text-purple md:mb-4">
            What I bring
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-y-16"
          variants={staggerContainer}
          initial={m ? false : "hidden"}
          animate={shouldAnimate ? "visible" : "hidden"}
        >
          {columns.map((col, index) => (
            <motion.div
              key={col.title}
              className={`w-full px-0 text-center md:px-8 lg:px-10 ${
                index > 0
                  ? "md:border-l md:border-plum/10"
                  : ""
              }`}
              variants={m ? {} : colFade}
            >
              <p className="mb-3 font-heading text-sm font-bold tracking-[0.2em] text-purple/60">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-5 font-heading text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {col.title}
              </h3>
              <p className="font-regular text-plum/75">{col.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4 md:mt-18 lg:mt-20"
          initial={m ? false : { opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={m ? { duration: 0 } : { duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <Button variant="primary-light" href="/showcase">
            View Projects
          </Button>
          <Button variant="secondary-light" href="/contact">
            Let&apos;s Work Together
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
