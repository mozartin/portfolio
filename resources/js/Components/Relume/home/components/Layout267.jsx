"use client";

import { Button } from "../../Shared/Button";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const columns = [
  {
    title: "End-to-end development",
    text: "Concept → design → code → deploy.",
  },
  {
    title: "Modern stack",
    text: "React, Laravel, Tailwind, Inertia, Docker - and I'm always learning new tools to improve performance, UX, and developer experience.",
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

function AnimatedGradientBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#1a0a2e]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2d1b69] via-[#11204d] to-[#0a1628]" />

      {/* Animated blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 80, 30, 0],
          y: [0, 60, -20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "-15%",
          left: "20%",
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[550px] h-[550px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          filter: "blur(90px)",
          top: "10%",
          right: "-10%",
        }}
        animate={{
          x: [0, -70, 20, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, #ec4899 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "5%",
          right: "10%",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.85, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full opacity-45"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          filter: "blur(90px)",
          top: "40%",
          left: "35%",
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 50, -30, 0],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}

export function Layout267({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = canAnimate && isInView;

  return (
    <section ref={ref} id="approach" className="relative px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      <motion.div 
        className="container relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (shouldAnimate && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
      >
        <div className="mx-auto mb-12 max-w-lg text-center text-white md:mb-18 lg:mb-20">
          <img src="/images/logo-icon.png" alt="" className="w-16 h-16 mx-auto mb-4 opacity-40" />
          <p className="mb-3 md:mb-4 font-regular italic text-white/80">What I bring</p>
        </div>
        <motion.div
          className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
          variants={staggerContainer}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
        >
          {columns.map((col) => (
            <motion.div key={col.title} className="w-full text-center" variants={colFade}>
              <h3 className="mb-5 text-2xl font-bold font-heading text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {col.title}
              </h3>
              <p className="text-white/80 font-regular">
                {col.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4 md:mt-18 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <Button variant="primary" href="/showcase">
            View Projects
          </Button>
          <Button variant="secondary" href="/contact">
            Let's Work Together
          </Button>
        </motion.div>
      </motion.div>

      <AnimatedGradientBg />
    </section>
  );
}
