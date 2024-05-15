import { NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

export async function GET() {
  // Change method name to 'get'
  try {
    const session = await getServerSession(options)

    if (!session) {
      return NextResponse.json(
        {
          error: "Unauthorized access.",
        },
        { status: 401 },
      )
    }

    // Get users with their points
    const usersWithPoints = await prisma.user.findMany({
      select: {
        name: true,
        image: true,
        Point: {
          select: {
            points: true,
          },
        },
      },
    })

    return NextResponse.json({
      usersWithPoints,
    })
  } catch (error) {
    console.error("Error:", error) // Log the error for debugging
    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      { status: 500 },
    )
  }
}
