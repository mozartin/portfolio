"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

const screenshots = [
  {
    src: "/images/showcase/freelancehub-home.png",
    alt: "FreelanceHub - Home page with hero section and latest jobs",
    label: "Home",
  },
  {
    src: "/images/showcase/freelancehub-jobs.png",
    alt: "FreelanceHub - Jobs listing page with search",
    label: "Jobs",
  },
  {
    src: "/images/showcase/freelancehub-profile.png",
    alt: "FreelanceHub - Freelancer profile page with skills and links",
    label: "Profile",
  },
  {
    src: "/images/showcase/freelancehub-register.png",
    alt: "FreelanceHub - Registration page with role selection",
    label: "Register",
  },
];

export function ShowcaseGallery({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useIsMobile();
  const shouldAnimate = m || (canAnimate && isInView);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={ref}
      id="showcase-gallery"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-purple text-white overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial={m ? false : { opacity: 0, y: 40 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={m ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (shouldAnimate && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
        >
          <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
            <img src="/images/logo-icon.png" alt="" className="w-16 h-16 mx-auto mb-4 opacity-40" />
            <p className="mb-3 md:mb-4 font-regular italic text-lavender">
              Screenshots
            </p>
            <h2 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              See it in action
            </h2>
            <p className="font-regular text-white/80">
              A walkthrough of the main pages and interfaces of FreelanceHub.
            </p>
          </div>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={m ? false : { opacity: 0, y: 20 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={m ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {screenshots.map((screen, index) => (
            <button
              key={screen.label}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2 rounded-full font-regular text-sm transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white text-plum shadow-md"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              {screen.label}
            </button>
          ))}
        </motion.div>

        {/* Screenshot display */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={m ? false : { opacity: 0, y: 30 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={m ? { duration: 0 } : { duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Browser-style top bar */}
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

            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].alt}
                className="w-full h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Caption */}
          <p className="text-center mt-6 font-regular text-sm text-white/60">
            {screenshots[activeIndex].alt}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
