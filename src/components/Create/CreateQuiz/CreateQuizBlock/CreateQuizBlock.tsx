import {FC} from 'react';
import "./CreateQuizBlock.scss"
import CreateWrapper from "../../@Create/CreateWrapper/CreateWrapper";
import CreateBlock from "../../@Create/CreateBlock/CreateBlock";
import {ISteps} from "../../../../redux/types/createQuizTypes";
import {CreateQuizOperationType, HandleCreateQuizOperationType} from "../../../@types/createQuizTypes";
import CreateHeader from "../../@Create/CreateHeader/CreateHeader";
import {
    CreateCourseOperationType,
    HandleCreateCourseOperationType, TCreateQuizType
} from "../../../@types/createCourseTypes";
import {IItem} from "../../../../redux/types/createCourseTypes";
import CreateQuizQuestion from "../CreateQuizQuestion/CreateQuizQuestion";
import CreateQuizAnswer from "../CreateQuizAnswer/CreateQuizAnswer";
import CreateQuizType from "../CreateQuizType/CreateQuizType";

interface ICreateQuizBlockProps {
    stepNumber: number
    item: IItem | ISteps
    handleCreateQuizOperation?: (args: HandleCreateQuizOperationType) => void
    basicId?: string
    mainId?: string
    itemId?: string
    type: TCreateQuizType
    handleCreateCourseOperation?: (args: HandleCreateCourseOperationType) => void
}

export const RADIO_TYPE = "radio"
export const CHECKBOX_TYPE = "checkbox"

const CreateQuizBlock: FC<ICreateQuizBlockProps> = (
    {
        stepNumber,
        item,
        handleCreateQuizOperation,
        basicId,
        mainId,
        itemId,
        type,
        handleCreateCourseOperation
    }) => {
    return (
        <CreateWrapper>
            <CreateBlock backgroundColor={"blue"}>
                {type === "course"
                    ? (
                        <>
                            <CreateHeader
                                numberBasic={stepNumber}
                                text={`Шаг ${stepNumber}`}
                                onClickRemove={() => handleCreateCourseOperation && handleCreateCourseOperation(
                                    {
                                        operationType: CreateCourseOperationType.RemoveProgramsItem,
                                        args: {
                                            basicId: basicId ?? "",
                                            mainId: mainId ?? "",
                                            itemId: itemId ?? ""
                                        }
                                    }
                                )}
                            />

                            <CreateQuizType
                                basicId={basicId}
                                mainId={mainId}
                                itemId={itemId}
                                contentId={item.id}
                                item={item}
                                type={type}
                                seconds={item.quiz?.timer.seconds}
                                handleCreateCourseOperation={handleCreateCourseOperation}
                            />

                            <CreateQuizQuestion
                                stepNumber={stepNumber}
                                question={item.quiz ? item.quiz.question : ''}
                                onChangeQuestion={(text) => handleCreateCourseOperation && handleCreateCourseOperation(
                                    {
                                        operationType: CreateCourseOperationType.ChangeProgramsQuizQuestionItem,
                                        args: {
                                            basicId: basicId ?? "",
                                            mainId: mainId ?? "",
                                            itemId: itemId ?? "",
                                            questionText: text,
                                        }
                                    }
                                )}
                            />

                            <div className="create-quiz-block__answers">
                                {item.quiz?.answers.map(({ id, answer }, index) =>
                                    <CreateQuizAnswer
                                        key={id}
                                        stepNumber={index + 1}
                                        item={item}
                                        answerId={id}
                                        answer={answer}
                                        type={item && item.type}
                                        onClickCorrects={() => handleCreateCourseOperation && handleCreateCourseOperation(
                                            {
                                                operationType: CreateCourseOperationType.ChangeProgramsQuizCorrectItem,
                                                args: {
                                                    basicId: basicId ?? "",
                                                    mainId: mainId ?? "",
                                                    itemId: itemId ?? "",
                                                    stepType: item.type ?? "",
                                                    answerId: id ?? ""
                                                }
                                            }
                                        )}
                                        onChangeAnswer={(text) => handleCreateCourseOperation && handleCreateCourseOperation(
                                            {
                                                operationType: CreateCourseOperationType.ChangeProgramsQuizAnswerItem,
                                                args: {
                                                    basicId: basicId ?? "",
                                                    mainId: mainId ?? "",
                                                    itemId: itemId ?? "",
                                                    answerId: id ?? "",
                                                    answerText: text
                                                }
                                            }
                                        )}
                                        onClickRemove={() => handleCreateCourseOperation && handleCreateCourseOperation(
                                            {
                                                operationType: CreateCourseOperationType.RemoveProgramsQuizAnswerItem,
                                                args: {
                                                    basicId: basicId ?? "",
                                                    mainId: mainId ?? "",
                                                    itemId: itemId ?? "",
                                                    answerId: id ?? ""
                                                }
                                            }
                                        )}
                                    />
                                )}
                            </div>

                            <div className="create-quiz-block__buttons">
                                <button
                                    disabled={item.quiz?.answers.length === 4}
                                    onClick={() => handleCreateCourseOperation && handleCreateCourseOperation(
                                        {
                                            operationType: CreateCourseOperationType.AddProgramsQuizAnswerItem,
                                            args: {
                                                basicId: basicId ?? "",
                                                mainId: mainId ?? "",
                                                itemId: itemId ?? ""
                                            }
                                        }
                                    )}
                                    className="create-quiz-block__button add-answer"
                                >
                                    Добавить ответ
                                </button>
                            </div>

                        </>
                    )
                    : (
                        <>
                            <CreateHeader
                                numberStart={1}
                                text={`Шаг ${stepNumber}`}
                                numberBasic={stepNumber}
                                onClickRemove={() => handleCreateQuizOperation && handleCreateQuizOperation(
                                    {
                                        operationType: CreateQuizOperationType.RemoveQuizItem,
                                        args: {
                                            basicId: item.id
                                        }
                                    })
                            }
                            />

                            <CreateQuizType
                                basicId={basicId}
                                mainId={mainId}
                                itemId={itemId}
                                contentId={item.id}
                                item={item}
                                type={type}
                                seconds={item.quiz?.timer.seconds}
                                handleCreateQuizOperation={handleCreateQuizOperation}
                            />

                            <CreateQuizQuestion
                                stepNumber={stepNumber}
                                question={item.quiz ? item.quiz.question : ''}
                                onChangeQuestion={(text) => handleCreateQuizOperation && handleCreateQuizOperation(
                                    {
                                        operationType: CreateQuizOperationType.ChangeQuizQuestionItem,
                                        args: {
                                            basicId: item.id ?? "",
                                            itemText: text
                                        }
                                    }
                                )}
                            />

                            <div className="create-quiz-block__answers">
                                {item.quiz?.answers.map(({ id, answer }, index) =>
                                    <CreateQuizAnswer
                                        key={id}
                                        stepNumber={index + 1}
                                        item={item}
                                        answerId={id}
                                        answer={answer}
                                        type={item && item.type}
                                        onClickCorrects={() => handleCreateQuizOperation && handleCreateQuizOperation(
                                            {
                                                operationType: CreateQuizOperationType.ChangeQuizCorrectItem,
                                                args: {
                                                    basicId: item.id ?? "",
                                                    itemId: id ?? "",
                                                    basicType: item && item.type === "radio" ? "radio" : "checkbox"
                                                }
                                            }
                                        )}
                                        onChangeAnswer={(text) => handleCreateQuizOperation && handleCreateQuizOperation(
                                            {
                                                operationType: CreateQuizOperationType.ChangeQuizAnswerItem,
                                                args: {
                                                    basicId: item.id ?? "",
                                                    itemId: id ?? "",
                                                    itemText: text
                                                }
                                            }
                                        )}
                                        onClickRemove={() => handleCreateQuizOperation && handleCreateQuizOperation(
                                            {
                                                operationType: CreateQuizOperationType.RemoveQuizAnswerItem,
                                                args: {
                                                    basicId: item.id ?? "",
                                                    itemId: id ?? ""
                                                }
                                            }
                                        )}
                                    />
                                )}
                            </div>

                            <div className="create-quiz-block__buttons">
                                <button
                                    disabled={item.quiz?.answers.length === 4}
                                    onClick={() => handleCreateQuizOperation && handleCreateQuizOperation(
                                        {
                                            operationType: CreateQuizOperationType.AddQuizAnswerItem,
                                            args: {
                                                basicId: item.id ?? ""
                                            }
                                        }
                                    )}
                                    className="create-quiz-block__button add-answer"
                                >
                                    Добавить ответ
                                </button>
                            </div>

                        </>
                    )
                }

            </CreateBlock>
        </CreateWrapper>
    );
};

export default CreateQuizBlock;