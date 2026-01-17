"use client";

import { Button } from "../../Shared/Button";
import React from "react";

export function Header44() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Developer</p>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            About me
          </h1>
          <p className="md:text-md">
            I’m a web developer building calm, structured websites for small
            businesses in wellness, beauty, and sport. I work independently and
            take full responsibility for each project — from first idea to
            production.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button>Work with me</Button>
            <Button variant="secondary">Contact</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
