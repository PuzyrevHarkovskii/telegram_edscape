import { FC} from 'react';
import "./CreateQuizQuestion.scss"
import CreateWrapperTextarea from "../../@Create/CreateWrapperTextarea/CreateWrapperTextarea";
import CreateWrapper from "../../@Create/CreateWrapper/CreateWrapper";
import {getResultPlaceholder} from "../../CreateCourse/CreateCourse";
import {QUESTION_TYPE} from "../../../../redux/types/createCourseTypes";

interface ICreateQuizQuestionProps {
    stepNumber: number
    question: string
    onChangeQuestion: (text: string) => void
}

const CreateQuizQuestion: FC<ICreateQuizQuestionProps> = (
    {
        stepNumber, question, onChangeQuestion
    }) => {
    return (
        <CreateWrapper>
            <CreateWrapperTextarea
                objNumber={stepNumber}
                value={question}
                onChange={onChangeQuestion}
                placeholder={getResultPlaceholder(QUESTION_TYPE)}
            />
        </CreateWrapper>
    );
};

export default CreateQuizQuestion;