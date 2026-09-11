"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { Button } from "./Button";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const useNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";

  return {
    isMobileMenuOpen,
    isMobile,
    toggleMobileMenu,
    closeMobileMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
  };
};

export function Navbar1() {
  const nav = useNavbar();

  return (
    <section
      id="navbar"
      className="relative sticky top-0 z-50 w-full border-b border-plum/5 bg-mist/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-[5%] lg:min-h-18">
        <div className="flex min-h-16 w-full items-center justify-between md:min-h-18 lg:w-auto">
          <Link href="/" onClick={nav.closeMobileMenu}>
            <img
              src="/images/logo.png"
              alt="Olena Beliavska"
              className="h-10 w-auto brightness-0"
            />
          </Link>

          <button
            type="button"
            aria-label={nav.isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex size-11 flex-col items-center justify-center rounded-full transition-colors hover:bg-lavender/20 lg:hidden"
            onClick={nav.toggleMobileMenu}
          >
            <motion.span
              className="my-[3px] h-0.5 w-5 rounded-full bg-plum"
              animate={nav.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: 8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-5 rounded-full bg-plum"
              animate={nav.animateMobileMenu}
              variants={{
                open: { width: 0, transition: { duration: 0.1 } },
                closed: {
                  width: "1.25rem",
                  transition: { delay: 0.3, duration: 0.2 },
                },
              }}
            />
            <motion.span
              className="my-[3px] h-0.5 w-5 rounded-full bg-plum"
              animate={nav.animateMobileMenuButtonSpan}
              variants={{
                open: { translateY: -8, transition: { delay: 0.1 } },
                rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                closed: {
                  translateY: 0,
                  rotate: 0,
                  transition: { duration: 0.2 },
                },
              }}
            />
          </button>
        </div>

        <motion.div
          variants={{
            open: { height: "var(--height-open, auto)" },
            close: { height: "var(--height-closed, 0)" },
          }}
          initial="close"
          animate={nav.isMobile ? nav.animateMobileMenu : "open"}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute left-0 top-full w-full overflow-hidden border-b border-plum/5 bg-mist/95 backdrop-blur-xl lg:static lg:flex lg:w-auto lg:items-center lg:gap-1 lg:overflow-visible lg:border-0 lg:bg-transparent lg:backdrop-blur-none lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          <div className="flex flex-col px-[5%] pb-6 pt-2 lg:flex-row lg:items-center lg:gap-1 lg:p-0">
            <NavLink href="/" onClick={nav.closeMobileMenu}>
              Home
            </NavLink>
            <NavLink href="/about" onClick={nav.closeMobileMenu}>
              About
            </NavLink>
            <NavLink href="/services" onClick={nav.closeMobileMenu}>
              Services
            </NavLink>
            <NavLink href="/showcase" onClick={nav.closeMobileMenu}>
              Showcase
            </NavLink>

            <div className="mt-4 lg:ml-3 lg:mt-0">
              <Button
                variant="primary-light"
                className="w-full rounded-full px-5 py-2.5 shadow-sm transition-all hover:opacity-95 hover:shadow-md lg:w-auto"
                href="/contact"
                onClick={nav.closeMobileMenu}
              >
                Say hello
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
