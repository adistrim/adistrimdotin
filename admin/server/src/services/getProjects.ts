import { Project } from "../models/project.ts";
import { connectDB } from "../database.ts";

export default async function getProjects() {
    try {
        await connectDB();
        return Project.find().sort({ _id: -1 });   
    } catch (error) {
        console.error('Failed to get projects:', error);
    }
}
