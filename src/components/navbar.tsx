"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-6 max-w-7xl">
        <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-gray-200/20 dark:border-gray-800/20 rounded-2xl m-4">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Ai
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/projects"
                className="text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                About Me
              </Link>
              <Link
                href="/tools"
                className="text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
              >
                Tools
              </Link>
            </div>

            {/* Theme Toggle and Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              >
                {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
