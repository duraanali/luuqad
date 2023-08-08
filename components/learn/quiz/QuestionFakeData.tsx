import { AppleSvg, BoySvg, WomanSvg } from "@/components/SVGs"

export const MULTIPLE_CHOICE = "MULTIPLE_CHOICE"
export const WORD_BUBBLE = "WORD_BUBBLE"

export const lessonProblem1 = {
  type: MULTIPLE_CHOICE,
  question: `Kuwaan Midkee Tufaax ah?`,
  answers: [
    { icon: <AppleSvg />, name: "la manzana" },
    { icon: <BoySvg />, name: "el niño" },
    { icon: <WomanSvg />, name: "la mujer" },
  ],
  correctAnswer: 0,
} as const

export const lessonProblem2 = {
  type: WORD_BUBBLE,
  question: "El niño",
  answerTiles: ["woman", "milk", "water", "I", "The", "boy"],
  correctAnswer: [4, 5],
} as const

export const lessonProblems = [lessonProblem1, lessonProblem2]
