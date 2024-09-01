import {ICard} from "../../../redux/services/cardService";
import {FC} from "react";
import "./StudyContent.scss"
import CardList from "../../@UI/CardList/CardList";

interface StudyContentProps {
    cards: ICard[];
    // isLoading: boolean;
    // isError: boolean;
}

const StudyContent: FC<StudyContentProps> = (
    {
        cards,
        // isLoading,
        // isError
    }) => {

    // if (isError) {
    //     return <div>Ошибка 404!</div>;
    // }
    //
    // if (isLoading) {
    //     return <div>Идет загрузка...</div>;
    // }

    if (!cards || cards.length === 0) {
        return <div>В данный момент нет карточек!</div>;
    }

    return <CardList entry={"user"} change={false} cards={cards} />;
};

export default StudyContent;