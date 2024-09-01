import {FC} from 'react';
import "./CreateCard.scss"
import CreateBlock from "../@Create/CreateBlock/CreateBlock";
import CreateHeader from "../@Create/CreateHeader/CreateHeader";
import CreateWrapper from "../@Create/CreateWrapper/CreateWrapper";
import CreateTextarea from "../@Create/CreateWrapperTextarea/CreateTextarea/CreateTextarea";
import {CreateQuizOperationType, HandleCreateQuizOperationType} from "../../@types/createQuizTypes";
import {ICardGeneral} from "../../@types/cardItemTypes";
import CreateFlex from "../@Create/CreateFlex/CreateFlex";
import {HandleCreateCourseOperationType} from "../../@types/createCourseTypes";
import CreateCardCourse from "./CreateCardCourse/CreateCardCourse";

interface ICreateCardProps {
    type: "quiz" | "course"
    cardQuiz?: ICardGeneral
    handleCreateQuizOperation?: (args: HandleCreateQuizOperationType) => void
    cardCourse?: ICardGeneral
    handleCreateCourseOperation?: (args: HandleCreateCourseOperationType) => void
}

const CreateCard: FC<ICreateCardProps> = (
    {
        type,
        cardQuiz,
        handleCreateQuizOperation,
        cardCourse,
        handleCreateCourseOperation
    }) => {

    return (
        <CreateBlock backgroundColor={"yellowgreen"}>
            {type === "course"
                ? (
                    <CreateCardCourse
                        cardCourse={cardCourse}
                        handleCreateCourseOperation={handleCreateCourseOperation}
                    />
                )
                : (
                    <>
                        <CreateHeader
                            text={"Карточка Quiz:"}
                        />
                        <CreateWrapper>
                            <CreateTextarea
                                value={cardQuiz?.title ?? ""}
                                onChange={(text) => handleCreateQuizOperation && handleCreateQuizOperation(
                                    {
                                        operationType: CreateQuizOperationType.ChangeQuizCardTitle,
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
                                value={cardQuiz?.src ?? ""}
                                onChange={(text) => handleCreateQuizOperation && handleCreateQuizOperation(
                                    {
                                        operationType: CreateQuizOperationType.ChangeQuizCardSrc,
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
                                    value={String(cardQuiz?.exp) ?? ""}
                                    onChange={(text) => handleCreateQuizOperation && handleCreateQuizOperation(
                                        {
                                            operationType: CreateQuizOperationType.ChangeQuizCardExp,
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
                    </>
                )
            }

        </CreateBlock>
    );
};

export default CreateCard;