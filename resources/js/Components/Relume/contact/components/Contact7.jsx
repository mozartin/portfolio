"use client";

import { Button } from "../../Shared/Button";
import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import { BiEnvelope, BiUser, BiMessageDetail, BiCheck } from "react-icons/bi";
import { useIsMobile } from "../../../../hooks/useIsMobile";
import { StudioFrame } from "../../Shared/StudioFrame";
import { StudioRule } from "../../Shared/StudioRule";

function FloatingInput({ id, label, type = "text", icon: Icon, value, onChange, error }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <div className="relative">
        {Icon && (
          <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
            focused ? "text-purple" : "text-plum/30"
          }`} />
        )}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`
            w-full rounded-[8px] border bg-white px-4 py-4 font-regular text-plum text-sm
            outline-none transition-all duration-200
            ${Icon ? "pl-12" : ""}
            ${focused ? "border-purple ring-2 ring-purple/10" : "border-plum/10 hover:border-plum/20"}
            ${error ? "border-red-400 ring-2 ring-red-50" : ""}
          `}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={`
            absolute font-regular text-sm transition-all duration-200 pointer-events-none
            ${Icon ? "left-12" : "left-4"}
            ${isActive
              ? `-top-2.5 text-xs bg-white px-1.5 ${focused ? "text-purple" : "text-plum/50"}`
              : "top-4 text-plum/40"
            }
          `}
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-regular">{error}</p>
      )}
    </div>
  );
}

function FloatingTextarea({ id, label, value, onChange, error }) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <div className="relative">
        <BiMessageDetail className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-200 ${
          focused ? "text-purple" : "text-plum/30"
        }`} />
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          className={`
            w-full rounded-[8px] border bg-white pl-12 pr-4 py-4 font-regular text-plum text-sm
            outline-none transition-all duration-200 resize-none
            ${focused ? "border-purple ring-2 ring-purple/10" : "border-plum/10 hover:border-plum/20"}
            ${error ? "border-red-400 ring-2 ring-red-50" : ""}
          `}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={`
            absolute left-12 font-regular text-sm transition-all duration-200 pointer-events-none
            ${isActive
              ? `-top-2.5 text-xs bg-white px-1.5 ${focused ? "text-purple" : "text-plum/50"}`
              : "top-4 text-plum/40"
            }
          `}
        >
          {label}
        </label>
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-500 font-regular">{error}</p>
      )}
    </div>
  );
}

export function Contact7() {
  const [agreed, setAgreed] = useState(false);
  const m = useIsMobile();

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
    <section id="contact-form" className="relative overflow-hidden bg-mist px-[5%] py-16 text-plum md:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 90% 10%, rgba(184, 164, 214, 0.28), transparent 55%)",
        }}
      />
      <div className="container relative z-10">
        {/* Title row - left aligned */}
        <motion.div
          className="mb-12 max-w-xl md:mb-16"
          initial={m ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={m ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        >
          <StudioRule align="left" className="mb-6" />
          <p className="mb-3 font-regular italic text-purple md:mb-4">Connect</p>
          <h1 className="mb-5 font-heading text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Let&apos;s work together
          </h1>
          <p className="mb-6 font-regular text-plum/70 md:text-md">
            Tell me about your project or idea — let&apos;s see how I can help.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple/10 text-purple">
              <BiEnvelope className="h-5 w-5" />
            </div>
            <div>
              <p className="font-regular text-sm text-plum/50">Email</p>
              <p className="font-regular text-sm">olena.beliavska@icloud.com</p>
            </div>
          </div>
        </motion.div>

        {/* Form + Image row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - form */}
          <motion.div
            initial={m ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={m ? { duration: 0 } : { duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="rounded-[8px] border border-plum/8 bg-white/80 p-8 shadow-none backdrop-blur-sm md:p-10">
              {recentlySuccessful && (
                <div className="mb-6 rounded-xl bg-green-50 border border-green-100 p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <BiCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-green-700 font-regular text-sm">
                    Message sent! I'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <FloatingInput
                  id="name"
                  label="Your name"
                  icon={BiUser}
                  value={data.name}
                  onChange={(e) => setData("name", e.target.value)}
                  error={errors.name}
                />

                <FloatingInput
                  id="email"
                  label="Email address"
                  type="email"
                  icon={BiEnvelope}
                  value={data.email}
                  onChange={(e) => setData("email", e.target.value)}
                  error={errors.email}
                />

                <FloatingTextarea
                  id="message"
                  label="Tell me about your project"
                  value={data.message}
                  onChange={(e) => setData("message", e.target.value)}
                  error={errors.message}
                />

                {/* Custom checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 rounded-md border-2 border-plum/15 transition-all duration-200 
                      peer-checked:bg-purple peer-checked:border-purple
                      group-hover:border-plum/30 flex items-center justify-center">
                      {agreed && <BiCheck className="w-3.5 h-3.5 text-white" />}
                    </div>
                  </div>
                  <span className="font-regular text-sm text-plum/60 group-hover:text-plum/80 transition-colors">
                    I agree to the processing of my personal data
                  </span>
                </label>

                <Button
                  variant="primary-light"
                  type="submit"
                  disabled={processing || !agreed}
                  className={`w-full justify-center ${(!agreed || processing) ? "opacity-40 cursor-not-allowed" : ""}`}
                >
                  {processing ? "Sending..." : "Send message"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right - atmosphere */}
          <motion.div
            className="relative hidden min-h-[32rem] lg:block"
            initial={m ? false : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={m ? { duration: 0 } : { duration: 0.7, delay: 0.25, ease: "easeOut" }}
          >
            <StudioFrame tone="dark" glow className="h-full min-h-[32rem]">
              <img
                src="/images/contact/contact-workspace.jpg"
                alt="Warm workspace ready for a conversation"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-plum/25 via-transparent to-transparent" />
              {/* Keep frame height when image is absolute */}
              <div className="min-h-[32rem]" aria-hidden />
            </StudioFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
