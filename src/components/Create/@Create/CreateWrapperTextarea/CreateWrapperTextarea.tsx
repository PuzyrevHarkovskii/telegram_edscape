import {FC} from 'react';
import "./CreateWrapperTextarea.scss"
import CreateTextarea from "./CreateTextarea/CreateTextarea";
import CreateRemoveButton from "../@Buttons/CreateRemoveButton/CreateRemoveButton";

interface ICreateWrapperTextareaProps {
    value: string
    objNumber: number
    onChange: (arg: string) => void
    placeholder: string
    onClickRemove?: (...keys: string[]) => void
}

const CreateWrapperTextarea: FC<ICreateWrapperTextareaProps> = (
    {
       value,
        objNumber,
       onChange,
       placeholder,
        onClickRemove
    }) => {
    return (
        <div className="create-wrapper-textarea">
            <CreateTextarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                remove/>
            {objNumber > 2 && onClickRemove &&
                <CreateRemoveButton
                    onClick={onClickRemove}
                >
                    ❌
                </CreateRemoveButton>
            }
        </div>
    );
};

export default CreateWrapperTextarea;