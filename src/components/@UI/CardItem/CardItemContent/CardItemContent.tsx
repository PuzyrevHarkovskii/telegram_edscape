import React, {FC} from 'react';
import CardItemQuiz from "./CardItemQuiz/CardItemQuiz";
import CardItemCourse from "./CardItemCourse/CardItemCourse";


interface ICardItemContentProps {
    isBuy: boolean
    type: "quiz" | "course"
    questionCount: number | null
    price: number | null
}

const CardItemContent: FC<ICardItemContentProps & {change?: boolean}> = (
    {
        change,
        isBuy,
        type,
        questionCount,
        price
    }) => {
    return (
        <>
            {change ? (
                <>Изменить</>
            ) : (
                <>
                    {type === "quiz" && <CardItemQuiz questionCount={questionCount}/>}
                    {type === "course" && <CardItemCourse isBuy={isBuy} price={price}/>}
                </>
            )}

        </>
    );
};

export default CardItemContent;