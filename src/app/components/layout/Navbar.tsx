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
      <nav className="navbar absolute w-full left-0 px-3 md:px-3.5 lg:px-5">
        <div className="w-full container nav-container mx-auto relative left-0">
          <div className="bg-navbar flex justify-between items-center rounded-[30px]">
            <div className="logo-wrapper cursor-pointer">
              <Image
                src={"/images/logo.svg"}
                width={151}
                height={23}
                alt="logo"
                unoptimized={true}
                className="w-full! h-full! object-contain"
              />
            </div>
            <div className="lg:flex hidden navbar-menu items-center justify-center gap-2 xl:gap-8">
              <Link className="fs-16 nav-link fw-normal" href="">
                Home
              </Link>
              <Link className="fs-16 nav-link" href="">
                About
              </Link>
              <Link className="fs-16 nav-link" href="">
                Services
              </Link>
              <Link className="fs-16 nav-link" href="">
                Products
              </Link>
              <Link className="fs-16 nav-link" href="">
                Locations
              </Link>
              <Link className="fs-16 nav-link" href="">
                Articles
              </Link>
            </div>

            <div className="lg:flex hidden navbar-button gap-2">
              <div className="nav-icon p-[10px] rounded-full">
                <Image
                  src={"/images/bag-2.svg"}
                  width={20}
                  height={20}
                  alt="cart"
                  unoptimized={true}
                  className="w-full! h-full! object-cover cursor-pointer"
                />
              </div>
              <div className="nav-icon p-[10px] rounded-full">
                <Image
                  src={"/images/profile.svg"}
                  width={20}
                  height={20}
                  alt="cart"
                  unoptimized={true}
                  className="w-full! h-full! object-cover cursor-pointer"
                />
              </div>
              <Link href="#" className="btn btn-primary btn-sm fs-14">
                Login
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
              className="lg:hidden absolute mt-2 left-0 right-0 z-10 overflow-hidden px-3 md:px-3.5 lg:px-5"
            >
              <ul className="flex flex-col items-start px-[20px] py-[10px] overflow-hidden bg-[#f4ede4f6] rounded-[12px]">
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
