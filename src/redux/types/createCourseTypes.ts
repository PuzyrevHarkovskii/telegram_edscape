import {IAnswers, ICorrects, IQuizData, ITimer} from "./createQuizTypes";
import {ICardGeneral} from "../../components/@types/cardItemTypes";
import {ICard} from "../services/cardService";


export const TITLE_TYPE = "title"
export const TEXT_TYPE = "text"
export const IMAGE_TYPE = "image"
export const VIDEO_TYPE = "video"
export const RADIO_TYPE = "radio"
export const CHECKBOX_TYPE = "checkbox"
export const QUESTION_TYPE = "question"
export const ANSWER_TYPE = "answer"

export const THEORY_TYPE = "theory"
export const QUIZ_TYPE = "quiz"
export const COURSE_TYPE = "course"

export type IItemType = "title" | "text" | "image" | "video" | "radio" | "checkbox" | "question" | "answer"
export type IMainType = "theory" | "quiz"

export interface IItem {
    id: string,
    type: IItemType
    content: string
    quiz: IQuizData | null
}

export interface IItems {
    id: string
    type: IMainType
    item: IItem[]
}

export interface IPrograms {
    id: string
    main: IItems[]
}

export interface ICourse {
    id: string,
    card: ICard
    about: IItem[],
    programs: IPrograms[]
}