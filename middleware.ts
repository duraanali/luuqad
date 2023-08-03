import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent,
) {
  const { origin } = req.nextUrl

  const token = await getToken({ req })
  const isAuthenticated = !!token

  if (isAuthenticated) {
    if (
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/signup") ||
      req.nextUrl.pathname.startsWith("/")
    ) {
      return NextResponse.rewrite(`${origin}/learn`)
    }
  }

  // if user is not authenticated, allow access to login and signup pages and "/" page
  if (!isAuthenticated) {
    if (
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/signup") ||
      req.nextUrl.pathname.startsWith("/")
    ) {
      return NextResponse.next()
    }
  }

  const authMiddleware = withAuth({
    pages: {
      signIn: `/login`,
    },
  })

  // @ts-expect-error
  return authMiddleware(req, event)
}

export const config = { matcher: ["/", "/login", "/signup", "/learn"] }
