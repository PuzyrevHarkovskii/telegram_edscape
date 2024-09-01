import React, {FC, useCallback, useEffect, useReducer, useRef, useState} from 'react';
import "./Timer.scss"
import {HandleQuizOperationType, QuizOperationType} from "../../@types/quizTypes";

interface ITimer {
    stepIndex: number
    handleQuizOperation: (arg: HandleQuizOperationType) => void
    isPause: boolean
    incorrect: number
    sessionTime: number
    isRestart: boolean
    initialSeconds: number
}

const Timer: FC<ITimer> = (
    {
        stepIndex,
        handleQuizOperation,
        isPause,
        incorrect,
        sessionTime,
        isRestart,
        initialSeconds
    }) => {

    const [seconds, setSeconds] = useState<number>(initialSeconds);

    useEffect(() => {
        if (seconds === 0) {
            handleQuizOperation({
                operationType: QuizOperationType.ChangeDisabledButton,
                args: {
                    disabledButton: true
                }
            })
            setTimeout(() => {
                handleQuizOperation({
                    operationType: QuizOperationType.ChangeStep,
                    args: {
                        stepIndex: stepIndex + 1
                    }
                })
                handleQuizOperation({
                    operationType: QuizOperationType.ChangeResultIncorrect,
                    args: {
                        incorrect: incorrect + 1
                    }
                })
            },1000)
        }
    }, [seconds]);

    useEffect(() => {
        setSeconds(initialSeconds)
    }, [initialSeconds, stepIndex]);

    useEffect(() => {
        if (seconds > 0 && !isPause) {
            const interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [seconds, isPause, initialSeconds]);

    const formatTime = (time: number): string => {
        const minutesFloor = Math.floor(time / 60)
        const seconds = (time % 60)

        const minutes = minutesFloor.toString().padStart(2, '0');
        const secondsString = seconds.toString().padStart(2, '0');

        // handleQuizOperation({
        //     operationType: QuizOperationType.ChangeResultSessionTime,
        //     args: {
        //         sessionTime: 1
        //     }
        // })

        // if (seconds === 0) {
        //     handleQuizOperation({
        //         operationType: QuizOperationType.ChangeStep,
        //         args: {
        //             stepIndex: stepIndex + 1
        //         }
        //     })
        // }

        if (minutesFloor === 0) {
            return `${seconds}`;
        }

        return `${minutes}:${secondsString}`;
    };

    return (
        <div className="timer__wrapper">
            <div className="timer__circle"></div>
            <div className="timer__inner">
                <div style={
                    {
                        animationDuration: `${initialSeconds}s`,
                        animationPlayState: "paused" ? "paused" : "running"
                    }
                } className={`timer ${isRestart ? "play" : "restart"}`}>
                    <div className={`timer__line ${isRestart ? "play" : ""}`}></div>
                    <div className="timer__body">
                        <div className="timer__counter">
                            <span>
                                {formatTime(seconds)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;
