import { options } from "@auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"
import { deleteCookie } from "cookies-next"

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { pointsSubmitted, time } = await req.json()

    const session = await getServerSession(options)
    const checkTime = new Date().getTime().toString().slice(0, 8)
    const checkDataTime = new Date(+time).getTime().toString().slice(0, 8)
    if (checkTime !== checkDataTime) {
      // this condition will delete if the hacker still use fake cookies data
      deleteCookie("key")
    }
    let getTimeFromCookies = []
    getTimeFromCookies.push(req.cookies.get("key")?.value)

    const isRightPoint = getTimeFromCookies[0]
      ? checkTime === checkDataTime
      : false

    if (!session) {
      return NextResponse.json(
        {
          error: "You're not authorized",
        },
        { status: 401 },
      )
    }

    const data = await prisma.question.findMany({
      select: {
        section_id: true,
        points: true,
      },
    })

    const sectionPoints: any = {}

    data.forEach((question) => {
      const sectionId = question.section_id
      const points = question.points

      if (!sectionPoints[sectionId]) {
        sectionPoints[sectionId] = 0
      }

      sectionPoints[sectionId] += points
    })

    let highestTotalPoints = 0

    for (const sectionId in sectionPoints) {
      if (sectionPoints[sectionId] > highestTotalPoints) {
        highestTotalPoints = sectionPoints[sectionId]
      }
    }

    const allPoints = parseInt(pointsSubmitted)

    if (allPoints > highestTotalPoints) {
      return NextResponse.json(
        {
          error:
            "WARNING: You submitted invalid points. This has been reported to the admin and your account may be suspended or deleted if you continue to submit invalid points.",
        },
        { status: 401 },
      )
    }

    const userId = Number(session.user?.id)
    // If no existing result found, create a new result
    if (isRightPoint === true) {
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
    }
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
