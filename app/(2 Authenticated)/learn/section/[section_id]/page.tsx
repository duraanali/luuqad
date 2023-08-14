"use client"
import type { NextPage } from "next"
import React, { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import LessonComplete from "@/components/learn/quiz/LessonComplete"
import LessonFastForwardEndFail from "@/components/learn/quiz/LessonFastForwardEndFail"
import LessonFastForwardEndPass from "@/components/learn/quiz/LessonFastForwardEndPass"
import LessonFastForwardStart from "@/components/learn/quiz/LessonFastForwardStart"
import { MULTIPLE_CHOICE } from "@/components/learn/quiz/QuestionFakeData"
import Image from "next/image"
import MultipleChoiceQuestion from "@/components/learn/quiz/MultipleChoiceQuestion"
import { useParams } from "next/navigation"
import { useGetQuestionsBySectionQuery } from "@/store/slices/QuestionSlice"
import { useGetCurrentUserQuery } from "@/store/slices/UserSlice"

const numbersEqual = (a: readonly number[], b: readonly number[]): boolean => {
  return a.length === b.length && a.every((_, i) => a[i] === b[i])
}

const Question: NextPage = () => {
  const searchParams = useSearchParams()
  const params = useParams()

  const { data: user } = useGetCurrentUserQuery<any>()
  const { data } = useGetQuestionsBySectionQuery<any>(Number(params.section_id))
  const [lessonProblems, setFormattedQuestions] = useState<any[]>([])
  const [totalCorrectAnswersNeeded, setTotalCorrectAnswersNeeded] = useState(0)
  useEffect(() => {
    if (data) {
      const formattedData = data.questions.map((question: any) => ({
        type: "MULTIPLE_CHOICE",
        id: question.id,
        points: question.points,
        question: question.question,
        answers: question.answers.map((answer: any) => ({
          id: answer.id,
          name: answer.answer,
        })),
        correctAnswer: question.answers.findIndex(
          (answer: any) => answer.is_correct,
        ),
      }))

      setFormattedQuestions(formattedData)
      setTotalCorrectAnswersNeeded(formattedData.length)
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
        user_id={user?.user.id}
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

  // case WORD_BUBBLE: {
  //   return (
  //     <QuestionWordBubble
  //       problem={problem}
  //       correctAnswerCount={correctAnswerCount}
  //       totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
  //       selectedAnswers={selectedAnswers}
  //       setSelectedAnswers={setSelectedAnswers}
  //       quitMessageShown={quitMessageShown}
  //       correctAnswerShown={correctAnswerShown}
  //       setQuitMessageShown={setQuitMessageShown}
  //       isAnswerCorrect={isAnswerCorrect}
  //       onCheckAnswer={onCheckAnswer}
  //       onFinish={onFinish}
  //       onSkip={onSkip}
  //       hearts={hearts}
  //     />
  //   )
  // }
}

export default Question
