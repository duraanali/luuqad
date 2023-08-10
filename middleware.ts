import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const { origin } = req.nextUrl
  const token = await getToken({ req })
  const role = token?.role
  const isAuthenticated = !!token

  // Check if the token is null (not authenticated)
  if (!isAuthenticated) {
    // Allow access to signup and "/" pages
    if (
      req.nextUrl.pathname.startsWith("/signup") ||
      req.nextUrl.pathname === "/"
    ) {
      return NextResponse.next()
    }
    // Redirect to the login page for other pages
    return NextResponse.rewrite(`${origin}/login`)
  }

  // If the user is authenticated and is an admin
  if (isAuthenticated && role === "admin") {
    // Allow access to "/learn" and "/admin"
    if (
      req.nextUrl.pathname.startsWith("/learn") ||
      req.nextUrl.pathname.startsWith("/admin")
    ) {
      return NextResponse.next()
    }
    // Redirect to "/admin" for other pages
    return NextResponse.rewrite(`${origin}/admin`)
  }

  // If the user is authenticated but not an admin
  if (isAuthenticated && role !== "admin") {
    // Allow access to "/learn" only
    if (req.nextUrl.pathname.startsWith("/learn")) {
      return NextResponse.next()
    }
    // Redirect to "/learn" for other pages
    return NextResponse.rewrite(`${origin}/learn`)
  }

  // For any other case (e.g., unexpected conditions), redirect to "/learn"
  return NextResponse.rewrite(`${origin}/learn`)
}

export const config = {
  // Update the matcher to only include "/learn" and its subpaths
  matcher: [
    "/",
    "/login",
    "/signup",
    "/learn",
    "/learn/:path*",
    "/admin/:path*",
  ],
}
