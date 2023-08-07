import {NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

// delete lesson with id in the params from prisma
export async function POST(
  req: NextRequest,
  { params: { question_id } }: { params: { question_id: number } },
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

    // Get answers for question
    const answers = await prisma.answer.findMany({
      where: {
        question_id: Number(question_id),
      },
      select: {
        id: true,
        question_id: true,
        answer: true,
        is_correct: true,
        avatar: true,
        audio: true,
        status: true,
        created_at: true,
        updated_at: true,
      },
    })

    return NextResponse.json({
      message: "Answers retrieved successfully",
      answers,
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
