"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { motion } from "framer-motion";

function ShowcaseGradientBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a3d8a] via-[#4a3570] to-[#3d2b5e]" />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #7c5cb8 0%, transparent 70%)",
          filter: "blur(100px)",
          top: "-10%",
          left: "-5%",
        }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(90px)",
          bottom: "-10%",
          right: "10%",
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, -30, 25, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          filter: "blur(80px)",
          top: "30%",
          right: "30%",
        }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function ShowcaseHero() {
  return (
    <section
      id="showcase-hero"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 text-white overflow-hidden"
    >
      <ShowcaseGradientBg />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - text */}
          <div className="w-full">
            <motion.div
              className="w-12 h-0.5 bg-lavender mb-6 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.p
              className="mb-3 md:mb-4 font-regular italic text-lavender"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Pet Project &middot; Full-Stack Web App
            </motion.p>
            <motion.h1
              className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              FreelanceHub
            </motion.h1>
            <motion.p
              className="md:text-md font-regular text-white/85 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
              A full-stack freelance marketplace demo - browse jobs, send
              proposals, manage work. Built with React, Tailwind&nbsp;CSS,
              Laravel&nbsp;API and deployed to the cloud.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-4 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                href="https://freelancehub-tau.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </Button>
              <Button variant="secondary" href="/contact">
                Contact me
              </Button>
            </motion.div>
          </div>

          {/* Right - screenshot */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <a
              href="https://freelancehub-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500 font-regular text-center">
                      freelancehub-tau.vercel.app
                    </div>
                  </div>
                </div>
                <img
                  src="/images/showcase/freelancehub-home.png"
                  alt="FreelanceHub - Home page"
                  className="w-full h-auto block"
                />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
