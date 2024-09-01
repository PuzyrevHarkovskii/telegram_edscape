import React, {FC} from 'react';
import "./Img.scss"

interface IImgProps {
    src: string
}

const Img: FC<IImgProps> = ({ src }) => {
    return <img className="img" src={src} alt="image"/>;
};

export default Img;