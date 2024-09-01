import {FC} from 'react';
import "./CreateQuizAnswer.scss"
import {CHECKBOX_TYPE, RADIO_TYPE} from "../CreateQuizBlock/CreateQuizBlock";
import {ICorrects, ISteps} from "../../../../redux/types/createQuizTypes";
import CreateWrapperTextarea from "../../@Create/CreateWrapperTextarea/CreateWrapperTextarea";
import {getResultPlaceholder} from "../../CreateCourse/CreateCourse";
import {ANSWER_TYPE, IItem} from "../../../../redux/types/createCourseTypes";
import CreateWrapper from "../../@Create/CreateWrapper/CreateWrapper";

interface ICreateQuizAnswerProps {
    stepNumber: number
    item: IItem | ISteps
    answerId: string
    answer: string
    type: string
    onChangeAnswer: (text: string) => void
    onClickCorrects: () => void,
    onClickRemove: () => void
}

const CreateQuizAnswer: FC<ICreateQuizAnswerProps> = (
    {
        stepNumber,
        item,
        answerId,
        answer,
        type,
        onClickCorrects,
        onChangeAnswer,
        onClickRemove
    }) => {

    const checkedCorrectType = (corrects: ICorrects[] | undefined, answerId: string, type: string) => {
        if (corrects?.length) {
            if (type === RADIO_TYPE) {
                if (corrects[0].id === answerId) {
                    return true
                }
            } else if (type === CHECKBOX_TYPE) {
                for (let val of corrects) {
                    if (val.id === answerId) {
                        return true
                    }
                }
            }
        }

        return false
    }

    return (
        <>
            <div className="create-quiz-answer">
                <input
                    readOnly
                    checked={checkedCorrectType(item.quiz?.corrects, answerId, type)}
                    onClick={onClickCorrects}
                    className="create-quiz-answer__type"
                    type={type}
                />
                <CreateWrapper>
                    <CreateWrapperTextarea
                        objNumber={stepNumber}
                        value={answer}
                        onChange={onChangeAnswer}
                        placeholder={getResultPlaceholder(ANSWER_TYPE)}
                        onClickRemove={onClickRemove}
                    />
                </CreateWrapper>
            </div>
        </>
    );
};

export default CreateQuizAnswer;