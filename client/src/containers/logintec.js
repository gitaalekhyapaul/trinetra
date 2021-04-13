import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./navbar";

function Login() {
  const [email, setEmail] = useState(null);
  const [passwd, setPasswd] = useState(null);
  const mystylee = {
    backgroundColor: "powderblue",
  };

  const history = useHistory();

  const onSubmitHandler = () => {
    const data = { email: email, password: passwd };
    axios.post("http://localhost:9000/teclogin", data);
    history.push("/teachhome");
  };
  return (
    <div>
      <Navbar />
      <div className="container " style={mystylee}>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <div>
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Teacher </span>Log In
              </h1>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="passwd"
                className="form-control"
                onChange={(e) => setPasswd(e)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark float-right"
              style={{ backgroundColor: "black" }}
              onClick={() => onSubmitHandler()}
            >
              Submit
            </button>
            <br></br>
            <div>
              Not Sigup?! Sign up now{" "}
              <Link to="/teacher-signup" className="ml-auto mx-3">
                <button className="btn btn-outline-info ">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
