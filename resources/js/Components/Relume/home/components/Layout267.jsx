"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export function Layout267({ canAnimate = true, onAnimationComplete }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = canAnimate && isInView;
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section ref={ref} id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      <motion.div 
        className="container relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (shouldAnimate && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
      >
        <div className="mx-auto mb-12 max-w-lg text-center text-text-alternative md:mb-18 lg:mb-20">
          <p className="mb-3 md:mb-4 font-regular italic">Built</p>
          <h2 className="mb-5 text-5xl font-heading md:mb-6 md:text-7xl lg:text-8xl">
            A considered approach
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="w-full text-center">
            <div className="mb-5 h-12 md:mb-6">
              <div className="inline-block">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
            </div>
            <h3 className="mb-5 text-2xl font-bold font-heading text-text-alternative md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Idea to production
            </h3>
            <p className="text-text-alternative font-regular">
              Design → frontend → backend → deployment. One person. One
              responsibility.
            </p>
          </div>
          <div className="w-full text-center">
            <div className="mb-5 h-12 md:mb-6">
              <div className="inline-block">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
            </div>
            <h3 className="mb-5 text-2xl font-bold font-heading text-text-alternative md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Focused niche
            </h3>
            <p className="text-text-alternative font-regular">
              I work with wellness, beauty, and sport projects — studios,
              coaches, and small brands.
            </p>
          </div>
          <div className="w-full text-center">
            <div className="mb-5 h-12 md:mb-6">
              <div className="inline-block">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon-white.svg"
                  className="size-12"
                  alt="Relume logo 1"
                />
              </div>
            </div>
            <h3 className="mb-5 text-2xl font-bold font-heading text-text-alternative md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Calm by design
            </h3>
            <p className="text-text-alternative font-regular">
              Clean layouts, focused content, no visual noise. The site supports
              your message and your business.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="primary" href="/services">
            See services
          </Button>
          <Button variant="secondary" href="/contact">
            Work with me
          </Button>
        </div>
      </motion.div>
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/images/code-bg.jpg"
          className="absolute inset-0 w-full h-[150%] object-cover -top-[25%]"
          alt="Background"
          style={{ 
            y,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
