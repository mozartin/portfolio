"use client";

import { Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import { Button } from "../../Shared/Button";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export function Contact7() {
  const [agreed, setAgreed] = useState(false);

  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;

    post("/contact", {
      onSuccess: () => {
        reset();
        setAgreed(false);
      },
    });
  };

  return (
    <section id="contact-form" className="px-[5%] py-16 md:py-24 lg:py-28 bg-mist text-plum">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 md:mb-4 font-regular italic">Connect</p>
            <h2 className="mb-5 text-5xl font-bold font-heading md:mb-6 md:text-7xl lg:text-8xl">
              Get in touch
            </h2>
            <p className="md:text-md font-regular">Tell me about your project or idea — let's see how I can help</p>
          </div>

          {recentlySuccessful && (
            <div className="mb-6 rounded-md bg-green-50 border border-green-200 p-4">
              <p className="text-green-800 font-regular text-sm">
                ✓ Thank you! Your message has been sent. I'll get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2 font-regular">
                Your name
              </Label>
              <Input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 font-regular">{errors.name}</p>
              )}
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 font-regular">
                Email address
              </Label>
              <Input
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 font-regular">{errors.email}</p>
              )}
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2 font-regular">
                Brief project description
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                className="min-h-[11.25rem] overflow-auto font-regular italic"
                value={data.message}
                onChange={(e) => setData("message", e.target.value)}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 font-regular">{errors.message}</p>
              )}
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked)}
              />
              <Label htmlFor="terms" className="cursor-pointer font-regular">
                I agree to the terms
              </Label>
            </div>
            <div>
              <Button
                variant="primary-light"
                type="submit"
                disabled={processing || !agreed}
                className={(!agreed || processing) ? "opacity-50 cursor-not-allowed" : ""}
              >
                {processing ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
        </div>
        <div className="md:ml-20">
          <img
            src="/images/get-in-contact.jpg"
            alt="Contact illustration"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
