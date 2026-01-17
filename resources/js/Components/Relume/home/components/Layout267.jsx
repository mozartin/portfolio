"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout267() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mx-auto mb-12 max-w-lg text-center text-text-alternative md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Built</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
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
            <h3 className="mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              From idea to production
            </h3>
            <p className="text-text-alternative">
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
            <h3 className="mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Focused niche
            </h3>
            <p className="text-text-alternative">
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
            <h3 className="mb-5 text-2xl font-bold text-text-alternative md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Calm by design
            </h3>
            <p className="text-text-alternative">
              Clean layouts, focused content, no visual noise. The site supports
              your message and your business.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary" className="border-white/30 text-white hover:bg-white/10">
            See services
          </Button>
          <Button variant="link" className="text-white" iconRight={<RxChevronRight />}>
            Work with me
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gallery/alex-bertha-Jyg7xHRmXiU-unsplash-transformed.jpeg"
          className="absolute inset-0 size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
