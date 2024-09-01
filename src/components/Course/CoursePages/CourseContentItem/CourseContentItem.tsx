import React, {FC} from 'react';
import "./CourseContentItem.scss"
import {Img, Title, Text, Video} from "../../../@UI/Contents";
import {ContentItemType} from "../../../../@localData/course";


interface ICourseContentItemProps {
    type: ContentItemType
    content: string
}

const CourseContentItem: FC<ICourseContentItemProps> = ({ type , content}) => {
    switch (type) {
        case "title":
            return <Title>{content}</Title>
        case "text":
            return <Text>{content}</Text>
        case "image":
            return <Img src={content}/>
        case "video":
            return <Video src={content}/>
        default:
            return null;
    }
};

export default CourseContentItem;