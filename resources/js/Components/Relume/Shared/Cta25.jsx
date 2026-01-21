"use client";

import { Button } from "./Button";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Cta25({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = canAnimate && isInView;

  return (
    <section ref={ref} id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden bg-mist text-plum">
      <motion.div 
        className="container max-w-lg text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (shouldAnimate && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
      >
        <h2 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
          Ready to build something real
        </h2>
        <p className="md:text-md font-regular">
          I'm a web developer with real production experience. I care about
          clarity — in design, code, and communication.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button variant="primary-light" href="/contact">Work with me</Button>
          <Button variant="secondary-light" href="/about">About me</Button>
        </div>
      </motion.div>
    </section>
  );
}

