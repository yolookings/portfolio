"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "../../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

// Dynamically import ProjectsSection with loading fallback
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <div className="h-screen" />,
});

export default function ProjectsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      disable: "mobile",
      startEvent: "DOMContentLoaded",
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <NavBar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1
            className="text-4xl font-bold text-center mb-8"
            data-aos="fade-up"
          ></h1>
          <ProjectsSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
