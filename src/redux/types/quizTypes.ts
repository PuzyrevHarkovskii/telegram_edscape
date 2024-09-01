export interface IQuizResultSlice {
    sessionTime: number,
    correct: number,
    incorrect: number
}

export interface IQuizStatusAnswerSlice {
    chooseAnswers: string[]
    isChooseAnswer: boolean
}

export interface IQuizTimerSlice {
    isPause: boolean,
    isRestart: boolean
}

export interface IQuizSlice {
    stepIndex: number,
    timer: IQuizTimerSlice,
    disabledButton: boolean,
    result: IQuizResultSlice,
    statusChoose: IQuizStatusAnswerSlice
}