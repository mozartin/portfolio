"use client";

import React, { useRef } from "react";
import { Link } from "@inertiajs/react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { projects } from "../projects";
import { StudioFrame } from "../../Shared/StudioFrame";

export function ProjectGrid({ canAnimate = true, onAnimationComplete }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const m = useIsMobile();
  const shouldAnimate = m || (canAnimate && isInView);

  return (
    <section
      ref={ref}
      id="showcase-projects"
      className="relative overflow-hidden bg-mist px-[5%] py-16 text-plum md:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(184, 164, 214, 0.22), transparent 55%)",
        }}
      />
      <div className="container relative z-10">
        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-12"
          initial={m ? false : { opacity: 0, y: 36 }}
          animate={
            shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }
          }
          transition={m ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
          onAnimationComplete={() => {
            if (shouldAnimate && onAnimationComplete) {
              onAnimationComplete();
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={m ? false : { opacity: 0, y: 28 }}
              animate={
                shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
              }
              transition={
                m
                  ? { duration: 0 }
                  : {
                      duration: 0.55,
                      delay: 0.08 * index,
                      ease: "easeOut",
                    }
              }
              className="group flex flex-col"
            >
              <StudioFrame tone="dark" className="transition-shadow duration-300 group-hover:shadow-lg">
                <Link href={project.href} className="block bg-mist">
                  <div className="flex items-center gap-2 border-b border-plum/5 bg-gray-100 px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="mx-3 flex-1">
                      <div className="rounded-[4px] bg-white px-3 py-1 text-center font-regular text-xs text-gray-500">
                        {project.liveLabel}
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-plum/5">
                    <img
                      src={project.cover}
                      alt={project.coverAlt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
              </StudioFrame>

              <div className="mt-6 flex flex-1 flex-col">
                <p className="mb-2 font-regular text-sm italic text-purple">
                  {project.eyebrow}
                </p>
                <h2 className="mb-3 font-heading text-3xl font-bold md:text-4xl">
                  <Link
                    href={project.href}
                    className="transition-colors hover:text-purple"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="mb-5 flex-1 font-regular text-plum/70 leading-relaxed">
                  {project.summary}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[8px] bg-lavender/30 px-3 py-1 font-regular text-xs text-plum/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={project.href}
                    className="font-regular text-sm font-semibold text-purple underline-offset-4 transition-opacity hover:underline"
                  >
                    Case study
                  </Link>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-regular text-sm text-plum/60 underline-offset-4 transition-colors hover:text-plum hover:underline"
                  >
                    Live site ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
