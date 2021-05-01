import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../shared/navbar";
import { Link } from "react-router-dom";

export default function Tablestu() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/data")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="text-center ">
      <Navbar />

      <table style={{ height: "100px" }} className="table table-dark mt-3">
        <thead>
          <tr>
            <th>Time-Table</th>
            <td>1</td>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday[a]</td>
            <td>{posts.A1}</td>
            <td>{posts.A2}</td>
            <td>{posts.A3}</td>
            <td>{posts.A5}</td>
            <td>{posts.A6}</td>
            <td>{posts.A7}</td>
            <td>{posts.A8}</td>
          </tr>
          <tr>
            <td>Tuesday[b]</td>
            <td>{posts.B1}</td>
            <td>{posts.B2}</td>
            <td>{posts.B3}</td>
            <td>{posts.B5}</td>
            <td>{posts.B6}</td>
            <td>{posts.B7}</td>
            <td>{posts.B8}</td>
          </tr>
          <tr>
            <td>Wednesday[c]</td>
            <td>{posts.C1}</td>
            <td>{posts.C2}</td>
            <td>{posts.C3}</td>
            <td>{posts.C5}</td>
            <td>{posts.C6}</td>
            <td>{posts.C7}</td>
            <td>{posts.C8}</td>
          </tr>
          <tr>
            <td>Thursday[d]</td>
            <td>{posts.D1}</td>
            <td>{posts.D2}</td>
            <td>{posts.D3}</td>
            <td>{posts.D5}</td>
            <td>{posts.D6}</td>
            <td>{posts.D7}</td>
            <td>{posts.D8}</td>
          </tr>
          <tr>
            <td>Friday[e]</td>
            <td>{posts.E1}</td>
            <td>{posts.E2}</td>
            <td>{posts.E3}</td>
            <td>{posts.E5}</td>
            <td>{posts.E6}</td>
            <td>{posts.E7}</td>
            <td>{posts.E8}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/changetable" className="btn btn-warning mb-3">
        Make changes
      </Link>
    </div>
  );
}
