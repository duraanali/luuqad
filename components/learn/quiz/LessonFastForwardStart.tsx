import React from "react"
import Link from "next/link"
import { LessonFastForwardStartSvg } from "@/components/SVGs"

const LessonFastForwardStart = ({
  unitNumber,
  setIsStartingLesson,
}: {
  unitNumber: number
  setIsStartingLesson: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <div className='flex min-h-screen flex-col px-5 py-8 text-center'>
      <div className='flex grow flex-col items-center justify-center gap-5'>
        <LessonFastForwardStartSvg />
        <h1 className='text-lg font-bold'>
          Want to jump to Unit {unitNumber}?
        </h1>
        <p className='text-sm text-gray-400'>
          {`Pass the test to jump ahead. We won't make it easy for you though.`}
        </p>
      </div>
      <div className='flex flex-col gap-5'></div>
      <section className='border-gray-200 sm:border-t-2 sm:p-10'>
        <div className='mx-auto flex max-w-5xl flex-col-reverse items-center gap-5 sm:flex-row sm:justify-between'>
          <Link
            href='/learn'
            className='font-bold uppercase text-blue-400 transition hover:brightness-110'>
            Maybe later
          </Link>
          <button
            className='w-full rounded-2xl border-b-4 border-blue-500 bg-blue-400 p-3 font-bold uppercase text-white transition hover:brightness-110 sm:min-w-[150px] sm:max-w-fit'
            onClick={() => setIsStartingLesson(false)}>
            {`Let's go`}
          </button>
        </div>
      </section>
    </div>
  )
}

export default LessonFastForwardStart
