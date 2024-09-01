import React, {FC} from 'react';
import "./CreateWrapper.scss"

interface ICreateWrapperProps {
    children: React.ReactNode
}

const CreateWrapper: FC<ICreateWrapperProps> = ({ children }) => {
    return (
        <div className="create-wrapper">
            {children}
        </div>
    );
};

export default CreateWrapper;