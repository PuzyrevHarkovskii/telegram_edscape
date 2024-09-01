import {ICardGeneral} from "../../components/@types/cardItemTypes";

export const MIN_SECONDS: number = 5

export type IQuizType = "radio" | "checkbox"

export interface ICorrects {
    id: string
}

export interface IAnswers {
    id: string
    answer: string
}

export interface ITimer {
    isTimer: boolean
    seconds: number
}

export interface IQuizData {
    timer: ITimer
    question: string
    answers: IAnswers[]
    corrects: ICorrects[]
}

export interface ISteps {
    id: string
    type: IQuizType
    quiz: IQuizData
}

export interface IQuiz {
    id: string
    card: ICardGeneral
    steps: ISteps[]
}