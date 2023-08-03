import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

import { prisma } from "@/lib/prisma"
import isEmail from "validator/lib/isEmail"
import { compare } from "bcrypt"

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "Your Beautiful Email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Your Very Secret Password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        // const user = { id: "42", name: "Dave", password: "nextauth" }

        // check if email is valid
        if (!isEmail(credentials?.email as string)) {
          return {
            error: "Email must be a valid email address",
          }
        }

        // check if user exists
        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })

        if (!existingUser) {
          return {
            error: "User with that email does not exist",
          }
        }

        // check if password is correct
        const passwordValid = compare(
          credentials?.password as string,
          existingUser.password,
        )

        if (!passwordValid) {
          return {
            error: "Invalid password",
          }
        }

        return {
          message: "User logged in successfully",
          user: {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
          },
        } as any
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      }
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any
        return {
          ...token,
          id: u.id,
        }
      }
      return token
    },
  },
}
