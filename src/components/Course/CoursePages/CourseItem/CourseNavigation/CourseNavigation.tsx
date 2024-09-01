import React from 'react';
import "./CourseNavigation.scss"

import Container from "../../../../@UI/Container/Container";
import Arrow from "../../../../@UI/Icons/Arrow/Arrow";
import {Link} from "react-router-dom";

const CourseNavigation = () => {
    return (
        <div className="course-navigation">
            <Container>
                <div className="course-navigation__inner">
                    <Link to={""} className="Link course-navigation__item">
                        <Arrow
                            direction={"left"}
                            fill={"white"}
                        />
                        <div className="course-navigation__text left">
                            Назад
                        </div>
                    </Link>
                    <Link to={""} className="Link course-navigation__item">
                        <div className="course-navigation__text right">
                            Вперед
                        </div>
                        <Arrow
                            direction={"right"}
                            fill={"white"}
                        />
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default CourseNavigation;