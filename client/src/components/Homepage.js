import React from "react";
import { Link } from "react-router-dom";

import studentLogo from "./Shared/student-logo.png";
import teacherLogo from "./Shared/teacher-logo.png";

function Homepage(props) {
  const mystyle = {
    width: "200px",
    height: "200px",
  };
  const mystylee = {
    backgroundColor: "powderblue",
    minHeight: "75vh",
  };
  return (
    <div>
      <div style={mystylee}>
        <div className="container" style={{ margintop: "30px" }}>
          <div className="row">
            <div className="col-sm-6">
              <div className="my-5">
                <Link
                  to="/student/login"
                  className="ml-auto mx-3"
                  style={{ color: "black" }}
                >
                  <div className="text-center">
                    <img src={studentLogo} alt="stupic" style={mystyle} />
                  </div>
                  <div className="my-3 mx-4 text-center">
                    <strong>Student Portal</strong>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="my-5">
                <Link
                  to="/teacher/login"
                  className="ml-auto mx-3"
                  style={{ color: "black" }}
                >
                  <div className="text-center">
                    <img src={teacherLogo} alt="teacherpic" style={mystyle} />
                  </div>
                  <div className="my-3 mx-4 text-center">
                    <strong>Teacher Portal</strong>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
