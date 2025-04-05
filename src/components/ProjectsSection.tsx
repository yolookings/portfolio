import ExpandableProjectCard from "./ExpandableProjectCard";
import { projects } from "../data/projectsData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-12 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white text-center relative"
          data-aos="fade-up"
        >
          Projects
          <span className="block w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mt-2 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delay meningkat per card
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <ExpandableProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
