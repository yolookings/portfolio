import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaAws,
  FaSwift,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiTailwindcss,
  SiAdobe,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, link: "https://reactjs.org/" },
      { name: "Vue.js", icon: <FaVuejs />, link: "https://vuejs.org/" },
      { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
      { name: "Nuxt.js", icon: <SiNuxtdotjs />, link: "https://nuxt.com/" },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org/" },
      {
        name: "Express.js",
        icon: <SiExpress />,
        link: "https://expressjs.com/",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, link: "https://git-scm.com/" },
      { name: "Docker", icon: <FaDocker />, link: "https://www.docker.com/" },
      { name: "AWS", icon: <FaAws />, link: "https://aws.amazon.com/" },
    ],
  },
  {
    title: "Design and Editing",
    skills: [
      { name: "Figma", icon: <FaFigma />, link: "https://www.figma.com/" },
      { name: "Adobe", icon: <SiAdobe />, link: "https://www.adobe.com/" },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      {
        name: "Swift",
        icon: <FaSwift />,
        link: "https://developer.apple.com/swift/",
      },
    ],
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen py-10 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Judul About Me */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white text-center relative">
          About Me
          <span className="block w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mt-2 rounded-full"></span>
        </h2>

        {/* Paragraf Penjelasan */}
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center text-sm sm:text-base max-w-2xl mx-auto">
          I am an Information Technology major with a deep interest in web
          development and UI/UX design. With more than a year of experience, I
          specialize in crafting **interactive and responsive websites** that
          enhance user experiences.
        </p>

        {/* Grid Kategori Teknologi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <a
                    key={idx}
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
    </section>
  );
}
