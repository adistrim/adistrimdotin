import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("admin");

    if (!token) {
      const loginUrl = req.nextUrl.clone();
      loginUrl.pathname = "/auth/login";
      return NextResponse.redirect(loginUrl);
    }
  }
  return NextResponse.next();
}
