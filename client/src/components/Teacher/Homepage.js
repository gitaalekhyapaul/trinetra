import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/navbar";

function homestu() {
  return (
    <div>
      <Navbar />

      {/* <div className="col-12 col-md-4 my-2">
        <div className="card-body">
          <img
            className="card-img-top"
            src="https://yt3.ggpht.com/ytc/AAUvwniZgi1B2MEAMI1hrYuk1AFy_9fv2cZDkaCNBop5AA=s900-c-k-c0x00ffffff-no-rj"
            alt="class10"
            style={{ height: "250px", width: "250px" }}
          />
          <h4 className="card-title">Class 10</h4>

          <Link to="/stutable" className="stretched-link"></Link>
        </div>
      </div> */}
      <div className="col-12 col-md-3 my-2 text-center align-middle">
        <div className="card shadow">
          <img
            className="card-img-top"
            src="https://yt3.ggpht.com/ytc/AAUvwniZgi1B2MEAMI1hrYuk1AFy_9fv2cZDkaCNBop5AA=s900-c-k-c0x00ffffff-no-rj"
            alt="CLASS10"
            style={{ height: "450px", width: "445px" }}
          />
          <div className="card-body">
            <h4 className="card-title">Class 10</h4>
            <p className="card-text">XYZ sir</p>
            <Link to={`/teachtable`} className="stretched-link"></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homestu;
