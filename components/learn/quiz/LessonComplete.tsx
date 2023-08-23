import { useAddPointsMutation } from "@/store/slices/PointSlice"
import { useAddResultMutation } from "@/store/slices/SectionSlice"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import Link from "next/link"
import React from "react"

import ReviewLesson from "./ReviewLesson"

type QuestionResult = {
  points: unknown
  question_id: number
  yourResponseAnswerIds: number
  correctResponseAnswerIds: number
  question: string
  yourResponse: string
  correctResponse: string
}

const LessonComplete = ({
  section_id,
  user_id,
  correctAnswerCount,
  incorrectAnswerCount,
  startTime,
  endTime,
  reviewLessonShown,
  setReviewLessonShown,
  questionResults,
}: {
  section_id: string | string[]
  user_id: number
  correctAnswerCount: number
  incorrectAnswerCount: number
  startTime: React.MutableRefObject<number>
  endTime: React.MutableRefObject<number>
  reviewLessonShown: boolean
  setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>
  questionResults: QuestionResult[]
}) => {
  const formatTime = (timeMs: number): string => {
    const seconds = Math.floor(timeMs / 1000) % 60
    const minutes = Math.floor(timeMs / 1000 / 60) % 60
    const hours = Math.floor(timeMs / 1000 / 60 / 60)
    if (hours === 0)
      return [minutes, seconds]
        .map((x) => x.toString().padStart(2, "0"))
        .join(":")
    return [hours, minutes, seconds]
      .map((x) => x.toString().padStart(2, "0"))
      .join(":")
  }

  const [addPoints] = useAddPointsMutation()
  const [addResult] = useAddResultMutation()

  const recordResults = async () => {
    const keyCookie = (new Date().getTime() + 1).toString()
    setCookie(keyCookie, new Date().getTime())
    for (const questionResult of questionResults) {
      addResult({
        section_id: Number(section_id),
        user_id,
        question_id: questionResult.question_id,
        answer_id: questionResult.yourResponseAnswerIds,
      })
    }
    addPoints({
      time: getCookie(keyCookie),
      pointsSubmitted: correctAnswerCount * 2,
    })
    const times = setTimeout(() => {
      deleteCookie(keyCookie)
      clearTimeout(times)
    }, 1800)
  }

  return (
    <div className='flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0'>
      <div className='flex grow flex-col items-center justify-center gap-8 font-bold'>
        <h1 className='text-center text-3xl text-yellow-400'>
          Section Complete
        </h1>
        <div className='flex flex-wrap justify-center gap-5'>
          <div className='min-w-[110px] rounded-xl border-2 border-yellow-400 bg-yellow-400'>
            <h2 className='py-1 text-center text-white'>Corrected</h2>
            <div className='flex justify-center rounded-xl bg-white py-4 text-yellow-400'>
              {correctAnswerCount}
            </div>
          </div>
          <div className='min-w-[110px] rounded-xl border-2 border-slate-400 bg-slate-400'>
            <h2 className='py-1 text-center text-white'>Points Gained</h2>
            <div className='flex justify-center rounded-xl bg-white py-4 text-slate-400'>
              {correctAnswerCount * 2}
            </div>
          </div>
          <div className='min-w-[110px] rounded-xl border-2 border-blue-400 bg-blue-400'>
            <h2 className='py-1 text-center text-white'>Committed</h2>
            <div className='flex justify-center rounded-xl bg-white py-4 text-blue-400'>
              {formatTime(endTime.current - startTime.current)}
            </div>
          </div>
          <div className='min-w-[110px] rounded-xl border-2 border-green-400 bg-green-400'>
            <h2 className='py-1 text-center text-white'>
              {correctAnswerCount /
                (correctAnswerCount + incorrectAnswerCount) >
              0.8
                ? "Amazing"
                : correctAnswerCount /
                    (correctAnswerCount + incorrectAnswerCount) >
                  0.5
                ? "Good"
                : "Try Again"}
            </h2>
            <div className='flex justify-center rounded-xl bg-white py-4 text-green-400'>
              {Math.round(
                (correctAnswerCount /
                  (correctAnswerCount + incorrectAnswerCount)) *
                  100,
              )}
              %
            </div>
          </div>
        </div>
      </div>
      <section className='border-gray-200 sm:border-t-2 sm:p-10'>
        <div className='mx-auto flex max-w-5xl sm:justify-between'>
          <button
            className='hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit'
            onClick={() => setReviewLessonShown(true)}>
            Review lesson
          </button>
          <Link
            className={
              "flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
            href='/learn'
            onClick={recordResults}
            //   increaseXp(correctAnswerCount);
            //   addToday();
            //   increaseLingots(isPractice ? 0 : 1);
            //   if (!isPractice) {
            //     increaseLessonsCompleted();
            //   }
            // }}
          >
            Continue
          </Link>
        </div>
      </section>
      <ReviewLesson
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    </div>
  )
}

export default LessonComplete
