"use client";

import { Button } from "../../Shared/Button";
import { StudioLogo } from "../../Shared/StudioLogo";
import { StudioRule } from "../../Shared/StudioRule";
import { CropMark } from "../../Shared/StudioFrame";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

function HeroAtmosphere({ sectionRef, mouseX, mouseY, reduceMotion }) {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scrollShift = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 16 : 40]
  );
  const parallaxX = useTransform(
    mouseX,
    [-0.5, 0.5],
    reduceMotion || isMobile ? [0, 0] : [-14, 14]
  );
  const parallaxY = useTransform(
    mouseY,
    [-0.5, 0.5],
    reduceMotion || isMobile ? [0, 0] : [-10, 10]
  );
  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ["35%", "65%"]);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ["30%", "60%"]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_-15%,#2f1d4a_0%,#1a122e_45%,#100a1c_78%,#0c0814_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#241636]/50 via-transparent to-[#0c0814]" />

      {/* Cursor spotlight */}
      {!isMobile && !reduceMotion && (
        <motion.div
          className="absolute h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            left: spotlightX,
            top: spotlightY,
            background:
              "radial-gradient(circle, rgba(184,164,214,0.16) 0%, transparent 68%)",
            filter: "blur(8px)",
          }}
        />
      )}

      <motion.div className="absolute -inset-[10%]" style={{ x: parallaxX, y: parallaxY }}>
        <motion.div className="absolute inset-0" style={{ y: scrollShift }}>
          <motion.div
            className="absolute left-[-10%] top-[5%] h-[55vmin] w-[55vmin] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(184,164,214,0.18) 0%, transparent 70%)",
              filter: "blur(36px)",
            }}
            animate={reduceMotion ? undefined : { x: ["0%", "55%"], y: ["0%", "12%"] }}
            transition={{ duration: 32, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute bottom-[-5%] right-[-5%] h-[50vmin] w-[50vmin] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(124,92,184,0.22) 0%, transparent 72%)",
              filter: "blur(42px)",
            }}
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }
            }
            transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Perspective floor grid */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(184,164,214,0.55) 1px, transparent 1px), linear-gradient(to bottom, rgba(184,164,214,0.55) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 85%)",
          transform: "perspective(900px) rotateX(52deg)",
          transformOrigin: "center bottom",
        }}
      />

      {/* Vertical studio rails */}
      <div className="absolute inset-y-0 left-[4%] hidden w-px bg-gradient-to-b from-transparent via-lavender/25 to-transparent md:block" />
      <div className="absolute inset-y-0 right-[4%] hidden w-px bg-gradient-to-b from-transparent via-lavender/25 to-transparent md:block" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(12,8,20,0.55)_100%)]" />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.28] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

function HeroDecor({ reduceMotion }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      {/* Slow orbiting ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(78vw,34rem)] w-[min(78vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lavender/10"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
      >
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender/50" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-[min(92vw,42rem)] w-[min(92vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.06]"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
      />

      {/* Editorial crop marks */}
      <CropMark tone="white" className="left-[5%] top-[12%] md:left-[6%] md:top-[14%]" />
      <CropMark tone="white" className="right-[5%] top-[12%] rotate-90 md:right-[6%] md:top-[14%]" />
      <CropMark tone="white" className="bottom-[18%] left-[5%] -rotate-90 md:bottom-[20%] md:left-[6%]" />
      <CropMark tone="white" className="bottom-[18%] right-[5%] rotate-180 md:bottom-[20%] md:right-[6%]" />
    </div>
  );
}

const PROOF_ITEMS = [
  "Web Design",
  "Web Development",
  "E-commerce",
  "Website Redesign",
  "Idea to launch",
  "Figma to production",
  "Multilingual sites",
  "Sites & custom web apps",
  "Building since 2023",
  "EN · NL · UA · RU",
  "Europe · Worldwide",
];

function ProofBarItem({ label }) {
  return (
    <li className="flex shrink-0 items-center">
      <span
        className="mx-5 h-1 w-1 shrink-0 rounded-full bg-lavender/50 md:mx-7"
        aria-hidden
      />
      <span className="font-regular whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-white/55 md:text-xs">
        {label}
      </span>
    </li>
  );
}

function ProofBar() {
  const track = [...PROOF_ITEMS, ...PROOF_ITEMS];

  return (
    <div className="w-full border-t border-white/10 bg-[#0c0814]/40 py-5 backdrop-blur-sm md:py-6">
      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0c0814] to-transparent md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#0c0814] to-transparent md:w-20" />

        <ul
          className="flex w-max items-center animate-proof-marquee group-hover:[animation-play-state:paused]"
          aria-label="What I offer"
        >
          {track.map((item, i) => (
            <ProofBarItem key={`${item}-${i}`} label={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Header78() {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const [reduceMotion, setReduceMotion] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 28, damping: 28, mass: 1.2 });
  const springY = useSpring(mouseY, { stiffness: 28, damping: 28, mass: 1.2 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile || reduceMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <HeroAtmosphere
        sectionRef={sectionRef}
        mouseX={springX}
        mouseY={springY}
        reduceMotion={reduceMotion}
      />
      <HeroDecor reduceMotion={reduceMotion} />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-[5%] py-16 md:py-20">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mx-auto mb-6 w-max max-w-[min(90vw,22rem)] md:mb-8"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <StudioLogo
              tone="light"
              layout="stacked"
              markClassName="h-[4.5rem] w-[4.5rem] md:h-20 md:w-20"
              wordmarkClassName="mt-5"
            />
          </motion.div>

          <StudioRule className="mb-6 md:mb-8" />

          <h1 className="mb-5 font-heading text-5xl font-bold uppercase leading-[1.05] tracking-tight md:mb-6 md:text-7xl lg:text-8xl">
            From idea
            <br />
            to a website
            <br />
            worth remembering.
          </h1>

          <p className="flex items-center justify-center gap-x-3 font-regular text-white/75 md:gap-x-4 md:text-md">
            <span>Design</span>
            <span aria-hidden="true" className="opacity-60">
              ·
            </span>
            <span>Code</span>
            <span aria-hidden="true" className="opacity-60">
              ·
            </span>
            <span>Experience</span>
          </p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <Button href="/showcase">Explore my work</Button>
            <Button variant="secondary" href="/contact">
              Let&apos;s talk →
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-auto">
        <ProofBar />
      </div>
    </section>
  );
}
