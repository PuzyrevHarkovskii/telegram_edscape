import {IItemType} from "../../redux/types/createCourseTypes";

export type TCreateQuizType = "course" | "quiz"

export type ChangeCourseCardSrcType = {
    src: string
}
export type ChangeCourseCardTitleType = {
    title: string
}
export type ChangeCourseCardExpType = {
    exp: number
}

export type ChangeCourseCardIsBuyType = {
    isBuy: boolean
}

export type ChangeCourseCardPriceType = {
    price: number
}

export type AddAboutItemType = {
    itemType: IItemType
}

export type RemoveAboutItemType = {
    itemId: string
}

export type ChangeAboutItemType = {
    basicId: string
    itemText: string
}

export type AddProgramsBasicItemType = {}

export type RemoveProgramsBasicItemType = {
    basicId: string
}

export type AddProgramsMainItemType = {
    basicId: string
    mainType: string
}

export type RemoveProgramsMainItemType = {
    basicId: string
    mainId: string
}

export type AddProgramsItemType = {
    basicId: string
    mainId: string
    itemType: IItemType
}

export type RemoveProgramsItemType = {
    basicId: string
    mainId: string
    itemId: string
}

export type ChangeProgramsItemType = {
    basicId: string
    mainId: string
    itemId: string
    itemText: string
}

export type AddProgramsQuizItemType = {
    basicId: string
    mainId: string
}

export type ChangeProgramsQuizQuestionItemType = {
    basicId: string
    mainId: string
    itemId: string
    questionText: string
}

export type AddProgramsQuizAnswerItemType = {
    basicId: string
    mainId: string
    itemId: string
}

export type RemoveProgramsQuizAnswerItemType = {
    basicId: string
    mainId: string
    itemId: string
    answerId: string
}

export type ChangeProgramsQuizAnswerItemType = {
    basicId: string
    mainId: string
    itemId: string
    answerId: string
    answerText: string
}

export type ChangeProgramsQuizCorrectItemType = {
    basicId: string
    mainId: string
    itemId: string
    stepType: IItemType
    answerId: string
}

export type ChangeProgramsQuizTypeItemType = {
    basicId: string
    mainId: string
    itemId: string
    stepType: IItemType
}

export type ChangeProgramsQuizTimerItemType = {
    basicId: string
    mainId: string
    itemId: string
}

export type ChangeProgramsQuizSecondsItemType = {
    basicId: string
    mainId: string
    itemId: string
    stepSeconds: string
}

export enum CreateCourseOperationType {
    AddAboutItem = 'AddAboutItem',
    RemoveAboutItem = 'RemoveAboutItem',
    ChangeAboutItem = 'ChangeAboutItem',
    ChangeCourseCardSrc = "ChangeCourseCardSrc",
    ChangeCourseCardTitle = "ChangeCourseCardTitle",
    ChangeCourseCardExp = "ChangeCourseCardExp",
    ChangeCourseCardIsBuy = "ChangeCourseCardIsBuy",
    ChangeCourseCardPrice = "ChangeCourseCardPrice",
    AddProgramsBasicItem = 'AddProgramsBasicItem',
    RemoveProgramsBasicItem = 'RemoveProgramsBasicItem',
    AddProgramsMainItem = 'AddProgramsMainItem',
    RemoveProgramsMainItem= 'RemoveProgramsMainItem',
    AddProgramsItem = 'AddProgramsItem',
    RemoveProgramsItem = 'RemoveProgramsItem',
    ChangeProgramsItem = 'ChangeProgramsItem',
    AddProgramsQuizItem = 'AddProgramsQuizItem',
    ChangeProgramsQuizQuestionItem = "ChangeProgramsQuizQuestionItem",
    AddProgramsQuizAnswerItem = "AddProgramsQuizAnswerItem",
    RemoveProgramsQuizAnswerItem = "RemoveProgramsQuizAnswerItem",
    ChangeProgramsQuizAnswerItem = "ChangeProgramsQuizAnswerItem",
    ChangeProgramsQuizCorrectItem = "ChangeProgramsQuizCorrectItem",
    ChangeProgramsQuizTypeItem = "ChangeProgramsQuizTypeItem",
    ChangeProgramsQuizTimerItem = "ChangeProgramsQuizTimerItem",
    ChangeProgramsQuizSecondsItem = "ChangeProgramsQuizSecondsItem"
    // Продолжение ...
    // AddBlockContentItem = 'addBlockContentItem',
}

export type HandleCreateCourseOperationType =
    | { operationType: CreateCourseOperationType.ChangeCourseCardSrc, args: ChangeCourseCardSrcType }
    | { operationType: CreateCourseOperationType.ChangeCourseCardTitle, args: ChangeCourseCardTitleType }
    | { operationType: CreateCourseOperationType.ChangeCourseCardExp, args: ChangeCourseCardExpType }
    | { operationType: CreateCourseOperationType.ChangeCourseCardIsBuy, args: ChangeCourseCardIsBuyType }
    | { operationType: CreateCourseOperationType.ChangeCourseCardPrice, args: ChangeCourseCardPriceType }
    | { operationType: CreateCourseOperationType.AddAboutItem, args: AddAboutItemType }
    | { operationType: CreateCourseOperationType.RemoveAboutItem, args: RemoveAboutItemType }
    | { operationType: CreateCourseOperationType.ChangeAboutItem, args: ChangeAboutItemType }
    | { operationType: CreateCourseOperationType.AddProgramsBasicItem, args: AddProgramsBasicItemType }
    | { operationType: CreateCourseOperationType.RemoveProgramsBasicItem, args: RemoveProgramsBasicItemType }
    | { operationType: CreateCourseOperationType.AddProgramsMainItem, args: AddProgramsMainItemType }
    | { operationType: CreateCourseOperationType.RemoveProgramsMainItem, args: RemoveProgramsMainItemType }
    | { operationType: CreateCourseOperationType.AddProgramsItem, args: AddProgramsItemType }
    | { operationType: CreateCourseOperationType.RemoveProgramsItem, args: RemoveProgramsItemType }
    | { operationType: CreateCourseOperationType.ChangeProgramsItem, args: ChangeProgramsItemType }
    | { operationType: CreateCourseOperationType.AddProgramsQuizItem, args: AddProgramsQuizItemType }
    | { operationType: CreateCourseOperationType.ChangeProgramsQuizQuestionItem, args: ChangeProgramsQuizQuestionItemType }
    | { operationType: CreateCourseOperationType.AddProgramsQuizAnswerItem, args: AddProgramsQuizAnswerItemType }
    | { operationType: CreateCourseOperationType.RemoveProgramsQuizAnswerItem, args: RemoveProgramsQuizAnswerItemType }
    | { operationType: CreateCourseOperationType.ChangeProgramsQuizAnswerItem, args: ChangeProgramsQuizAnswerItemType }
    | { operationType: CreateCourseOperationType.ChangeProgramsQuizCorrectItem, args: ChangeProgramsQuizCorrectItemType }
    | { operationType: CreateCourseOperationType.ChangeProgramsQuizTypeItem, args: ChangeProgramsQuizTypeItemType }
    | { operationType: CreateCourseOperationType.ChangeProgramsQuizTimerItem, args: ChangeProgramsQuizTimerItemType }
    | { operationType: CreateCourseOperationType.ChangeProgramsQuizSecondsItem, args: ChangeProgramsQuizSecondsItemType }
    // Продолжение ...
    // | { operationType: OperationType, args: AddBlockContentItemArgs };