import {FC} from 'react';
import "./CreateCourse.scss"
import Container from "../../@UI/Container/Container";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import {
    changeCourseCardExp,
    changeCourseCardPrice,
    changeCourseCardSrc,
    changeCourseCardTitle,
    addAboutItem,
    addProgramsBasicItem,
    addProgramsItem,
    addProgramsMainItem,
    addProgramsQuizAnswerItem,
    addProgramsQuizItem,
    changeAboutItem,
    changeProgramsItem,
    changeProgramsQuizAnswerItem,
    changeProgramsQuizCorrectItem,
    changeProgramsQuizQuestionItem,
    changeProgramsQuizSecondsItem,
    changeProgramsQuizTimerItem,
    changeProgramsQuizTypeItem,
    removeAboutItem,
    removeProgramsBasicItem,
    removeProgramsItem,
    removeProgramsMainItem,
    removeProgramsQuizAnswerItem, changeCourseCardIsBuy
} from "../../../redux/slices/createCourseSlice";
import CreateCourseAbout from "./CreateCourseAbout/CreateCourseAbout";
import CreateCoursePrograms from "./CreateCoursePrograms/CreateCoursePrograms";
import {
    ANSWER_TYPE,
    IItemType,
    IMAGE_TYPE, QUESTION_TYPE,
    TEXT_TYPE,
    TITLE_TYPE,
    VIDEO_TYPE
} from "../../../redux/types/createCourseTypes";
import CreateCard from "../CreateCard/CreateCard";
import {CreateCourseOperationType, HandleCreateCourseOperationType} from "../../@types/createCourseTypes";
import {cardAPI} from "../../../redux/services/cardService";
import CreateBackButton from "../@Create/@Buttons/CreateBackButton/CreateBackButton";
import CreateCrud from '../@Create/CreateCrud/CreateCrud';

export const getResultPlaceholder = (type: IItemType): string => {
    switch (type) {
        case TITLE_TYPE:
            return "Заголовок"
        case TEXT_TYPE:
            return "Текст"
        case IMAGE_TYPE:
            return "Ссылка на картинку"
        case VIDEO_TYPE:
            return "Ссылка на видео"
        case QUESTION_TYPE:
            return "Задайте вопрос"
        case ANSWER_TYPE:
            return "Добавить ответ..."
        default:
            return ""
    }
}

interface ICreateCourse {
    change: boolean
}

const CreateCourse: FC<ICreateCourse> = ({change}) => {

    const dispatch = useAppDispatch()
    const {card, about, programs} = useAppSelector(state => state.createCourse)
    const [createCard, {isLoading, isError}] = cardAPI.useCreateCardMutation()

    // const params = useParams<{ id?: string }>()
    // const id = params.id ? params.id : ""
    //
    // const {data: changeCard, isLoading, isError} = cardAPI.useFindOneCardQuery(id);
    //
    // useEffect(() => {
    //     if (changeCard) {
    //         handleCreateCourseOperation(
    //             {
    //                 operationType: CreateCourseOperationType.ChangeCourseCardTitle,
    //                 args: {
    //                     title: "werqw"
    //                 }
    //             }
    //         )
    //     }
    //     console.log(params.id)
    //     console.log(changeCard)
    //     // card, dispatch
    // }, [changeCard])

    const handleCreateCourse = async () => {
        await createCard(card)
    }

    const handleCreateCourseOperation = (args: HandleCreateCourseOperationType): void => {
        const {operationType, args: operationArgs} = args;

        switch (operationType) {
            case CreateCourseOperationType.ChangeCourseCardSrc:
                dispatch(changeCourseCardSrc(operationArgs));
                break;
            case CreateCourseOperationType.ChangeCourseCardTitle:
                dispatch(changeCourseCardTitle(operationArgs));
                break;
            case CreateCourseOperationType.ChangeCourseCardExp:
                dispatch(changeCourseCardExp(operationArgs));
                break;
            case CreateCourseOperationType.ChangeCourseCardIsBuy:
                dispatch(changeCourseCardIsBuy(operationArgs));
                break;
            case CreateCourseOperationType.ChangeCourseCardPrice:
                dispatch(changeCourseCardPrice(operationArgs));
                break;
            case CreateCourseOperationType.AddAboutItem:
                dispatch(addAboutItem(operationArgs));
                break;
            case CreateCourseOperationType.RemoveAboutItem:
                dispatch(removeAboutItem(operationArgs));
                break;
            case CreateCourseOperationType.ChangeAboutItem:
                dispatch(changeAboutItem(operationArgs));
                break;
            case CreateCourseOperationType.AddProgramsBasicItem:
                dispatch(addProgramsBasicItem());
                break;
            case CreateCourseOperationType.RemoveProgramsBasicItem:
                dispatch(removeProgramsBasicItem(operationArgs));
                break;
            case CreateCourseOperationType.AddProgramsMainItem:
                dispatch(addProgramsMainItem(operationArgs));
                break;
            case CreateCourseOperationType.RemoveProgramsMainItem:
                dispatch(removeProgramsMainItem(operationArgs));
                break;
            case CreateCourseOperationType.AddProgramsItem:
                dispatch(addProgramsItem(operationArgs));
                break;
            case CreateCourseOperationType.RemoveProgramsItem:
                dispatch(removeProgramsItem(operationArgs));
                break;
            case CreateCourseOperationType.ChangeProgramsItem:
                dispatch(changeProgramsItem(operationArgs));
                break;
            case CreateCourseOperationType.AddProgramsQuizItem:
                dispatch(addProgramsQuizItem(operationArgs));
                break;
            case CreateCourseOperationType.ChangeProgramsQuizQuestionItem:
                dispatch(changeProgramsQuizQuestionItem(operationArgs));
                break;
            case CreateCourseOperationType.AddProgramsQuizAnswerItem:
                dispatch(addProgramsQuizAnswerItem(operationArgs));
                break;
            case CreateCourseOperationType.RemoveProgramsQuizAnswerItem:
                dispatch(removeProgramsQuizAnswerItem(operationArgs));
                break;
            case CreateCourseOperationType.ChangeProgramsQuizAnswerItem:
                dispatch(changeProgramsQuizAnswerItem(operationArgs));
                break;
            case CreateCourseOperationType.ChangeProgramsQuizCorrectItem:
                dispatch(changeProgramsQuizCorrectItem(operationArgs));
                break;
            case CreateCourseOperationType.ChangeProgramsQuizTypeItem:
                dispatch(changeProgramsQuizTypeItem(operationArgs));
                break;
            case CreateCourseOperationType.ChangeProgramsQuizTimerItem:
                dispatch(changeProgramsQuizTimerItem(operationArgs));
                break;
            case CreateCourseOperationType.ChangeProgramsQuizSecondsItem:
                dispatch(changeProgramsQuizSecondsItem(operationArgs));
                break;
            default:
                break;
        }
    };

    return (
        <div className="create-course">
            <Container>

                <CreateBackButton>
                    Вернуться назад
                </CreateBackButton>

                <CreateCrud
                    card={card}
                    createCard={createCard}
                    change={change}
                />

                <CreateCard
                    type={"course"}
                    cardCourse={card}
                    handleCreateCourseOperation={handleCreateCourseOperation}
                />

                <CreateCourseAbout
                    about={about}
                    handleCreateCourseOperation={handleCreateCourseOperation}
                />

                <CreateCoursePrograms
                   programs={programs}
                   handleCreateCourseOperation={handleCreateCourseOperation}
                />

                {/* <CreateCrud change={change}/> */}

            </Container>
        </div>
    );
};

export default CreateCourse;