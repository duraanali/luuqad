import { configureStore } from "@reduxjs/toolkit"
import { units } from "./slices/UnitSlice"
import { sections } from "./slices/SectionSlice"
import { questions } from "./slices/QuestionSlice"
import { achievements } from "./slices/AchievementSlice"
import { user } from "./slices/UserSlice"
import { answers } from "./slices/AnswerSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: {
    [units.reducerPath]: units.reducer,
    [sections.reducerPath]: sections.reducer,
    [questions.reducerPath]: questions.reducer,
    [achievements.reducerPath]: achievements.reducer,
    [user.reducerPath]: user.reducer,
    [answers.reducerPath]: answers.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
      .concat(units.middleware)
      .concat(sections.middleware)
      .concat(questions.middleware)
      .concat(achievements.middleware)
      .concat(user.middleware)
      .concat(answers.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
