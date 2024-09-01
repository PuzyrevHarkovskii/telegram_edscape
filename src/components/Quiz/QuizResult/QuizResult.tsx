import { FC } from 'react';
import "./QuizResult.scss"

interface IQuizResult {
    correct: number
    incorrect: number
    sessionTimeResult: number
}

const ConvertSecondsToMinutes = ({ seconds }: { seconds: number }) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return <>{minutes}:{remainingSeconds}</>;
}

const QuizResult: FC<IQuizResult> = ({
    sessionTimeResult,
    correct,
    incorrect
}) => {

    return (
        <div className="quiz-result">

            <div className="quiz-result__inner">

                {incorrect === 0
                    ? (
                        <div className="quiz-result__status-wrapper">
                            <div className="quiz-result__status">
                                <div className="quiz-result__status-circle green">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="27" viewBox="0 0 38 27"
                                        fill="none">
                                        <line x1="15.2053" y1="22.5151" x2="36.2053" y2="1.51508" stroke="white"
                                            stroke-width="4.2" />
                                        <line x1="15.2053" y1="22.5151" x2="36.2053" y2="1.51508" stroke="white"
                                            stroke-width="4.2" />
                                        <line x1="15.2053" y1="25.4849" x2="1.51494" y2="11.7946" stroke="white"
                                            stroke-width="4.2" />
                                        <line x1="15.2053" y1="25.4849" x2="1.51494" y2="11.7946" stroke="white"
                                            stroke-width="4.2" />
                                    </svg>
                                </div>
                                <div className="quiz-result__status-title">
                                    Квиз пройден!
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <div className="quiz-result__status-wrapper">
                            <div className="quiz-result__status">
                                <div className="quiz-result__status-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58"
                                        fill="none">
                                        <line x1="14.5027" y1="14.498" x2="43.4974" y2="43.4927" stroke="white"
                                            stroke-width="4.82408" />
                                        <path d="M14.5029 43.493L43.4976 14.4984" stroke="white"
                                            stroke-width="4.82408" />
                                    </svg>
                                </div>
                                <div className="quiz-result__status-title">
                                    Квиз не пройден!
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className="quiz-result__content">

                    <div className="quiz-result__item-top">
                        <div className="quiz-result__item-top-el">
                            <div className="quiz-result__item-top-el-title">
                                Время:
                            </div>
                            <div className="quiz-result__item-top-el-numbers">
                                <ConvertSecondsToMinutes seconds={sessionTimeResult} />
                            </div>
                        </div>
                        <div className="quiz-result__item-top-el">
                            <div className="quiz-result__item-top-el-title">
                                Правильных ответов:
                            </div>
                            <div className="quiz-result__item-top-el-numbers">
                                {correct}
                            </div>
                        </div>
                        <div className="quiz-result__item-top-el">
                            <div className="quiz-result__item-top-el-title">
                                Неправильных ответов:
                            </div>
                            <div className="quiz-result__item-top-el-numbers">
                                {incorrect}
                            </div>
                        </div>
                    </div>

                    {incorrect === 0
                        ? (
                            <div className="quiz-result__item-bottom">
                                Поздравляем! Вы успешно прошли квиз!
                            </div>
                        )
                        : (
                            <div className="quiz-result__item-bottom">
                                Увы, вы не прошли квиз!
                            </div>
                        )
                    }

                </div>

            </div>

        </div>
    );
};

export default QuizResult;