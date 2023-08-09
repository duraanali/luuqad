"use client"
import type { NextPage } from "next"
import React, { useRef, useState } from "react"
import ProgressBar from "@/components/learn/quiz/ProgressBar"
import { useSearchParams } from "next/navigation"
import LessonComplete from "@/components/learn/quiz/LessonComplete"
import QuitMessage from "@/components/learn/quiz/QuitMessage"
import CheckAnswer from "@/components/learn/quiz/CheckAnswer"
import LessonFastForwardEndFail from "@/components/learn/quiz/LessonFastForwardEndFail"
import LessonFastForwardEndPass from "@/components/learn/quiz/LessonFastForwardEndPass"
import LessonFastForwardStart from "@/components/learn/quiz/LessonFastForwardStart"
import QuestionWordBubble from "@/components/learn/quiz/QuestionWordBubble"
import {
  lessonProblems,
  lessonProblem1,
  MULTIPLE_CHOICE,
  WORD_BUBBLE,
} from "@/components/learn/quiz/QuestionFakeData"

const numbersEqual = (a: readonly number[], b: readonly number[]): boolean => {
  return a.length === b.length && a.every((_, i) => a[i] === b[i])
}

type QuestionResult = {
  question: string
  yourResponse: string
  correctResponse: string
}

const Lesson: NextPage = () => {
  const searchParams = useSearchParams()

  const [lessonProblem, setLessonProblem] = useState(0)
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null)
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false)
  const [quitMessageShown, setQuitMessageShown] = useState(false)

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])

  const startTime = useRef(Date.now())
  const endTime = useRef(startTime.current + 1000 * 60 * 3 + 1000 * 33)

  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([])
  const [reviewLessonShown, setReviewLessonShown] = useState(false)

  const problem = lessonProblems[lessonProblem] ?? lessonProblem1

  const totalCorrectAnswersNeeded = 2
  const fastForward = searchParams.get("fast-forward")
  const [isStartingLesson, setIsStartingLesson] = useState(true)
  const hearts =
    searchParams.get("fast-forward") && !isNaN(Number(fastForward))
      ? 3 - incorrectAnswerCount
      : null

  const { correctAnswer } = problem
  const isAnswerCorrect = Array.isArray(correctAnswer)
    ? numbersEqual(selectedAnswers, correctAnswer)
    : selectedAnswer === correctAnswer

  const onCheckAnswer = () => {
    setCorrectAnswerShown(true)
    if (isAnswerCorrect) {
      const correctAnswerSound = "/assets/sounds/correct_answer.mp3"
      const audio = new Audio(correctAnswerSound)
      audio.play()
      setCorrectAnswerCount((x) => x + 1)
    } else {
      const correctAnswerSound = "/assets/sounds/wrong_answer.mp3"
      const audio = new Audio(correctAnswerSound)
      audio.play()
      setIncorrectAnswerCount((x) => x + 1)
    }
    setQuestionResults((questionResults) => [
      ...questionResults,
      {
        question: problem.question,
        yourResponse:
          problem.type === MULTIPLE_CHOICE
            ? problem.answers[selectedAnswer ?? 0]?.name ?? ""
            : selectedAnswers.map((i) => problem.answerTiles[i]).join(" "),
        correctResponse:
          problem.type === MULTIPLE_CHOICE
            ? problem.answers[problem.correctAnswer].name
            : problem.correctAnswer
                .map((i) => problem.answerTiles[i])
                .join(" "),
      },
    ])
  }

  const onFinish = () => {
    setSelectedAnswer(null)
    setSelectedAnswers([])
    setCorrectAnswerShown(false)
    setLessonProblem((x) => (x + 1) % lessonProblems.length)
    endTime.current = Date.now()
  }

  const onSkip = () => {
    setSelectedAnswer(null)
    setCorrectAnswerShown(true)
  }

  const unitNumber = Number(fastForward)

  if (hearts !== null && hearts < 0 && !correctAnswerShown) {
    return (
      <LessonFastForwardEndFail
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    )
  }

  if (
    hearts !== null &&
    hearts >= 0 &&
    !correctAnswerShown &&
    correctAnswerCount >= totalCorrectAnswersNeeded
  ) {
    return (
      <LessonFastForwardEndPass
        unitNumber={unitNumber}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    )
  }

  if (hearts !== null && isStartingLesson) {
    return (
      <LessonFastForwardStart
        unitNumber={unitNumber}
        setIsStartingLesson={setIsStartingLesson}
      />
    )
  }

  if (correctAnswerCount >= totalCorrectAnswersNeeded && !correctAnswerShown) {
    return (
      <LessonComplete
        correctAnswerCount={correctAnswerCount}
        incorrectAnswerCount={incorrectAnswerCount}
        startTime={startTime}
        endTime={endTime}
        reviewLessonShown={reviewLessonShown}
        setReviewLessonShown={setReviewLessonShown}
        questionResults={questionResults}
      />
    )
  }

  switch (problem.type) {
    case MULTIPLE_CHOICE: {
      return (
        <ProblemSelect1Of3
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      )
    }

    case WORD_BUBBLE: {
      return (
        <QuestionWordBubble
          problem={problem}
          correctAnswerCount={correctAnswerCount}
          totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          quitMessageShown={quitMessageShown}
          correctAnswerShown={correctAnswerShown}
          setQuitMessageShown={setQuitMessageShown}
          isAnswerCorrect={isAnswerCorrect}
          onCheckAnswer={onCheckAnswer}
          onFinish={onFinish}
          onSkip={onSkip}
          hearts={hearts}
        />
      )
    }
  }
}

export default Lesson

const ProblemSelect1Of3 = ({
  problem,
  correctAnswerCount,
  totalCorrectAnswersNeeded,
  selectedAnswer,
  setSelectedAnswer,
  quitMessageShown,
  correctAnswerShown,
  setQuitMessageShown,
  isAnswerCorrect,
  onCheckAnswer,
  onFinish,
  onSkip,
  hearts,
}: {
  problem: typeof lessonProblem1
  correctAnswerCount: number
  totalCorrectAnswersNeeded: number
  selectedAnswer: number | null
  setSelectedAnswer: React.Dispatch<React.SetStateAction<number | null>>
  correctAnswerShown: boolean
  quitMessageShown: boolean
  setQuitMessageShown: React.Dispatch<React.SetStateAction<boolean>>
  isAnswerCorrect: boolean
  onCheckAnswer: () => void
  onFinish: () => void
  onSkip: () => void
  hearts: number | null
}) => {
  const { question, answers, correctAnswer } = problem

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
        <section className='flex max-w-2xl grow flex-col gap-5 self-center sm:items-center sm:justify-center sm:gap-24 sm:px-5'>
          <h1 className='self-start text-2xl font-bold sm:text-3xl'>
            {question}
          </h1>
          <div
            className='grid grid-cols-2 gap-2 sm:grid-cols-3'
            role='radiogroup'>
            {answers.map((answer, i) => {
              return (
                <div
                  key={i}
                  className={
                    i === selectedAnswer
                      ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-blue-400"
                      : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 hover:bg-gray-100"
                  }
                  role='radio'
                  aria-checked={i === selectedAnswer}
                  tabIndex={0}
                  onClick={() => setSelectedAnswer(i)}>
                  {answer.icon}
                  <h2 className='text-center'>{answer.name}</h2>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <CheckAnswer
        correctAnswer={answers[correctAnswer].name}
        correctAnswerShown={correctAnswerShown}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerSelected={selectedAnswer !== null}
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
