"use client";

import { Button } from "../../Shared/Button";
import React from "react";

export function Header44() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-purple text-white">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 md:mb-4 font-regular italic">Developer</p>
          <h1 className="mb-5 text-6xl font-bold font-heading md:mb-6 md:text-9xl lg:text-10xl">
            About me
          </h1>
          <p className="md:text-md font-regular">
            I'm a full-stack web developer who builds modern, responsive websites 
            and web applications. I work independently and take full responsibility 
            for each project — from concept and design to code and deployment.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button href="/services">Services</Button>
            <Button variant="secondary" href="/contact">Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
