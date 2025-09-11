"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    let lastScrollState = false; // Track the current "scroll-down" state

    const handleScroll = () => {
      if (!navbar) return;

      const shouldAddClass = window.scrollY >= 25;

      // Only update class if state has changed
      if (shouldAddClass !== lastScrollState) {
        lastScrollState = shouldAddClass;
        navbar.classList.toggle("scroll-down", shouldAddClass);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar absolute w-full pl-5 pr-5">
        <div className="w-full nav-container container mx-auto">
          <div className="bg-navbar flex lg:justify-between items-center justify-end">
            <div className="lg:flex hidden items-center gap-4 md:gap-8 lg:gap-10 xl:gap-14">
              <Link className="fs-18 nav-link font-poppins font-bold!" href="">
                About
              </Link>
              <Link className="fs-18 nav-link font-normal font-poppins" href="">
                Work
              </Link>
              <Link className="fs-18 nav-link font-normal font-poppins" href="">
                Service
              </Link>
              <Link className="fs-18 nav-link font-normal font-poppins" href="">
                Blog
              </Link>
            </div>

            <div className="lg:flex hidden navbar-button gap-2">
              <Link
                href="#"
                className="text-[16px]! btn btn-primary border-radius-30 font-poppins"
              >
                Get in touch
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="nav-toggle-btn rounded-md transition"
                aria-label="Toggle menu"
              >
                <Image
                  src={
                    "https://api.bioflexaesthetics.com/wp-content/uploads/2025/05/menu.svg"
                  }
                  width={24}
                  height={25}
                  alt="hamburger"
                  unoptimized={true}
                  className="w-full! h-full! object-cover"
                />
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                height: isOpen ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute mt-2 right-0 z-10 overflow-hidden px-3 md:px-3.5 lg:px-5"
            >
              <ul className="flex flex-col items-start px-[20px] py-[10px] overflow-hidden">
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={""}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={""}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={""}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={""}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={""}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Locations
                  </Link>
                </li>
                <li className="px-[6px] py-[10px]">
                  <Link
                    href={""}
                    className={""}
                    onClick={() => setIsOpen(false)}
                  >
                    Articles
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;