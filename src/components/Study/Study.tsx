import { FC, useState } from 'react';
import "./Study.scss"
import Container from "../@UI/Container/Container";
import ButtonCategory from "../@UI/Buttons/ButtonCategory/ButtonCategory";
import Channel from "../@UI/Channel/Channel";
import TitleCategory from "../@UI/TitleCategory/TitleCategory";
import { ICard } from "../../redux/services/cardService";
import StudyContent from "./StudyContent/StudyContent";
import Leaderboard from "../Leaderboard/Leaderboard";
import { useParams } from 'react-router-dom';

const nameButtons: string[] = [
    "Все",
    "Квизы",
    "Курсы",
    "Лидерборд"
]

const cards: ICard[] = [
    {
        "id": "905cb1a9-7791-4cce-88a3-b00b5b654c7e",
        "isBuy": false,
        "type": "course",
        "src": "https://i.ytimg.com/vi/S0R82Osg-Mk/maxresdefault.jpg",
        "title": "Основы NestJS",
        "exp": 1200,
        "questionCount": null,
        "price": 135000
    },
    {
        "id": "de0d91ee-70a1-480f-88ca-65d2efe3a580",
        "isBuy": true,
        "type": "course",
        "src": "https://typecast.ai/learn/wp-content/uploads/2023/02/23q1_27_main.jpg",
        "title": "Основы Stable Diffusion",
        "exp": 1500,
        "questionCount": null,
        "price": 350000
    },
    {
        "id": "905cb1a9-7791-4cce-88a3-b00b5b654c7e",
        "isBuy": false,
        "type": "quiz",
        "src": "https://www.spec-india.com/wp-content/uploads/2022/02/React-vs-React-Native.png",
        "title": "База React vs React Native",
        "exp": 25,
        "questionCount": 5,
        "price": null
    },
    {
        "id": "wNHwSIE",
        "isBuy": true,
        "type": "course",
        "src": "https://infocity.tech/wp-content/uploads/2023/03/Midjourney.png",
        "title": "Основы Midjourney",
        "exp": 1000,
        "questionCount": null,
        "price": 420000
    }
]

const Study: FC = () => {

    const params = useParams()
    const [clickButton, setClickButton] = useState<number>(params && params.id ? Number(params.id) : 0)
    // const {data: cards, isLoading, isError} = cardAPI.useFetchAllCardsQuery()

    const filterCardsByType = (type: "all" | "quiz" | "course") => {
        return type === "all" ? cards : cards.filter(card => card.type === type);
    }

    return (
        <div className="study">
            <Container>

                <TitleCategory
                    title={
                        clickButton === 0 ? "🧩 Квизы и курсы от" :
                            clickButton === 1 ? "🧩 Квизы" :
                                clickButton === 2 ? "🏆 Курсы" :
                                    clickButton === 3 ? "🏆 ЛидерБорд" :
                                        ""
                    }
                />

                <Channel />

                {nameButtons.map((name, index) =>
                    <ButtonCategory
                        key={index}
                        onClick={() => setClickButton(index)}
                        active={clickButton === index}
                    >
                        {name}
                    </ButtonCategory>
                )}

                {clickButton === 3
                    ? (
                        <Leaderboard />
                    )
                    : (
                        <StudyContent
                            cards={
                                clickButton === 0 ?
                                    filterCardsByType("all") :
                                    clickButton === 1 ?
                                        filterCardsByType("quiz") :
                                        clickButton === 2 ?
                                            filterCardsByType("course") : cards
                            }
                        // isLoading={isLoading}
                        // isError={isError}
                        />
                    )
                }

            </Container>
        </div>
    );
};


export default Study;