"use client";

import { Button } from "../../Shared/Button";
import { StudioRule, StudioRuleWide } from "../../Shared/StudioRule";
import React, { useRef } from "react";
import { BiCheck } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";

const plans = [
  {
    title: "Small website",
    subtitle: "For freelancers or small businesses",
    features: [
      "1-3 pages",
      "responsive layout",
      "contact form",
      "deployment help",
    ],
  },
  {
    title: "Business website",
    subtitle: "For companies that need a clear online presence",
    features: [
      "4-6 pages",
      "structured content",
      "basic CMS or blog",
      "deployment & support",
    ],
  },
  {
    title: "Custom web app",
    subtitle: "For projects that need custom logic",
    features: [
      "React + Laravel stack",
      "authentication if needed",
      "simple CRUD features",
      "documentation",
    ],
  },
];

export function Pricing20() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useIsMobile();
  const shouldAnimate = m || isInView;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardFade = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="pricing"
      className="relative overflow-hidden bg-mist px-[5%] py-16 text-plum md:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% -5%, rgba(184, 164, 214, 0.3), transparent 55%)",
        }}
      />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20"
          initial={m ? false : { opacity: 0, y: 40 }}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={m ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
        >
          <StudioRule className="mb-6" />
          <p className="mb-3 font-regular italic text-purple md:mb-4">Services</p>
          <h1 className="mb-5 font-heading text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Web development services
          </h1>
          <p className="font-regular text-plum/70 md:text-md">
            Simple, reliable websites and small web applications. Projects scoped
            individually depending on goals and complexity.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial={m ? false : "hidden"}
          animate={shouldAnimate ? "visible" : "hidden"}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={m ? {} : cardFade}
              className="flex h-full flex-col border border-plum/8 bg-white/70 px-6 py-8 backdrop-blur-sm md:p-8"
            >
              <h2 className="mb-2 font-heading text-xl font-bold md:text-2xl">
                {plan.title}
              </h2>
              <p className="font-regular text-sm text-plum/60">{plan.subtitle}</p>
              <StudioRuleWide tone="plum" className="my-6" />
              <div className="grid flex-1 grid-cols-1 gap-y-3 py-2 font-regular">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-3 mt-0.5 flex-none">
                      <BiCheck className="size-5 text-purple" />
                    </div>
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="primary-light" className="w-full" href="/contact">
                  Discuss a project
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
