import { FC, useMemo } from 'react';
import "./CardItem.scss"
import { Link } from "react-router-dom";
import image from "../../../assets/images/index"
import CardItemContent from "./CardItemContent/CardItemContent";
import CardItemType from "./CardItemType/CardItemType";
import { ICardGeneral } from "../../@types/cardItemTypes";

const CardItem: FC<ICardGeneral & { change?: boolean, entry?: "user" }> = (
    {
        entry,
        change,
        id,
        isBuy,
        type,
        src,
        title,
        exp,
        questionCount,
        price
    }) => {

    const getRandomDefaultPicture = useMemo(() => {
        const defaultPictures = [image.defaultPicture_1, image.defaultPicture_2, image.defaultPicture_3, image.defaultPicture_4, image.defaultPicture_5]
        const randomIndex = Math.floor(Math.random() * defaultPictures.length);
        return defaultPictures[randomIndex];
    }, [])

    return (
        <Link to={entry === "user"
            ? (type === "course" ? '/course' : "/quiz")
            : `/admin_panel/create_${type}/` + id
        } className="card-item">
            <div className="card-item__img-wrapper">
                <img className="card-item__img"
                    src={src ? src : getRandomDefaultPicture}
                    alt="image" />
            </div>
            <div className="card-item__main">
                <div className="card-item__type">
                    <CardItemType
                        type={type}
                    />
                </div>
                <div className="card-item__title">
                    {title}
                </div>
            </div>
            <div className="card-item__footer">
                {change
                    ? (
                        <div className="card-item__first">
                            👤 1346
                        </div>
                    ) :
                    (
                        <div className="card-item__first">
                            <div className="card-item__first-text lightblue">
                                +
                            </div>
                            <div className="card-item__first-text lightblue">
                                {exp}
                            </div>
                            <div className="card-item__first-text">
                                XP
                            </div>
                        </div>
                    )
                }
                <div className="card-item__content">
                    <CardItemContent
                        change={change}
                        isBuy={isBuy}
                        type={type}
                        questionCount={questionCount}
                        price={price}
                    />
                </div>
            </div>
        </Link>
    );
};

export default CardItem;