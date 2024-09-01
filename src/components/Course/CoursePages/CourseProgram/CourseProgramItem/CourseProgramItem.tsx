import React, {FC} from 'react';
import "./CourseProgramItem.scss"
import Container from "../../../../@UI/Container/Container";
import CourseProgramIcon from "../CourseProgramIcon/CourseProgramIcon";
import {useNavigate, useNavigation} from "react-router-dom";
import {CourseProgramIconType} from "../../../../../@localData/course";

interface ICourseProgramItemProps {
    headerId: number
    itemId: number
    name: string
    isCompleted: boolean
    type: CourseProgramIconType
    exp: number
}

const CourseProgramItem: FC<ICourseProgramItemProps> = (
    {
        headerId,
        itemId,
        name,
        isCompleted,
        type,
        exp
    }) => {

    const onClickQueryParameter = (type: CourseProgramIconType) => {
        if (type === "quiz") {
            console.log(`http://localhost:5173?id=${itemId}&type=quiz`)
        } else {
            console.log(`http://localhost:5173?id=${itemId}&type=theory`)
        }
    }

    return (
        <div onClick={() => onClickQueryParameter(type)} className="course-program-item">
            <Container>
                <div className="course-program-item__inner">
                    <div className="course-program-item__icon">
                        <CourseProgramIcon
                            icon={isCompleted ? "done" : type}
                        />
                    </div>
                    <div className="course-program-item__content">
                        <div className="course-program-item__title">
                            {headerId}.{itemId} {name}
                        </div>
                        <div className="course-program-item__exp">
                            0/{exp} XP
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CourseProgramItem;