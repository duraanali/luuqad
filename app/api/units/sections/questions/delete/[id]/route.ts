import { NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

// delete lesson with id in the params from prisma
export async function DELETE(
  req: NextRequest,
  { params: { id } }: { params: { id: string } },
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

    if (session?.user?.role !== "admin") {
      return NextResponse.json(
        {
          error: "You're not an admin",
        },
        { status: 401 },
      )
    }

    // Get all lessons
    await prisma.question.delete({
      where: {
        id: Number(id),
      },
    })

    return NextResponse.json({
      message: "Question deleted successfully",
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
