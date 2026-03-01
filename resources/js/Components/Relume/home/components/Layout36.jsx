"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

export function Layout36({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useIsMobile();
  const shouldAnimate = m || (canAnimate && isInView);

  return (
    <section ref={ref} id="services-preview" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum overflow-hidden">
      <div className="container">
        <div className="w-full max-w-md">
          <motion.div
            className="w-12 h-0.5 bg-purple mb-6 origin-left"
            initial={m ? false : { scaleX: 0 }}
            animate={shouldAnimate ? { scaleX: 1 } : { scaleX: 0 }}
            transition={m ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          />
          <motion.h3
            className="mb-5 text-4xl font-bold font-heading leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl"
            initial={m ? false : { opacity: 0, y: 40 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={m ? { duration: 0 } : { duration: 0.7, delay: 0.1, ease: "easeOut" }}
            onAnimationComplete={() => {
              if (shouldAnimate && onAnimationComplete) {
                onAnimationComplete();
              }
            }}
          >
            Development with purpose, not just code
          </motion.h3>
          <motion.p
            className="md:text-md font-regular"
            initial={m ? false : { opacity: 0, y: 30 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={m ? { duration: 0 } : { duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            I'm a full-stack web developer with production experience since 2023.
            I truly enjoy building web products, focusing on clean architecture, clear communication, and reliable, production-ready results.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
