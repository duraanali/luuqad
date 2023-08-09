import React from "react"
import { lessonProblem2 } from "./QuestionFakeData"
import ProgressBar from "./ProgressBar"
import CheckAnswer from "./CheckAnswer"
import QuitMessage from "./QuitMessage"
import womanPng from "../../../public/images/woman.png"
import Image from "next/image"

const QuestionWordBubble = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswers,
  setSelectedAnswers,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem2
  correctAnswerCount: number
  totalCorrectAnswersNeeded: number
  selectedAnswers: number[]
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>
  correctAnswerShown: boolean
  quitMessageShown: boolean
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>
  isAnswerCorrect: boolean
  onCheckAnswer: () => void
  onFinish: () => void
  onSkip: () => void
  hearts: number | null
}) => {
  const { question, correctAnswer, answerTiles } = problem

  return (
    <div className='flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0'>
      <div className='flex grow flex-col items-center gap-5'>
        <div className='w-full max-w-5xl sm:mt-8 sm:px-5'>
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            hearts={hearts}
          />
        </div>
        <section className='flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24'>
          <h1 className='mb-2 text-2xl font-bold sm:text-3xl'>
            Write this in English
          </h1>

          <div className='w-full'>
            <div className='flex items-center gap-2 px-2'>
              <Image src={womanPng} alt='' width={92} height={115} />
              <div className='relative ml-2 w-fit rounded-2xl border-2 border-gray-200 p-4'>
                {question}
                <div
                  className='absolute h-4 w-4 rotate-45 border-b-2 border-l-2 border-gray-200 bg-white'
                  style={{
                    top: "calc(50% - 8px)",
                    left: "-10px",
                  }}></div>
              </div>
            </div>

            <div className='flex min-h-[60px] flex-wrap gap-1 border-t-2 border-b-2 border-gray-200 py-1'>
              {selectedAnswers.map((i) => {
                return (
                  <button
                    key={i}
                    className='rounded-xl text-lg	font-medium px-4 py-2 border-2 border-b-4 border-gray-200 p-2 text-gray-700'
                    onClick={() => {
                      setSelectedAnswers((selectedAnswers) => {
                        return selectedAnswers.filter((x) => x !== i)
                      })
                    }}>
                    {answerTiles[i]}
                  </button>
                )
              })}
            </div>
          </div>
          <div className='flex flex-wrap justify-center gap-1'>
            {answerTiles.map((answerTile, i) => {
              return (
                <button
                  key={i}
                  className={
                    selectedAnswers.includes(i)
                      ? "rounded-xl border-2 px-4 py-2 border-b-4 border-gray-200 bg-gray-200 p-2 text-gray-200 text-lg	font-medium"
                      : "rounded-xl text-lg	font-medium	 border-2 px-4 py-2 border-b-4 border-gray-200 p-2 text-gray-700"
                  }
                  disabled={selectedAnswers.includes(i)}
                  onClick={() =>
                    setSelectedAnswers((selectedAnswers) => {
                      if (selectedAnswers.includes(i)) {
                        return selectedAnswers
                      }
                      return [...selectedAnswers, i]
                    })
                  }>
                  {answerTile}
                </button>
              )
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={correctAnswer.map((i) => answerTiles[i]).join(" ")}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswers.length > 0}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />

      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
    </div>
  )
}

export default QuestionWordBubble
