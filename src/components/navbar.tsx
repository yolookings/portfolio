"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Folder,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Memoize the nav links to prevent unnecessary re-renders
const navLinks = [
  { href: "/", label: "Home", icon: <Home className="w-5 h-5 mr-2" /> },
  { href: "#about", label: "About", icon: <Info className="w-5 h-5 mr-2" /> },
  {
    href: "/experience",
    label: "Experience",
    icon: <Briefcase className="w-5 h-5 mr-2" />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <Folder className="w-5 h-5 mr-2" />,
  },
  {
    href: "#support",
    label: "Contact",
    icon: <Mail className="w-5 h-5 mr-2" />,
  },
];

// Memoized NavLink component
const NavLink = memo(
  ({ link, onClick }: { link: (typeof navLinks)[0]; onClick: () => void }) => (
    <a
      href={link.href}
      onClick={(e) => {
        if (link.href.startsWith("#")) {
          e.preventDefault();
          onClick();
        }
      }}
      className="relative flex items-center text-gray-700 dark:text-gray-200 
      hover:text-purple-600 dark:hover:text-purple-400 transition-colors 
      max-md:hidden after:content-[''] after:absolute after:left-0 after:-bottom-2
      after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 
      after:transition-all after:duration-300 hover:after:w-full"
    >
      {link.icon}
      {link.label}
    </a>
  )
);

NavLink.displayName = "NavLink";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      setIsMobileMenuOpen(false);

      requestAnimationFrame(() => {
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      });
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/75 dark:bg-gray-900/75 backdrop-blur-md shadow-lg dark:shadow-gray-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <a href="/" className="flex items-center">
            <img
              src="../img/yolooaster.png"
              alt="yolooaster"
              className="h-12 w-auto transition-all duration-300 hover:scale-105"
              loading="eager"
            />
          </a>

          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                link={link}
                onClick={() => scrollToSection(link.href)}
              />
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/80
                text-gray-800 dark:text-gray-200 
                hover:bg-gray-200 dark:hover:bg-gray-700
                transition-colors max-md:hidden"
              aria-label="Toggle theme"
            >
              {!mounted ? null : theme === "dark" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg bg-gray-100/80 dark:bg-gray-800/80
                text-gray-800 dark:text-gray-200 
                hover:bg-gray-200 dark:hover:bg-gray-700
                transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-0 right-0 
                bg-white/90 dark:bg-gray-900/90 
                backdrop-blur-xl 
                shadow-lg dark:shadow-gray-800/30
                rounded-b-2xl 
                overflow-hidden"
            >
              <div className="flex flex-col items-center py-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="relative flex items-center text-gray-800 dark:text-gray-100 
                      text-lg font-medium
                      hover:text-purple-600 dark:hover:text-purple-400 
                      transition-all 
                      hover:scale-105 active:scale-95 
                      after:content-[''] after:absolute after:left-0 after:bottom-0 
                      after:w-0 after:h-[2px] after:bg-purple-600 dark:after:bg-purple-400 
                      after:transition-all after:duration-300 
                      hover:after:w-full"
                  >
                    {link.icon}
                    {link.label}
                  </motion.a>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center 
                    p-3 rounded-lg 
                    bg-white/30 dark:bg-gray-800 
                    text-gray-800 dark:text-gray-100
                    hover:bg-white/50 dark:hover:bg-black/50
                    transition-colors"
                  aria-label="Toggle theme"
                >
                  {!mounted ? null : theme === "dark" ? (
                    <>
                      <Moon className="w-6 h-6 mr-2" />
                      <span className="font-medium">Dark Mode</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-6 h-6 mr-2" />
                      <span className="font-medium">Light Mode</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default memo(Navbar);
