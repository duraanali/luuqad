import React from "react"
import Link from "next/link"
import {
  CloseSvg,
  LessonTopBarEmptyHeart,
  LessonTopBarHeart,
} from "@/components/SVGs"

const ProgressBar = ({
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  setQuitMessageShown,
  hearts,
}: {
  correctAnswerCount: number
  totalCorrectAnswersNeeded: number
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>
  hearts: null | number
}) => {
  return (
    <header className='flex items-center gap-4'>
      {correctAnswerCount === 0 ? (
        <Link href='/learn' className='text-gray-400'>
          <CloseSvg />
          <span className='sr-only'>Exit lesson</span>
        </Link>
      ) : (
        <button
          className='text-gray-400'
          onClick={() => setQuitMessageShown(true)}>
          <CloseSvg />
          <span className='sr-only'>Exit lesson</span>
        </button>
      )}
      <div
        className='h-4 grow rounded-full bg-gray-200'
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={correctAnswerCount / totalCorrectAnswersNeeded}>
        <div
          className={
            "h-full rounded-full bg-yellow-400 transition-all duration-700 " +
            (correctAnswerCount > 0 ? "px-2 pt-1 " : "")
          }
          style={{
            width: `${(correctAnswerCount / totalCorrectAnswersNeeded) * 100}%`,
          }}>
          <div className='h-[5px] w-full rounded-full bg-yellow-300'></div>
        </div>
      </div>
      {hearts !== null &&
        [1, 2, 3].map((heart) => {
          if (heart <= hearts) {
            return <LessonTopBarHeart key={heart} />
          }
          return <LessonTopBarEmptyHeart key={heart} />
        })}
    </header>
  )
}

export default ProgressBar
