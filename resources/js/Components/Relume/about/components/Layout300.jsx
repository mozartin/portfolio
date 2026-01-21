"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout300() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum">
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-center text-5xl font-bold  md:mb-6 md:text-7xl lg:text-8xl">
              How I work
            </h2>
            <p className="text-center md:text-md font-regular">
              A clear, considered process — from idea to production
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            <div className="w-full">
              <div className="mb-5 md:mb-6 flex items-center justify-center h-32 md:h-40">
                <img
                  src="/images/flowers/flower-1.png"
                  alt="Relume placeholder image 1"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold font-heading md:mb-4 md:text-2xl">
                Clarity first
              </h3>
              <p className="text-center font-regular">
                I don’t chase trends or visual noise. Every project starts with
                structure, hierarchy, and purpose.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6 flex items-center justify-center h-32 md:h-40">
                <img
                  src="/images/flowers/flower-2.png"
                  alt="Relume placeholder image 1"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl font-heading">
                Design that serves the user
              </h3>
              <p className="text-center">
                Every decision starts with understanding how people interact
                with a site, not with trends or assumptions.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6 flex items-center justify-center h-32 md:h-40">
                <img
                  src="/images/flowers/flower-3.png"
                  alt="Relume placeholder image 1"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl font-heading">
                Built to be maintained
              </h3>
              <p className="text-center font-regular">
                Readable layouts, predictable logic, and clean code. Websites
                that can be understood, extended, and supported over time.
              </p>
            </div>
            <div className="w-full">
              <div className="mb-5 md:mb-6 flex items-center justify-center h-32 md:h-40">
                <img
                  src="/images/flowers/flower-4.png"
                  alt="Relume placeholder image 1"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl font-heading">
                From concept to live site
              </h3>
              <p className="text-center font-regular">
                I work across frontend and backend and take projects to
                production. What I build is tested, deployed, and actually goes
                live.
              </p>
            </div>
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button variant="primary-light">Services</Button>
            <Button variant="secondary-light" iconRight={<RxChevronRight />}>Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
