import React, {FC} from 'react';
import "./CardItemQuiz.scss"

const MIN_QUESTION = 1
const CORRECT_WORD_RUS = [2, 3, 4]

interface ICardItemQuizProps {
    questionCount: number | null
}

const CardItemQuiz: FC<ICardItemQuizProps> = ({ questionCount }) => {
    if (questionCount === MIN_QUESTION) {
        return <>{questionCount} вопрос</>
    }
    if (CORRECT_WORD_RUS.includes(questionCount ?? 0)) {
        return <>{questionCount} вопроса</>
    }
    if (questionCount ?? 0 > 4) {
        return <>{questionCount} вопросов</>
    }
    return <></>
}

export default CardItemQuiz;