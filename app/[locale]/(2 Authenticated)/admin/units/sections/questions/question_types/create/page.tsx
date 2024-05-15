"use client"
import { Field, Form, Formik } from "formik"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import * as Yup from "yup"
import baseUrl from "@/utils/baseUrl"

interface Values {
  title: string
}

const CreateQuestionTypes = () => {
  const router = useRouter()

  const initialValues: Values = {
    title: "",
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
  })

  const searchParams = useSearchParams()
  const callbackUrl =
    searchParams.get("callbackUrl") || "/admin/units/sections/questions"

  const onSubmit = async (values: Values) => {
    try {
      const question = {
        title: values.title,
      }

      const res = await fetch(
        `${baseUrl}/api/units/sections/questions/question_types/create`,
        {
          method: "POST",
          body: JSON.stringify(question),
          headers: {
            "Content-Type": "application/json",
          },
        },
      )

      if (res.status == 200) {
        router.push(callbackUrl)
      } else {
        console.log(res.status)
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div className='flex  justify-center min-h-full px-4 sm:px-6 lg:px-8'>
      <div className='max-w-sm'>
        <div>
          <h1 className='text-3xl font-extrabold text-center'>
            Create Question Types
          </h1>
        </div>
        <Formik
          initialValues={initialValues as any}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          <Form>
            <div className='flex flex-col items-center justify-center gap-3 mt-8'>
              <div className='relative mt-2'>
                <Field
                  type='text'
                  name='title'
                  autoComplete='none'
                  required
                  className='relative items-center justify-center block px-4 py-3 bg-gray-100 border appearance-none rounded-xl w-96 border-black-299 focus:outline-none ring-2 ring-gray-300'
                  placeholder='title'
                />
              </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full mt-4 space-y-4 text-center'>
              <button
                type='submit'
                className='w-96 h-12 px-4 pt-2 rounded-xl text-lg tracking-widest bg-blue-400 text-white font-bold hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 shadow-[0px_4px_0px_0px_#4299E1]'>
                Create Question
              </button>
            </div>
          </Form>
        </Formik>
        {/* or line */}
      </div>
    </div>
  )
}

export default CreateQuestionTypes
