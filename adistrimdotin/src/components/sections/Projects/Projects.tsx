"use client";
import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ProjectSkeleton } from "./ProjectSkeleton";
import ProjectCard from "./ProjectCard";

export interface Project {
  _id: string;
  title: string;
  description: string;
  link?: string;
  github: string;
  tags?: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("Could not load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="mt-16">
      <div className="mb-8">
        <h1 className="font-bold dark:text-gray-100 text-2xl mb-3 inline-block border-b-2 border-gray-300 dark:border-zinc-700 pb-1">
          What I Create
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Here are some of my recent projects. Each one taught me something new
          and helped me grow as an Engineer.
        </p>
      </div>

      {isLoading && <ProjectSkeleton />}

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
          {error}
        </div>
      )}

      {!isLoading && !error && projects.length === 0 && (
        <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-300">
            No projects found. Check back soon!
          </p>
        </div>
      )}

      {!isLoading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}

      <div className="text-right mt-8">
        <a
          href="https://github.com/adistrim"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          See more on GitHub <FaExternalLinkAlt className="ml-2 text-xs" />
        </a>
      </div>
    </section>
  );
}
