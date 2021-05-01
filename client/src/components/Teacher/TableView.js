import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "../Store/UserContext";
import { Link } from "react-router-dom";

function Table({ tableData }) {
  return (
    <table style={{ height: "100px" }} className="table table-dark mt-3">
      <thead>
        <tr>
          <th>Time-Table</th>
          <th>P1</th>
          <th>P2</th>
          <th>P3</th>
          <th>P4</th>
          <th>P5</th>
          <th>P6</th>
          <th>P7</th>
          <th>P8</th>
        </tr>
      </thead>
      {console.log(tableData)}
      <tbody>
        <tr>
          <td>D1</td>
          <td>{`${tableData.D1.P1["subject"]}\n${tableData.D1.P1["faculty"]}`}</td>
          <td>{`${tableData.D1.P2["subject"]}\n${tableData.D1.P2["faculty"]}`}</td>
          <td>{`${tableData.D1.P3["subject"]}\n${tableData.D1.P3["faculty"]}`}</td>
          <td>{`${tableData.D1.P4["subject"]}\n${tableData.D1.P4["faculty"]}`}</td>
          <td>{`${tableData.D1.P5["subject"]}\n${tableData.D1.P5["faculty"]}`}</td>
          <td>{`${tableData.D1.P6["subject"]}\n${tableData.D1.P6["faculty"]}`}</td>
          <td>{`${tableData.D1.P7["subject"]}\n${tableData.D1.P7["faculty"]}`}</td>
          <td>{`${tableData.D1.P8["subject"]}\n${tableData.D1.P8["faculty"]}`}</td>
        </tr>
        <tr>
          <td>D2</td>
          <td>{`${tableData.D2.P1["subject"]}\n${tableData.D2.P1["faculty"]}`}</td>
          <td>{`${tableData.D2.P2["subject"]}\n${tableData.D2.P2["faculty"]}`}</td>
          <td>{`${tableData.D2.P3["subject"]}\n${tableData.D2.P3["faculty"]}`}</td>
          <td>{`${tableData.D2.P4["subject"]}\n${tableData.D2.P4["faculty"]}`}</td>
          <td>{`${tableData.D2.P5["subject"]}\n${tableData.D2.P5["faculty"]}`}</td>
          <td>{`${tableData.D2.P6["subject"]}\n${tableData.D2.P6["faculty"]}`}</td>
          <td>{`${tableData.D2.P7["subject"]}\n${tableData.D2.P7["faculty"]}`}</td>
          <td>{`${tableData.D2.P8["subject"]}\n${tableData.D2.P8["faculty"]}`}</td>
        </tr>
        <tr>
          <td>D3</td>
          <td>{`${tableData.D3.P1["subject"]}\n${tableData.D3.P1["faculty"]}`}</td>
          <td>{`${tableData.D3.P2["subject"]}\n${tableData.D3.P2["faculty"]}`}</td>
          <td>{`${tableData.D3.P3["subject"]}\n${tableData.D3.P3["faculty"]}`}</td>
          <td>{`${tableData.D3.P4["subject"]}\n${tableData.D3.P4["faculty"]}`}</td>
          <td>{`${tableData.D3.P5["subject"]}\n${tableData.D3.P5["faculty"]}`}</td>
          <td>{`${tableData.D3.P6["subject"]}\n${tableData.D3.P6["faculty"]}`}</td>
          <td>{`${tableData.D3.P7["subject"]}\n${tableData.D3.P7["faculty"]}`}</td>
          <td>{`${tableData.D3.P8["subject"]}\n${tableData.D3.P8["faculty"]}`}</td>
        </tr>
        <tr>
          <td>D3</td>
          <td>{`${tableData.D3.P1["subject"]}\n${tableData.D3.P1["faculty"]}`}</td>
          <td>{`${tableData.D3.P2["subject"]}\n${tableData.D3.P2["faculty"]}`}</td>
          <td>{`${tableData.D3.P3["subject"]}\n${tableData.D3.P3["faculty"]}`}</td>
          <td>{`${tableData.D3.P4["subject"]}\n${tableData.D3.P4["faculty"]}`}</td>
          <td>{`${tableData.D3.P5["subject"]}\n${tableData.D3.P5["faculty"]}`}</td>
          <td>{`${tableData.D3.P6["subject"]}\n${tableData.D3.P6["faculty"]}`}</td>
          <td>{`${tableData.D3.P7["subject"]}\n${tableData.D3.P7["faculty"]}`}</td>
          <td>{`${tableData.D3.P8["subject"]}\n${tableData.D3.P8["faculty"]}`}</td>
        </tr>
        <tr>
          <td>D4</td>
          <td>{`${tableData.D4.P1["subject"]}\n${tableData.D4.P1["faculty"]}`}</td>
          <td>{`${tableData.D4.P2["subject"]}\n${tableData.D4.P2["faculty"]}`}</td>
          <td>{`${tableData.D4.P3["subject"]}\n${tableData.D4.P3["faculty"]}`}</td>
          <td>{`${tableData.D4.P4["subject"]}\n${tableData.D4.P4["faculty"]}`}</td>
          <td>{`${tableData.D4.P5["subject"]}\n${tableData.D4.P5["faculty"]}`}</td>
          <td>{`${tableData.D4.P6["subject"]}\n${tableData.D4.P6["faculty"]}`}</td>
          <td>{`${tableData.D4.P7["subject"]}\n${tableData.D4.P7["faculty"]}`}</td>
          <td>{`${tableData.D4.P8["subject"]}\n${tableData.D4.P8["faculty"]}`}</td>
        </tr>
        <tr>
          <td>D5</td>
          <td>{`${tableData.D5.P1["subject"]}\n${tableData.D5.P1["faculty"]}`}</td>
          <td>{`${tableData.D5.P2["subject"]}\n${tableData.D5.P2["faculty"]}`}</td>
          <td>{`${tableData.D5.P3["subject"]}\n${tableData.D5.P3["faculty"]}`}</td>
          <td>{`${tableData.D5.P4["subject"]}\n${tableData.D5.P4["faculty"]}`}</td>
          <td>{`${tableData.D5.P5["subject"]}\n${tableData.D5.P5["faculty"]}`}</td>
          <td>{`${tableData.D5.P6["subject"]}\n${tableData.D5.P6["faculty"]}`}</td>
          <td>{`${tableData.D5.P7["subject"]}\n${tableData.D5.P7["faculty"]}`}</td>
          <td>{`${tableData.D5.P8["subject"]}\n${tableData.D5.P8["faculty"]}`}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default function TableView(props) {
  const [table, setTable] = useState({});
  const userContext = useContext(UserContext);
  const { classId } = props.match.params;
  useEffect(() => {
    async function getTimetable() {
      try {
        const { data } = await axios.get(`/api/v1/class/${classId}`, {
          headers: {
            Authorization: `Bearer ${userContext.token}`,
          },
        });
        setTable(data.class.timetable);
      } catch (err) {
        const { response } = err;
        alert(response.data.error);
      }
    }
    getTimetable();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="text-center ">
        {table.D1 ? <Table tableData={table} /> : ""}
      </div>
      <div className="row col-12 col-md-6 text-center mx-auto my-3">
        <span className="mx-auto">
          <Link to={`/teacher/table/change/${classId}`}>
            <button class="btn btn-success" type="button">
              Make Changes
            </button>
          </Link>
        </span>
      </div>
    </>
  );
}
