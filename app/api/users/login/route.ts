import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import isEmail from "validator/lib/isEmail"
import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@lib/prisma"

// Define the types for the request body
interface RequestBody {
  email: string
  password: string
}

// create login route
export async function POST(req: NextRequest) {
  try {
    const { email, password }: RequestBody = await req.json()

    // check if email is valid
    if (!isEmail(email)) {
      return NextResponse.json(
        {
          error: "Email must be a valid email address",
        },
        { status: 422 },
      )
    }

    // check if user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!existingUser) {
      return NextResponse.json(
        {
          error: "User with that email does not exist",
        },
        { status: 422 },
      )
    }

    // check if password is correct
    const passwordValid = await bcrypt.compare(password, existingUser.password)

    if (!passwordValid) {
      return NextResponse.json(
        {
          error: "Invalid password",
        },
        { status: 401 },
      )
    }

    // create token
    const luuqad_users_token: string = jwt.sign(
      {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    )

    return NextResponse.json({
      message: "User logged in successfully",
      token: luuqad_users_token,
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      },
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    )
  }
}
