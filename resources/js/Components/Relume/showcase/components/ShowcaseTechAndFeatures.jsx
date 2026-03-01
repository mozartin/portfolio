"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BiUser,
  BiSearch,
  BiBriefcase,
  BiEnvelope,
  BiGridAlt,
  BiLockAlt,
} from "react-icons/bi";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", detail: "UI library (Vite)" },
      { name: "Tailwind CSS v4", detail: "Utility-first styling" },
      { name: "React Router", detail: "Client-side routing" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", detail: "PHP framework" },
      { name: "Sanctum", detail: "Token authentication" },
      { name: "PostgreSQL", detail: "Relational database" },
    ],
  },
  {
    category: "DevOps & Deploy",
    items: [
      { name: "Docker", detail: "Containerization" },
      { name: "Vercel", detail: "Frontend hosting" },
      { name: "Render", detail: "Backend + DB hosting" },
    ],
  },
];

const features = [
  {
    icon: <BiLockAlt className="w-5 h-5" />,
    title: "Authentication & Roles",
    description:
      "Registration with role selection (Client or Freelancer), login, and token-based authentication via Laravel Sanctum.",
  },
  {
    icon: <BiBriefcase className="w-5 h-5" />,
    title: "Job Postings",
    description:
      "Clients can create job listings with budget, required skills, and description. All users can browse and search available jobs.",
  },
  {
    icon: <BiUser className="w-5 h-5" />,
    title: "Freelancer Profiles",
    description:
      "Public profiles with bio, experience level, hourly rate, skills, and links to GitHub, LinkedIn, and personal website.",
  },
  {
    icon: <BiEnvelope className="w-5 h-5" />,
    title: "Proposals System",
    description:
      "Freelancers can send proposals to job postings. Clients can review all incoming proposals from their dashboard.",
  },
  {
    icon: <BiGridAlt className="w-5 h-5" />,
    title: "Role-Based Dashboard",
    description:
      "Personal dashboard with different content for clients (posted jobs, proposals received) and freelancers (submitted proposals).",
  },
  {
    icon: <BiSearch className="w-5 h-5" />,
    title: "Search",
    description:
      "Search jobs by title and skills. Browse the freelancers directory with profile details, skills, and contact links.",
  },
];

export function ShowcaseTechAndFeatures({
  canAnimate = true,
  onAnimationComplete,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = canAnimate && isInView;

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
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum overflow-hidden"
    >
      <div className="container">
        {/* ── Tech Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (shouldAnimate && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
        >
          <div className="mx-auto mb-10 max-w-lg text-center md:mb-14">
            <img src="/images/logo-icon.png" alt="" className="w-16 h-16 mx-auto mb-4 opacity-60" />
            <p className="mb-3 md:mb-4 font-regular italic text-purple">
              Under the hood
            </p>
            <h2 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              Tech stack
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 md:mb-28"
          variants={staggerContainer}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
        >
          {techStack.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-lg font-heading font-bold mb-5 text-purple">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-purple flex-shrink-0" />
                    <div>
                      <p className="font-regular font-semibold text-plum">
                        {item.name}
                      </p>
                      <p className="text-sm font-regular text-plum/60">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Key Features ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="mx-auto mb-10 max-w-lg text-center md:mb-14">
            <img src="/images/logo-icon.png" alt="" className="w-16 h-16 mx-auto mb-4 opacity-60" />
            <p className="mb-3 md:mb-4 font-regular italic text-purple">
              What's inside
            </p>
            <h2 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              Key features
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={shouldAnimate ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center text-purple mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-heading font-bold mb-2">
                {feature.title}
              </h3>
              <p className="font-regular text-plum/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

