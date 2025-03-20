import { NextRequest, NextResponse } from "next/server"
import { withAuth } from "next-auth/middleware"
import createIntlMiddleware from "next-intl/middleware"

const locales = ["en", "so"]
const publicPages = [
  "/",
  "/login",
  "/signup",
  "/forget",
  "/policies/terms_of_use",
  "/policies/privacy_policy",
  "/.well-known/assetlinks.json"
]

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: "en",
})

const authMiddleware = withAuth((req) => intlMiddleware(req), {
  callbacks: {
    authorized: ({ req, token }) => {
      const path = req.nextUrl.pathname

      // if user is logged in, redirect to /learn

      if (path.startsWith("/admin")) {
        return token?.role === "admin"
      }

      if (path.startsWith("/learn")) {
        return token !== null
      }

      // By default return true only if the token is not null
      // (this forces the users to be signed in to access the page)
      return token !== null
    },
  },
  pages: {
    signIn: "/login",
  },
})

export default function middleware(req: NextRequest) {
  const { origin } = req.nextUrl
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages.join("|")})?/?$`,
    "i",
  )
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    // if trying to access public page and user is logged in, redirect to /learn
    if (req.cookies.has("next-auth.session-token")) {
      // redirect to /learn
      return NextResponse.rewrite(`${origin}/en/learn`)
    }

    return intlMiddleware(req)
  } else {
    return (authMiddleware as any)(req)
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
