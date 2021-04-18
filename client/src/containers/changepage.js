import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Navbar from "./navbar";

function ChangePage() {
  const [Change, setChange] = useState(null);
  const [code, setCode] = useState(null);
  const mystylee = {
    backgroundColor: "powderblue",
  };

  const history = useHistory();

  const onSubmitHandler = () => {
    const data = { code: code, change: Change };
    axios.post("http://localhost:9000/tablechange", data);
    history.push("/teachome");
  };
  return (
    <div>
      <Navbar />
      <div className="container " style={mystylee}>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <div>
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Change </span>Period
              </h1>
            </div>
            <div className="form-group">
              <label htmlFor="name">Period Code</label>
              <input
                type="name"
                name="name"
                className="form-control"
                onChange={(e) => (e = setCode(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Enter Changes</label>
              <input
                type="code"
                name="code"
                className="form-control"
                onChange={(e) => setChange(e.target.value)}
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

export default ChangePage;
