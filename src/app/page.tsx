"use client";

import { useState, useEffect, useCallback } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

// Dynamically import sections with loading fallback
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  loading: () => <div className="h-screen" />,
});
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    // Initialize AOS with optimized settings
    AOS.init({
      duration: 800,
      once: true,
      disable: "mobile", // Disable on mobile for better performance
      startEvent: "DOMContentLoaded",
    });

    // Use passive event listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavBar />
      <HeroSection isScrolled={isScrolled} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
