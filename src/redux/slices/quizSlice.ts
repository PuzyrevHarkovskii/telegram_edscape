import {createSlice} from "@reduxjs/toolkit";
import {IQuizResultSlice, IQuizSlice, IQuizStatusAnswerSlice, IQuizTimerSlice} from "../types/quizTypes";

const getQuizResult = (): IQuizResultSlice => {
    return {
        sessionTime: 0,
        correct: 0,
        incorrect: 0
    }
}

const getQuizStatusAnswer = (): IQuizStatusAnswerSlice => {
    return {
        chooseAnswers: [],
        isChooseAnswer: false
    }
}

const getQuizTimer = (): IQuizTimerSlice => {
    return {
        isPause: false,
        isRestart: true
    }
}

const initialState: IQuizSlice = {
    stepIndex: 0,
    timer: getQuizTimer(),
    disabledButton: false,
    result: getQuizResult(),
    statusChoose: getQuizStatusAnswer()
}

export const quizSlice = createSlice({
    name: 'quizSlice',
    initialState,
    reducers: {
        changeStep: (state, action) => {
            state.stepIndex = action.payload.stepIndex
            state.disabledButton = false
            state.statusChoose.chooseAnswers = []
            state.timer.isPause = false
        },
        changeIsPause: (state, action) => {
            state.timer.isPause = action.payload.isPause
        },
        changeIsRestart: (state, action) => {
            state.timer.isRestart = action.payload.isRestart
        },
        changeStatusChoose: (state, action) => {
            state.statusChoose.chooseAnswers.push(action.payload.chooseAnswer)
            if (action.payload.corrects.includes(action.payload.chooseAnswer)) {
                state.result.correct = state.result.correct + 1
            } else {
                state.result.incorrect = state.result.incorrect + 1
            }
        },
        changeDisabledButton: (state, action) => {
            state.disabledButton = action.payload.disabledButton
        },
        changeResultSessionTime: (state, action) => {
            state.result.sessionTime = state.result.sessionTime + action.payload.sessionTime
        },
        changeResultCorrect: (state, action) => {
            state.result.correct = action.payload.correct
        },
        changeResultIncorrect: (state, action) => {
            state.result.incorrect = action.payload.incorrect
        },
    }
})

export const {
    changeStep,
    changeIsPause,
    changeIsRestart,
    changeStatusChoose,
    changeDisabledButton,
    changeResultSessionTime,
    changeResultCorrect,
    changeResultIncorrect
} = quizSlice.actions
export default quizSlice.reducer