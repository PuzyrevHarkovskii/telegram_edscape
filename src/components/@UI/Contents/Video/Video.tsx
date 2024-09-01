import React, {FC} from 'react';
import "./Video.scss"

interface IVideoProps {
    src: string
}

const Video: FC<IVideoProps> = ({ src }) => {
    return (
        <iframe
            className="video"
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
    );
};

export default Video;