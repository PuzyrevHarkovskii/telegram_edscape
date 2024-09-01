import React, {FC} from 'react';
import "./TitleCategory.scss"

interface ITitleCategoryProps {
    title: string
}

const TitleCategory: FC<ITitleCategoryProps> = ({ title }) => {
    return (
        <div className="title-category">
            {title}
        </div>
    );
};

export default TitleCategory;