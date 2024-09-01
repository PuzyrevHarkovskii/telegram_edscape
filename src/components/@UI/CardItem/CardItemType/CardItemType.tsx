import React, {FC} from 'react';

interface ICardItemTypeProps {
    type: "quiz" | "course"
}

const CardItemType: FC<ICardItemTypeProps> = ({ type }) => {
    return (
        <>
            {type === "quiz" &&
                <>Квиз</>
            }
            {type === "course" &&
                <>Курс</>
            }
        </>
    );
};

export default CardItemType;