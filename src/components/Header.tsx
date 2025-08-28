"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/product" },
    { name: "FAQ", href: "/faq" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="group flex items-center gap-3 cursor-pointer">
          <Link
            href="/"
            className="group flex items-center gap-2 cursor-pointer"
          >
            <h1 className="text-3xl font-bold text-[#597e53] transition-all duration-300 group-hover:text-pink-800 group-hover:scale-105 group-hover:tracking-wide">
              NICTE
            </h1>
            <img
              src="/images/Logo.jpg" // public/images/Logo.jpg
              alt="NICTE Logo"
              className="w-9 h-9 object-contain transition-transform duration-300 group-hover:rotate-[30deg]"
            />
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="w-6 h-0.5 bg-gray-800" />
          <span className="w-6 h-0.5 bg-gray-800" />
          <span className="w-6 h-0.5 bg-gray-800" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-pink-800 hover:scale-105 font-semibold transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu with open/close animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, clipPath: "inset(10% 0% 90% 0%)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ opacity: 0, y: -10, clipPath: "inset(10% 0% 90% 0%)" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white shadow-inner border-t border-gray-200 origin-top"
          >
            <motion.nav
              className="flex flex-col p-4 gap-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.03 },
                },
                closed: {
                  transition: { staggerChildren: 0.04, staggerDirection: -1 },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.18 },
                    },
                    closed: {
                      opacity: 0,
                      y: -6,
                      scale: 0.98,
                      transition: { duration: 0.12 },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    className="block text-gray-800 hover:text-pink-800 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
