import {FC} from 'react';
import "./CardList.scss"
import CardItem from "../CardItem/CardItem";
import {ICard} from "../../../redux/services/cardService";
interface ICardListProps {
    entry?: "user"
    change?: boolean
    cards: ICard[]
}

const CardList: FC<ICardListProps> = ({change, cards, entry}) => {
    return (
        <div className="card-list">
            {(cards as ICard[]).map((
                {
                    id,
                    isBuy,
                    type,
                    src,
                    title,
                    exp,
                    questionCount,
                    price
                }: ICard, index) =>
                <CardItem
                    key={index}
                    entry={entry}
                    change={change}
                    id={id}
                    isBuy={isBuy}
                    type={type}
                    src={src}
                    title={title}
                    exp={exp}
                    questionCount={questionCount}
                    price={price}
                />
            )}
        </div>
    );
};

export default CardList;