"use client";

import { Button } from "../../Shared/Button";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

const steps = [
  {
    title: "Understand first",
    text: "Every project starts with understanding the goal. I focus on structure, logic, and purpose before writing code.",
  },
  {
    title: "Design with purpose",
    text: "Interfaces based on real user behavior - responsive layouts, accessibility, and clean UX.",
  },
  {
    title: "Build clean architecture",
    text: "React + Laravel apps with readable code, predictable structure, and maintainable systems.",
  },
  {
    title: "Ship to production",
    text: "Test, deploy, and support projects after launch.",
  },
];

export function Layout300() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useIsMobile();
  const shouldAnimate = m || isInView;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardFade = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} id="skills" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum">
      <div className="container">
        <div className="flex flex-col items-start">
          <motion.div
            className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20"
            initial={m ? false : { opacity: 0, y: 40 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={m ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
          >
            <img src="/images/logo-icon.png" alt="" className="w-16 h-16 mx-auto mb-4 opacity-60" />
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              How I work
            </h2>
            <p className="text-center md:text-md font-regular">
              A clear process - from idea to production-ready app.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4"
            variants={staggerContainer}
            initial={m ? false : "hidden"}
            animate={shouldAnimate ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div key={step.title} className="w-full" variants={m ? {} : cardFade}>
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center">
                  <span className="text-purple font-heading font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-3 text-center text-xl font-bold font-heading md:mb-4 md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-center font-regular">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20"
            initial={m ? false : { opacity: 0, y: 20 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={m ? { duration: 0 } : { duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <Button variant="primary-light" href="/showcase">View Projects</Button>
            <Button variant="secondary-light" iconRight={<RxChevronRight />} href="/contact">Let's Work Together</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
