import ExpandableProjectCard from "./ExpandableProjectCard";
import { projects } from "../data/projectsData";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-12 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <ExpandableProjectCard
              key={project.id}
              project={project}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
