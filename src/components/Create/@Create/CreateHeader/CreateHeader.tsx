import {FC} from 'react';
import "./CreateHeader.scss"
import CreateFlex from "../CreateFlex/CreateFlex";
import CreateWrapper from "../CreateWrapper/CreateWrapper";

interface ICreateHeaderProps {
    numberStart?: number
    numberBasic?: number
    text: string
    onClickRemove?: () => void
}

const CreateHeader: FC<ICreateHeaderProps> = ({ numberStart, numberBasic, text, onClickRemove }) => {
    return (
        <CreateWrapper>
            <CreateFlex>
                <h2>
                    {text}
                </h2>
                {((onClickRemove && numberBasic ? numberBasic : 0) > (numberStart ? numberStart : 1)) &&
                    <button onClick={onClickRemove}>
                        ❌
                    </button>
                }
            </CreateFlex>
        </CreateWrapper>
    );
};

export default CreateHeader;