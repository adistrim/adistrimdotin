import mongoose from "mongoose";
import { connectionStr } from "../../../../utils/db";
import { NextResponse } from "next/server";
import { Recommendation } from "@/models/recommendations";

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
        const deletedProject = await Recommendation.findByIdAndDelete(params.id);

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

        const updatedRecommendation = await Recommendation.findByIdAndUpdate(
            params.id,
            updateData,
            { new: true }
        );

        if (!updatedRecommendation) {
            return NextResponse.json(
                { error: "Recommendation not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedRecommendation);
    } catch (error) {
        const message = isError(error) ? error.message : "An unknown error occurred";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
