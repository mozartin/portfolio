"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header145() {
  return (
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg">
          <div className="flex w-full flex-col items-center text-center">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Beautiful web solutions for beauty, wellness, and sports
            </h1>
            <p className="md:text-md">
              I build clean, modern websites that help beauty brands, wellness
              practitioners, and sports businesses connect with their audience.
              Simple design. Real results.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="View portfolio">View portfolio</Button>
              <Button title="Contact me" variant="secondary">
                Contact me
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="aspect-video size-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
