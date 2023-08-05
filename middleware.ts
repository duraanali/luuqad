import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
  const { origin } = req.nextUrl

  const token = await getToken({ req })
  const role = token?.role
  const isAuthenticated = !!token

  // if user is authenticated and is admin, allow access to "/learn" and "/admin"
  if (isAuthenticated && role === "admin") {
    if (req.nextUrl.pathname.startsWith("/admin")) {
      return NextResponse.next()
    } else {
      return NextResponse.rewrite(`${origin}/admin`)
    }
  }

  // if user is not authenticated, allow access to login and signup pages
  if (!isAuthenticated) {
    if (
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/signup")
    ) {
      return NextResponse.next()
    } else {
      return NextResponse.rewrite(`${origin}/login`)
    }
  }

  // if user is authenticated but not an admin, redirect to "/learn"
  return NextResponse.rewrite(`${origin}/learn`)
}

export const config = {
  matcher: ["/", "/login", "/signup", "/learn", "/admin"],
}
