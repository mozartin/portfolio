"use client";

import { Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import { Button } from "../../Shared/Button";
import React, { useMemo, useState } from "react";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

export function Contact7() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const csrfToken = useMemo(
    () => document.querySelector('meta[name="csrf-token"]')?.getAttribute("content"),
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "pending", message: "Sending your message…" });

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": csrfToken ?? "",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message ?? "Unable to send your message.");
      }

      setValues(initialValues);
      setStatus({
        type: "success",
        message: payload?.message ?? "Thank you! I will reply soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error?.message ?? "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

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
          <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2 font-regular">
                Your name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2 font-regular">
                Email address
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-2 font-regular">
                Brief project description
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message..."
                className="min-h-[11.25rem] overflow-auto font-regular italic"
                value={values.message}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer font-regular">
                I agree to the terms
              </Label>
            </div>
            <div>
              <Button variant="primary-light" type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Send"}
              </Button>
              {status && (
                <p
                  className={`mt-3 text-sm ${
                    status.type === "error" ? "text-rose-700" : "text-emerald-600"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
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
