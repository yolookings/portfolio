import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projectsData";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  projectLink: string;
  technologies?: string[];
  features?: string[];
}

const ExpandableProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-gray-800 rounded-lg overflow-hidden project-card"
    >
      <motion.div layout className="h-48 bg-gray-700">
        <img
          src={project.image}
          alt={`Image of ${project.title}`}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div layout className="p-6">
        <motion.h3 layout className="text-xl font-bold mb-2">
          {project.title}
        </motion.h3>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 mb-4"
            >
              <div className="space-y-4">
                <p className="text-justify">{project.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map(
                      (tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {project.features && (
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map(
                        (feature: string, index: number) => (
                          <li key={index} className="text-gray-400">
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-400 mb-4 text-justify line-clamp-2"
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.div layout className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            {isExpanded ? "Show Less" : "View More"}
          </button>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2
          bg-gray-700 rounded hover:bg-gray-600 transition-colors"
          >
            Project Link
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandableProjectCard;
