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
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden project-card hover:shadow-2xl dark:hover:shadow-yellow-500/40 ">
      <div className="h-48 bg-gray-200 dark:bg-gray-700">
        <img
          src={project.image}
          alt={`Image of ${project.title}`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>

        {!isExpanded && (
          <div className="text-gray-600 dark:text-gray-400 mb-4 text-justify line-clamp-2">
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
              <div className="text-gray-600 dark:text-gray-400 mb-4">
                <div className="space-y-4">
                  <p className="text-justify">{project.description}</p>

                  <div className="space-y-2">
                    <h4
                      className="font-semibold text-gray-900 dark:text-white"
                      data-aos="fade-in"
                      data-aos-delay="200"
                      data-aos-duration="600"
                      data-aos-easing="ease-in-out"
                    >
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map(
                        (tech: string, index: number) => (
                          <span
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            data-aos-duration="600"
                            data-aos-easing="ease-in-out"
                            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {project.features && (
                    <div className="space-y-2">
                      <h4
                        className="font-semibold text-gray-900 dark:text-white"
                        data-aos="fade-in"
                        data-aos-delay="250"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-out"
                      >
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {project.features.map(
                          (feature: string, index: number) => (
                            <li
                              key={index}
                              className="text-gray-600 dark:text-gray-400"
                              data-aos="fade-in"
                              data-aos-delay={index * 200}
                              data-aos-duration="600"
                              data-aos-easing="ease-in-out"
                            >
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
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            {isExpanded ? "Show Less" : "View More"}
          </button>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Project Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExpandableProjectCard;
