import { NextResponse } from "next/server";
import { getBlogs } from "@/lib/getBlogs";

export const revalidate = 86400;

export async function GET() {
  try {
    const blogs = await getBlogs();
    return NextResponse.json(blogs);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
