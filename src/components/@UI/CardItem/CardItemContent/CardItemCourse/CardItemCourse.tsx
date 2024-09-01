import React, {FC} from "react";
import "./CardItemCourse.scss"
import Arrow from "../../../Icons/Arrow/Arrow";

interface ICardItemCourseProps {
    isBuy: boolean
    price: number | null
}

const CardItemCourse: FC<ICardItemCourseProps> = ({ isBuy, price }) => {
    if (isBuy) {
        return (
            <div className="card-item-course__content">
                <div className="card-item-course__price">
                    {price}
                </div>
                <div className="card-item-course__currency">
                    ₽
                </div>
            </div>
        )
    }
    if (!isBuy) {
        return (
                <div className="card-item-course__content">
                    <div className="card-item-course__text">
                        Продолжить
                    </div>
                    <Arrow
                        fill={"white"}
                        direction={"right"}
                    />
                </div>
            )
    }
    return <></>
}

export default CardItemCourse