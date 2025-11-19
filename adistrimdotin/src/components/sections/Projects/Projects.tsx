import { dbConnect } from "@/utils/db";
import { Project } from "@/models/projects";
import ProjectCard from "./ProjectCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FaExternalLinkAlt } from "react-icons/fa";

export default async function Projects() {
  let projects;

  try {
    await dbConnect();
    projects = await Project.find().sort({ _id: -1 });
  } catch {
    projects = null;
  }

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold tracking-tight mb-3 pb-1 inline-block border-b-2 border-border">
        Projects. Open Sourced
      </h2>
      <p className="text-muted-foreground mt-3">
        Some of my recent projects.
      </p>

      {!projects && (
        <Alert variant="destructive" className="mb-6 w-[80%]">
          <AlertDescription>
            Unable to load projects. Please try again shortly.
          </AlertDescription>
        </Alert>
      )}

      {projects && projects.length === 0 && (
        <Alert className="mb-6">
          <AlertDescription className="text-center py-4">
            No projects found. Check back soon.
          </AlertDescription>
        </Alert>
      )}

      {projects && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
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
