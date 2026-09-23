"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Shared luxury studio atmosphere — dark purple base + soft lavender glows.
 * Keep motion very slow so it feels ambient, not decorative.
 */
export function StudioAtmosphere({
  className = "",
  intensity = "default", // "default" | "soft" | "rich"
}) {
  const glowOpacity =
    intensity === "rich" ? 0.9 : intensity === "soft" ? 0.55 : 0.75;

  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,#2a1a42_0%,#1e1433_42%,#140c24_78%,#0f0a1a_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1433]/70 via-transparent to-[#0f0a1a]/90" />

      <motion.div
        className="absolute top-[6%] h-[65vmin] w-[65vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 164, 214, 0.2) 0%, rgba(184, 164, 214, 0.06) 40%, transparent 70%)",
          filter: "blur(42px)",
          left: "-16%",
          opacity: glowOpacity,
        }}
        animate={{ x: ["0%", "72%"] }}
        transition={{
          duration: 28,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      <motion.div
        className="absolute bottom-[-8%] right-[2%] h-[52vmin] w-[52vmin] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 92, 184, 0.26) 0%, rgba(124, 92, 184, 0.08) 45%, transparent 72%)",
          filter: "blur(48px)",
          opacity: glowOpacity,
        }}
        animate={{
          opacity: [0.4 * glowOpacity, 0.85 * glowOpacity, 0.4 * glowOpacity],
          scale: [1, 1.07, 1],
        }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,10,26,0.32)_100%)]" />
    </div>
  );
}
