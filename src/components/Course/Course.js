import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import CourseDetail from "./CourseDetail";
import "./Course.css";
const Course = ({ ClickMore, data, ClickCourse }) => {
  const [search, setSearch] = useState("");
  //const [course, setcourse] = useState(data);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(search, data);
    setFilteredCourses(
      data.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.instructor.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  return (
    <div className="container">
      <div className="header">
        <header className="container --center-all">
          <h2 className="----color-primary --text-center">
            <span className="--color-danger">Course</span> Filter
          </h2>
          <div
            className="--flex-between --flex-dir-column
            --py"
          >
            <Search inputValue={search} onInputChange={handleSearch} />
          </div>
        </header>
      </div>
      <div className="course-container ">
        <div
          className="courses container --grid-25 --py2
           "
        >
          {filteredCourses.map((dat) => {
            return (
              <CourseDetail
                data={dat}
                ClickMore={ClickMore}
                ClickCourse={ClickCourse}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
