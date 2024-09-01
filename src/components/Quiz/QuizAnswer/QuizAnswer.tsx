import {FC} from 'react';
import "./QuizAnswer.scss"
import QuizIcon from "./QuizIcon/QuizIcon";
import {IQuizAnswer} from "../Quiz";

const QuizAnswer: FC<IQuizAnswer> = (
    {
        disabled,
        icon,
        text,
        onClick
    }) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`quiz-answer ${icon}`}>
            <QuizIcon
                icon={icon}
            />
            <div className="quiz-answer__text">
                {text}
            </div>
        </button>
    );
};

export default QuizAnswer;