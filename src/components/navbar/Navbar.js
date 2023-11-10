import React, { useState } from "react";
import "./Navbar.css";
import Course from "../Course/Course";
import Student from "../student/Student";

import CourseinD from "../Course/CourseinD";
import { courseModel } from "../data/data";

const Navbar = () => {
  const [toggleCourseState, setToggleCourseState] = useState(true);
  const [toggleCourseDState, setToggleCourseDState] = useState(false);
  const [courseId, setCourseId] = useState({});
  const [courseData, setCourseData] = useState(courseModel);
  const handleClick = (e) => {
    e.preventDefault();
    setToggleCourseState(!toggleCourseState);
  };
  const getD = () => {
    const xa = courseData.filter((data) => data.id === courseId);
    console.log("hellop", xa);
    return xa;
  };
  return (
    <section className="main">
      <div className="container --center-all">
        <div className="title">
          <h1>Courses</h1>
          <div className="--line"></div>

          <div className="--flex-center --my2">
            <p>Courses</p>
            <div className="--mx2">
              <span
                className={
                  toggleCourseState ? "toggle-btn" : "toggle-btn toggled"
                }
                onClick={handleClick}
              >
                <div className={toggleCourseState ? "ball" : "ball move"}></div>
              </span>
            </div>
            <p>Students</p>
          </div>
        </div>
        {toggleCourseDState ? (
          <>
            {console.log(getD())}
            <CourseinD data={courseId} ClickMore={setToggleCourseDState} />
          </>
        ) : (
          <>
            {toggleCourseState ? (
              <div className="courses">
                <Course
                  data={courseData}
                  ClickMore={setToggleCourseDState}
                  ClickCourse={setCourseId}
                />
              </div>
            ) : (
              <>
                {courseData.map((data) => {
                  const { students, id, name, duration, instructor } = data;

                  return (
                    <>
                      {students.map((student) => {
                        return (
                          <div className="courses">
                            <Student
                              data={student}
                              Cid={id}
                              Cname={name}
                              dur={duration}
                              ins={instructor}
                              setmainData={setCourseData}
                              courseData={courseData}
                            />
                          </div>
                        );
                      })}
                    </>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Navbar;
