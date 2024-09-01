export interface ICardGeneral {
    id: string,
    isBuy: boolean
    type: "quiz" | "course"
    src: string
    title: string
    exp: number
    questionCount: number | null
    price: number | null
}