import React, { useState } from "react";
//import image1 from "./images/3.jpg";
import "./CourseDetail.css";
import { FaThumbsUp } from "react-icons/fa";
const CourseDetail = ({ ClickMore, data, ClickCourse }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(expand);
    if (btnValue === "expand") {
      console.log(expand);
      setExpand(!expand);
      setbtnValue("more");
    } else {
      console.log(data);
      ClickCourse(data);

      ClickMore(true);

      setExpand(!expand);
      setbtnValue("expand");
    }
  };
  const [expand, setExpand] = useState(false);
  const [btnValue, setbtnValue] = useState("expand");
  const {
    id,
    name,
    like,
    instructor,
    thumbnail,
    schedule,
    duration,
    location,
    enrollmentStatus,
  } = data;
  return (
    <div className="price-box --card">
      <div className="box" key={id}>
        <p>{name}</p>
        <h3>
          <span className="basic">
            <img src={thumbnail} alt="python" />
          </span>
        </h3>
        <span>
          <FaThumbsUp size={25} />
          <p>{like}</p>
        </span>
      </div>
      <div className="features">
        <ul>
          <li>{schedule}</li>
          <li>{instructor}</li>
          <li>{enrollmentStatus}</li>
          {expand ? (
            <ul>
              <li>{location}</li>
              <li>{duration}</li>
            </ul>
          ) : (
            <></>
          )}
        </ul>
        <button className="btn theme1" onClick={handleClick}>
          {expand ? "More" : "Expand"}
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
