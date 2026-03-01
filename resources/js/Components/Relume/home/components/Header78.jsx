"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { motion } from "framer-motion";

function HeroGradientBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1433] via-[#2a1a42] to-[#1a0f2e]" />

      {/* Soft blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #7c5cb8 0%, transparent 70%)",
          filter: "blur(100px)",
          top: "-15%",
          left: "10%",
        }}
        animate={{
          x: [0, 50, -20, 0],
          y: [0, 30, -15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #b8a4d6 0%, transparent 70%)",
          filter: "blur(90px)",
          bottom: "-10%",
          right: "5%",
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -25, 20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #5dbba8 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "40%",
          right: "25%",
        }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Header78() {
  return (
    <section 
      id="hero" 
      className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white overflow-hidden"
    >
      <HeroGradientBg />

      <div className="container flex flex-col items-center relative z-10">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          {/* Floating logo icon */}
          <motion.img
            src="/images/logo-icon.png"
            alt=""
            className="w-14 h-14 mx-auto mb-6 opacity-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 0.5, 
              scale: 1,
              y: [0, -5, 0],
            }}
            transition={{ 
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Accent line */}
          <motion.div
            className="w-10 h-0.5 bg-lavender mx-auto mb-6 origin-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          />

          <motion.h1
            className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            Full-stack Web Developer with an eye for UI/UX
          </motion.h1>

          <motion.p
            className="md:text-md font-regular italic text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            I build responsive web apps with React and Laravel - clean code, fast performance, and thoughtful design.
          </motion.p>

          <motion.div
            className="mt-6 flex items-center justify-center gap-x-4 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
          >
            <Button href="/showcase">View Projects</Button>
            <Button variant="secondary" href="/contact">Let's Work Together</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
