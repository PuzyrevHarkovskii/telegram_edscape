import { IQuizType } from "../../redux/types/createQuizTypes";

export type ResetStateQuizType = {}

export type ChangeQuizCardSrcType = {
    src: string
}

export type ChangeQuizCardTitleType = {
    title: string
}

export type ChangeQuizCardExpType = {
    exp: number
}

export type AddQuizItemType = {}

export type RemoveQuizItemType = {
    basicId: string
}

export type ChangeQuizQuestionItemType = {
    basicId: string
    itemText: string
}

export type AddQuizAnswerItemType = {
    basicId: string
}

export type RemoveQuizAnswerItemType = {
    basicId: string
    itemId: string
}

export type ChangeQuizAnswerItemType = {
    basicId: string
    itemId: string
    itemText: string
}

export type ChangeQuizCorrectItemType = {
    basicId: string
    itemId: string
    basicType: IQuizType
}

export type ChangeQuizTypeType = {
    basicId: string
    basicType: IQuizType
}

export type ChangeQuizTimerType = {
    basicId: string
}

export type ChangeQuizSecondsType = {
    basicId: string
    itemSeconds: string
}

export enum CreateQuizOperationType {
    ResetStateQuizType = "ResetStateQuizType",
    ChangeQuizCardSrc = "ChangeQuizCardSrc",
    ChangeQuizCardTitle = "ChangeQuizCardTitle",
    ChangeQuizCardExp = "ChangeQuizCardExp",
    AddQuizItem = 'AddQuizItem',
    RemoveQuizItem = 'RemoveQuizItem',
    ChangeQuizQuestionItem = 'ChangeQuizQuestionItem',
    AddQuizAnswerItem = 'AddQuizAnswerItem',
    RemoveQuizAnswerItem = 'RemoveQuizAnswerItem',
    ChangeQuizAnswerItem = 'ChangeQuizAnswerItem',
    ChangeQuizCorrectItem = 'ChangeQuizCorrectItem',
    ChangeQuizType = 'ChangeQuizType',
    ChangeQuizTimer = 'ChangeQuizTimer',
    ChangeQuizSeconds = 'ChangeQuizSeconds'
    // Продолжение ...
    // AddBlockContentItem = 'addBlockContentItem',
}

export type HandleCreateQuizOperationType =
    | { operationType: CreateQuizOperationType.ResetStateQuizType, args: ResetStateQuizType }
    | { operationType: CreateQuizOperationType.ChangeQuizCardSrc, args: ChangeQuizCardSrcType }
    | { operationType: CreateQuizOperationType.ChangeQuizCardTitle, args: ChangeQuizCardTitleType }
    | { operationType: CreateQuizOperationType.ChangeQuizCardExp, args: ChangeQuizCardExpType }
    | { operationType: CreateQuizOperationType.AddQuizItem, args: AddQuizItemType }
    | { operationType: CreateQuizOperationType.RemoveQuizItem, args: RemoveQuizItemType }
    | { operationType: CreateQuizOperationType.ChangeQuizQuestionItem, args: ChangeQuizQuestionItemType }
    | { operationType: CreateQuizOperationType.AddQuizAnswerItem, args: AddQuizAnswerItemType }
    | { operationType: CreateQuizOperationType.RemoveQuizAnswerItem, args: RemoveQuizAnswerItemType }
    | { operationType: CreateQuizOperationType.ChangeQuizAnswerItem, args: ChangeQuizAnswerItemType }
    | { operationType: CreateQuizOperationType.ChangeQuizCorrectItem, args: ChangeQuizCorrectItemType }
    | { operationType: CreateQuizOperationType.ChangeQuizType, args: ChangeQuizTypeType }
    | { operationType: CreateQuizOperationType.ChangeQuizTimer, args: ChangeQuizTimerType }
    | { operationType: CreateQuizOperationType.ChangeQuizSeconds, args: ChangeQuizSecondsType }
// Продолжение ...
// | { operationType: OperationType, args: AddBlockContentItemArgs };