import React, {FC} from 'react';
import "./Text.scss"

interface ITextProps {
    children: string;
}

const Text: FC<ITextProps> = ({children}) => {
    return <p className="text">{children}</p>;
}

export default Text;