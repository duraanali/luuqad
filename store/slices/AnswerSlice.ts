import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import BASE_URL from "@/utils/baseUrl"
import { HYDRATE } from "next-redux-wrapper"
import { addTokenToRequest } from "./Token"

interface ANSWER {
  id: number
  question_id: number
  answer: string
  is_correct: boolean
  avatar: string
  audio: string
  status: number
  created_at: Date
  updated_at: Date
}

export const answers = createApi({
  reducerPath: "answerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "same-origin",
    prepareHeaders: (headers, { getState }: any) => {
      return addTokenToRequest(headers, { getState })
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getAnswersForQuestion: builder.mutation<ANSWER[], number>({
      query: (question_id) => ({
        url: `/api/units/sections/questions/answers/${question_id}`,
        method: "POST",
      }),
    }),
  }),
})

export const { useGetAnswersForQuestionMutation } = answers
