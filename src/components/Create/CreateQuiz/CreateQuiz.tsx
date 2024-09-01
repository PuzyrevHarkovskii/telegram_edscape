import { FC } from 'react';
import "./CreateQuiz.scss"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import CreateQuizBlock from "./CreateQuizBlock/CreateQuizBlock";
import { CreateQuizOperationType, HandleCreateQuizOperationType } from "../../@types/createQuizTypes";
import {
    addQuizAnswerItem,
    addQuizItem,
    changeQuizAnswerItem, changeQuizCardExp, changeQuizCardSrc, changeQuizCardTitle,
    changeQuizCorrectItem,
    changeQuizQuestionItem,
    changeQuizSeconds,
    changeQuizTimer,
    changeQuizType,
    removeQuizAnswerItem,
    removeQuizItem,
    resetStateQuiz
} from "../../../redux/slices/createQuizSlice";
import { QUIZ_TYPE } from "../../../redux/types/createCourseTypes";
import Container from "../../@UI/Container/Container";
import CreateCard from "../CreateCard/CreateCard";
import CreateWrapper from "../@Create/CreateWrapper/CreateWrapper";
import CreateBackButton from "../@Create/@Buttons/CreateBackButton/CreateBackButton";
import CreateCrud from "../@Create/CreateCrud/CreateCrud";

interface ICreateQuiz {
    change: boolean
}

const CreateQuiz: FC<ICreateQuiz> = (
    {
        change
    }) => {

    const dispatch = useAppDispatch()
    const { card, steps } = useAppSelector(state => state.createQuiz)

    // const {data} = cardAPI.useFetchAllCardsQuery()
    // console.log(data)

    const handleCreateQuizOperation = (args: HandleCreateQuizOperationType): void => {
        const { operationType, args: operationArgs } = args;

        switch (operationType) {
            case CreateQuizOperationType.ResetStateQuizType:
                dispatch(resetStateQuiz());
                break;
            case CreateQuizOperationType.ChangeQuizCardSrc:
                dispatch(changeQuizCardSrc(operationArgs));
                break;
            case CreateQuizOperationType.ChangeQuizCardTitle:
                dispatch(changeQuizCardTitle(operationArgs));
                break;
            case CreateQuizOperationType.ChangeQuizCardExp:
                dispatch(changeQuizCardExp(operationArgs));
                break;
            case CreateQuizOperationType.AddQuizItem:
                dispatch(addQuizItem());
                break;
            case CreateQuizOperationType.RemoveQuizItem:
                dispatch(removeQuizItem(operationArgs));
                break;
            case CreateQuizOperationType.ChangeQuizQuestionItem:
                dispatch(changeQuizQuestionItem(operationArgs));
                break;
            case CreateQuizOperationType.AddQuizAnswerItem:
                dispatch(addQuizAnswerItem(operationArgs));
                break;
            case CreateQuizOperationType.RemoveQuizAnswerItem:
                dispatch(removeQuizAnswerItem(operationArgs));
                break;
            case CreateQuizOperationType.ChangeQuizAnswerItem:
                dispatch(changeQuizAnswerItem(operationArgs));
                break;
            case CreateQuizOperationType.ChangeQuizCorrectItem:
                dispatch(changeQuizCorrectItem(operationArgs));
                break;
            case CreateQuizOperationType.ChangeQuizType:
                dispatch(changeQuizType(operationArgs));
                break;
            case CreateQuizOperationType.ChangeQuizTimer:
                dispatch(changeQuizTimer(operationArgs));
                break;
            case CreateQuizOperationType.ChangeQuizSeconds:
                dispatch(changeQuizSeconds(operationArgs));
                break;
            default:
                break;
        }
    };

    return (
        <Container>

            <CreateBackButton>
                Вернуться назад
            </CreateBackButton>

            <CreateCard
                type={"quiz"}
                cardQuiz={card}
                handleCreateQuizOperation={handleCreateQuizOperation}
            />

            {steps.map((item, index) =>
                <CreateQuizBlock
                    key={item.id}
                    stepNumber={index + 1}
                    item={item}
                    handleCreateQuizOperation={handleCreateQuizOperation}
                    type={QUIZ_TYPE}
                />
            )}

            <CreateWrapper>
                <button
                    onClick={() => handleCreateQuizOperation({
                        operationType: CreateQuizOperationType.AddQuizItem,
                        args: {}
                    })
                    }
                    className="create-quiz__button add-step"
                >
                    +
                </button>
            </CreateWrapper>

            {/*<CreateQuizBottom/>*/}

            <CreateCrud
                card={card}
                steps={steps}
                change={change}
                handleCreateQuizOperation={handleCreateQuizOperation}
            />

        </Container>
    );
};

export default CreateQuiz;