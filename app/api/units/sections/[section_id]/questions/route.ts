import { NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

export async function GET(
  req: NextRequest,
  { params: { section_id } }: { params: { section_id: string } },
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
    const sectionId = parseInt(section_id)

    // Get questions by section_id
    const questions = await prisma.question.findMany({
      where: {
        section_id: sectionId,
      },
      include: {
        answers: true,
        question_type: {
          select: {
            title: true,
          },
        },
      },
    })

    return NextResponse.json({
      message: "Questions retrieved successfully",
      questions,
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
