import React, {FC} from 'react';
import "./Container.scss"

interface ContainerProps {
    children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};


export default Container;