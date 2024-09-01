import React from 'react'
import "./CourseMainButton.scss"
import Arrow from '../../@UI/Icons/Arrow/Arrow'

function CourseMainButton() {
    return (
        <button className="course-main-button">
            <div className="course-main-button__text">
                🧩 Продолжить
            </div>
            <Arrow
                fill='black'
                direction='right'
            />
        </button>
    )
}

export default CourseMainButton