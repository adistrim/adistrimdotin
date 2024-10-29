import mongoose from "mongoose";
import { connectionStr } from "../../../utils/db";
import { NextResponse } from "next/server";
import { Recommendation } from "../../../models/recommendations";

export const revalidate = 86400; // 24 hours

function isError(error: unknown): error is Error {
    return error instanceof Error;
}

if (!connectionStr) {
    throw new Error("DATABASE_URL is not defined");
}

export async function GET() {
    try {
        await mongoose.connect(connectionStr);
        const data = await Recommendation.find().sort({ _id: -1 });
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
        const { _id, ...recommendationData } = data;
        const newRecommendation = await Recommendation.create(recommendationData);
        return NextResponse.json(newRecommendation);
    } catch (error) {
        const message = isError(error) ? error.message : "An unknown error occurred";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await mongoose.connect(connectionStr);
        const data = await request.json();
        const { _id, ...updateData } = data;

        const updatedRecommendation = await Recommendation.findByIdAndUpdate(
            _id,
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

