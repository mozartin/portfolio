"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Layout36({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = canAnimate && isInView;

  return (
    <section ref={ref} id="services-preview" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum overflow-hidden">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 60 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (shouldAnimate && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
      >
        <div className="w-full max-w-md">
          <h3 className="mb-5 text-4xl font-bold font-heading leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
            Development with purpose, not just code
          </h3>
          <p className="md:text-md font-regular">
            I'm a full-stack web developer who builds with intention. Every project 
            I take on is grounded in clean architecture, clear communication, and real production standards.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
