"use client";
import { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ProjectSkeleton } from "./ProjectSkeleton";
import ProjectCard from "./ProjectCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Project } from "@/types/project.type";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch {
        setError("Unable to load projects. Please refresh the page or try again shortly.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight mb-3 pb-1 inline-block border-b-2 border-border">
        Projects - Open Sourced
      </h2>
      <p className="text-muted-foreground mt-3">
        Some of my recent projects.
      </p>

      {isLoading && <ProjectSkeleton />}

      {error && (
        <Alert variant="destructive" className="mb-6 w-[80%]">
          <div className="flex items-center gap-2">
          <AlertCircle />
          <AlertDescription>{error}</AlertDescription>
          </div>
        </Alert>
      )}

      {!isLoading && !error && projects.length === 0 && (
        <Alert className="mb-6">
          <AlertDescription className="text-center py-4">
            No projects found. Check back soon!
          </AlertDescription>
        </Alert>
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
          className="inline-flex items-center text-foreground hover:underline font-medium no-underline"
        >
          See more on GitHub <FaExternalLinkAlt className="ml-2 text-xs" />
        </a>
      </div>
    </section>
  );
}
