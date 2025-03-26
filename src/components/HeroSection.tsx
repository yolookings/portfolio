"use client";
import { motion } from "framer-motion";
import RotatingIcon from "../data/icon";

interface HeroSectionProps {
  isScrolled: boolean;
}

export default function HeroSection({ isScrolled }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Maulana Ahmad Zahiri
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-400"
        >
          Full Stack Developer | UI/UX Designer | Software Engineer
        </motion.p>
        <div>
          <RotatingIcon
            className="top-1/3 left-0"
            size="w-16 h-16 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-40 lg:h-40"
            direction="clockwise"
          />
          <RotatingIcon
            className="top-1/5 left-0"
            size="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            direction="counterclockwise"
          />
        </div>
      </div>
      <div
        className={`absolute bottom-10 animate-bounce ${
          isScrolled ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <span className="text-gray-400">Scroll Down</span>
      </div>
    </section>
  );
}
