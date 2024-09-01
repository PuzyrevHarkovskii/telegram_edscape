import {FC} from 'react';
import "./QuizIcon.scss"
import {Check, Cross} from "../../../@UI/Icons";
import {QuizIconType} from "../../Quiz";

interface IQuizIconProps {
    icon: QuizIconType
}

const GetQuizIcon = ({icon}: IQuizIconProps) => {
    switch (icon) {
        case "radio":
            return (
                <div className="quiz__icon radio"></div>
            )
        case "checkbox":
            return (
                <div className="quiz__icon checkbox"></div>
            )
        case true:
            return (
                <div className="quiz__icon true">
                    <Check/>
                </div>
            )
        case false:
            return (
                <div className="quiz__icon false">
                    <Cross/>
                </div>
            )
        default:
            return <></>
    }
}

const QuizIcon: FC<IQuizIconProps> = ({icon}: IQuizIconProps) => {
    return <GetQuizIcon icon={icon}/>
};

export default QuizIcon;