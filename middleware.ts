import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const { origin } = req.nextUrl

  const token = await getToken({ req })
  const role = token?.role
  const isAuthenticated = !!token

  // If the user is authenticated and is an admin, allow access to "/learn" and "/admin"
  if (isAuthenticated && role === "admin") {
    if (
      req.nextUrl.pathname.startsWith("/learn") ||
      req.nextUrl.pathname.startsWith("/admin")
    ) {
      return NextResponse.next()
    } else {
      return NextResponse.rewrite(`${origin}/admin`)
    }
  }

  // If the user is authenticated but not an admin, allow access to "/learn" only
  if (isAuthenticated && role !== "admin") {
    if (req.nextUrl.pathname.startsWith("/learn")) {
      return NextResponse.next()
    } else {
      return NextResponse.rewrite(`${origin}/learn`)
    }
  }

  // If the user is not authenticated, allow access to login and signup pages
  if (!isAuthenticated) {
    if (
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/signup") ||
      req.nextUrl.pathname.startsWith("/")
    ) {
      return NextResponse.next()
    } else {
      return NextResponse.rewrite(`${origin}/login`)
    }
  }

  // For any other case (e.g., user authenticated as admin but trying to access "/" or "/login" or "/signup"),
  // redirect to "/learn" if logged in, or "/login" if not logged in.
  return NextResponse.rewrite(`${origin}/learn`)
}

export const config = {
  matcher: ["/", "/login", "/signup", "/learn", "/admin"],
}
