import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { decode } from "jsonwebtoken";
import { UserContext } from "../Store/UserContext";

function Login() {
  const [email, setEmail] = useState(null);
  const [passwd, setPasswd] = useState(null);
  const userContext = useContext(UserContext);
  const mystylee = {
    backgroundColor: "powderblue",
    height: "75vh",
  };

  const history = useHistory();

  const onSubmitHandler = () => {
    const data = { email: email, password: passwd };
    axios
      .post("/api/v1/auth/login", data)
      .then((res) => {
        const { data } = res;
        const userData = decode(data.authToken);
        userContext.setAuth(true);
        userContext.setUser(userData);
        userContext.setToken(data.authToken);
        history.push("/student/home");
      })
      .catch((err) => {
        const { response } = err;
        alert(response.data.error);
      });
  };

  return (
    <div>
      <div className="container " style={mystylee}>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <div>
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Student </span> Log In
              </h1>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                name="passwd"
                className="form-control"
                onChange={(e) => setPasswd(e.target.value)}
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
            <div className="py-4">
              Not Signed Up? Sign Up now!
              <Link to="/student/signup" className="ml-auto px-2">
                <button className="btn btn-outline-info">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
