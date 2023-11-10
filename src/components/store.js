import { createStore } from "redux";

const courseReducer = (
  state = {
    page: "Courses",
  },
  action
) => {
  if (action.type === "Courses") return { page: "Courses" };
  if (action.type === "Students") return { page: "Students" };
  if (action.type === "CourseDetails") return { page: "CourseDetails" };
};

const store = createStore(courseReducer);

export default store;
