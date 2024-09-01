import {FC} from 'react';
import CreateHeader from "../../@Create/CreateHeader/CreateHeader";
import CreateWrapper from "../../@Create/CreateWrapper/CreateWrapper";
import CreateTextarea from "../../@Create/CreateWrapperTextarea/CreateTextarea/CreateTextarea";
import {CreateCourseOperationType, HandleCreateCourseOperationType} from "../../../@types/createCourseTypes";
import CreateFlex from "../../@Create/CreateFlex/CreateFlex";
import {ICardGeneral} from "../../../@types/cardItemTypes";

interface ICreateCardCourseProps {
    cardCourse?: ICardGeneral
    handleCreateCourseOperation?: (args: HandleCreateCourseOperationType) => void
}

const CreateCardCourse: FC<ICreateCardCourseProps> = (
    {
        cardCourse,
        handleCreateCourseOperation
    }) => {
    return (
        <>
            <CreateHeader
                text={"Карточка Course:"}
            />
            <CreateWrapper>
                <CreateTextarea
                    value={cardCourse?.title ?? ""}
                    onChange={(text) => handleCreateCourseOperation && handleCreateCourseOperation(
                        {
                            operationType: CreateCourseOperationType.ChangeCourseCardTitle,
                            args: {
                                title: text
                            }
                        }
                    )}
                    placeholder={"Напишите заголовок"}
                    remove={true}
                />
            </CreateWrapper>
            <CreateWrapper>
                <CreateTextarea
                    value={cardCourse?.src ?? ""}
                    onChange={(text) => handleCreateCourseOperation && handleCreateCourseOperation(
                        {
                            operationType: CreateCourseOperationType.ChangeCourseCardSrc,
                            args: {
                                src: text
                            }
                        }
                    )}
                    placeholder={"Напишите ссылку на картинку"}
                    remove={true}
                />
            </CreateWrapper>
            <CreateWrapper>
                <CreateFlex>
                    Количество опыта:
                    <CreateTextarea
                        value={String(cardCourse?.exp) ?? ""}
                        onChange={(text) => handleCreateCourseOperation && handleCreateCourseOperation(
                            {
                                operationType: CreateCourseOperationType.ChangeCourseCardExp,
                                args: {
                                    exp: Number(text.replace(/\D/g, ""))
                                }
                            }
                        )}
                        placeholder={"Напишите количество опыта"}
                        remove={true}
                    />
                </CreateFlex>
            </CreateWrapper>
            <CreateWrapper>
                Платный курс?:
                <input
                    onChange={(text) => handleCreateCourseOperation && handleCreateCourseOperation(
                        {
                            operationType: CreateCourseOperationType.ChangeCourseCardIsBuy,
                            args: {
                                isBuy: cardCourse ? cardCourse?.isBuy : false
                            }
                        }
                    )}
                    type="checkbox"
                />
            </CreateWrapper>
            {cardCourse?.isBuy &&
                <CreateWrapper>
                    <CreateFlex>
                        Текущая цена:
                        <CreateTextarea
                            value={String(cardCourse?.price ?? "")}
                            onChange={(text) => handleCreateCourseOperation && handleCreateCourseOperation(
                                {
                                    operationType: CreateCourseOperationType.ChangeCourseCardPrice,
                                    args: {
                                        price: Number(text.replace(/\D/g, ""))
                                    }
                                }
                            )}
                            placeholder={"Напишите цену:"}
                            remove={true}
                        />
                    </CreateFlex>
                </CreateWrapper>
            }
        </>
    );
};

export default CreateCardCourse;