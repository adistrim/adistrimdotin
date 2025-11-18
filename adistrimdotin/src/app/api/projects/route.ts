import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import { Project } from "@/models/projects";
import { CONFIG } from "@/constants";

export const revalidate = CONFIG.revalidate; // 86400 = 24 hours (revalidate every 24 hours)

export async function GET() {
  try {
    await dbConnect();
    const data = await Project.find().sort({ _id: -1 });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
