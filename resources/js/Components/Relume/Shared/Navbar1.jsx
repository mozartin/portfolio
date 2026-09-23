"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import { Button } from "./Button";
import { NavLink } from "./NavLink";
import { StickyCtaBar } from "./StickyCtaBar";
import { StudioLogo } from "./StudioLogo";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";

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
  const { url } = usePage();
  const path = url.split("?")[0];
  const isHome = path === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [path]);

  // Over dark hero: transparent light nav until scroll / menu open
  const overHero =
    isHome && !scrolled && !nav.isMobileMenuOpen;
  const linkVariant = overHero ? "light" : "default";
  const logoTone = overHero ? "light" : "dark";

  return (
    <>
      <section
        id="navbar"
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
          overHero
            ? "border-b border-transparent bg-transparent"
            : "border-b border-plum/5 bg-mist/85 backdrop-blur-2xl"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-[5%] lg:min-h-18">
          <div className="flex min-h-16 w-full items-center justify-between md:min-h-18 lg:w-auto">
            <Link href="/" onClick={nav.closeMobileMenu} className="inline-flex">
              <StudioLogo tone={logoTone} layout="horizontal" />
            </Link>

            <button
              type="button"
              aria-label={nav.isMobileMenuOpen ? "Close menu" : "Open menu"}
              className={`flex size-11 flex-col items-center justify-center rounded-[8px] transition-colors lg:hidden ${
                overHero ? "hover:bg-white/10" : "hover:bg-lavender/20"
              }`}
              onClick={nav.toggleMobileMenu}
            >
              <motion.span
                className={`my-[3px] h-0.5 w-5 rounded-full ${
                  overHero ? "bg-white" : "bg-plum"
                }`}
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
                className={`my-[3px] h-0.5 w-5 rounded-full ${
                  overHero ? "bg-white" : "bg-plum"
                }`}
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
                className={`my-[3px] h-0.5 w-5 rounded-full ${
                  overHero ? "bg-white" : "bg-plum"
                }`}
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
            className={`absolute left-0 top-full w-full overflow-hidden border-b backdrop-blur-xl lg:static lg:flex lg:w-auto lg:items-center lg:gap-1 lg:overflow-visible lg:border-0 lg:bg-transparent lg:backdrop-blur-none lg:[--height-closed:auto] lg:[--height-open:auto] ${
              overHero
                ? "border-white/10 bg-[#140c24]/95"
                : "border-plum/5 bg-mist/95"
            }`}
          >
            <div className="flex flex-col px-[5%] pb-6 pt-2 lg:flex-row lg:items-center lg:gap-1 lg:p-0">
              <NavLink
                href="/"
                variant={linkVariant}
                onClick={nav.closeMobileMenu}
              >
                Home
              </NavLink>
              <NavLink
                href="/about"
                variant={linkVariant}
                onClick={nav.closeMobileMenu}
              >
                About
              </NavLink>
              <NavLink
                href="/services"
                variant={linkVariant}
                onClick={nav.closeMobileMenu}
              >
                Services
              </NavLink>
              <NavLink
                href="/showcase"
                variant={linkVariant}
                onClick={nav.closeMobileMenu}
              >
                Showcases
              </NavLink>

              <div className="mt-4 lg:ml-3 lg:mt-0">
                <Button
                  variant={overHero ? "primary" : "primary-light"}
                  className="w-full px-5 py-2.5 lg:w-auto"
                  href="/contact"
                  onClick={nav.closeMobileMenu}
                >
                  Start a project →
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offset content under fixed nav on non-home pages */}
      {!isHome && <div className="h-16 md:h-18" aria-hidden />}

      <StickyCtaBar />
    </>
  );
}
