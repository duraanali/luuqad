"use client"
import LessonComplete from "@/components/learn/quiz/LessonComplete"
import LessonFastForwardEndFail from "@/components/learn/quiz/LessonFastForwardEndFail"
import LessonFastForwardEndPass from "@/components/learn/quiz/LessonFastForwardEndPass"
import LessonFastForwardStart from "@/components/learn/quiz/LessonFastForwardStart"
import MultipleChoiceQuestion from "@/components/learn/quiz/MultipleChoiceQuestion"
import {
  MULTIPLE_CHOICE,
  WORD_BUBBLE,
} from "@/components/learn/quiz/QuestionFakeData"
import QuestionWordBubble from "@/components/learn/quiz/QuestionWordBubble"
import { useGetQuestionsBySectionQuery } from "@/store/slices/QuestionSlice"
import { useGetCurrentUserQuery } from "@/store/slices/UserSlice"
import arrayShuffle from "array-shuffle"
import type { NextPage } from "next"
import Image from "next/image"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const numbersEqual = (a: readonly number[], b: readonly number[]): boolean => {
  return a.length === b.length && a.every((_, i) => a[i] === b[i])
}

// This component displays the questions for a section
const Question: NextPage = () => {
  const searchParams = useSearchParams()
  const params = useParams()

  // This code gets the current user, and the questions for the section
  const { data: user } = useGetCurrentUserQuery<any>()
  const { data } = useGetQuestionsBySectionQuery<any>(Number(params.section_id))

  // This code formats the questions for the section
  const [lessonProblems, setFormattedQuestions] = useState<any[]>([])
  const [totalCorrectAnswersNeeded, setTotalCorrectAnswersNeeded] = useState(0)

  // This useEffect runs when the questions for the section are loaded and formats them
  useEffect(() => {
    if (data) {
      const randomized = arrayShuffle(data.questions)
      if (randomized) {
        const formattedData = randomized.map((question: any) => {
          if (question.question_type_id === 1) {
            const answers = arrayShuffle(
              question.answers.map((answer: any) => ({
                id: answer.id,
                name: answer.answer,
                is_correct: answer.is_correct,
              })),
            )
            return {
              type: "MULTIPLE_CHOICE",
              id: question.id,
              points: question.points,
              question: question.question,
              answers: answers,
              // correct answer is the index of "is_correct" is true
              correctAnswer: answers.findIndex(
                (answer: any) => answer.is_correct,
              ),
            }
          } else if (question.question_type_id === 3) {
            const correctAnswerIndices: number[] = []
            question.answers.forEach((answer: any, index: number) => {
              if (answer.is_correct) {
                correctAnswerIndices.push(index)
              }
            })

            return {
              type: "WORD_BUBBLE",
              question_id: question.id,
              points: question.points,
              question: question.question,
              answerTiles: question.answers.map((answer: any) => answer.answer),
              correctAnswer: correctAnswerIndices,
            }
          }
          return null // Added to handle scenarios where question_type_id is not 1 or 3
        })

        setFormattedQuestions(
          formattedData.filter((question: any) => question !== null),
        ) // Filter out null values
        setTotalCorrectAnswersNeeded(formattedData.length)
      }
    }
  }, [data])

  const [lessonProblem, setLessonProblem] = useState(0)
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0)
  const [incorrectAnswerCount, setIncorrectAnswerCount] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null)
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false)
  const [quitMessageShown, setQuitMessageShown] = useState(false)

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])

  const startTime = useRef(Date.now())
  const endTime = useRef(startTime.current + 1000 * 60 * 3 + 1000 * 33)

  const [questionResults, setQuestionResults] = useState<any[]>([])
  const [reviewLessonShown, setReviewLessonShown] = useState(false)

  const problem = lessonProblems[lessonProblem]

  const fastForward = searchParams.get("fast-forward")
  const [isStartingLesson, setIsStartingLesson] = useState(true)
  const hearts =
    searchParams.get("fast-forward") && !isNaN(Number(fastForward))
      ? 3 - incorrectAnswerCount
      : null

  const correctAnswer = problem?.correctAnswer
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
        points: problem.points,
        question_id: problem.id,
        question: problem.question,
        // get answer id for both your response and correct response
        yourResponse:
          problem.type === MULTIPLE_CHOICE
            ? problem.answers[selectedAnswer ?? 0]?.name ?? ""
            : selectedAnswers.map((i) => problem.answerTiles[i]).join(" "),
        correctResponse:
          problem.type === MULTIPLE_CHOICE
            ? problem.answers[problem.correctAnswer].name
            : problem.correctAnswer
                .map((i: any) => problem.answerTiles[i])
                .join(" "),
        yourResponseAnswerIds:
          problem.type === MULTIPLE_CHOICE
            ? problem.answers[selectedAnswer ?? 0]?.id ?? ""
            : selectedAnswers.map((i) => problem.answerTiles[i]),
        correctResponseAnswerIds:
          problem.type === MULTIPLE_CHOICE
            ? problem.answers[problem.correctAnswer].id
            : problem.correctAnswer.map((i: any) => problem.answerTiles[i]),
      },
    ])
  }

  if (lessonProblems.length === 0) {
    return (
      <div className='flex min-h-screen items-center'>
        <div className='flex grow flex-col items-center gap-5'>
          <Image
            src='/images/world-book-day.gif'
            width={100}
            height={100}
            alt='Picture of the author'
          />
          <p>Aqoon la&apos;aan waa iftiin la&apos;aan</p>
        </div>
      </div>
    )
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
        section_id={params.section_id}
        user_id={user?.user?.id}
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

  switch (problem?.type) {
    case MULTIPLE_CHOICE: {
      return (
        <>
          {problem ? (
            <MultipleChoiceQuestion
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
          ) : (
            <div className='flex min-h-screen items-center'>
              <div className='flex grow flex-col items-center gap-5'>
                <Image
                  src='/images/world-book-day.gif'
                  width={100}
                  height={100}
                  alt='Picture of the author'
                />
              </div>
            </div>
          )}
        </>
      )
    }

    case WORD_BUBBLE: {
      return (
        <>
          {problem ? (
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
          ) : (
            <div className='flex min-h-screen items-center'>
              <div className='flex grow flex-col items-center gap-5'>
                <Image
                  src='/images/world-book-day.gif'
                  width={100}
                  height={100}
                  alt='Picture of the author'
                />
              </div>
            </div>
          )}
        </>
      )
    }
  }
}

export default Question
