import React, { useState } from 'react';
import "./AdminPanel.scss"
import TitleCategory from "../@UI/TitleCategory/TitleCategory";
import Container from "../@UI/Container/Container";
import AdminPanelButtons from "./AdminPanelButtons/AdminPanelButtons";
import ButtonCategory from "../@UI/Buttons/ButtonCategory/ButtonCategory";
import CardList from "../@UI/CardList/CardList";
import { ICard } from "../../redux/services/cardService";
import AdminPanelStatic from "./AdminPanelStatic/AdminPanelStatic";
import AdminPanelPrice from './AdminPanelPrice/AdminPanelPrice';

export interface IAdminPanelButton {
    id: number
    to: string
    children: React.ReactNode
}

export interface IAdminPanelButtons {
    buttons: IAdminPanelButton[]
}

const buttons: IAdminPanelButton[] = [
    {
        id: 1,
        to: "/create_quiz",
        children: "Создать квиз"
    },
    {
        id: 2,
        to: "/create_course",
        children: "Создать курс"
    }
]

const categoryButtons: string[] = [
    "Все",
    "Квизы",
    "Курсы",
    "Статистика",
    "Подписка"
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
const AdminPanel = () => {

    const [clickButton, setClickButton] = useState<number>(0)

    const filterCardsByType = (type: "all" | "quiz" | "course") => {
        return type === "all" ? cards : cards.filter(card => card.type === type);
    }

    return (
        <div className="admin-panel">

            <Container>

                <TitleCategory
                    title={
                        clickButton === 0 ? "🧩 Мои квизы и курсы" :
                            clickButton === 1 ? "🧩 Квизы" :
                                clickButton === 2 ? "🏆 Курсы" :
                                    clickButton === 3 ? "📈 Статистика" :
                                        clickButton === 4 ? "💎 Подписка" :
                                            ""
                    }
                />

                <AdminPanelButtons buttons={buttons} />

                {categoryButtons.map((name, index) =>
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
                        <AdminPanelStatic />
                    )
                    : clickButton === 4 ? (
                        <AdminPanelPrice />
                    ) : (
                        <CardList
                            change={true}
                            cards={
                                clickButton === 0 ?
                                filterCardsByType("all") :
                                clickButton === 1 ?
                                filterCardsByType("quiz") :
                                clickButton === 2 ?
                                filterCardsByType("course") : cards
                            }
                        />
                    )
                }

            </Container>

        </div>
    );
};

export default AdminPanel;