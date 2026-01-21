"use client";

import { Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import { Button } from "../../Shared/Button";
import React from "react";

export function Contact7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 md:mb-4 font-regular italic">Connect</p>
            <h2 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              Get in touch
            </h2>
            <p className="md:text-md font-regular">Tell us about your vision and goals</p>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2 font-regular">
                Your name
              </Label>
              <Input type="text" id="name" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 font-regular">
                Email address
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2 font-regular">
                Brief project description
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                className="min-h-[11.25rem] overflow-auto font-regular italic"
              />
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer font-regular">
                I agree to the terms
              </Label>
            </div>
            <div>
              <Button variant="primary-light">Send</Button>
            </div>
          </form>
        </div>
        <div className="md:ml-20">
          <img
            src="/images/get-in-contact.jpg"
            alt="Relume placeholder image"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
