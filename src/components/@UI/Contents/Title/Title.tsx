import React, {FC} from 'react';
import "./Title.scss"

interface ITitleProps {
    children: string;
}

const Title: FC<ITitleProps> = ({children}) => {
    return <h2 className="title">{children}</h2>;
}

export default Title;