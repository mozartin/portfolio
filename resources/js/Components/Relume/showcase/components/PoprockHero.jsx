"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

function PoprockGradientBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1a1028]" />

      <motion.div
        className="absolute h-[480px] w-[480px] rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, #8A3FFC 0%, transparent 70%)",
          filter: "blur(100px)",
          top: "-12%",
          left: "-8%",
        }}
        animate={{
          x: [0, 50, -15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, #00F2FF 0%, transparent 70%)",
          filter: "blur(90px)",
          bottom: "-15%",
          right: "5%",
        }}
        animate={{
          x: [0, -35, 25, 0],
          y: [0, -25, 20, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function PoprockHero() {
  const m = useIsMobile();

  return (
    <section
      id="showcase-hero"
      className="relative overflow-hidden px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      {m ? (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#1a1028]" />
      ) : (
        <PoprockGradientBg />
      )}

      <div className="container relative z-10">
        <Link
          href="/showcase"
          className="mb-8 inline-flex font-regular text-sm text-white/60 transition-colors hover:text-white"
        >
          ← All projects
        </Link>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="w-full">
            <div className="mb-6 h-0.5 w-12 bg-cyan-300" />
            <p className="mb-3 font-regular italic text-cyan-300/90 md:mb-4">
              Client project · Band website
            </p>
            <h1 className="mb-5 font-heading text-5xl font-bold md:mb-6 md:text-8xl lg:text-9xl">
              Pop/Rock Avenue
            </h1>
            <p className="max-w-md font-regular text-white/85 md:text-md">
              A conversion-focused site for an 8-piece live cover band in the
              Netherlands. Dark neon design, four languages, and booking CTAs
              that make it easy to check availability.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button
                href="https://www.poprockavenue.nl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
              </Button>
              <Button variant="secondary" href="/contact">
                Contact me
              </Button>
            </div>
          </div>

          <div className="w-full">
            <a
              href="https://www.poprockavenue.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
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
                <img
                  src="/images/showcase/poprock-hero.jpg"
                  alt="Pop/Rock Avenue hero section"
                  className="block h-auto w-full"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
