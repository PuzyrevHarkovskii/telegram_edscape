import {FC} from 'react';
import "./CreateQuizStep.scss"

interface ICreateQuizStepProps {
    stepNumber: number
}

const CreateQuizStep: FC<ICreateQuizStepProps> = ({ stepNumber }) => {
    return (
        <div className="create-quiz-block__step">
            Шаг {stepNumber}
        </div>
    );
};

export default CreateQuizStep;