export type ChangeStepType = {
    stepIndex: number
}

interface ChangeIsPauseType {
    isPause: boolean
}

interface ChangeIsRestartType {
    isRestart: boolean
}

export type ChangeStatusChooseType = {
    chooseAnswer: string
    corrects: Array<string | null>
}

interface ChangeDisabledButtonType {
    disabledButton: boolean
}

interface ChangeResultSessionTime {
    sessionTime: number
}

interface ChangeResultCorrectType {
    correct: number
}
interface ChangeResultIncorrectType {
    incorrect: number
}

export enum QuizOperationType {
    ChangeStatusChoose = "ChangeStatusChoose",
    ChangeStep = "ChangeStep",
    ChangeIsPause = "ChangeIsPause",
    ChangeIsRestart = "ChangeIsRestart",
    ChangeDisabledButton = "ChangeDisabledButton",
    ChangeResultSessionTime = "ChangeResultSessionTime",
    ChangeResultCorrect = "ChangeResultCorrect",
    ChangeResultIncorrect = "ChangeResultIncorrect"
    // Продолжение ...
    // AddBlockContentItem = 'addBlockContentItem',
}

export type HandleQuizOperationType =
    | { operationType: QuizOperationType.ChangeStep, args: ChangeStepType }
    | { operationType: QuizOperationType.ChangeIsPause, args: ChangeIsPauseType }
    | { operationType: QuizOperationType.ChangeIsRestart, args: ChangeIsRestartType }
    | { operationType: QuizOperationType.ChangeDisabledButton, args: ChangeDisabledButtonType }
    | { operationType: QuizOperationType.ChangeStatusChoose, args: ChangeStatusChooseType }
    | { operationType: QuizOperationType.ChangeResultSessionTime, args: ChangeResultSessionTime }
    | { operationType: QuizOperationType.ChangeResultCorrect, args: ChangeResultCorrectType }
    | { operationType: QuizOperationType.ChangeResultIncorrect, args: ChangeResultIncorrectType }