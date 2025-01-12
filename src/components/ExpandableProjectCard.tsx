import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="bg-gray-800 rounded-lg overflow-hidden project-card">
      <div className="h-48 bg-gray-700">
        <img
          src={project.image}
          alt={`Image of ${project.title}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>

        {!isExpanded && (
          <div className="text-gray-400 mb-4 text-justify line-clamp-2">
            {project.description}
          </div>
        )}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2, delay: 0.1 },
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2 },
                },
              }}
              className="overflow-hidden"
            >
              <div className="text-gray-400 mb-4">
                <div className="space-y-4">
                  <p className="text-justify">{project.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-white"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {project.features && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-white">
                        Key Features:
                      </h4>
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-2 mt-4">
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
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
          >
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpandableProjectCard;
