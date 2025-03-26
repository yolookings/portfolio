export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-10 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-justify text-sm sm:text-base">
          I am an Information Technology major with a deep interest in web
          development and user interface design (UI/UX). With more than a year
          of experience in designing and developing digital solutions, I have
          focused on creating interactive and responsive websites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Frontend",
              content: "Vue js, React, Next.js, Nuxt, Tailwind CSS",
            },
            { title: "Backend", content: "Node.js, Express" },
            { title: "Tools", content: "Git, Docker, AWS" },
            { title: "Software", content: "Figma, Adobe Premiere Pro" },
            { title: "Mobile Development", content: "Swift" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg transition-all hover:scale-[1.02] hover:shadow-md"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
