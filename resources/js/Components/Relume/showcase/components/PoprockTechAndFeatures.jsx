"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import {
  BiGlobe,
  BiCalendarCheck,
  BiMusic,
  BiImages,
  BiEdit,
  BiRocket,
} from "react-icons/bi";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "Blade + Tailwind CSS v4", detail: "Custom dark neon UI" },
      { name: "Vite", detail: "Asset bundling" },
      { name: "Motion & effects", detail: "Parallax, neon cursor, showreel" },
    ],
  },
  {
    category: "Backend & CMS",
    items: [
      { name: "Laravel", detail: "PHP application framework" },
      { name: "Filament", detail: "Admin panel for content" },
      { name: "Spatie Translatable", detail: "EN · NL · UA · RU" },
    ],
  },
  {
    category: "Ops & Mail",
    items: [
      { name: "Docker + Coolify", detail: "Production deploy on Hetzner" },
      { name: "Resend", detail: "Transactional contact email" },
      { name: "SQLite / volumes", detail: "Simple, durable hosting setup" },
    ],
  },
];

const features = [
  {
    icon: <BiRocket className="h-5 w-5" />,
    title: "Booking-first landing",
    description:
      "Hero, services, and CTA blocks repeatedly push “Check Availability”, built to turn browsers into bookings.",
  },
  {
    icon: <BiGlobe className="h-5 w-5" />,
    title: "Four languages",
    description:
      "Full site content in English, Dutch, Ukrainian, and Russian so the band can reach clients across the Netherlands and beyond.",
  },
  {
    icon: <BiCalendarCheck className="h-5 w-5" />,
    title: "Upcoming events",
    description:
      "Show listings with date, venue, and ticket info so visitors can catch the band live before they book.",
  },
  {
    icon: <BiMusic className="h-5 w-5" />,
    title: "About the band",
    description:
      "Story, quote, and member roles presented with the same high-energy visual system as the live show.",
  },
  {
    icon: <BiImages className="h-5 w-5" />,
    title: "Live moments",
    description:
      "Vertical clip gallery from real performances: energy on the dance floor, proof before the book.",
  },
  {
    icon: <BiEdit className="h-5 w-5" />,
    title: "Editable in Filament",
    description:
      "The band can update events, copy, and media from a Filament admin without touching code.",
  },
];

export function PoprockTechAndFeatures({
  canAnimate = true,
  onAnimationComplete,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useIsMobile();
  const shouldAnimate = m || (canAnimate && isInView);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="showcase-details"
      className="overflow-hidden bg-mist px-[5%] py-16 text-plum md:py-24 lg:py-28"
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
          <div className="mx-auto mb-10 max-w-lg text-center md:mb-14">
            <img
              src="/images/logo-icon.png"
              alt=""
              className="mx-auto mb-4 h-16 w-16 opacity-60"
            />
            <p className="mb-3 font-regular italic text-purple md:mb-4">
              Under the hood
            </p>
            <h2 className="mb-5 font-heading text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Tech stack
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="mb-20 grid grid-cols-1 gap-6 md:mb-28 md:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          initial={m ? false : "hidden"}
          animate={shouldAnimate ? "visible" : "hidden"}
        >
          {techStack.map((group) => (
            <motion.div
              key={group.category}
              variants={m ? {} : fadeUp}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <h3 className="mb-5 font-heading text-lg font-bold text-purple">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-purple" />
                    <div>
                      <p className="font-regular font-semibold text-plum">
                        {item.name}
                      </p>
                      <p className="font-regular text-sm text-plum/60">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={m ? false : { opacity: 0, y: 40 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={
            m ? { duration: 0 } : { duration: 0.7, delay: 0.2, ease: "easeOut" }
          }
        >
          <div className="mx-auto mb-10 max-w-lg text-center md:mb-14">
            <img
              src="/images/logo-icon.png"
              alt=""
              className="mx-auto mb-4 h-16 w-16 opacity-60"
            />
            <p className="mb-3 font-regular italic text-purple md:mb-4">
              What&apos;s inside
            </p>
            <h2 className="mb-5 font-heading text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Key features
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer}
          initial={m ? false : "hidden"}
          animate={shouldAnimate ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={m ? {} : fadeUp}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-purple/10 text-purple">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold">
                {feature.title}
              </h3>
              <p className="font-regular text-sm leading-relaxed text-plum/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
