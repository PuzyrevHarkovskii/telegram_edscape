import React, {useState} from 'react';
import "./AdminPanelStatic.scss"
import ButtonCategory from "../../@UI/Buttons/ButtonCategory/ButtonCategory";
import Arrow from "../../@UI/Icons/Arrow/Arrow";

const staticButtons: string[] = [
    "Квизы",
    "Курсы"
]


const AdminPanelStatic = () => {

    const [clickButton, setClickButton] = useState<number>(0)

    return (
        <div className="admin-panel-static">
            {staticButtons.map((name, index) =>
                <ButtonCategory
                    key={index}
                    onClick={() => setClickButton(index)}
                    active={clickButton === index}
                >
                    {name}
                </ButtonCategory>
            )}

            {clickButton === 0
                ? (
                    <>
                        <div className="admin-panel-quiz-subscription">
                            <div className="admin-panel-quiz-subscription__item">
                                Подписка «Стандарт»
                            </div>
                            <div className="admin-panel-quiz-subscription__item">
                                Оплачен до 31.03.2023
                            </div>
                        </div>

                        <div className="admin-panel-feedback">
                            Чтобы продлить подписку, напишите <span className="lightblue">@EdScape</span>
                        </div>
                    </>
                )
                : (
                    <>

                        <div className="admin-panel-period">
                            <div className="admin-panel-period__title">
                                Период с
                            </div>
                            <div className="admin-panel-period__date">
                                01.03.2023 по 31.03.2023
                            </div>
                        </div>

                        <div className="admin-panel-course__item">
                            <span>Кол-во продаж:</span>
                            <span>32123</span>
                        </div>

                        <div className="admin-panel-course__item">
                            <span>Сумма продаж:</span>
                            <span>3120202 ₽</span>
                        </div>

                        <div className="admin-panel-course__item">
                            <span>Комиссия Edscape (10%):</span>
                            <span>21312 ₽</span>
                        </div>

                        <div className="admin-panel-course__item">
                            <span>Итого к перечеслению:</span>
                            <span>3123122 ₽</span>
                        </div>

                        <div className="admin-panel-feedback">
                            Если у вас возникли вопросы, напишите нам <Arrow fill={"white"} direction={"right"}/> <span className="lightblue">@EdScape</span>
                        </div>
                    </>
                )
            }

        </div>
    );
};

export default AdminPanelStatic;