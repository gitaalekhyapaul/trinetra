import React from "react";
import { Link } from "react-router-dom";

function Homepage(props) {
  const mystyle = {
    width: "200px",
    height: "200px",
  };
  const mystylee = {
    backgroundColor: "powderblue",
    height: "75vh",
  };
  return (
    <div>
      <div style={mystylee}>
        <div className="container" style={{ margintop: "30px" }}>
          <div className="row">
            <div className="col-sm-6">
              <div className="my-5">
                <div className="">
                  <img
                    src="https://i.graphicmama.com/blog/wp-content/uploads/2017/01/27083023/handsome-school-boy-vector.jpg"
                    alt="stupic"
                    style={mystyle}
                  />
                </div>
                <div className="my-3 mx-5">
                  <Link
                    to="/student/login"
                    className="ml-auto mx-3"
                    style={{ color: "black" }}
                  >
                    Student Portal
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="my-5">
                <div className="">
                  <img
                    src="https://img.pngio.com/teaching-vector-teacher-man-graduation-cap-on-person-drawing-teacher-vector-png-920_1614.png"
                    alt="teacherpic"
                    style={mystyle}
                  />
                </div>
                <div className="my-3 mx-4">
                  <Link
                    to="/teacher/login"
                    className="ml-auto mx-3"
                    style={{ color: "black" }}
                  >
                    Teacher Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
