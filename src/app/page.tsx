"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";

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
        // Atur posisi scroll yang diinginkan
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Menambahkan event listener untuk scroll
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
        <div className="hidden-section max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-gray-400 mb-6">
            Saya adalah seorang Full Stack Developer dengan pengalaman lebih
            dari 5 tahun dalam pengembangan web modern. Passionate dalam
            menciptakan solusi digital yang elegan dan efisien.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-gray-400">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-gray-400">Node.js, Express, PostgreSQL</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Tools</h3>
              <p className="text-gray-400">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-20">
        <div className="hidden-section max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                className="bg-gray-800 rounded-lg overflow-hidden project-card"
              >
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-400 mb-4">
                    Deskripsi singkat tentang project dan teknologi yang
                    digunakan.
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
                      Demo
                    </button>
                    <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20">
        <div className="hidden-section max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-8">
            Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya.
          </p>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-3 bg-gray-800 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 bg-gray-800 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full mb-4 p-3 bg-gray-800 rounded"
            ></textarea>
            <button className="w-full py-3 bg-blue-600 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
