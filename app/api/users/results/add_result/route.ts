import { NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

interface RequestBody {
  user_id: number
  section_id: number
  question_id: number
  answer_id: number
}
// using next js 13 api routes, send post request to create user with prisma
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { user_id, section_id, question_id, answer_id }: RequestBody =
      await req.json()

    const session = await getServerSession(options)

    if (!session) {
      return NextResponse.json(
        {
          error: "You're not authorized",
        },
        { status: 401 },
      )
    }

    // Check if a result already exists for the same user, section, and question
    const existingResult = await prisma.result.findFirst({
      where: {
        user_id,
        section_id,
        question_id,
      },
    })

    if (existingResult) {
      // If the existing answer is different, update it
      if (existingResult.answer_id !== answer_id) {
        const updatedResult = await prisma.result.update({
          where: { id: existingResult.id },
          data: { answer_id },
        })

        return NextResponse.json({
          message: "Result updated successfully",
          updatedResult,
        })
      }

      // If the existing answer is the same, return a message without creating/updating
      return NextResponse.json({
        message: "Result already exists with the same answer",
      })
    }

    // If no existing result found, create a new result
    const newResult = await prisma.result.create({
      data: {
        user_id,
        section_id,
        question_id,
        answer_id,
      } as any,
    })

    return NextResponse.json({
      message: "Result created successfully",
      newResult,
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
