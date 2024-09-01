import React, { FC, useMemo } from 'react';
import "./DynamicTrackLine.scss"
import { Link } from "react-router-dom";
import Arrow from '../Icons/Arrow/Arrow';

interface IDynamicTrackLine {
    title: string
    stepIndex: number
    currentStep: number
    stepsLength: number
    correct: number
    incorrect: number
}

// FC<IDynamicTrackLine> 
const DynamicTrackLine: FC<IDynamicTrackLine> = (
    {
        title,
        stepIndex,
        currentStep,
        stepsLength,
        correct,
        incorrect
    }
) => {

    function calculateProgress(currentStep: number, allSteps: number) {
        const totalSteps = allSteps;
        const currentStepIndex = currentStep - 1;

        if (currentStepIndex < 0 || currentStepIndex >= totalSteps) { // Исправление: Проверка на недопустимый текущий шаг
            return 0;
        }

        const progress = (currentStepIndex + 1) / totalSteps * 100;

        return progress;
    }

    return (
        <div className="dynamic-track-line">
            <div className="dynamic-track-line__main">

                <Link to="/" className="dynamic-track-line__link">
                    <Arrow
                        fill={"white"}
                        direction={"left"}
                    />
                    <div className="dynamic-track-line__title">
                        {title}
                    </div>
                </Link>
                <div className="dynamic-track-line__page">
                    {stepIndex}/{stepsLength}
                </div>
            </div>
            <div className="dynamic-track-line__track">
                {stepIndex < stepsLength && (
                    <span style={{ width: `${calculateProgress(stepIndex, stepsLength)}%` }}></span>
                )}
                {stepIndex === (stepsLength) && (
                    <span
                        style={{
                            width: "100%",
                            backgroundColor: incorrect > 0 ? "#E54D45" : "#34B547",
                        }}
                    ></span>
                )}
            </div>
        </div>
    );
};

export default DynamicTrackLine;