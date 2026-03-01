"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

function AboutGradientBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a3d8a] via-[#6b4fa0] to-[#4a3070]" />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          filter: "blur(90px)",
          top: "-10%",
          right: "10%",
        }}
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 40, -15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #b8a4d6 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "-15%",
          left: "5%",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 25, 0],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #5dbba8 0%, transparent 70%)",
          filter: "blur(70px)",
          top: "50%",
          left: "40%",
        }}
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Header44() {
  const m = useIsMobile();

  return (
    <section id="about-header" className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white overflow-hidden">
      {m ? (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#5a3d8a] via-[#6b4fa0] to-[#4a3070]" />
      ) : (
        <AboutGradientBg />
      )}

      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <div className="w-12 h-0.5 bg-lavender mb-6" />
          <p className="mb-3 md:mb-4 font-regular italic text-lavender">
            Developer
          </p>
          <h1 className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl">
            About me
          </h1>
          <p className="md:text-md font-regular text-white/85">
            I'm a full-stack web developer who builds modern, responsive websites 
            and web applications. I work independently and take full responsibility 
            for each project - from concept and design to code and deployment.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button href="/services">Services</Button>
            <Button variant="secondary" href="/contact">Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
