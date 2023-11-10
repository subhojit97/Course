import React from "react";
//import image1 from "../Course/images/3.jpg";
import "./Student.css";
import { FaCheckDouble, FaThumbsUp } from "react-icons/fa";

const Student = ({ data, Cname, dur, ins, Cid, setmainData, courseData }) => {
  const { id, name, thumbnail, status } = data;
  const handleUpdateLike = () => {};

  return (
    <div className="price-box --card" key={id}>
      <div className="box">
        <h3>
          <span className="basic">
            <img src={thumbnail} alt="python" />
          </span>
        </h3>
      </div>
      <div className="features">
        <ul>
          <li>
            <b>Name : </b>
            {name}
          </li>
          <li>
            <b>Course enrolled </b>:
            <ul>
              <li>
                <b>Name :</b>
                {Cname}
              </li>
              <li>
                <b>Instructor</b>:{ins}
              </li>
              <li>
                <b>Duration</b>:{dur}
              </li>
              <li>
                <progress value={status / 100} />
              </li>
              <li className="--flex-between">
                <button>
                  <FaCheckDouble />
                </button>
                <button onClick={handleUpdateLike}>
                  <FaThumbsUp />
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Student;
