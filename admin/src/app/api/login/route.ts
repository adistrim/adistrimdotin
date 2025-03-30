import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: Request) {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parseResult = loginSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { error: parseResult.error.errors },
      { status: 400 },
    );
  }
  const { email, password } = parseResult.data;

  if (
    Buffer.byteLength(email) !== Buffer.byteLength(adminEmail) ||
    Buffer.byteLength(password) !== Buffer.byteLength(adminPassword)
  ) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const emailMatch = crypto.timingSafeEqual(
    Buffer.from(email),
    Buffer.from(adminEmail),
  );
  const passwordMatch = crypto.timingSafeEqual(
    Buffer.from(password),
    Buffer.from(adminPassword),
  );
  if (!emailMatch || !passwordMatch) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful" }, { status: 200 });
}
