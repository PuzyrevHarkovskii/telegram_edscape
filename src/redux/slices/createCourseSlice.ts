import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
import {
    CHECKBOX_TYPE,
    ICourse,
    IItem,
    IItems,
    IMainType,
    IItemType,
    IPrograms, QUIZ_TYPE,
    RADIO_TYPE,
    THEORY_TYPE
} from "../types/createCourseTypes";
import {IAnswers, ICorrects, IQuizData, MIN_SECONDS} from "../types/createQuizTypes";
import {
    AddAboutItemType,
    RemoveAboutItemType,
    ChangeAboutItemType,
    ChangeCourseCardSrcType,
    ChangeCourseCardTitleType,
    ChangeCourseCardExpType,
    ChangeCourseCardPriceType,
    RemoveProgramsBasicItemType,
    AddProgramsMainItemType,
    RemoveProgramsMainItemType,
    AddProgramsItemType,
    RemoveProgramsItemType,
    ChangeProgramsItemType,
    AddProgramsQuizItemType,
    ChangeProgramsQuizQuestionItemType,
    AddProgramsQuizAnswerItemType,
    RemoveProgramsQuizAnswerItemType,
    ChangeProgramsQuizAnswerItemType,
    ChangeProgramsQuizCorrectItemType,
    ChangeProgramsQuizTypeItemType,
    ChangeProgramsQuizTimerItemType,
    ChangeProgramsQuizSecondsItemType, ChangeCourseCardIsBuyType
} from "../../components/@types/createCourseTypes";

const getQuizCorrect = (id: string): ICorrects => {
    return {
        id: id
    }
}

const getQuizAnswer = (): IAnswers => {
    return {
        id: uuidv4(),
        answer: ""
    }
}

const getCourseQuiz = (): IQuizData => {
    return {
        timer: {
            isTimer: false,
            seconds: MIN_SECONDS
        },
        question: "",
        answers: [
            getQuizAnswer(),
            getQuizAnswer()
        ],
        corrects: []
    }
}

const getCourseItem = (type: IItemType): IItem => {

    const getResultQuiz = (type: IItemType): IQuizData | null => {
        if (type === RADIO_TYPE || type === CHECKBOX_TYPE) {
            return getCourseQuiz()
        }
        return null
    }

    return {
        id: uuidv4(),
        type: type,
        content: "",
        quiz: getResultQuiz(type)
    }
}

const getCourseItems = (type: IMainType): IItems => {

    function getResultItem(type: IMainType) {
        if (type === THEORY_TYPE) {
            return [getCourseItem("title"), getCourseItem("text")]
        }
        return [getCourseItem("radio")]
    }

    return {
        id: uuidv4(),
        type: type,
        item: getResultItem(type)
    }
}

const getCoursePrograms = (): IPrograms => {
    return {
        id: uuidv4(),
        main: [getCourseItems("theory"), getCourseItems("quiz")]
    }
}

const initialState: ICourse = {
    id: uuidv4(),
    card: {
        id: "",
        isBuy: false,
        type: "course",
        src: "",
        title: "",
        exp: 0,
        questionCount: null,
        price: null
    },
    about: [getCourseItem("title"), getCourseItem("text")],
    programs: [getCoursePrograms()]
}

export const createCourseSlice = createSlice({
    name: 'createCourse',
    initialState,
    reducers: {
        changeCourseCardSrc: (state: ICourse, action: PayloadAction<ChangeCourseCardSrcType>) => {
            state.card.src = action.payload.src
        },
        changeCourseCardTitle: (state: ICourse, action: PayloadAction<ChangeCourseCardTitleType>) => {
            state.card.title = action.payload.title
        },
        changeCourseCardExp: (state: ICourse, action: PayloadAction<ChangeCourseCardExpType>) => {
            state.card.exp = action.payload.exp
        },
        changeCourseCardIsBuy: (state: ICourse, action: PayloadAction<ChangeCourseCardIsBuyType>) => {
            state.card.isBuy = !action.payload.isBuy
            if (action.payload.isBuy) {
                state.card.price = null
            }
        },
        changeCourseCardPrice: (state: ICourse, action: PayloadAction<ChangeCourseCardPriceType>) => {
            state.card.price = action.payload.price
        },
        addAboutItem: (state: ICourse, action: PayloadAction<AddAboutItemType>) => {
            state.about.push(getCourseItem(action.payload.itemType))
        },
        removeAboutItem: (state: ICourse, action: PayloadAction<RemoveAboutItemType>) => {
            state.about = state.about.filter(obj => obj.id !== action.payload.itemId)
        },
        changeAboutItem: (state: ICourse, action: PayloadAction<ChangeAboutItemType>) => {
            const currentContentAboutItem = state.about.find(obj => obj.id === action.payload.basicId)
            if (currentContentAboutItem) {
                currentContentAboutItem.content = action.payload.itemText
            }
        },
        addProgramsBasicItem: (state: ICourse) => {
            state.programs.push(getCoursePrograms())
        },
        removeProgramsBasicItem: (state: ICourse, action: PayloadAction<RemoveProgramsBasicItemType>) => {
            state.programs = state.programs.filter(obj => obj.id !== action.payload.basicId)
        },
        addProgramsMainItem: (state: ICourse, action: PayloadAction<AddProgramsMainItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                if (THEORY_TYPE === action.payload.mainType) {
                    currentContentPrograms.main.push(getCourseItems(THEORY_TYPE))
                } else if (QUIZ_TYPE === action.payload.mainType) {
                    currentContentPrograms.main.push(getCourseItems(QUIZ_TYPE))
                }
            }
        },
        removeProgramsMainItem: (state: ICourse, action: PayloadAction<RemoveProgramsMainItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                currentContentPrograms.main = currentContentPrograms.main.filter(obj => obj.id !== action.payload.mainId)
            }
        },
        addProgramsItem: (state: ICourse, action: PayloadAction<AddProgramsItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    currentContentItems.item.push(getCourseItem(action.payload.itemType))
                }
            }
        },
        removeProgramsItem: (state: ICourse, action: PayloadAction<RemoveProgramsItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    currentContentItems.item = currentContentItems.item.filter(obj => obj.id !== action.payload.itemId)
                }
            }
        },
        changeProgramsItem: (state: ICourse, action: PayloadAction<ChangeProgramsItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        currentContentItem.content = action.payload.itemText
                    }
                }
            }
        },
        addProgramsQuizItem: (state: ICourse, action: PayloadAction<AddProgramsQuizItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    currentContentItems.item.push(getCourseItem("radio"))
                }
            }
        },
        changeProgramsQuizQuestionItem: (state: ICourse, action: PayloadAction<ChangeProgramsQuizQuestionItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        const currentQuizCourse = currentContentItem.quiz
                        if (currentQuizCourse) {
                            currentQuizCourse.question = action.payload.questionText
                        }
                    }
                }
            }
        },
        addProgramsQuizAnswerItem: (state: ICourse, action: PayloadAction<AddProgramsQuizAnswerItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        const currentQuizCourse = currentContentItem.quiz
                        if (currentQuizCourse) {
                            currentQuizCourse.answers.push(getQuizAnswer())
                        }
                    }
                }
            }
        },
        removeProgramsQuizAnswerItem: (state: ICourse, action: PayloadAction<RemoveProgramsQuizAnswerItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        const currentQuizCourse = currentContentItem.quiz
                        if (currentQuizCourse) {
                            currentQuizCourse.answers = currentQuizCourse.answers.filter(obj => obj.id !== action.payload.answerId)
                            currentQuizCourse.corrects = currentQuizCourse.corrects.filter(obj => obj.id !== action.payload.answerId)
                        }
                    }
                }
            }
        },
        changeProgramsQuizAnswerItem: (state: ICourse, action: PayloadAction<ChangeProgramsQuizAnswerItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        const currentQuizCourse = currentContentItem.quiz
                        if (currentQuizCourse) {
                            const currentAnswer = currentQuizCourse.answers.find(obj => obj.id === action.payload.answerId)
                            if (currentAnswer) {
                                currentAnswer.answer = action.payload.answerText
                            }
                        }
                    }
                }
            }
        },
        changeProgramsQuizCorrectItem: (state: ICourse, action: PayloadAction<ChangeProgramsQuizCorrectItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        const currentQuizCourse = currentContentItem.quiz
                        if (currentQuizCourse) {
                            if (action.payload.stepType === RADIO_TYPE) {
                                currentQuizCourse.corrects = [getQuizCorrect(action.payload.answerId)]
                            }
                            if (action.payload.stepType === CHECKBOX_TYPE) {
                                const index = currentQuizCourse.corrects.findIndex(obj => obj.id === action.payload.answerId)
                                if (index !== -1) {
                                    currentQuizCourse.corrects = currentQuizCourse.corrects.filter(obj => obj.id !== action.payload.answerId)
                                } else {
                                    currentQuizCourse.corrects.push(getQuizCorrect(action.payload.answerId))
                                }
                            }
                        }
                    }
                }
            }
        },
        changeProgramsQuizTypeItem: (state: ICourse, action: PayloadAction<ChangeProgramsQuizTypeItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            console.log(action.payload)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        const currentQuizCourse = currentContentItem.quiz
                        if (currentQuizCourse) {
                            currentContentItem.type = action.payload.stepType
                            currentQuizCourse.corrects = []
                        }
                    }
                }
            }
        },
        changeProgramsQuizTimerItem: (state: ICourse, action: PayloadAction<ChangeProgramsQuizTimerItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        const currentQuizCourse = currentContentItem.quiz
                        if (currentQuizCourse) {
                            currentQuizCourse.timer.isTimer = !currentQuizCourse.timer.isTimer
                        }
                    }
                }
            }
        },
        changeProgramsQuizSecondsItem: (state: ICourse, action: PayloadAction<ChangeProgramsQuizSecondsItemType>) => {
            const currentContentPrograms = state.programs.find(obj => obj.id === action.payload.basicId)
            if (currentContentPrograms) {
                const currentContentItems = currentContentPrograms.main.find(obj => obj.id === action.payload.mainId)
                if (currentContentItems) {
                    const currentContentItem = currentContentItems.item.find(obj => obj.id === action.payload.itemId)
                    if (currentContentItem) {
                        const currentQuizCourse = currentContentItem.quiz
                        if (currentQuizCourse) {
                            currentQuizCourse.timer.seconds = Number(action.payload.stepSeconds.replace(/\D/g, ""))
                        }
                    }
                }
            }
        },
    }
})

export const {
    changeCourseCardSrc,
    changeCourseCardTitle,
    changeCourseCardExp,
    changeCourseCardIsBuy,
    changeCourseCardPrice,
    addAboutItem,
    removeAboutItem,
    changeAboutItem,
    addProgramsBasicItem,
    removeProgramsBasicItem,
    addProgramsMainItem,
    removeProgramsMainItem,
    addProgramsItem,
    removeProgramsItem,
    changeProgramsItem,
    addProgramsQuizItem,
    changeProgramsQuizQuestionItem,
    addProgramsQuizAnswerItem,
    removeProgramsQuizAnswerItem,
    changeProgramsQuizAnswerItem,
    changeProgramsQuizCorrectItem,
    changeProgramsQuizTypeItem,
    changeProgramsQuizTimerItem,
    changeProgramsQuizSecondsItem
} = createCourseSlice.actions
export default createCourseSlice.reducer