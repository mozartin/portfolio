import React from "react";

/**
 * Soft fade hairline — same language as the home hero rule.
 * @param {"center" | "left"} align
 */
export function StudioRule({
  align = "center",
  className = "",
  ...props
}) {
  return (
    <div
      className={`h-px w-16 bg-gradient-to-r from-transparent via-lavender to-transparent ${
        align === "center" ? "mx-auto" : ""
      } ${className}`}
      {...props}
    />
  );
}

/**
 * Full-width soft fade separator (footer / card dividers).
 */
export function StudioRuleWide({ className = "", tone = "lavender", ...props }) {
  const via =
    tone === "light" ? "via-white/40" : tone === "plum" ? "via-plum/25" : "via-lavender";

  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent ${via} to-transparent ${className}`}
      {...props}
    />
  );
}
