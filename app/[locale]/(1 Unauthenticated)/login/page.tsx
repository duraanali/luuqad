"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { signIn } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation"
import * as Yup from "yup"
import { Formik, Form, Field } from "formik"
import { toast } from "react-toastify"

interface MyFormValues {
  email: string
  password: string
}

const Login = () => {
  const router = useRouter()

  const initialValues: MyFormValues = {
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
  const callbackUrl = searchParams?.get("callbackUrl") || "/learn"

  const onSubmit = async (values: MyFormValues) => {
    try {
      await signIn("credentials", {
        ...values,
        redirect: false,
      }).then((callback) => {
        if (callback?.ok) {
          toast.success("Login Successfully")
          router.push(callbackUrl)
        } else if (callback?.error) {
          toast.error("Something Went Wrong")
        }
      })
    } catch (error) {
      toast.error("Email or Password is incorrect")
    }
  }

  return (
    <div className='flex items-center justify-center min-h-full px-4 sm:px-6 lg:px-8'>
      <div className='max-w-sm'>
        <div>
          <h1 className='mt-6 text-3xl font-extrabold text-center'>Log in</h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <Form>
            <div className='flex flex-col items-center justify-center gap-3 mt-8'>
              <Field
                type='email'
                name='email'
                autoComplete='none'
                required
                className='relative items-center justify-center block px-3 py-2 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                placeholder='Email Or Username'
              />
              <div className='relative mt-2'>
                <Field
                  type='password'
                  name='password'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block px-3 py-2 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='Password'
                />
                {/* forget password link */}
                <span className='absolute top-2/4 right-2 -translate-y-2/4'>
                  <Link href='/forget' className='font-bold text-gray-400'>
                    FORGET?
                  </Link>
                </span>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full mt-4 space-y-4 text-center'>
              <button
                type='submit'
                className='w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]'>
                SIGN IN
              </button>
            </div>
          </Form>
        </Formik>
        {/* or line */}

        <div className='flex items-center w-full gap-2 mt-5'>
          <hr className='flex-1 border-t-2 border-t-gray-300' />
          <p className='font-bold text-center text-gray-400'>OR</p>
          <hr className='flex-1 border-t-2 border-t-gray-300' />
        </div>

        {/* OAuth Login */}
        <div className='flex items-center gap-5 mt-5'>
          <button
            onClick={() => signIn("github", { callbackUrl })}
            className='flex gap-2 items-center w-48 h-12  px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]'
            type='button'>
            <div className='flex items-center px-5 '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 30 30'
                width='30px'
                height='30px'>
                {" "}
                <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z' />
              </svg>
              <span className='pl-3 font-bold text-center text-black-800 '>
                GITHUB
              </span>
            </div>
          </button>
          <button
            className='flex gap-2 items-center w-48 h-12 px-5 py-2 rounded-xl text-lg bg-white shadow-[0px_2px_2px_2px_#d1d5db]'
            onClick={() => signIn("google", { callbackUrl })}
            type='button'>
            <div className='flex items-center px-5'>
              <Image
                className=''
                src='https://d35aaqx5ub95lt.cloudfront.net/images/7da752378a3b1b8bbcd94a4d4f10561e.svg'
                alt=''
                width={20}
                height={10}
              />
              <span className='pl-3 font-bold text-center text-blue-800'>
                GOOGLE
              </span>
            </div>
          </button>
        </div>
        <div className='mt-6 text-center text-gray-400'>
          <p>
            By signing in to LUUQAD, you agree to our{" "}
            <Link href='/policies/terms_of_use' className='font-bold'>
              Terms
            </Link>{" "}
            and{" "}
            <Link href='/policies/privacy_policy' className='font-bold'>
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
