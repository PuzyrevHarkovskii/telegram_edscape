import { FC, useState, useEffect } from 'react';
import "./Quiz.scss"
import Container from "../@UI/Container/Container";
import QuizAnswer from "./QuizAnswer/QuizAnswer";
import { HandleQuizOperationType, QuizOperationType } from "../@types/quizTypes";
import {
    changeDisabledButton,
    changeIsPause,
    changeIsRestart, changeResultCorrect, changeResultIncorrect,
    changeStatusChoose, changeResultSessionTime,
    changeStep
} from "../../redux/slices/quizSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import Timer from "../@UI/Timer/Timer";
import QuizResult from './QuizResult/QuizResult';
import DynamicTrackLine from '../@UI/DynamicTrackLine/DynamicTrackLine';

interface ISteps {
    id: string,
    type: "radio" | "checkbox",
    isTimer: boolean,
    seconds: number
    question: string,
    answers: string[],
    corrects: Array<string | null>
}

interface ICurrentQuiz {
    id: number
    title: string
    steps: ISteps[]
}

export type QuizIconType = "radio" | "checkbox" | boolean

export interface IQuizAnswer {
    disabled: boolean
    icon: QuizIconType
    text: string
    onClick: () => void
}

const arrayTypes = [true, false, true, true]

const arraySeconds = [30, 0, 15, 5]

const currentQuiz: ICurrentQuiz = {
    id: 1,
    title: "Основы React",
    steps: [
        {
            id: "a-1",
            type: "checkbox",
            isTimer: arrayTypes[0],
            seconds: arraySeconds[0],
            question: "Что такое React и React Native?",
            answers: ["React", "Angular", "React Native", "Vue"],
            corrects: ["React", null, "React Native", null]
        },
        {
            id: "a-1",
            type: "radio",
            isTimer: arrayTypes[0],
            seconds: arraySeconds[0],
            question: "Что такое React?",
            answers: ["React", "Angular", "React Native", "Vue"],
            corrects: ["React", null, null, null]
        },
        {
            id: "a-1",
            type: "checkbox",
            isTimer: arrayTypes[0],
            seconds: arraySeconds[0],
            question: "Что такое React Native?",
            answers: ["React", "React Native", "Angular", "Vue"],
            corrects: [null, "React Native", null, null]
        },
        {
            id: "a-1",
            type: "checkbox",
            isTimer: arrayTypes[0],
            seconds: arraySeconds[0],
            question: "Что такое Angular?",
            answers: ["React", "React Native", "Angular", "Vue"],
            corrects: [null, null, "Angular", null]
        }
    ]
}

const Quiz: FC = () => {

    const dispatch = useAppDispatch()
    const { stepIndex, result, timer, disabledButton, statusChoose } = useAppSelector(state => state.quiz)
    const currentStep = currentQuiz.steps[stepIndex]

    const [sessionTime, setSessionTime] = useState({ start: 0, result: 0 })

    useEffect(() => {
        if (stepIndex === 0) {
            const start = new Date()
            const startTimeStart = start.getTime()
            setSessionTime({ ...sessionTime, start: startTimeStart })
            console.log('Отработал!')
        }
        if (!((stepIndex + 1) <= currentQuiz.steps.length)) {
            const end = new Date()
            const endTimeStart = end.getTime()
            const result = Math.floor((endTimeStart - sessionTime.start) / 1000)
            setSessionTime({ ...sessionTime, result: result })
            console.log('Отработал!')
        }
    }, [stepIndex])

    const handleQuizOperation = (args: HandleQuizOperationType): void => {
        const { operationType, args: operationArgs } = args;

        switch (operationType) {
            case QuizOperationType.ChangeStep:
                dispatch(changeStep(operationArgs));
                break;
            case QuizOperationType.ChangeIsPause:
                dispatch(changeIsPause(operationArgs));
                break;
            case QuizOperationType.ChangeIsRestart:
                dispatch(changeIsRestart(operationArgs));
                break;
            case QuizOperationType.ChangeStatusChoose:
                dispatch(changeStatusChoose(operationArgs));
                break;
            case QuizOperationType.ChangeDisabledButton:
                dispatch(changeDisabledButton(operationArgs));
                break;
            case QuizOperationType.ChangeResultSessionTime:
                dispatch(changeResultSessionTime(operationArgs));
                break;
            case QuizOperationType.ChangeResultCorrect:
                dispatch(changeResultCorrect(operationArgs));
                break;
            case QuizOperationType.ChangeResultIncorrect:
                dispatch(changeResultIncorrect(operationArgs));
                break;
            default:
                break;
        }
    }

    const getResultIcon = (
        type: "radio" | "checkbox",
        chooseAnswers: string[],
        answerIndex: number,
        answer: string,
        corrects: Array<string | null>
    ): QuizIconType => {
        if (chooseAnswers.includes(answer) && chooseAnswers.includes(corrects[answerIndex] ?? "")) {
            getNextActions(type, answerIndex, chooseAnswers, corrects)
            return true
        }
        if (chooseAnswers.includes(answer) && !chooseAnswers.includes(corrects[answerIndex] ?? "")) {
            getNextActions(type, answerIndex, chooseAnswers, corrects)
            return false
        }
        if (type === "radio") {
            return "radio"
        }
        if (type === "checkbox") {
            return "checkbox"
        }
        return "radio"
    }

    const getNextActions = (
        type: "radio" | "checkbox",
        answerIndex: number,
        chooseAnswers: string[],
        corrects: Array<string | null>,
    ) => {
        if (type === "radio") {
            handleQuizOperation({
                operationType: QuizOperationType.ChangeDisabledButton,
                args: {
                    disabledButton: true
                }
            })
            timerActions()
        } else if (type === "checkbox" && !chooseAnswers.includes(corrects[answerIndex] ?? "")
        ) {
            handleQuizOperation({
                operationType: QuizOperationType.ChangeDisabledButton,
                args: {
                    disabledButton: true
                }
            })
            timerActions()
        } else if (type === "checkbox" && corrects.filter(answer => answer !== null).every(answer => chooseAnswers.includes(answer ?? ""))
        ) {
            handleQuizOperation({
                operationType: QuizOperationType.ChangeDisabledButton,
                args: {
                    disabledButton: true
                }
            })
            timerActions()
        }
    }

    const timerActions = () => {
        handleQuizOperation({
            operationType: QuizOperationType.ChangeIsPause,
            args: {
                isPause: true
            }
        })
        setTimeout(() => {
            handleQuizOperation({
                operationType: QuizOperationType.ChangeStep,
                args: {
                    stepIndex: stepIndex + 1
                }
            })
        }, 3000)
    }

    return (
        <div className="quiz">
            <Container>

                <DynamicTrackLine
                    title={"Основы Redux Toolkit"}
                    stepIndex={stepIndex}
                    currentStep={
                        (stepIndex + 1) <= currentQuiz.steps.length
                            ? stepIndex + 1
                            : stepIndex
                    }
                    stepsLength={currentQuiz.steps.length}
                    correct={result.correct}
                    incorrect={result.incorrect}
                />

                {(stepIndex + 1) <= currentQuiz.steps.length
                    ? (
                        <div key={currentStep.id} className="quiz__inner">

                            {currentStep.isTimer &&
                                <Timer
                                    stepIndex={stepIndex}
                                    handleQuizOperation={handleQuizOperation}
                                    isPause={timer.isPause}
                                    incorrect={result.incorrect}
                                    sessionTime={result.sessionTime}
                                    isRestart={true}
                                    initialSeconds={currentStep.seconds}
                                />
                            }

                            <div className="quiz__content">
                                <div className="quiz__question">
                                    {stepIndex + 1} Вопрос
                                </div>
                                <div className="quiz__title">
                                    {currentStep.question}
                                </div>
                            </div>

                            <div className="quiz__answers">
                                {currentStep.answers.map((answer, index) =>
                                    <QuizAnswer
                                        key={index}
                                        disabled={disabledButton}
                                        icon={getResultIcon(
                                            currentStep.type,
                                            statusChoose.chooseAnswers,
                                            index,
                                            answer,
                                            currentStep.corrects
                                        )}
                                        text={answer}
                                        onClick={() => {
                                            handleQuizOperation({
                                                operationType: QuizOperationType.ChangeStatusChoose,
                                                args: {
                                                    chooseAnswer: answer,
                                                    corrects: currentStep.corrects
                                                }
                                            })
                                        }}
                                    />
                                )}
                            </div>

                        </div>
                    )
                    : (
                        <QuizResult
                            correct={result.correct}
                            incorrect={result.incorrect}
                            sessionTimeResult={sessionTime.result}
                        />
                    )
                }

            </Container>
        </div>
    );
};

export default Quiz;