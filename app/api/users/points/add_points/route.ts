import { NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { points } = await req.json()

    const session = await getServerSession(options)

    if (!session) {
      return NextResponse.json(
        {
          error: "You're not authorized",
        },
        { status: 401 },
      )
    }

    const allPoints = parseInt(points)
    const userId = Number(session.user?.id)
    // If no existing result found, create a new result
    const newResult = await prisma.point.create({
      data: {
        user_id: userId,
        points: allPoints,
      },
    })

    return NextResponse.json({
      message: "Points created successfully",
      newResult,
    })
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error:", error)

    // Return a specific error message
    return NextResponse.json(
      {
        error: "Sorry, something went wrong. Please try again later.",
      },
      { status: 500 },
    )
  }
}
