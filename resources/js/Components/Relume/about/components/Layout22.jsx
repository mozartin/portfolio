"use client";

import { Button } from "../../Shared/Button";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <img
                src="/images/logo-icon.png"
                className="size-20"
                alt="Relume logo"
              />
            </div>
            <h2 className="rb-5 mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              The work began with a simple belief
            </h2>
            <p className="md:text-md font-regular">
              I started building websites because I saw brands that deserved
              better. The beauty, wellness, and sports industries were full of
              talented people with visions that didn't match their digital
              presence, so I decided to change that.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="primary-light">Services</Button>
              <Button variant="secondary-light" iconRight={<RxChevronRight />}>Contact</Button>
            </div>
          </div>
          <div>
            <img
              src="/images/gallery/kaylee-garrett-GaprWyIw66o-unsplash-transformed.jpeg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
