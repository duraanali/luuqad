import { NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

// using next js 13 api routes, send post request to create user with prisma
export async function GET() {
  try {
    const session = await getServerSession(options)

    if (!session) {
      return NextResponse.json(
        {
          error: "Hey, you're not authorized, what you doing here? Trying to be a hacker?",
        },
        { status: 401 },
      )
    }
    
    // Get all lessons
    const users = await prisma.user.findUnique({
        where: {
            email: session.user?.email as string
        },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
            role: true,
            created_at: true,
            updated_at: true,
        },
    })

    return NextResponse.json({
      users,
    })
  } catch (error) {
    // You might want to return a proper response in case of an error
    return NextResponse.json(
      {
        error: "Sorry, something went wrong.",
      },
      { status: 500 },
    )
  }
}
