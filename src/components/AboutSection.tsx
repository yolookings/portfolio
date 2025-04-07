import { categories } from "@/data/aboutData";
import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-10 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Judul About Me */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white text-center relative"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          About Me
          <span className="block w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mt-2 rounded-full"></span>
        </h2>

        {/* Paragraf Penjelasan */}
        <p
          className="text-gray-600 dark:text-gray-400 mb-4 text-center text-sm sm:text-base max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          I am an Information Technology major with a deep interest in web
          development and UI/UX design. With more than a year of experience, I
          specialize in crafting{" "}
          <strong>interactive and responsive websites</strong> that enhance user
          experiences.
        </p>

        {/* Grid Kategori Teknologi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-purple-500/40 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <a
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                    data-aos-duration="600"
                    data-aos-easing="ease-in-out"
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl text-blue-500 dark:text-blue-400 mb-1">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol Download CV & Resume */}
      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Tombol CV */}
        <a
          href="/assets/My_CV.pdf"
          download
          className="group w-52 sm:w-60 relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-blue-500/40 dark:border-blue-400/20 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Download
            size={18}
            className="mr-2 transition-transform group-hover:rotate-[-15deg]"
          />
          Download CV
        </a>

        {/* Tombol Resume */}
        <a
          href="/assets/My_Resume.pdf"
          download
          className="group w-52 sm:w-60 relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-blue-500/40 dark:border-blue-400/20 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Download
            size={18}
            className="mr-2 transition-transform group-hover:rotate-[15deg]"
          />
          Download Resume
        </a>
      </div>
    </section>
  );
}
