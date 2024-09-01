import React, {FC} from 'react';
import "./CreateButton.scss"

interface ICreateButtonProps {
    backgroundColor: string
    onClick: () => void
    children: React.ReactNode
}

const CreateButton: FC<ICreateButtonProps> = ({ backgroundColor, onClick, children }) => {
    return (
        <button onClick={onClick} style={{backgroundColor: backgroundColor}}
                className="create-button">
            {children}
        </button>
    );
};

export default CreateButton;