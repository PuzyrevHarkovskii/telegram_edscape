import {FC} from 'react';
import CreateBlock from "../../../@Create/CreateBlock/CreateBlock";
import CreateWrapper from "../../../@Create/CreateWrapper/CreateWrapper";
import CreateWrapperTextarea from "../../../@Create/CreateWrapperTextarea/CreateWrapperTextarea";
import {
    IItems,
    IItemType,
    IMAGE_TYPE, IMainType, QUIZ_TYPE,
    TEXT_TYPE,
    TITLE_TYPE,
    VIDEO_TYPE
} from "../../../../../redux/types/createCourseTypes";
import {CreateCourseOperationType, HandleCreateCourseOperationType} from "../../../../@types/createCourseTypes";
import CreateHeader from "../../../@Create/CreateHeader/CreateHeader";
import {getResultPlaceholder} from "../../CreateCourse";
import CreateButton from "../../../@Create/@Buttons/CreateButton/CreateButton";
import CreateFlex from "../../../@Create/CreateFlex/CreateFlex";
import CreateQuizBlock from "../../../CreateQuiz/CreateQuizBlock/CreateQuizBlock";

interface ICreateCourseProgramsButtons {
    backgroundColor: string,
    itemType: IItemType,
    text: string,
    operationType: CreateCourseOperationType,
}

const buttons: ICreateCourseProgramsButtons[] = [
    {
        backgroundColor: "royalblue",
        itemType: TITLE_TYPE,
        text: "Title",
        operationType: CreateCourseOperationType.AddProgramsItem,

    },
    {
        backgroundColor: "lightgreen",
        itemType: TEXT_TYPE,
        text: "Text",
        operationType: CreateCourseOperationType.AddProgramsItem,
    },
    {
        backgroundColor: "lightsalmon",
        itemType: IMAGE_TYPE,
        text: "Image",
        operationType: CreateCourseOperationType.AddProgramsItem,
    },
    {
        backgroundColor: "lightseagreen",
        itemType: VIDEO_TYPE,
        text: "Video",
        operationType: CreateCourseOperationType.AddProgramsItem,
    },
]

interface ICreateCourseItemProps {
    mainType: IMainType
    basicId: string
    mainId: string
    indexMain: number
    indexItem: number
    main: IItems
    handleCreateCourseOperation: (arg: HandleCreateCourseOperationType) => void
}

const CreateCourseItem: FC<ICreateCourseItemProps> = (
    {
        mainType,
        basicId,
        mainId,
        indexMain,
        indexItem,
        main,
        handleCreateCourseOperation
    }) => {
    return (
        <>
            <CreateBlock key={mainId} backgroundColor={"#34eee3"}>

                <CreateHeader
                    numberBasic={indexItem + 1}
                    text={`${indexMain + 1}.${indexItem + 1} Анализ данных`}
                    onClickRemove={() => handleCreateCourseOperation({
                        operationType: CreateCourseOperationType.RemoveProgramsMainItem,
                        args: {
                            basicId: basicId,
                            mainId: mainId
                        }
                    })}
                />

                {main.item.map((obj, index) =>
                    (mainType === QUIZ_TYPE)
                        ? (
                            <CreateQuizBlock
                                key={obj.id}
                                stepNumber={index + 1}
                                item={obj}
                                basicId={basicId}
                                mainId={mainId}
                                itemId={obj.id}
                                type={"course"}
                                handleCreateCourseOperation={handleCreateCourseOperation}
                            />
                        )
                        : (
                            <CreateWrapper key={obj.id}>
                                <CreateWrapperTextarea
                                    objNumber={index + 1}
                                    value={obj.content}
                                    onChange={(text) => handleCreateCourseOperation(
                                        {
                                            operationType: CreateCourseOperationType.ChangeProgramsItem,
                                            args: {
                                                basicId: basicId,
                                                mainId: mainId,
                                                itemId: obj.id,
                                                itemText: text
                                            }
                                        }
                                    )}
                                    placeholder={getResultPlaceholder(obj.type)}
                                    onClickRemove={() => handleCreateCourseOperation(
                                        {
                                            operationType: CreateCourseOperationType.RemoveProgramsItem,
                                            args: {
                                                basicId: basicId,
                                                mainId: mainId,
                                                itemId: obj.id
                                            }
                                        }
                                    )}
                                />
                            </CreateWrapper>
                        )
                )}

                {mainType === QUIZ_TYPE
                    ? (
                        <button
                            onClick={() => handleCreateCourseOperation && handleCreateCourseOperation(
                                {
                                    operationType: CreateCourseOperationType.AddProgramsQuizItem,
                                    args: {
                                        basicId: basicId ?? "",
                                        mainId: mainId ?? ""
                                    }
                                }
                            )}
                            className="create-quiz__button add-step"
                        >
                            +
                        </button>
                    )
                    : (
                    <CreateWrapper>
                        <CreateFlex>
                            {buttons.map((button, index) =>
                                <CreateButton
                                    key={index}
                                    backgroundColor={button.backgroundColor}
                                    onClick={() => handleCreateCourseOperation(
                                        {
                                            operationType: CreateCourseOperationType.AddProgramsItem,
                                            args: {
                                                basicId: basicId,
                                                mainId: mainId,
                                                itemType: button.itemType
                                            }
                                        }
                                    )}>
                                    {button.text}
                                </CreateButton>
                            )}
                        </CreateFlex>
                    </CreateWrapper>
                    )
                }

            </CreateBlock>
        </>
    );
};

export default CreateCourseItem;