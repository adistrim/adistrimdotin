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

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await mongoose.connect(connectionStr);
        const deletedProject = await Project.findByIdAndDelete(params.id);
        
        if (!deletedProject) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }
        
        return NextResponse.json({ message: "Project deleted successfully" });
    } catch (error) {
        const message = isError(error) ? error.message : "An unknown error occurred";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await mongoose.connect(connectionStr);
        const data = await request.json();
        const { _id, ...updateData } = data;

        const updatedProject = await Project.findByIdAndUpdate(
            params.id,
            updateData,
            { new: true }
        );

        if (!updatedProject) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedProject);
    } catch (error) {
        const message = isError(error) ? error.message : "An unknown error occurred";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
