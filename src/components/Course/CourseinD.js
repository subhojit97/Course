import React from "react";
import "./CourseDetail.css";
const CourseinD = ({ data, ClickMore }) => {
  const handleClick = () => {
    ClickMore(false);
  };
  const { id, name, thumbnail, instructor, description, location, syllabus } =
    data;

  console.log("course in d", id);
  return (
    <div>
      <div className="price-box --card" key={id}>
        <div className="box">
          <p>{name}</p>
          <h3>
            <span className="basic">
              <img src={thumbnail} alt="python" />
            </span>
          </h3>
          <p>
            <b>Name:</b>
            {name}
          </p>
          <p>
            <b>Instructor Name:</b>
            {instructor}
          </p>
          <p>
            <b>Description:</b>
            {description}
          </p>
          <p>
            <b>Location:</b>
            {location}
          </p>
          <p>
            <b>Syllabus</b>
            <ul>
              {syllabus.map((sy) => {
                const { week, topic, content } = sy;
                return (
                  <>
                    <li>{week}</li>
                    <li>{topic}</li>
                    <li>{content}</li>
                  </>
                );
              })}
            </ul>
          </p>

          <button className="btn theme1" onClick={handleClick}>
            back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseinD;
