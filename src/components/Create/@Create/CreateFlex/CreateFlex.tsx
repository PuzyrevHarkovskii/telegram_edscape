import React, {FC} from 'react';
import "./CreateFlex.scss"

interface ICreateFlexProps {
    children: React.ReactNode
}

const CreateFlex: FC<ICreateFlexProps> = ({children}) => {
    return (
        <div className={`create-flex`}>
            {children}
        </div>
    );
};

export default CreateFlex;