import {combineReducers, configureStore} from "@reduxjs/toolkit";
import createQuizSlice from "./slices/createQuizSlice";
import createCourseSlice from "./slices/createCourseSlice";
import quizSlice from "./slices/quizSlice";
import {cardAPI} from "./services/cardService";
import { createQuizAPI } from "./services/createQuizService";


const rootReducer = combineReducers({
    createQuiz: createQuizSlice,
    createCourse: createCourseSlice,
    quiz: quizSlice,
    [cardAPI.reducerPath]: cardAPI.reducer,
    [createQuizAPI.reducerPath]: createQuizAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(cardAPI.middleware, createQuizAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']