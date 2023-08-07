import { NextRequest, NextResponse } from "next/server"
import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/prisma"

interface RequestBody {
  section_id: number
  question_type_id: number
  title: string
  question: string
  avatar: string
  points: number
  audio: string
  status: number
}
// using next js 13 api routes, send post request to create user with prisma
export async function POST(req: NextRequest) {
  try {
    // use prisma to create a new lesson
    const {
      title,
      status,
      section_id,
      question_type_id,
      question,
      avatar,
      points,
      audio,
    }: RequestBody = await req.json()

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

    const newQuestion = await prisma.question.create({
      data: {
        title,
        status,
        section_id,
        question_type_id,
        question,
        avatar,
        points,
        audio,
      } as any,
    })

    return NextResponse.json({
      message: "Question created successfully",
      newQuestion,
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
