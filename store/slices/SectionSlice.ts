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

export const sections = createApi({
  reducerPath: "sectionApi",
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
    getSections: builder.query<SECTION[], void>({
      query: () => `/api/units/sections`,
    }),
  }),
})

export const { useGetSectionsQuery } = sections
