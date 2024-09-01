import {FC} from 'react';
import "./CreateCourseMain.scss"
import CreateBlock from "../../../@Create/CreateBlock/CreateBlock";
import {IPrograms, QUIZ_TYPE, THEORY_TYPE} from "../../../../../redux/types/createCourseTypes";
import {CreateCourseOperationType, HandleCreateCourseOperationType} from "../../../../@types/createCourseTypes";
import CreateHeader from "../../../@Create/CreateHeader/CreateHeader";
import CreateCourseItem from "../CreateCourseItem/CreateCourseItem";
import CreateFlex from "../../../@Create/CreateFlex/CreateFlex";
import CreateButton from "../../../@Create/@Buttons/CreateButton/CreateButton";
import CreateWrapper from "../../../@Create/CreateWrapper/CreateWrapper";

interface ICreateCourseMainListProps {
    programs: IPrograms[]
    handleCreateCourseOperation: (arg: HandleCreateCourseOperationType) => void
}

const CreateCourseMain: FC<ICreateCourseMainListProps> = (
    {
        programs ,
        handleCreateCourseOperation
    }) => {
    return (
        <>
            {programs.map((program, indexMain) =>

                <CreateBlock key={program.id} backgroundColor={"#518432"}>

                    <CreateHeader
                        numberBasic={indexMain + 1}
                        text={`${indexMain + 1} Анализ данных`}
                        onClickRemove={() => handleCreateCourseOperation({
                                operationType: CreateCourseOperationType.RemoveProgramsBasicItem,
                                args: {basicId: program.id}
                        })}
                    />

                    {program.main.map((item, indexItem) =>
                        <CreateCourseItem
                            key={item.id}
                            mainType={item.type}
                            basicId={program.id}
                            mainId={item.id}
                            indexMain={indexMain}
                            indexItem={indexItem}
                            main={item}
                            handleCreateCourseOperation={handleCreateCourseOperation}
                        />
                    )}


                    <CreateWrapper>
                        <CreateFlex>
                            <CreateButton
                                backgroundColor={"green"}
                                onClick={() => handleCreateCourseOperation(
                                    {
                                        operationType: CreateCourseOperationType.AddProgramsMainItem,
                                        args: {
                                            basicId: program.id,
                                            mainType: THEORY_TYPE
                                        }
                                    }
                                )}>
                                Добавить Theory
                            </CreateButton>
                            <CreateButton
                                backgroundColor={"green"}
                                onClick={() => handleCreateCourseOperation(
                                    {
                                        operationType: CreateCourseOperationType.AddProgramsMainItem,
                                        args: {
                                            basicId: program.id,
                                            mainType: QUIZ_TYPE
                                        }
                                    }
                                )}>
                                Добавить Quiz
                            </CreateButton>
                        </CreateFlex>
                    </CreateWrapper>


                </CreateBlock>

            )}
        </>
    );
};

export default CreateCourseMain;