import BASE_URL from "@/utils/baseUrl"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { HYDRATE } from "next-redux-wrapper"
import { addTokenToRequest } from "./Token"

interface POINT {
  time: any
  pointsSubmitted: number
}

export const points = createApi({
  reducerPath: "pointApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "same-origin",
    prepareHeaders: (headers, { getState }: any) => {
      return addTokenToRequest(headers, { getState })
    },
  }),
  keepUnusedDataFor: 30,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ["POINT"],
  endpoints: (builder) => ({
    getPoints: builder.query<any, void>({
      query: () => `/api/users/points`,
      providesTags: ["POINT"],
    }),
    addPoints: builder.mutation<POINT, POINT>({
      query: (body) => ({
        url: `/api/users/points/add_points`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["POINT"],
    }),
  }),
})

export const { useGetPointsQuery, useAddPointsMutation } = points
