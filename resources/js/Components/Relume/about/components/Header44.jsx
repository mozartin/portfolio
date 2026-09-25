"use client";

import { Button } from "../../Shared/Button";
import { StudioAtmosphere } from "../../Shared/StudioAtmosphere";
import { StudioFrame } from "../../Shared/StudioFrame";
import { StudioRule } from "../../Shared/StudioRule";
import React from "react";

export function Header44() {
  return (
    <section
      id="about-header"
      className="relative overflow-hidden px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      <StudioAtmosphere intensity="default" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="w-full max-w-lg">
            <StudioRule align="left" className="mb-6" />
            <p className="mb-3 font-regular italic text-lavender md:mb-4">
              Developer
            </p>
            <h1 className="mb-5 font-heading text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              About me
            </h1>
            <p className="font-regular text-white/85 md:text-md">
              I&apos;m a full-stack web developer who builds modern, responsive
              websites and web applications. I work independently and take full
              responsibility for each project — from concept and design to code
              and deployment.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button href="/services">Services</Button>
              <Button variant="secondary" href="/contact">
                Contact
              </Button>
            </div>
          </div>

          <StudioFrame
            tone="light"
            glow
            className="mx-auto w-full max-w-xl lg:max-w-none"
          >
            <img
              src="/images/about/portrait-laptop-work.jpg"
              alt="Olena Beliavska working at a laptop"
              className="aspect-[16/10] w-full object-cover object-center"
            />
          </StudioFrame>
        </div>
      </div>
    </section>
  );
}
