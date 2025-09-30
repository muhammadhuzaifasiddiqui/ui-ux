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
      <nav className="navbar lg:absolute w-auto mb-2.5">
        <div className="bg-white nav-wrapper lg:bg-transparent border-radius-20">
          <div className="container nav-container mx-auto">
            <div className="bg-navbar flex justify-between items-center py-2">
              <div className="lg:flex hidden items-center gap-4 md:gap-8 lg:gap-10 xl:gap-14">
                <Link
                  className="fs-14 nav-link bg-white font-poppins font-bold!"
                  href=""
                >
                  HOME
                </Link>
                <Link
                  className="fs-14 nav-link font-normal font-poppins"
                  href=""
                >
                  SERVICE
                </Link>
                <Link
                  className="fs-14 nav-link font-normal font-poppins"
                  href=""
                >
                  WORK
                </Link>
                <Link
                  className="fs-14 nav-link font-normal font-poppins"
                  href=""
                >
                  BLOG
                </Link>
              </div>

              <div className="lg:hidden flex items-center left-0">
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

              <div className="flex navbar-button gap-2">
                <Link
                  href="#"
                  className="fs-12 font-normal! btn btn-primary border-radius-30 font-poppins"
                >
                  Get in touch
                </Link>
              </div>
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
              className="lg:hidden w-auto bg-white absolute left-[20px] right-[20px] mt-2.5 border-radius-20 overflow-hidden z-10"
            >
              <div className="container mx-auto nav-container">
                <ul className="flex flex-col">
                  <li className="py-[10px]">
                    <Link
                      href={""}
                      className={"fs-14"}
                      onClick={() => setIsOpen(false)}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="py-[10px]">
                    <Link
                      href={""}
                      className={"fs-14"}
                      onClick={() => setIsOpen(false)}
                    >
                      SERVICE
                    </Link>
                  </li>
                  <li className="py-[10px]">
                    <Link
                      href={""}
                      className={"fs-14"}
                      onClick={() => setIsOpen(false)}
                    >
                      WORK
                    </Link>
                  </li>
                  <li className="py-[10px]">
                    <Link
                      href={""}
                      className={"fs-14"}
                      onClick={() => setIsOpen(false)}
                    >
                      BLOG
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
