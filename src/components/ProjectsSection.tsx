import ExpandableProjectCard from "./ExpandableProjectCard";
import { projects } from "../data/projectsData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="hidden-section max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ExpandableProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
