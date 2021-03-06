import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import styles from "./Homepage.module.css";

import { UserContext } from "../Store/UserContext";
import logo from "../Shared/class-logo.png";

function ClassCard(props) {
  return (
    <div className="card shadow col-8 mx-auto my-3">
      <img className="card-img-top" src={logo} alt="CLASS" />
      <div className="card-body">
        <h4 className="card-title">{`Section: ${props.section}`}</h4>
        <p className="card-text">{`Code: ${props.code}`}</p>
        <p className="card-text">{`Faculty: ${props.facultyAdvisor}`}</p>
        <Link
          to={`/student/table/${props.code}`}
          className="stretched-link"
        ></Link>
      </div>
    </div>
  );
}

function Homepage() {
  const userContext = useContext(UserContext);
  const [classes, setClasses] = useState([]);
  const [code, setCode] = useState("");
  useEffect(() => {
    async function getClasses() {
      try {
        const { data } = await axios.get("/api/v1/class/all", {
          headers: {
            Authorization: `Bearer ${userContext.token}`,
          },
        });
        setClasses(data.classes);
      } catch (err) {
        const { response } = err;
        alert(response.data.error);
      }
    }
    getClasses();
  });
  const allClasses = classes.map((c, index) => (
    <ClassCard key={index} {...c} />
  ));
  const joinClassHandler = async () => {
    try {
      await axios.post(
        "/api/v1/class/join",
        { code: code },
        {
          headers: {
            Authorization: `Bearer ${userContext.token}`,
          },
        }
      );
      setCode("");
    } catch (err) {
      const { response } = err;
      alert(response.data.error);
    }
  };
  return (
    <>
      <div class="input-group my-3 col-12 col-md-4 align-centre">
        <input
          type="text"
          class="form-control"
          placeholder="Class Code"
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          class="btn btn-success"
          type="button"
          onClick={() => joinClassHandler()}
        >
          Join Class
        </button>
      </div>
      <div className={styles["card-stack"]}>{allClasses}</div>
    </>
  );
}

export default Homepage;
