"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { StudioFrame } from "../../Shared/StudioFrame";

export function Layout36({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useIsMobile();
  const shouldAnimate = m || (canAnimate && isInView);

  return (
    <section
      ref={ref}
      id="services-preview"
      className="overflow-hidden bg-mist px-[5%] py-16 text-plum md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="w-full max-w-md">
            <motion.div
              className="mb-6 h-px w-16 origin-left bg-gradient-to-r from-transparent via-lavender to-transparent"
              initial={m ? false : { scaleX: 0 }}
              animate={shouldAnimate ? { scaleX: 1 } : { scaleX: 0 }}
              transition={m ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
            />
            <motion.p
              className="mb-3 font-regular italic text-purple md:mb-4"
              initial={m ? false : { opacity: 0, y: 16 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={m ? { duration: 0 } : { duration: 0.5, delay: 0.05, ease: "easeOut" }}
            >
              The person behind the work
            </motion.p>
            <motion.h3
              className="mb-5 font-heading text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl"
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
              className="font-regular md:text-md"
              initial={m ? false : { opacity: 0, y: 30 }}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={m ? { duration: 0 } : { duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
              I&apos;m a full-stack web developer with production experience since 2023.
              I truly enjoy building web products, focusing on clean architecture, clear
              communication, and reliable, production-ready results.
            </motion.p>
          </div>

          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={m ? false : { opacity: 0, y: 28 }}
            animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={m ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <StudioFrame tone="dark" glow>
              <img
                src="/images/about/portrait-home.jpg"
                alt="Olena Beliavska"
                className="aspect-[4/5] w-full object-cover object-[center_15%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/25 via-transparent to-transparent" />
            </StudioFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
