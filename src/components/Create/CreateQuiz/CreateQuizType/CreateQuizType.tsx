import { FC} from 'react';
import "./CreateQuizType.scss"
import {CHECKBOX_TYPE, RADIO_TYPE} from "../CreateQuizBlock/CreateQuizBlock";
import CreateWrapper from "../../@Create/CreateWrapper/CreateWrapper";
import {
    CreateCourseOperationType,
    HandleCreateCourseOperationType,
    TCreateQuizType
} from "../../../@types/createCourseTypes";
import {IItem} from "../../../../redux/types/createCourseTypes";
import {ISteps} from "../../../../redux/types/createQuizTypes";
import {CreateQuizOperationType, HandleCreateQuizOperationType} from "../../../@types/createQuizTypes";

interface ICreateQuizTypeProps {
    basicId?: string
    mainId?: string
    itemId?: string
    contentId: string
    item: IItem | ISteps
    type: TCreateQuizType
    seconds: number | undefined
    handleCreateCourseOperation?: (arg: HandleCreateCourseOperationType) => void
    handleCreateQuizOperation?: (arg: HandleCreateQuizOperationType) => void
}

const CreateQuizType: FC<ICreateQuizTypeProps> = (
    {
        basicId,
        mainId,
        itemId,
        contentId,
        item,
        type,
        seconds,
        handleCreateCourseOperation,
        handleCreateQuizOperation
    }) => {

    return (
        <>
            {type === "course"
                ? (
                    <CreateWrapper>
                        <CreateWrapper>
                            <div
                                onClick={() => handleCreateCourseOperation && handleCreateCourseOperation(
                                    {
                                        operationType: CreateCourseOperationType.ChangeProgramsQuizTypeItem,
                                        args: {
                                            basicId: basicId ?? "",
                                            mainId: mainId ?? "",
                                            itemId: itemId ?? "",
                                            stepType: "radio"
                                        }
                                    }
                                )}
                                className="create-quiz-type__item">
                                <input
                                    readOnly
                                    checked={item.type === RADIO_TYPE}
                                    className="create-quiz-type__type"
                                    type="radio"/>
                                <div className="create-quiz-type__text">
                                    Режим викторины
                                </div>
                            </div>
                        </CreateWrapper>
                        <CreateWrapper>
                            <div
                                onClick={() => handleCreateCourseOperation && handleCreateCourseOperation(
                                    {
                                        operationType: CreateCourseOperationType.ChangeProgramsQuizTypeItem,
                                        args: {
                                            basicId: basicId ?? "",
                                            mainId: mainId ?? "",
                                            itemId: itemId ?? "",
                                            stepType: "checkbox"
                                        }
                                    }
                                )}
                                className="create-quiz-type__item">
                                <input
                                    readOnly
                                    checked={item.type === CHECKBOX_TYPE}
                                    className="create-quiz-type__type"
                                    type="radio"/>
                                <div className="create-quiz-type__text">
                                    Выбор нескольких ответов
                                </div>
                            </div>
                        </CreateWrapper>
                        <CreateWrapper>
                            <div className="create-quiz-type__item">
                                <div
                                    onClick={() => handleCreateCourseOperation && handleCreateCourseOperation(
                                        {
                                            operationType: CreateCourseOperationType.ChangeProgramsQuizTimerItem,
                                            args: {
                                                basicId: basicId ?? "",
                                                mainId: mainId ?? "",
                                                itemId: itemId ?? ""
                                            }
                                        }
                                    )}
                                    className="create-quiz-type__item-inner">
                                    <input
                                        readOnly
                                        checked={item.quiz?.timer.isTimer}
                                        className="create-quiz-type__type"
                                        type="checkbox"/>
                                    <div className="create-quiz-type__text">
                                        Таймер:
                                    </div>
                                </div>
                                <input
                                    value={seconds}
                                    onChange={(e) => handleCreateCourseOperation && handleCreateCourseOperation(
                                        {
                                            operationType: CreateCourseOperationType.ChangeProgramsQuizSecondsItem,
                                            args: {
                                                basicId: basicId ?? "",
                                                mainId: mainId ?? "",
                                                itemId: itemId ?? "",
                                                stepSeconds: e.target.value
                                            }
                                        }
                                    )}
                                    type="text"/>
                                <div className="create-quiz-type__text">
                                    ( секунды )
                                </div>
                            </div>
                            {seconds === 0
                                ? <p>* Ограничение от 5 до 300 секунд</p>
                                : (seconds && seconds < 5 || seconds && seconds > 300) &&
                                <p>* Ограничение от 5 до 300 секунд</p>
                            }
                        </CreateWrapper>
                    </CreateWrapper>
                )
                :
                (
                    <CreateWrapper>
                        <CreateWrapper>
                            <div
                                onClick={() => handleCreateQuizOperation && handleCreateQuizOperation(
                                    {
                                        operationType: CreateQuizOperationType.ChangeQuizType,
                                        args: {
                                            basicId: contentId ?? "",
                                            basicType: "radio"
                                        }
                                    }
                                )}
                                className="create-quiz-type__item">
                                <input
                                    readOnly
                                    checked={item.type === RADIO_TYPE}
                                    className="create-quiz-type__type"
                                    type="radio"/>
                                <div className="create-quiz-type__text">
                                    Режим викторины
                                </div>
                            </div>
                        </CreateWrapper>
                        <CreateWrapper>
                            <div
                                onClick={() => handleCreateQuizOperation && handleCreateQuizOperation(
                                    {
                                        operationType: CreateQuizOperationType.ChangeQuizType,
                                        args: {
                                            basicId: contentId,
                                            basicType: "checkbox"
                                        }
                                    }
                                )}
                                className="create-quiz-type__item">
                                <input
                                    readOnly
                                    checked={item.type === CHECKBOX_TYPE}
                                    className="create-quiz-type__type"
                                    type="radio"/>
                                <div className="create-quiz-type__text">
                                    Выбор нескольких ответов
                                </div>
                            </div>
                        </CreateWrapper>
                        <CreateWrapper>
                            <div className="create-quiz-type__item">
                                <div
                                    onClick={() => handleCreateQuizOperation && handleCreateQuizOperation(
                                        {
                                            operationType: CreateQuizOperationType.ChangeQuizTimer,
                                            args: {
                                                basicId: contentId
                                            }
                                        }
                                    )}
                                    className="create-quiz-type__item-inner">
                                    <input
                                        readOnly
                                        checked={item.quiz?.timer.isTimer}
                                        className="create-quiz-type__type"
                                        type="checkbox"/>
                                    <div className="create-quiz-type__text">
                                        Таймер:
                                    </div>
                                </div>
                                <input
                                    value={seconds}
                                    onChange={(e) => handleCreateQuizOperation && handleCreateQuizOperation(
                                        {
                                            operationType: CreateQuizOperationType.ChangeQuizSeconds,
                                            args: {
                                                basicId: contentId,
                                                itemSeconds: e.target.value
                                            }
                                        }
                                    )}
                                    type="text"/>
                                <div className="create-quiz-type__text">
                                    ( секунды )
                                </div>
                            </div>
                            {seconds === 0
                                ? <p>* Ограничение от 5 до 300 секунд</p>
                                : (seconds && seconds < 5 || seconds && seconds > 300) &&
                                <p>* Ограничение от 5 до 300 секунд</p>
                            }
                        </CreateWrapper>
                    </CreateWrapper>
                )
            }
        </>
    );
};

export default CreateQuizType;