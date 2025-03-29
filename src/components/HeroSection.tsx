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
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="../img/space.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay agar teks tetap terbaca */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Konten Hero Section */}
      <div className="relative text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
        >
          Maulana Ahmad Zahiri
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-300"
        >
          Full Stack Developer | UI/UX Designer | Software Engineer
        </motion.p>
      </div>

      {/* Animasi Scroll Down */}
      <div
        className={`absolute bottom-10 animate-bounce ${
          isScrolled ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300 z-10`}
      >
        <span className="text-gray-300">Scroll Down</span>
      </div>
    </section>
  );
}
