import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import BASE_URL from "@/utils/baseUrl"
import { HYDRATE } from "next-redux-wrapper"
import { addTokenToRequest } from "./Token"

interface QUESTION {
  id: number
  section_id: number
  question_type_id: number
  title: string
  question: string
  avatar: string
  points: number
  audio: string
  status: number
  created_at: string
  updated_at: string
}

export const questions = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
    getQuestions: builder.query<QUESTION[], void>({
      query: () => `/api/units/sections/questions`,
    }),
  }),
})

export const { useGetQuestionsQuery } = questions
