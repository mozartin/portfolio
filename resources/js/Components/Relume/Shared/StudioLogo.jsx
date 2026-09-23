import React from "react";
import { CosmicMark } from "./CosmicMark";

/**
 * Studio wordmark + cosmic mark.
 * @param {"dark" | "light"} tone — dark for mist/nav, light for dark footers/heroes
 * @param {"horizontal" | "stacked"} layout
 */
export function StudioLogo({
  tone = "dark",
  layout = "horizontal",
  className = "",
  markClassName = "",
  wordmarkClassName = "",
}) {
  const isLight = tone === "light";
  const markTone = isLight ? "text-white" : "text-plum";
  const wordmarkFilter = isLight ? "" : "brightness-0";

  if (layout === "stacked") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <CosmicMark className={`${markTone} ${markClassName}`} />
        <img
          src="/images/logo-wordmark.png"
          alt="Web Studio Beliavska"
          className={`mt-5 h-auto w-full ${wordmarkFilter} ${wordmarkClassName}`}
        />
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 ${markTone} ${className}`}>
      <CosmicMark className={`h-11 w-11 shrink-0 md:h-12 md:w-12 ${markClassName}`} />
      <img
        src="/images/logo-wordmark.png"
        alt="Web Studio Beliavska"
        className={`h-8 w-auto ${wordmarkFilter} ${wordmarkClassName}`}
      />
    </span>
  );
}
