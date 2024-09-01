import React, { FC } from 'react'
import "./CourseCategory.scss"
import ButtonCategory from '../../@UI/Buttons/ButtonCategory/ButtonCategory'
import Container from '../../@UI/Container/Container'

const nameButtons = [
    "О курсе",
    "Программа курса"
]

interface ICourseCategory {
    clickButton: number
    setClickButton: (arg: number) => void
}

const CourseCategory: FC<ICourseCategory> = (
    {
        clickButton,
        setClickButton
    }) => {
    return (
        <div className="course-category__wrapper">
            <div className="course-category">
                <Container>
                    <div className="course-category__inner">
                        {nameButtons.map((name, index) =>
                            <ButtonCategory
                                key={index}
                                onClick={() => setClickButton(index)}
                                active={clickButton === index}
                            >
                                {name}
                            </ButtonCategory>
                        )}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default CourseCategory