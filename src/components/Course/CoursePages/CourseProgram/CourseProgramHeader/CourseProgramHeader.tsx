import React, {FC, useMemo} from 'react';
import "./CourseProgramHeader.scss"
import Container from "../../../../@UI/Container/Container";
import "uuid"
import {ICourseProgramItem} from "../../../../../@localData/course";

interface ICourseProgramHeaderProps {
    headerId: number
    name: string
    headerItems: ICourseProgramItem[]
}

const CourseProgramHeader: FC<ICourseProgramHeaderProps> = (
    {
        headerId,
        name,
        headerItems
    }) => {

    const totalExp = useMemo(() => {
        return headerItems.reduce((total, currentItem) => {
            return total + currentItem.exp;
        }, 0);
    }, [headerItems]);

    return (
        <div className="course-program-header">
            <Container>
                <div className="course-program-header__title">
                    {headerId} {name}
                </div>
                <div className="course-program-header__exp">
                    0/{totalExp} XP
                </div>
            </Container>
        </div>
    );
};

export default CourseProgramHeader;