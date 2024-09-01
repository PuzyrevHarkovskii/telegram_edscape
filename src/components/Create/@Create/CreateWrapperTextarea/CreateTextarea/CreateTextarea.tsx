import {ChangeEvent, FC} from 'react';
import "./CreateTextarea.scss"
import TextareaAutosize from 'react-textarea-autosize';

interface ICreateTextareaProps {
    value: string
    onChange: (arg: string) => void
    placeholder: string
    remove: boolean
}

const CreateTextarea: FC<ICreateTextareaProps> = (
    {
        value,
        onChange,
        placeholder,
        remove
    }) => {

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }

    return (
        <TextareaAutosize
            className={`create-textarea ${ remove ? "remove" : ""}`}
            value={value}
            onChange={e => handleChange(e)}
            placeholder={placeholder}
        />
    );
};

export default CreateTextarea;