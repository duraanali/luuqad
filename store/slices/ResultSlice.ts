import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import BASE_URL from "@/utils/baseUrl"
import { HYDRATE } from "next-redux-wrapper"
import { addTokenToRequest } from "./Token"

interface RESULT {
  id: number
  user_id: number
  section_id: number
  question_id: number
  answer_id: number
  created_at: string
  updated_at: string
}

export const results = createApi({
  reducerPath: "resultApi",
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
    getResults: builder.query<RESULT[], void>({
      query: () => `/api/users/results`,
    }),
    getResultsByUser: builder.query<any, number>({
      query: (user_id: number) => `/api/users/results/${user_id}`,
    }),

    addResult: builder.mutation<RESULT, any>({
      query: (body) => ({
        url: `/api/users/results/add_result`,
        method: "POST",
        body,
      }),
    }),
  }),
})

export const {
  useGetResultsQuery,
  useAddResultMutation,
  useGetResultsByUserQuery,
} = results
