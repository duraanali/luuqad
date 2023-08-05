import type { NextAuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import isEmail from "validator/lib/isEmail"
import { compare, hash } from "bcrypt"

interface User {
  id: number
  name: string
  email: string
  password: string
  oauth_id: string | null
  image: string | null
  oauth_provider: string | null
  location: string | null
  created_at: Date
  updated_at: Date
  role: string // Add the "role" property here, or use the appropriate type
}

export const options: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development" ? true : false,
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
        if (!isEmail(credentials?.email as string)) {
          return {
            error: "Email must be a valid email address",
          }
        }

        // check if user exists
        const existingUser = (await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })) as User

        if (!existingUser) {
          return {
            error: "User with that email does not exist",
          }
        }

        // check if password is correct
        const passwordValid = await compare(
          credentials?.password as string,
          existingUser.password,
        )

        if (!passwordValid) {
          return {
            error: "Invalid password",
          }
        }

        return {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          role: existingUser.role,
        } as any;
      }
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role, // Include the user role in the session
        },
      }
    },
    jwt: async ({ token, user, account }) => {
      if (user) {
        // Check if the user exists in the database
        // get email from user object
        const email = user.email as string
        const existingUser = (await prisma.user.findUnique({
          where: {
            email: email,
          },
        })) as User

        // If the user does not exist, create a new user in the database
        if (!existingUser) {
          const hashedPassword = await hash(token.sub as string, 10)

          const newUser = (await prisma.user.create({
            data: {
              email: user.email as string,
              name: (user.name as string) || (user.email as string),
              oauth_id: account?.id as string,
              oauth_provider: account?.provider,
              image: user.image || null,
              password: hashedPassword,
              role: "user", // Set the user role to "user" by default
              // You can add other properties here based on the provider data
            } as any,
          })) as User

          return {
            ...token,
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role,
          }
        } else {
          // If the user exists, update the oauth_id and oauth_provider in case of changes
          if (account?.id && account?.provider) {
            await prisma.user.update({
              where: {
                id: existingUser.id,
              },
              data: {
                oauth_id: account.id,
                oauth_provider: account.provider,
              },
            })
          }

          return {
            ...token,
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
            role: existingUser.role,
          }
        }
      }

      return {
        ...token,
      } as any
    }
  },
}
