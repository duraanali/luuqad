import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"
import isEmail from "validator/lib/isEmail"
import isLength from "validator/lib/isLength"

import {prisma} from "@lib/prisma"

// using next js 13 api routes, send post request to create user with prisma
export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json()
  try {
    // validate name, email, password
    if (!isLength(name, { min: 3, max: 255 })) {
      return NextResponse.json(
        {
          error: "Name must be between 3 and 255 characters",
        },
        { status: 422 },
      )
    }

    if (!isLength(password, { min: 6 })) {
      return NextResponse.json(
        {
          error: "Password must be at least 6 characters",
        },
        { status: 422 },
      )
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        {
          error: "Email must be a valid email address",
        },
        { status: 422 },
      )
    }

    // check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return NextResponse.json(
        {
          error: "User with that email already exists",
        },
        { status: 422 },
      )
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    // create token
    const luuqad_users_token = jwt.sign(
      {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
      'process.env.JWT_SECRET',
      {
        expiresIn: "7d",
      },
    )

    return NextResponse.json({
        token: luuqad_users_token,
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        }
    })
  } catch (error) {
    console.log(error)
  }
}
