import { useState } from 'react';
import "./Course.scss"
import CourseHeader from "./CourseHeader/CourseHeader";
import CourseAbout from "./CoursePages/CourseAbout/CourseAbout";
import CourseProgram from "./CoursePages/CourseProgram/CourseProgram";
import CourseCategory from './CourseCategory/CourseCategory';

const Course = () => {

    const [clickButton, setClickButton] = useState<number>(0)

    return (
        <div className="course">

            {/* <CourseItem /> */}

            <CourseHeader />

            <div className="course__body">
                <CourseCategory
                    clickButton={clickButton}
                    setClickButton={setClickButton}
                />
                {clickButton === 0 &&
                    <CourseAbout />
                }
                {clickButton === 1 &&
                    <CourseProgram />
                }
            </div>

        </div>
    );
};

export default Course;