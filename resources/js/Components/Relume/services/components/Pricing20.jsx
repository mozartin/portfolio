"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing20() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Calm, structured websites — built end-to-end
          </h1>
          <p className="md:text-md">
            I work with a limited number of projects and focus on quality,
            clarity, and long-term maintainability.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Essential Website
            </h2>
            <p>For solo professionals and small local businesses</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              €600
            </h3>
            <div className="mt-6 md:mt-8">
              <Button className="w-full">Get started</Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>1–3 pages (Home / About / Contact or Services)</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>responsive, mobile-friendly design</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>clean and minimal visual style</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>contact form</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>basic SEO setup</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>deployment and handover instructions</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Professional Business Website
            </h2>
            <p>For businesses that need trust and a polished presence</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              €1100
            </h3>
            <div className="mt-6 md:mt-8">
              <Button className="w-full">Get started</Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>4–6 pages</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>clear website structure and content logic</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>design based on UI templates, customised to your brand</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>help with content structure and copy edits</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>contact forms, blog or basic CMS</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>deployment and launch</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Founder offer (limited)
            </h2>
            <p>For early-stage projects and first collaborations</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              €1,700
            </h3>
            <div className="mt-6 md:mt-8">
              <Button className="w-full">Get started</Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>one clearly defined core feature</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>backend + frontend implementation</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>authentication if required</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>simple CRUD logic</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>basic technical documentation page setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
