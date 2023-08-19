import { NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

export async function DELETE(req: NextRequest) {
  try {
    // Parse the request body

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
    await prisma.user.delete({
      where: {
        id: userId,
      },
    })

    return NextResponse.json({
      message: "User Deleted successfully",
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
