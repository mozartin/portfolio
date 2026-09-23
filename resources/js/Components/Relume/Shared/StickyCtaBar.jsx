"use client";

import React, { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

const SCROLL_THRESHOLD = 200;

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const { url } = usePage();
  const path = url.split("?")[0];

  const showWork = !(path === "/showcase" || path.startsWith("/showcase/"));
  const showTalk = path !== "/contact";
  const hasActions = showWork || showTalk;

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [url]);

  return (
    <AnimatePresence>
      {visible && hasActions && (
        <motion.div
          key="sticky-cta"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 md:pb-5"
        >
          <div className="flex w-auto max-w-[calc(100%-2rem)] items-center gap-2 rounded-[12px] border border-plum/10 bg-mist/95 px-2 py-2 shadow-[0_16px_50px_-12px_rgba(15,10,26,0.45)] backdrop-blur-xl sm:gap-2.5 sm:px-2.5">
            {showWork && (
              <Link
                href="/showcase"
                className="rounded-[8px] border-2 border-purple px-4 py-2.5 text-center font-regular text-sm text-purple transition-opacity hover:opacity-80 sm:px-5"
              >
                Explore my work
              </Link>
            )}
            {showTalk && (
              <Link
                href="/contact"
                className="rounded-[8px] border-2 border-purple bg-purple px-4 py-2.5 text-center font-regular text-sm text-white transition-opacity hover:opacity-90 sm:px-5"
              >
                Let&apos;s talk →
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
