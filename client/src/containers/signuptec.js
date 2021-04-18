import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";

function Login() {
  const [email, setEmail] = useState(null);
  const [passwd, setPasswd] = useState(null);
  const [name, setName] = useState(null);

  const mystylee = {
    backgroundColor: "powderblue",
  };
  const onSubmitHandler = () => {
    const data = {
      name: name,
      email: email,
      password: passwd,
      role: "teacher",
    };
    axios.post("localhost:4200/api/v1/auth/signup", data);
  };
  return (
    <div>
      <Navbar />
      <div className="container" style={mystylee}>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <div>
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Teacher </span>Sign Up
              </h1>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="name"
                name="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
