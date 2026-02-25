import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export function PortfolioBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-plum text-white">
      <div className="max-w-3xl mx-auto px-10 py-3 md:py-4">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 md:right-5 p-1 text-white/40 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <RxCross2 className="size-3.5" />
        </button>

        <p className="text-lavender font-heading text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.2em] mb-1">
          Portfolio Project
        </p>
        <p className="text-xs md:text-sm text-white/70 font-regular italic leading-relaxed">
          This is a full-stack portfolio site built by{" "}
          <span className="text-lavender font-bold not-italic">Olena Beliavska</span>
          {" "}— designed and developed from scratch, showcasing a complete
          workflow: concept, UI design, frontend, backend, and deployment.
        </p>
        <p className="mt-1.5 text-[0.65rem] md:text-xs text-lavender/80 font-regular">
          Built with React + Tailwind CSS frontend, Laravel + Inertia.js backend, Docker deployment on Railway.
        </p>
      </div>
    </div>
  );
}
