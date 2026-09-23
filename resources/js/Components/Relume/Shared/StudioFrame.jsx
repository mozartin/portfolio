import React from "react";

/**
 * Editorial crop-mark corner — same language as the home hero.
 * @param {"lavender" | "plum" | "white"} tone
 */
export function CropMark({ className = "", tone = "lavender" }) {
  const color =
    tone === "white"
      ? "bg-white/45"
      : tone === "plum"
        ? "bg-plum/35"
        : "bg-lavender/55";

  return (
    <div
      className={`pointer-events-none absolute h-7 w-7 md:h-8 md:w-8 ${className}`}
      aria-hidden
    >
      <span className={`absolute left-0 top-0 h-px w-5 md:w-6 ${color}`} />
      <span className={`absolute left-0 top-0 h-5 w-px md:h-6 ${color}`} />
    </div>
  );
}

/**
 * Image / media frame with crop marks + sharper studio radius.
 * Matches hero editorial decorations sitewide.
 *
 * @param {"dark" | "light"} tone — dark for mist sections, light for dark purple sections
 * @param {boolean} glow — soft lavender bloom behind the frame
 */
export function StudioFrame({
  children,
  className = "",
  tone = "dark",
  glow = false,
  marks = true,
}) {
  const isLight = tone === "light";
  const markTone = isLight ? "white" : "lavender";
  const ring = isLight ? "ring-white/15" : "ring-plum/10";

  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          className={`pointer-events-none absolute -inset-3 bg-lavender/25 blur-2xl ${
            isLight ? "opacity-40" : "opacity-70"
          }`}
          aria-hidden
        />
      )}

      <div className="relative">
        {marks && (
          <>
            <CropMark
              tone={markTone}
              className="-left-2 -top-2 md:-left-3 md:-top-3"
            />
            <CropMark
              tone={markTone}
              className="-right-2 -top-2 rotate-90 md:-right-3 md:-top-3"
            />
            <CropMark
              tone={markTone}
              className="-bottom-2 -left-2 -rotate-90 md:-bottom-3 md:-left-3"
            />
            <CropMark
              tone={markTone}
              className="-bottom-2 -right-2 rotate-180 md:-bottom-3 md:-right-3"
            />
          </>
        )}

        <div
          className={`relative overflow-hidden rounded-[8px] shadow-[0_24px_60px_-36px_rgba(15,10,26,0.55)] ring-1 ring-inset ${ring}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
