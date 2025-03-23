import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const isAuthenticated = !!token;

  const { pathname } = req.nextUrl;

  // Public access
  const isPublic =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/api/auth");

  // Not logged and tries to access protected page, redirect to login page
  if (!isAuthenticated && !isPublic) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Logged and tries to access login/registration page, redirect to dashboard
  if (isAuthenticated && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

// חשוב מאוד — כדי לא לחסום קבצים סטטיים ו-assets של Next.js
export const config = {
  matcher: ["/((?!_next|favicon.ico|api/auth|images).*)"],
};
