import { Project } from "@/models/projects";
import { dbConnect } from "@/utils/db";

export async function getProjects() {
  try {
    await dbConnect();
    return await Project.find().sort({ _id: -1 });
  } catch {
    return null;
  }
}
