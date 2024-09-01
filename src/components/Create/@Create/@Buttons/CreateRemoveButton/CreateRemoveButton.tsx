import React, {FC} from 'react';
import "./CreateRemoveButton.scss"

interface ICreateRemoveButtonProps {
    onClick: () => void
    children: React.ReactNode
}

const CreateRemoveButton: FC<ICreateRemoveButtonProps> = (
    {
        onClick,
        children
    }) => {
    return (
        <button onClick={onClick} className="create-remove-button">
            {children}
        </button>
    );
};

export default CreateRemoveButton;