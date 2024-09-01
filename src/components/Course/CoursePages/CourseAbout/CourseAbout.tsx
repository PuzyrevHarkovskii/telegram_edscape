import React from 'react';
import "./CourseAbout.scss"
import Container from "../../../@UI/Container/Container";
import { VerticalPadding } from "../../../@Wrapper";
import CourseContentItem from "../CourseContentItem/CourseContentItem";
import { courseAboutItems } from "../../../../@localData/course";

const CourseAbout = () => {
    return (
        <Container>
            <div className="course-about">
                {courseAboutItems.map((item, index) =>
                    <VerticalPadding key={`${item.contentId}_${index}`}>
                        <CourseContentItem
                            key={item.contentId}
                            type={item.type}
                            content={item.content}
                        />
                    </VerticalPadding>
                )}
            </div>
        </Container>
    );
};

export default CourseAbout;