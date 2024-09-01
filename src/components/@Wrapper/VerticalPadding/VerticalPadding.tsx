import React, {FC} from 'react';
import "./VerticalPadding.scss"

interface IVerticalPaddingProps {
    children: React.ReactNode;
}

const VerticalPadding: FC<IVerticalPaddingProps> = ({ children }) => {
    return (
        <div className="vertical-padding">
            {children}
        </div>
    );
};

export default VerticalPadding;