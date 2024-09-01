import React, {FC, useState} from 'react';
import "./Channel.scss"
import {Cross} from "../Icons";

const Channel: FC = () => {

    const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false)

    return (
        <>

            <div
                onClick={() => setIsActiveMenu(!isActiveMenu)}
                className="channel">

                <div className="channel__inner">

                    <div className="channel__item">

                        <img className="channel__img"
                             src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/fragment-of-colorized-one-hundred-u-s-dollar-bill-100-u-s-d-pop-art-serge-averbukh.jpg" alt="img"/>

                        <div className="channel__content">
                            <div className="channel__title">
                                Аналитик В ТГ
                            </div>
                            <div className="channel__subscribers">
                                <div className="channel__numbers">
                                    371 569
                                </div>
                                <div className="channel__text">
                                    подписчиков
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="channel__item">
                        <svg
                            width="24"
                            height="14"
                            viewBox="0 0 24 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.40576 2L12.4058 12L22.4058 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>

                </div>

            </div>

            {/*{isActiveMenu &&*/}
            {/*    <div className="channel__menu">*/}
            {/*        123*/}
            {/*    </div>*/}
            {/*}*/}

        </>
    );
};

export default Channel;