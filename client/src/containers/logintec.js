import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState(null);
  const [passwd, setPasswd] = useState(null);

  const onSubmitHandler = () => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", passwd);
    axios.post("http://localhost:9000/teclogin", data);
  };
  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-11 col-lg-5">
          <div>
            <h1 className="font-weight-light text-center py-5">
              <span className="text-info">Log </span>In
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
        </div>
      </div>
    </div>
  );
}

export default Login;
