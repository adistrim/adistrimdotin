import { NextResponse } from "next/server";
import { dbConnect } from "@/utils/db";
import { Recommendation } from "@/schema/recommendations";

export const revalidate = 86400; // 86400 = 24 hours (revalidate every 24 hours)

export async function GET() {
  try {
    await dbConnect();
    const data = await Recommendation.find().sort({ _id: -1 });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
