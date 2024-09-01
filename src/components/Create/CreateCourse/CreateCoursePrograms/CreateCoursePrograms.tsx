import {FC} from 'react';
import "./CreateCoursePrograms.scss"
import CreateBlock from "../../@Create/CreateBlock/CreateBlock";
import CreateWrapper from "../../@Create/CreateWrapper/CreateWrapper";
import CreateButton from "../../@Create/@Buttons/CreateButton/CreateButton";
import {IPrograms} from "../../../../redux/types/createCourseTypes";
import CreateHeader from "../../@Create/CreateHeader/CreateHeader";
import {CreateCourseOperationType, HandleCreateCourseOperationType} from "../../../@types/createCourseTypes";
import CreateCourseMain from "./CreateCourseMain/CreateCourseMain";

interface ICreateCourseProgramsProps {
    programs: IPrograms[]
    handleCreateCourseOperation: (arg: HandleCreateCourseOperationType) => void
}

const CreateCoursePrograms: FC<ICreateCourseProgramsProps> = (
    {
        programs,
        handleCreateCourseOperation
    }) => {
    return (
        <CreateBlock backgroundColor={"#5186EF"}>

            <CreateHeader
                text={"Элементы курса"}
            />

            <CreateCourseMain
                programs={programs}
                handleCreateCourseOperation={handleCreateCourseOperation}
            />

            <CreateWrapper>
                <CreateButton
                    backgroundColor={"green"}
                    onClick={() => handleCreateCourseOperation(
                        {
                            operationType: CreateCourseOperationType.AddProgramsBasicItem,
                            args: {}
                        }
                    )
                    }
                >
                    Добавить Main
                </CreateButton>
            </CreateWrapper>

        </CreateBlock>
    );
};

export default CreateCoursePrograms;