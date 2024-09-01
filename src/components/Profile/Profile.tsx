import { useState } from 'react';
import "./Profile.scss"

import ButtonCategory from "../@UI/Buttons/ButtonCategory/ButtonCategory";
import { ICard } from "../../redux/services/cardService";
import CardList from "../@UI/CardList/CardList";

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

const buttons = [
    "Все курсы"
]

const Profile = () => {

    const [clickButton, setClickButton] = useState(0)

    return (
        <div className="profile">

            <div className="profile__inner">

                <div className="profile__user">
                    <div className="container">
                        <div className="profile__user-inner">
                            <div className="profile__user-name">
                                @EdScape |
                            </div>
                            <div className="profile__user-exp">
                                <span className="lightblue">99</span> XP️
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="profile__desc">
                        Приглашай друзей и получай <span className="lightblue">+100</span> XP за каждого нового пользователя!
                    </div>

                    <div className="profile__ref">
                        Твоя реферальная ссылка:
                        <a href="https://t.me/edscape_bot?ref=12345" className="profile__ref-link">
                            https://t.me/edscape_bot?ref=12345
                        </a>
                    </div>

                    {buttons.map((name, index) =>
                        <ButtonCategory
                            key={index}
                            onClick={() => setClickButton(index)}
                            active={clickButton === index}
                        >
                            {name}
                        </ButtonCategory>
                    )}

                    <CardList entry={"user"} cards={cards} />
                </div>

            </div>

        </div>
    );
};

export default Profile;