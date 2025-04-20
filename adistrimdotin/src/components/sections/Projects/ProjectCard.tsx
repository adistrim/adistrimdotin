import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "./Projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="font-bold dark:text-gray-100 text-xl mb-3">
          {project.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-zinc-700 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
