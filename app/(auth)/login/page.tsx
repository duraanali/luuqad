"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { signIn } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

interface Values {
  email: string
  password: string
}

const Login = () => {
  const router = useRouter()

  const initialValues: Values = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  })

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/learn"

  const onSubmit = async (values: Values) => {
    console.log(values)
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl,
      })

      console.log(res)
      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        console.log(res.error)
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm">
        <div>
          <h1 className="mt-6 text-3xl font-extrabold text-center">Log in</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <Form>
            <div className="flex flex-col items-center justify-center gap-3 mt-8">
              <Field
                type="email"
                name="email"
                autoComplete="none"
                required
                className="relative items-center justify-center block px-3 px-4 py-2 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300"
                placeholder="Email Or Username"
              />
              <div className="relative mt-2">
                <Field
                  type="password"
                  name="password"
                  autoComplete="none"
                  required
                  className="relative items-center justify-center block px-3 px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300"
                  placeholder="Password"
                />
                {/* forget password link */}
                <span className="absolute top-2/4 right-2 -translate-y-2/4">
                  <Link href="/learn" className="font-bold text-gray-400">
                    FORGET?
                  </Link>
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full mt-4 space-y-4 text-center">
              <button
                type="submit"
                className="w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]">
                SIGN IN
              </button>
            </div>
          </Form>
        </Formik>
        {/* or line */}

        <div className="flex items-center w-full gap-2 mt-5">
          <hr className="flex-1 border-t-2 border-t-gray-300" />
          <p className="font-bold text-center text-gray-400">OR</p>
          <hr className="flex-1 border-t-2 border-t-gray-300" />
        </div>

        {/* OAuth Login */}
        <div className="flex items-center gap-5 mt-5">
          <button
            className="flex gap-2 items-center w-48 h-12  px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]"
            onClick={() => alert("Sorry, this feature is not available yet")}
            type="button">
            <div className="flex items-center px-5 ">
              <Image
                className=""
                src="https://d35aaqx5ub95lt.cloudfront.net/images/ded9ca9461387f30221b67f627227388.svg"
                alt=""
                width={10}
                height={10}
              />
              <span className="pl-3 font-bold text-center text-blue-800 ">
                FACEBOOK
              </span>
            </div>
          </button>
          <button
            className="flex gap-2 items-center w-48 h-12 px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]"
            onClick={() => signIn("google", { callbackUrl })}
            type="button">
            <div className="flex items-center px-5">
              <Image
                className=""
                src="https://d35aaqx5ub95lt.cloudfront.net/images/7da752378a3b1b8bbcd94a4d4f10561e.svg"
                alt=""
                width={20}
                height={10}
              />
              <span className="pl-3 font-bold text-center text-blue-800">
                GOOGLE
              </span>
            </div>
          </button>
        </div>
        <div className="mt-6 text-center text-gray-400">
          <p>
            By signing in to Duolingo, you agree to our{" "}
            <Link href="/terms" className="font-bold">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-bold">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="mt-5 text-center text-gray-400">
          <p>
            his site is protected by reCAPTCHA Enterprise and the Google{" "}
            <Link href="/privacy" className="font-bold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="Terms" className="font-bold">
              {" "}
              Terms of Service apply.
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
