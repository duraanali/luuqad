import { configureStore } from "@reduxjs/toolkit"
import { units } from "./slices/UnitSlice"
import { sections } from "./slices/SectionSlice"
import { questions } from "./slices/QuestionSlice"
import { results } from "./slices/ResultSlice"
import { user } from "./slices/UserSlice"
import { answers } from "./slices/AnswerSlice"
import { points } from "./slices/PointSlice"
import { leaderboard } from "./slices/LeaderBoardSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: {
    [units.reducerPath]: units.reducer,
    [sections.reducerPath]: sections.reducer,
    [questions.reducerPath]: questions.reducer,
    [results.reducerPath]: results.reducer,
    [user.reducerPath]: user.reducer,
    [answers.reducerPath]: answers.reducer,
    [points.reducerPath]: points.reducer,
    [leaderboard.reducerPath]: leaderboard.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat(units.middleware)
      .concat(sections.middleware)
      .concat(questions.middleware)
      .concat(results.middleware)
      .concat(user.middleware)
      .concat(answers.middleware)
      .concat(points.middleware)
      .concat(leaderboard.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
