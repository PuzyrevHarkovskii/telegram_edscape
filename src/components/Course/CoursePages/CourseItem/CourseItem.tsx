import React from 'react';
import "./CourseItem.scss"
import {VerticalPadding} from "../../../@Wrapper";
import CourseContentItem from "../CourseContentItem/CourseContentItem";
import Container from "../../../@UI/Container/Container";
import CourseNavigation from "./CourseNavigation/CourseNavigation";
import {courseItemElements} from "../../../../@localData/course";

const CourseItem = () => {
    return (
        <div className="course-item">

            <div
                style={{
                    backgroundColor: "red"
                }}
            >
                123
            </div>

            <div className="course-item__content">
                <Container>
                    {courseItemElements.map((item, index) =>
                        <VerticalPadding key={`${item.contentId}_${index}`}>
                            <CourseContentItem
                                key={item.contentId}
                                type={item.type}
                                content={item.content}
                            />
                        </VerticalPadding>
                    )}
                </Container>
            </div>

            <CourseNavigation/>

        </div>
    );
};

export default CourseItem;