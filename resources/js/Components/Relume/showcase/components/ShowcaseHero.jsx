"use client";

import { Button } from "../../Shared/Button";
import { StudioAtmosphere } from "../../Shared/StudioAtmosphere";
import { StudioFrame } from "../../Shared/StudioFrame";
import { StudioRule } from "../../Shared/StudioRule";
import React from "react";
import { Link } from "@inertiajs/react";

export function ShowcaseHero() {
  return (
    <section
      id="showcase-hero"
      className="relative overflow-hidden px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      <StudioAtmosphere intensity="default" />

      <div className="container relative z-10">
        <Link
          href="/showcase"
          className="mb-8 inline-flex font-regular text-sm text-white/60 transition-colors hover:text-white"
        >
          ← All projects
        </Link>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - text */}
          <div className="w-full">
            <StudioRule align="left" className="mb-6" />
            <p className="mb-3 font-regular italic text-lavender md:mb-4">
              Pet Project &middot; Full-Stack Web App
            </p>
            <h1 className="mb-5 font-heading text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              FreelanceHub
            </h1>
            <p className="max-w-md font-regular text-white/85 md:text-md">
              A full-stack freelance marketplace: browse jobs, send
              proposals, manage work. Built with React, Tailwind&nbsp;CSS,
              Laravel&nbsp;API and deployed to the cloud.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button
                href="https://freelancehub-tau.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
              </Button>
              <Button variant="secondary" href="/contact">
                Contact me
              </Button>
            </div>
          </div>

          {/* Right - screenshot */}
          <div className="w-full">
            <a
              href="https://freelancehub-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <StudioFrame tone="light">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-100 px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="mx-4 flex-1">
                    <div className="rounded-[4px] bg-white px-3 py-1 text-center font-regular text-xs text-gray-500">
                      freelancehub-tau.vercel.app
                    </div>
                  </div>
                </div>
                <img
                  src="/images/showcase/freelancehub-home.png"
                  alt="FreelanceHub - Home page"
                  className="block h-auto w-full"
                />
              </StudioFrame>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
