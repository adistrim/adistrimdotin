import mongoose from "mongoose";
import { connectionStr } from "../../../../utils/db";
import { NextResponse } from "next/server";
import { Project } from "../../../../models/projects";

function isError(error: unknown): error is Error {
    return error instanceof Error;
}

if (!connectionStr) {
    throw new Error("DATABASE_URL is not defined");
}

export async function GET() {
    try {
        await mongoose.connect(connectionStr);
        const data = await Project.find().sort({ _id: -1 });
        return NextResponse.json(data);
    } catch (error) {
        const message = isError(error) ? error.message : "An unknown error occurred";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await mongoose.connect(connectionStr);
        const data = await request.json();
        const { _id, ...projectData } = data;
        const newProject = await Project.create(projectData);
        return NextResponse.json(newProject);
    } catch (error) {
        const message = isError(error) ? error.message : "An unknown error occurred";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
