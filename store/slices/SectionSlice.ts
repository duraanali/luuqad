import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import BASE_URL from "@/utils/baseUrl"
import { HYDRATE } from "next-redux-wrapper"
import { addTokenToRequest } from "./Token"

interface SECTION {
  id: number
  unit_id: number
  title: string
  avatar: string
  status: number
  created_at: string
  updated_at: string
}

interface RESULT {
  id: number
  user_id: number
  section_id: number
  question_id: number
  answer_id: number
  created_at: string
  updated_at: string
}

export const sections = createApi({
  reducerPath: "sectionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "same-origin",
    mode: 'no-cors',
    prepareHeaders: (headers, { getState }: any) => {
      return addTokenToRequest(headers, { getState })
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ["SECTION"],
  endpoints: (builder) => ({
    getSections: builder.query<SECTION[], void>({
      query: () => `/api/units/sections`,
      providesTags: ["SECTION"],
    }),

    addResult: builder.mutation<RESULT, any>({
      query: (body) => ({
        url: `/api/users/results/add_result`,
        method: "POST",
        body,
      }),
      // On success, fetch sections again to update the cache
      invalidatesTags: ["SECTION"],
    }),
  }),
})

export const { useGetSectionsQuery, useAddResultMutation } = sections
