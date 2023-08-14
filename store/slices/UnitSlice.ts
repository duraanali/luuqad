import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import BASE_URL from "@/utils/baseUrl"
import { HYDRATE } from "next-redux-wrapper"
import { addTokenToRequest } from "./Token"

interface Unit {
  id: number
  title: string
  description: string
  status: number
  created_at: string
  updated_at: string
}

export const units = createApi({
  reducerPath: "unitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "same-origin",
    prepareHeaders: (headers, { getState }: any) => {
      console.log("headers", headers)
      return addTokenToRequest(headers, { getState })
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getUnits: builder.query<Unit[], void>({
      query: () => `/api/units`,
    }),
  }),
})

export const { useGetUnitsQuery } = units
