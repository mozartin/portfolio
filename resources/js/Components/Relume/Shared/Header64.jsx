"use client";

import React from "react";
import { motion } from "framer-motion";

export function Header64() {
  return (
    <section id="page-header" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum">
      <div className="container max-w-lg text-center">
        <motion.h1
          className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Let's work together
        </motion.h1>
      </div>
    </section>
  );
}
