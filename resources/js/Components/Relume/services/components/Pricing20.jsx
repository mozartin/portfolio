"use client";

import { Button } from "../../Shared/Button";
import React, { useRef } from "react";
import { BiCheck } from "react-icons/bi";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    title: "Small website",
    subtitle: "For freelancers or small businesses",
    price: "€600",
    prefix: "from",
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
    price: "€1000",
    prefix: "from",
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
    price: "€1700",
    prefix: "from",
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
    <section ref={ref} id="pricing" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum">
      <div className="container">
        <motion.div
          className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src="/images/logo-icon.png" alt="" className="w-16 h-16 mx-auto mb-4 opacity-60" />
          <p className="mb-3 md:mb-4 font-regular italic text-purple">Services</p>
          <h1 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
            Web development services
          </h1>
          <p className="md:text-md font-regular text-plum/70">
            Simple, reliable websites and small web applications.
            Projects scoped individually depending on goals and complexity.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={cardFade}
              className="h-full flex flex-col px-6 py-8 md:p-8 rounded-2xl bg-white border border-plum/5 shadow-sm"
            >
              <h2 className="mb-2 text-xl font-bold font-heading md:text-2xl">
                {plan.title}
              </h2>
              <p className="font-regular text-plum/60 text-sm">{plan.subtitle}</p>
              <div className="my-6 h-px w-full bg-plum/8" />
              <div className="mb-6">
                <p className="text-sm font-regular text-plum/50 mb-1">{plan.prefix}</p>
                <h3 className="text-5xl font-bold font-heading md:text-6xl lg:text-7xl">
                  {plan.price}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-y-3 py-2 font-regular flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="mr-3 flex-none mt-0.5">
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
