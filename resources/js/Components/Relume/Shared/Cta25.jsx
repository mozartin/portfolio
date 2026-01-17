"use client";

import { Button } from "./Button";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Ready to build something real
        </h2>
        <p className="md:text-md">
          I’m a web developer with real production experience. I care about
          clarity — in design, code, and communication.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button>Work with me</Button>
          <Button variant="secondary">About me</Button>
        </div>
      </div>
    </section>
  );
}

