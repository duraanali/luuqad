import { NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

export async function GET(
  req: NextRequest,
  { params: { user_id } }: { params: { user_id: number } },
) {
  try {
    const session = await getServerSession(options)

    if (!session) {
      return NextResponse.json(
        {
          error: "You're not authorized",
        },
        { status: 401 },
      )
    }
    // Convert section_id to a number if needed
    const userId = Number(user_id)
    // Get questions by section_id
    const results = await prisma.result.findMany({
      where: {
        user_id: userId,
      },
    })

    return NextResponse.json({
      message: "Results retrieved successfully",
      results,
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
