"use client";
import React, { useState, useEffect } from "react";

interface Project {
  _id: string;
  title: string;
  description: string;
  link?: string;
  github: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="mt-8">
      <h1 className="font-medium dark:text-gray-100 text-xl mb-4">
        What I Create
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#FFFBF5] flex flex-col justify-around dark:bg-[#191919] shadow-md rounded-lg p-6"
          >
            <h2 className="font-semibold dark:text-gray-100 text-lg mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex justify-between items-center">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                GitHub
              </a>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 dark:text-blue-300 hover:underline"
                >
                  Go to Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-end mt-6">
        <a
          href="https://github.com/adistrim"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 dark:text-blue-300 hover:underline"
        >
          See More
        </a>
      </div>
    </section>
  );
}
