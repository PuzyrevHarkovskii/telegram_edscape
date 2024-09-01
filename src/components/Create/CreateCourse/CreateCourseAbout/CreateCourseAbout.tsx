import {FC} from 'react';
import "./CreateCourseAbout.scss"
import CreateBlock from "../../@Create/CreateBlock/CreateBlock";
import CreateWrapper from "../../@Create/CreateWrapper/CreateWrapper";
import CreateButton from "../../@Create/@Buttons/CreateButton/CreateButton";
import {
    IItem,
    IItemType,
    IMAGE_TYPE,
    TEXT_TYPE,
    TITLE_TYPE,
    VIDEO_TYPE
} from "../../../../redux/types/createCourseTypes";
import {CreateCourseOperationType, HandleCreateCourseOperationType} from "../../../@types/createCourseTypes";
import CreateFlex from "../../@Create/CreateFlex/CreateFlex";
import CreateHeader from "../../@Create/CreateHeader/CreateHeader";
import CreateCourseAboutItem from "./CreateCourseAboutItem/CreateCourseAboutItem";

interface ICreateCourseAboutButtons {
    backgroundColor: string,
    itemType: IItemType,
    text: string,
    operationType: CreateCourseOperationType,
    args: {
        itemType: IItemType
    }
}

const buttons: ICreateCourseAboutButtons[] = [
    {
        backgroundColor: "royalblue",
        itemType: TITLE_TYPE,
        text: "Title",
        operationType: CreateCourseOperationType.AddAboutItem,
        args: {
            itemType: TITLE_TYPE
        }
    },
    {
        backgroundColor: "lightgreen",
        itemType: TEXT_TYPE,
        text: "Text",
        operationType: CreateCourseOperationType.AddAboutItem,
        args: {
            itemType: TEXT_TYPE
        }
    },
    {
        backgroundColor: "lightsalmon",
        itemType: IMAGE_TYPE,
        text: "Image",
        operationType: CreateCourseOperationType.AddAboutItem,
        args: {
            itemType: IMAGE_TYPE
        }
    },
    {
        backgroundColor: "lightseagreen",
        itemType: VIDEO_TYPE,
        text: "Video",
        operationType: CreateCourseOperationType.AddAboutItem,
        args: {
            itemType: VIDEO_TYPE
        }
    },
]

interface ICreateCourseAboutProps {
    about: IItem[],
    handleCreateCourseOperation: (arg: HandleCreateCourseOperationType) => void
}

const CreateCourseAbout: FC<ICreateCourseAboutProps> = ({about, handleCreateCourseOperation}) => {
    return (
        <CreateBlock backgroundColor={"#E54D45"}>

            <CreateHeader
                text={"О Курсе"}
            />

            {about.map((aboutItem, index) =>
                <CreateCourseAboutItem
                    key={aboutItem.id}
                    itemId={aboutItem.id}
                    objNumber={index + 1}
                    value={aboutItem.content}
                    type={aboutItem.type}
                    handleCreateCourseOperation={handleCreateCourseOperation}
                />
            )}

            <CreateWrapper>
                <CreateFlex>
                    {buttons.map((button, index) =>
                        <CreateButton
                            key={index}
                            backgroundColor={button.backgroundColor}
                            onClick={() => handleCreateCourseOperation(
                                {
                                    operationType: CreateCourseOperationType.AddAboutItem,
                                    args: {
                                        itemType: button.itemType
                                    }
                                }
                            )}>
                            {button.text}
                        </CreateButton>
                    )}
                </CreateFlex>
            </CreateWrapper>

        </CreateBlock>

    );
};

export default CreateCourseAbout;