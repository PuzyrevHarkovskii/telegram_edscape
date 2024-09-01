import "./CourseProgram.scss"
import CourseProgramHeader from "./CourseProgramHeader/CourseProgramHeader";
import CourseProgramItem from "./CourseProgramItem/CourseProgramItem";
import {courseProgramElements} from "../../../../@localData/course";


const CourseProgram = () => {

    // console.log(uuidv4().replace(/-/g, '').slice(0, -12))

    return (
        <>
            {courseProgramElements.map((headerElement, headerIndex) =>
                <div key={`${headerIndex + 1}_${headerIndex}`} className="course-program">
                    <CourseProgramHeader
                        headerId={headerIndex + 1}
                        name={headerElement.title}
                        headerItems={headerElement.headerItems}
                    />
                    {headerElement.headerItems.map((itemElement, itemIndex) =>
                        <CourseProgramItem
                            key={`${headerIndex}_${itemIndex}`}
                            headerId={headerIndex + 1}
                            itemId={itemIndex + 1}
                            name={itemElement.title}
                            isCompleted={itemElement.isCompleted}
                            type={itemElement.type}
                            exp={itemElement.exp}
                        />
                    )}
                </div>
            )}
        </>
    );
};

export default CourseProgram;