import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import BASE_URL from "@/utils/baseUrl"
import { HYDRATE } from "next-redux-wrapper"
import { addTokenToRequest } from "./Token"

interface USER {
  id: number
  name: string
  email: string
  image: string
  role: string
  created_at: Date
  updated_at: Date
}

export const user = createApi({
  reducerPath: "userApi",
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
  tagTypes: ["USER"],
  endpoints: (builder) => ({

    getCurrentUser: builder.query<USER[], void>({
      query: () => `/api/users/current_user`,
      providesTags: ["USER"],
    }),

    updateUser: builder.mutation<USER, Partial<USER>>({
      query: (body) => ({
        url: `/api/users/update`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["USER"],
    }),

  }),
})

export const { useGetCurrentUserQuery, useUpdateUserMutation } = user
