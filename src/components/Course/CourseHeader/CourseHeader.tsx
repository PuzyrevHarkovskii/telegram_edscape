import React from 'react';
import "./CourseHeader.scss"
import Container from '../../@UI/Container/Container';
import CourseMainButton from '../CourseMainButton/CourseMainButton';

const CourseHeader = () => {
    return (
        <div className="course-header">
            <Container>
                <h2 className="course-header__title">
                    Английский язык для бизнес-финансов
                </h2>
                <div className="course-header__info">
                    <div className="course-header__item">
                        👤 2.1K
                    </div>
                    <div className="course-header__item">
                        0/1500 XP
                    </div>
                </div>
                <CourseMainButton/>    
            </Container>
        </div>
    );
};

export default CourseHeader;