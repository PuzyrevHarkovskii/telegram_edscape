import React, {FC} from 'react';
import "./CreateBlock.scss"

interface ICreateBlockProps {
    backgroundColor: string
    children: React.ReactNode
}

const CreateBlock: FC<ICreateBlockProps> = ({ backgroundColor, children }) => {
    return (
        <div
            style={{backgroundColor: backgroundColor}}
            className='create-block'>
            {children}
        </div>
    );
};

export default CreateBlock;