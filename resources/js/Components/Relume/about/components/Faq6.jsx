"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { Button } from "../../Shared/Button";
import React, { useRef } from "react";
import { RxPlus } from "react-icons/rx";
import { motion, useInView } from "framer-motion";

const faqItems = [
  {
    question: "How long does a project take?",
    answer:
      "Small projects usually take 2–4 weeks, larger web apps 4–10 weeks, depending on scope. I always discuss timeline early so expectations are clear.",
  },
  {
    question: "What kind of projects do you take on?",
    answer:
      "I work on responsive websites, small web applications, and portfolio or business sites. Most of my recent work uses React, Laravel, and modern CSS.",
  },
  {
    question: "What's included in a project?",
    answer:
      "Planning, design support, development, testing, and deployment. I also help with hosting setup and basic documentation after launch.",
  },
  {
    question: "Can you redesign an existing site?",
    answer:
      "Yes. I can improve layout, performance, or migrate a site to a more modern stack. We start with a small audit to understand what should change."
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes - small updates, bug fixes, and improvements after launch. We can agree on simple hourly support when needed.",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export function Faq6() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="faq" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <motion.div
            className="w-12 h-0.5 bg-purple mb-6 origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.h2
            className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Questions
          </motion.h2>
          <motion.p
            className="md:text-md font-regular"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Common questions about working with me, timelines, and what to expect
          </motion.p>
          <motion.div
            className="mt-6 md:mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <Button variant="primary-light" href="/contact">Contact</Button>
          </motion.div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion
            type="multiple"
            className="grid items-start justify-stretch gap-4 font-regular"
          >
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border-primary px-5 md:px-6 rounded-xl bg-white hover:shadow-sm transition-shadow duration-200"
                >
                  <AccordionTrigger
                    icon={
                      <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
                    }
                    className="md:py-5 md:text-md font-regular [&[data-state=open]>svg]:rotate-45"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="md:pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
