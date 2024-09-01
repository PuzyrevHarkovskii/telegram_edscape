import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { IAnswers, ICorrects, IQuiz, IQuizData, ISteps, ITimer, MIN_SECONDS } from "../types/createQuizTypes";
import {
    AddQuizAnswerItemType,
    ChangeQuizAnswerItemType, ChangeQuizCardExpType, ChangeQuizCardSrcType, ChangeQuizCardTitleType,
    ChangeQuizCorrectItemType,
    ChangeQuizQuestionItemType,
    ChangeQuizSecondsType,
    ChangeQuizTimerType,
    ChangeQuizTypeType,
    RemoveQuizAnswerItemType,
    RemoveQuizItemType
} from "../../components/@types/createQuizTypes";
import { CHECKBOX_TYPE, RADIO_TYPE } from "../types/createCourseTypes";

const getQuizAnswer = (): IAnswers => {
    return {
        id: uuidv4(),
        answer: ""
    }
}

const getQuizCorrect = (id: string): ICorrects => {
    return {
        id: id
    }
}

const getQuizTimer = (): ITimer => {
    return {
        isTimer: false,
        seconds: MIN_SECONDS
    }
}

const getQuiz = (): IQuizData => {
    return {
        timer: getQuizTimer(),
        question: "",
        answers: [getQuizAnswer(), getQuizAnswer()],
        corrects: []
    }
}

const getSteps = (): ISteps => {
    return {
        id: uuidv4(),
        type: RADIO_TYPE,
        quiz: getQuiz()
    }
}

const initialState: IQuiz = {
    id: uuidv4(),
    card: {
        id: uuidv4(),
        isBuy: true,
        type: "quiz",
        src: "",
        title: "",
        exp: 0,
        questionCount: 1,
        price: null
    },
    steps: [getSteps()]
}


export const createQuizSlice = createSlice({
    name: 'createQuiz',
    initialState,
    reducers: {
        resetStateQuiz: (state) => {
            state.card = initialState.card
            state.steps = initialState.steps
        },
        changeQuizCardSrc: (state: IQuiz, action: PayloadAction<ChangeQuizCardSrcType>) => {
            state.card.src = action.payload.src
        },
        changeQuizCardTitle: (state: IQuiz, action: PayloadAction<ChangeQuizCardTitleType>) => {
            state.card.title = action.payload.title
        },
        changeQuizCardExp: (state: IQuiz, action: PayloadAction<ChangeQuizCardExpType>) => {
            state.card.exp = action.payload.exp
        },
        addQuizItem: (state: IQuiz) => {
            state.card.questionCount = state.steps.length + 1
            state.steps.push(getSteps())
        },
        removeQuizItem: (state: IQuiz, action: PayloadAction<RemoveQuizItemType>) => {
            state.card.questionCount = state.steps.length - 1
            state.steps = state.steps.filter(obj => obj.id !== action.payload.basicId)
        },
        changeQuizQuestionItem: (state: IQuiz, action: PayloadAction<ChangeQuizQuestionItemType>) => {
            const currentBlock = state.steps.find(obj => obj.id === action.payload.basicId)
            if (currentBlock) {
                currentBlock.quiz.question = action.payload.itemText
            }
        },
        addQuizAnswerItem: (state: IQuiz, action: PayloadAction<AddQuizAnswerItemType>) => {
            const currentBlock = state.steps.find(obj => obj.id === action.payload.basicId)
            if (currentBlock) {
                currentBlock.quiz.answers.push(getQuizAnswer())
            }
        },
        removeQuizAnswerItem: (state: IQuiz, action: PayloadAction<RemoveQuizAnswerItemType>) => {
            const currentBlock = state.steps.find(obj => obj.id === action.payload.basicId)
            if (currentBlock) {
                currentBlock.quiz.answers = currentBlock.quiz.answers.filter(obj => obj.id !== action.payload.itemId)
                currentBlock.quiz.corrects = currentBlock.quiz.corrects.filter(obj => obj.id !== action.payload.itemId)
            }
        },
        changeQuizAnswerItem: (state: IQuiz, action: PayloadAction<ChangeQuizAnswerItemType>) => {
            const currentBlock = state.steps.find(obj => obj.id === action.payload.basicId)
            if (currentBlock) {
                const currentAnswer = currentBlock.quiz.answers.find(obj => obj.id === action.payload.itemId)
                if (currentAnswer) {
                    currentAnswer.answer = action.payload.itemText
                }
            }
        },
        changeQuizCorrectItem: (state: IQuiz, action: PayloadAction<ChangeQuizCorrectItemType>) => {
            const currentBlock = state.steps.find(obj => obj.id === action.payload.basicId)
            if (action.payload.basicType === RADIO_TYPE && currentBlock) {
                currentBlock.quiz.corrects = [getQuizCorrect(action.payload.itemId)]
            }
            if (action.payload.basicType === CHECKBOX_TYPE && currentBlock) {
                const index = currentBlock.quiz.corrects.findIndex(obj => obj.id === action.payload.itemId)
                if (index !== -1) {
                    currentBlock.quiz.corrects = currentBlock.quiz.corrects.filter(obj => obj.id !== action.payload.itemId)
                } else {
                    currentBlock.quiz.corrects.push(getQuizCorrect(action.payload.itemId))
                }
            }
        },
        changeQuizType: (state: IQuiz, action: PayloadAction<ChangeQuizTypeType>) => {
            const currentBlock = state.steps.find(obj => obj.id === action.payload.basicId)
            if (currentBlock) {
                currentBlock.type = action.payload.basicType
                currentBlock.quiz.corrects = []
            }
        },
        changeQuizTimer: (state: IQuiz, action: PayloadAction<ChangeQuizTimerType>) => {
            const currentBlock = state.steps.find(obj => obj.id === action.payload.basicId)
            if (currentBlock) {
                currentBlock.quiz.timer.isTimer = !currentBlock.quiz.timer.isTimer
            }
        },
        changeQuizSeconds: (state: IQuiz, action: PayloadAction<ChangeQuizSecondsType>) => {
            const currentBlock = state.steps.find(obj => obj.id === action.payload.basicId)
            if (currentBlock) {
                currentBlock.quiz.timer.seconds = Number(action.payload.itemSeconds.replace(/\D/g, ""))
            }
        }
    }
})

export const {
    resetStateQuiz,
    changeQuizCardSrc,
    changeQuizCardTitle,
    changeQuizCardExp,
    addQuizItem,
    removeQuizItem,
    changeQuizQuestionItem,
    addQuizAnswerItem,
    removeQuizAnswerItem,
    changeQuizAnswerItem,
    changeQuizCorrectItem,
    changeQuizType,
    changeQuizTimer,
    changeQuizSeconds
} = createQuizSlice.actions
export default createQuizSlice.reducer