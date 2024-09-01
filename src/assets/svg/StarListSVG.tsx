import React, {FC} from 'react';
import StarSVG from "./StarSVG";

const stars = [1, 2, 3, 4, 5]

const StarListSVG: FC = () => {
    return (
        <>
            {stars.map((star, index) =>
                <StarSVG
                    key={index}
                />
            )}
        </>
    );
};

export default StarListSVG;