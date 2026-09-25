import React from "react";
import { CosmicMark } from "./CosmicMark";

function Wordmark({ align = "left", size = "md", className = "" }) {
  const isCenter = align === "center";
  const titleSize =
    size === "lg"
      ? "text-[1.35rem] tracking-[0.06em] md:text-[1.55rem]"
      : "text-[0.95rem] tracking-[0.05em] md:text-[1.05rem]";
  const scriptSize =
    size === "lg" ? "text-[1.55rem] md:text-[1.75rem]" : "text-[1.15rem] md:text-[1.25rem]";

  return (
    <div
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      <span className={`font-heading whitespace-nowrap uppercase leading-none ${titleSize}`}>
        WEB DEVELOPER
      </span>
      <span
        className={`font-script leading-none ${scriptSize} ${size === "lg" ? "mt-1.5" : "mt-0.5"}`}
      >
        Beliavska
      </span>
    </div>
  );
}

/**
 * Cosmic mark + wordmark.
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
  const toneClass = isLight ? "text-white" : "text-plum";

  if (layout === "stacked") {
    return (
      <div className={`flex flex-col items-center ${toneClass} ${className}`}>
        <CosmicMark className={markClassName} />
        <Wordmark
          align="center"
          size="lg"
          className={`mt-5 ${wordmarkClassName}`}
        />
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${toneClass} ${className}`}
      aria-label="Web Developer Beliavska"
    >
      <CosmicMark
        className={`h-[3.15rem] w-[3.15rem] shrink-0 md:h-[3.4rem] md:w-[3.4rem] ${markClassName}`}
      />
      <Wordmark align="center" size="md" className={wordmarkClassName} />
    </span>
  );
}
