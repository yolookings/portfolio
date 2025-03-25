export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-white dark:bg-gray-900"
    >
      <div className="hidden-section max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-justify">
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
          <div className="bg-gray-800 p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
            <p className="text-gray-400">Swift</p>
          </div>
        </div>
      </div>
    </section>
  );
}
