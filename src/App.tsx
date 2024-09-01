import './App.scss'
import Course from "./components/Course/Course";
import Header from "./components/Header/Header";
import {useState} from "react";
import Study from "./components/Study/Study";
import CreateCourse from "./components/Create/CreateCourse/CreateCourse";
import {Route, Routes} from "react-router-dom";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import CreateQuiz from "./components/Create/CreateQuiz/CreateQuiz";
import Profile from "./components/Profile/Profile";
import Test from "./components/Test/Test";
import Quiz from "./components/Quiz/Quiz";

function App() {

    // Burger Menu
    const [activeBurger, setActiveBurger] = useState<boolean>(false)

    return (
        <div className={`App ${activeBurger ? "fixed" : ""}`}>

            <Header
                activeBurger={activeBurger}
                setActiveBurger={setActiveBurger}
            />

            <div className="App__wrapper">
                {/* <Quiz /> */}
                {/*<Study/>*/}
                {/* <Course/> */}
                <Routes>
                    <Route path={"/test"} element={<Test/>}/>

                    <Route path={"/"} element={<Study/>}/>

                    <Route path={"/course"} element={<Course/>}/>
                    <Route path={"/quiz"} element={<Quiz/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/admin_panel"} element={<AdminPanel/>}/>
                    <Route path={"/admin_panel/create_quiz"} element={<CreateQuiz change={false}/>}/>
                    <Route path={"/admin_panel/create_course"} element={<CreateCourse change={false}/>}/>
                    <Route path={"/admin_panel/create_quiz/:id"} element={<CreateQuiz change={true}/>}/>
                    <Route path={"/admin_panel/create_course/:id"} element={<CreateCourse change={true}/>}/>
                </Routes>
            </div>

        </div>
    )
}

export default App
