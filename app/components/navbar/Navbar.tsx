"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Service" },
    { href: "#contact", label: "Contact" },
    { href: "#b", label: "arrow" },
  ];

  // Animation variants for the logo and text
  const logoVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  // Animation variant for staggered nav links from right to left
  const navLinksVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  // Animation for individual links within the staggered effect
  const navLinkItem = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  // Animation variant for mobile menu
  const mobileMenuVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  // Animation variant for mobile nav links
  const mobileNavLinksVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  const mobileNavLinkItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="w-full text-black z-50">
      <nav className="w-full px-4 md:px-24 py-4 flex items-center justify-between">
        {/* Logo section */}
        <motion.div
          className="flex items-center justify-center gap-2 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={logoVariant}
        >
          <Image src="/logo.png" alt="logo" width={100} height={35} className="w-auto h-auto" />
          <Link className="font-abhaya text-lg md:text-2xl text-black text-nowrap" href="/">
            Market<span className="text-white">k</span>ing Agenc
            <span className="text-white">y</span>
          </Link>
        </motion.div>

        {/* Navlinks visible on larger screens */}
        <motion.div
          className="hidden mlg:flex flex-grow justify-end"
          initial="hidden"
          animate="visible"
          variants={navLinksVariant}
        >
          <ul className="flex items-center gap-6 text-lg">
            {navLinks.map(({ href, label }) => (
              <motion.li key={href} variants={navLinkItem}>
                <Link
                  href={href}
                  className={`nav-link relative transition font-abhaya text-2xl py-1 ${
                    pathname === href ? "active-link font-semibold" : ""
                  }`}
                >
                  {label === "arrow" ? <FaArrowRight /> : label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Navbar toggler icon, visible on smaller screens */}
        <div className="flex mlg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (with animated nav links) */}
      <motion.div
        id="mobile-menu"
        className={`${
          isOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-full"
        } w-full shadow-md transition-all duration-300 ease-in-out overflow-hidden lg:hidden transform`}
        style={{ transitionProperty: "max-height, opacity, transform" }}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={mobileMenuVariant}
      >
        <motion.ul
          className="flex flex-col items-center py-6 space-y-4 text-xl font-abhaya text-black"
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={mobileNavLinksVariant}
        >
          {navLinks.slice(0, -1).map(({ href, label }) => (
            <motion.li key={href} variants={mobileNavLinkItem}>
              <Link
                href={href}
                className={`nav-link relative transition py-1 ${
                  pathname === href ? "active-link font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
