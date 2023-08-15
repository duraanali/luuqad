import { NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

export async function PUT(req: NextRequest) {
  try {
    // Parse the request body
    const { name, email } = await req.json()

    const session = await getServerSession(options)

    if (!session) {
      return NextResponse.json(
        {
          error: "You're not authorized",
        },
        { status: 401 },
      )
    }

    const userId = Number(session.user?.id)
    // If no existing result found, create a new result
    const newResult = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        email,
      },
    })

    return NextResponse.json({
      message: "User Updated successfully",
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
