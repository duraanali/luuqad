"use client"
import type { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { BottomBar } from "@/components/learn/BottomBar"
import { LeftBar } from "@/components/learn/LeftBar"
import { RightBar } from "@/components/learn/RightBar"
import { useSearchParams, useRouter } from "next/navigation"
import {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from "@store/slices/UserSlice"
import * as Yup from "yup"
import { Formik, Form, Field } from "formik"
import { toast } from "react-toastify"

interface MyFormValues {
  name: string
  email: string
}

const EditProfile: NextPage = () => {
  const { data: user } = useGetCurrentUserQuery<any>()
  const [updateUser] = useUpdateUserMutation()

  const router = useRouter()

  const [initialValues, setInialValues] = useState<MyFormValues>({
    name: "",
    email: "",
  })

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  })

  useEffect(() => {
    if (user) {
      const currentUser = user?.user
      setInialValues({
        name: currentUser.name,
        email: currentUser.email,
      })
    }
  }, [user])

  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get("callbackUrl") || "/learn/profile"

  const onSubmit = async (values: MyFormValues) => {
    try {
      const { name, email } = values
      const { data }: any = await updateUser({ name, email })
      if (data) {
        toast.success("Profile updated successfully")
        router.push(callbackUrl)
      }
    } catch (error) {
      toast.error("Something went wrong")
    }
  }

  return (
    <div>
      <LeftBar selectedTab={null} />
      <BottomBar selectedTab={null} />
      <div className='mx-auto flex flex-row gap-5 py-20 px-4 sm:py-10 md:pl-28 lg:pl-72'>
        <div className='w-full flex flex-col items-center justify-center gap-12 '>
          <div className='mx-auto flex w-full max-w-xl items-center justify-between lg:max-w-4xl'>
            <h1 className='text-lg font-bold text-gray-800 sm:text-2xl'>
              Edit Profile
            </h1>
          </div>
          <div className='flex w-full max-w-xl flex-col gap-8 px-16'>
            <div className='flex flex-col items-stretch justify-between gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-10 sm:pl-10'>
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <Form className='flex flex-col gap-4 w-full max-w-xl'>
                  <Field
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='grow rounded-2xl border-2 border-gray-200 p-4 py-2'
                  />
                  <Field
                    type='text'
                    name='email'
                    placeholder='Email'
                    className='grow rounded-2xl border-2 border-gray-200 p-4 py-2'
                  />
                  <button
                    type='submit'
                    className='rounded-2xl w-60 border-b-4 border-green-600 bg-green-500 py-3 px-5 font-bold uppercase text-white transition hover:brightness-110 disabled:border-b-0 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:brightness-100'>
                    Save changes
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default EditProfile
