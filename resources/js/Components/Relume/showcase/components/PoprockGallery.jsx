"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

const screenshots = [
  {
    src: "/images/showcase/poprock-hero.jpg",
    alt: "Pop/Rock Avenue: full-bleed hero with neon gradients and booking CTAs",
    label: "Hero",
  },
  {
    src: "/images/showcase/poprock-about.jpg",
    alt: "About the band: photo, story, quote, and member roles",
    label: "About",
  },
  {
    src: "/images/showcase/poprock-members.png",
    alt: "Band member cards with roles and names on the dark UI",
    label: "Members",
  },
];

export function PoprockGallery({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useIsMobile();
  const shouldAnimate = m || (canAnimate && isInView);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={ref}
      id="showcase-gallery"
      className="overflow-hidden bg-purple px-[5%] py-16 text-white md:py-24 lg:py-28"
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
            <img
              src="/images/logo-icon.png"
              alt=""
              className="mx-auto mb-4 h-16 w-16 opacity-40"
            />
            <p className="mb-3 font-regular italic text-lavender md:mb-4">
              Screenshots
            </p>
            <h2 className="mb-5 font-heading text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              See it in action
            </h2>
            <p className="font-regular text-white/80">
              Hero energy, about story, and the band lineup: the pages that sell
              the live experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-3"
          initial={m ? false : { opacity: 0, y: 20 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={
            m ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease: "easeOut" }
          }
        >
          {screenshots.map((screen, index) => (
            <button
              key={screen.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-5 py-2 font-regular text-sm transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white text-plum shadow-md"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              {screen.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={m ? false : { opacity: 0, y: 30 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={
            m ? { duration: 0 } : { duration: 0.7, delay: 0.3, ease: "easeOut" }
          }
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="mx-4 flex-1">
                <div className="rounded-md bg-white px-3 py-1 text-center font-regular text-xs text-gray-500">
                  poprockavenue.nl
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={screenshots[activeIndex].src}
                alt={screenshots[activeIndex].alt}
                className="h-auto w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          <p className="mt-6 text-center font-regular text-sm text-white/60">
            {screenshots[activeIndex].alt}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
