import mongoose from "mongoose";
import { connectionStr } from "../../../utils/db";
import { NextResponse } from "next/server";
import { Project } from "../../../models/projects";

export const revalidate = 86400; // 86400 = 24 hours (revalidate every 24 hours)

export async function GET() {
    
    let data = []

    try {
        await mongoose.connect(connectionStr);
        data = await Project.find().sort({ _id: -1 });
    } catch (e) {
        data = { error: e.message };
    }

    return NextResponse.json(data);
    
}
