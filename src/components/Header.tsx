"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Products",
    hasDropdown: true,
    items: [
      { label: "Sana", href: "#" },
      { label: "Sana Learn", href: "/", icon: true },
    ],
  },
  {
    label: "Capabilities",
    hasDropdown: true,
    items: [
      { label: "Overview", href: "/" },
      { label: "Learning management", href: "/learning-management" },
      { label: "Content creation", href: "/content-creation" },
      { label: "AI tutor", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    label: "Solutions",
    hasDropdown: true,
    items: [
      { label: "Sales enablement", href: "#" },
      { label: "Compliance training", href: "#" },
      { label: "Employee onboarding", href: "#" },
      { label: "External training", href: "#" },
      { label: "Leadership development", href: "#" },
    ],
  },
  {
    label: "Resources",
    hasDropdown: true,
    items: [
      { label: "Events", href: "#" },
      { label: "Podcast", href: "#" },
    ],
  },
  {
    label: "Customer stories",
    hasDropdown: true,
    items: [
      { label: "Polestar", href: "#" },
      { label: "Spotify", href: "#" },
      { label: "Hootsuite", href: "#" },
      { label: "Hinge Health", href: "#" },
      { label: "All stories", href: "#" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 6C3.01 6 1 8.01 1 10.5S3.01 15 5.5 15 10 12.99 10 10.5 7.99 6 5.5 6zm0 7c-1.38 0-2.5-1.12-2.5-2.5S4.12 8 5.5 8 8 9.12 8 10.5 6.88 13 5.5 13z" fill="currentColor"/>
            <path d="M14.5 6C12.01 6 10 8.01 10 10.5S12.01 15 14.5 15 19 12.99 19 10.5 16.99 6 14.5 6zm0 7c-1.38 0-2.5-1.12-2.5-2.5S13.12 8 14.5 8 17 9.12 17 10.5 15.88 13 14.5 13z" fill="currentColor"/>
            <path d="M10 15c-2.49 0-4.5 2.01-4.5 4.5S7.51 24 10 24s4.5-2.01 4.5-4.5S12.49 15 10 15zm0 7c-1.38 0-2.5-1.12-2.5-2.5S8.62 17 10 17s2.5 1.12 2.5 2.5S11.38 22 10 22z" fill="currentColor"/>
            <path d="M10 0C7.51 0 5.5 2.01 5.5 4.5S7.51 9 10 9s4.5-2.01 4.5-4.5S12.49 0 10 0zm0 7c-1.38 0-2.5-1.12-2.5-2.5S8.62 2 10 2s2.5 1.12 2.5 2.5S11.38 7 10 7z" fill="currentColor"/>
            <text x="24" y="17" fontFamily="Sana Serif, Georgia, serif" fontSize="16" fontWeight="400" fill="currentColor">Sana</text>
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href && !item.hasDropdown ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-black transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
              )}

              <AnimatePresence>
                {item.hasDropdown && item.items && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                        >
                          {subItem.icon && (
                            <span className="w-5 h-5 rounded bg-black flex items-center justify-center">
                              <svg width="12" height="12" viewBox="0 0 20 20" fill="white">
                                <circle cx="5" cy="5" r="3" />
                                <circle cx="15" cy="5" r="3" />
                                <circle cx="10" cy="15" r="3" />
                                <circle cx="10" cy="5" r="3" />
                              </svg>
                            </span>
                          )}
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:inline-flex text-sm text-gray-700 hover:text-black transition-colors">
            Mission
          </Link>
          <Link href="#" className="hidden md:inline-flex text-sm text-gray-700 hover:text-black transition-colors">
            Careers
          </Link>
          <Link href="#" className="btn-primary hidden sm:inline-flex">
            Book an intro
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black block origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-black block"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-black block origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="pt-20 pb-8 px-6"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="border-b border-gray-100"
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-4 text-lg font-medium"
                      >
                        {item.label}
                        <motion.svg
                          animate={{ rotate: mobileDropdown === item.label ? 180 : 0 }}
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === item.label && item.items && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-4 space-y-3">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block text-gray-600 hover:text-black transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="pt-6 space-y-4"
              >
                <Link href="#" className="block text-lg text-gray-600 hover:text-black">
                  Mission
                </Link>
                <Link href="#" className="block text-lg text-gray-600 hover:text-black">
                  Careers
                </Link>
                <Link href="#" className="btn-primary w-full text-center mt-4">
                  Book an intro
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
