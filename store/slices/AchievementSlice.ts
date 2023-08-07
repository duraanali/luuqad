import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import BASE_URL from "@/utils/baseUrl"
import { HYDRATE } from "next-redux-wrapper"
import { addTokenToRequest } from "./Token"

interface ACHIEVEMENT {
  id: number
  user_id: number
  unit_id: number
  correct: number
  total: number
  created_at: Date
  updated_at: Date
}

export const achievements = createApi({
  reducerPath: "achievementApi",
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
    getAchievements: builder.query<ACHIEVEMENT[], void>({
      query: () => `/api/users/achievements`,
    }),
  }),
})

export const { useGetAchievementsQuery } = achievements
