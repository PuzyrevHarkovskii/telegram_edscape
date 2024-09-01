import {FC} from 'react';
import CreateWrapperTextarea from "../../../@Create/CreateWrapperTextarea/CreateWrapperTextarea";
import {CreateCourseOperationType, HandleCreateCourseOperationType} from "../../../../@types/createCourseTypes";
import CreateWrapper from "../../../@Create/CreateWrapper/CreateWrapper";
import {getResultPlaceholder} from "../../CreateCourse";
import {IItemType} from "../../../../../redux/types/createCourseTypes";

interface ICreateCourseAboutItemProps {
    itemId: string
    objNumber: number
    value: string
    type: IItemType
    handleCreateCourseOperation: (arg: HandleCreateCourseOperationType) => void
}

const CreateCourseAboutItem: FC<ICreateCourseAboutItemProps> = (
    {
        itemId, objNumber, value, type,handleCreateCourseOperation
    }) => {
    return (
        <CreateWrapper>
            <CreateWrapperTextarea
                objNumber={objNumber}
                value={value}
                onChange={(text) =>
                    handleCreateCourseOperation(
                        {
                            operationType: CreateCourseOperationType.ChangeAboutItem,
                            args: {
                                basicId: itemId,
                                itemText: text
                            }
                        }
                    )
                }
                placeholder={getResultPlaceholder(type)}
                onClickRemove={() =>
                    handleCreateCourseOperation(
                        {
                            operationType: CreateCourseOperationType.RemoveAboutItem,
                            args: {
                                itemId: itemId
                            }
                        }
                    )}
            />
        </CreateWrapper>
    );
};

export default CreateCourseAboutItem;