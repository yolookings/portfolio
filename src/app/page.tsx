"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";
import { projects } from "../data/projectsData";
import ExpandableProjectCard from "@/components/ExpandableProjectCard";
import RotatingIcon from "../data/icon";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden-section");
    hiddenElements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 sm:px-8 md:px-12">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
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

      {/* About Section */}
      <section className="min-h-screen py-20">
        <div className="hidden-section max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 mb-6 text-justify">
            I am an Information Technology major with a deep interest in web
            development and user interface design (UI/UX). With more than a year
            of experience in designing and developing digital solutions, I have
            focused on creating interactive and responsive websites.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-800 p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-gray-400">
                Vue js, React, Next.js, Nuxt, Tailwind CSS
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-gray-400">Node.js, Express</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">Tools</h3>
              <p className="text-gray-400">Git, Docker, AWS</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-bold mb-2">Software</h3>
              <p className="text-gray-400">Figma, Adobe Premiere Pro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20">
        <div className="hidden-section max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ExpandableProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20">
        <div className="hidden-section max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            Interested in collaborating? Feel free to contact me.
          </p>
          <div className="container mx-auto mt-20">
            <h1 className="text-2xl font-bold mb-6 text-center"></h1>
            <ContactForm />
          </div>
          {/* Centered Infinite Typing Animation */}
          <div className="mt-16 flex justify-center">
            <p className="text-lg text-gray-400 animate-typing">
              Thanks for your visit! 🚀
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
