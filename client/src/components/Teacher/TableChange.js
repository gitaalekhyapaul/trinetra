import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Store/UserContext";

export default function TableChange(props) {
  const [change, setChange] = useState(null);
  const [slot, setSlot] = useState(null);
  const userContext = useContext(UserContext);
  const { classId } = props.match.params;
  const mystylee = {
    backgroundColor: "powderblue",
    minHeight: "75vh",
  };

  const history = useHistory();

  const onSubmitHandler = async () => {
    try {
      await axios.put(
        "/api/v1/class/edit",
        {
          code: classId,
          slot: slot,
          change: change,
        },
        {
          headers: {
            Authorization: `Bearer ${userContext.token}`,
          },
        }
      );
      history.push(`/teacher/table/${classId}`);
    } catch (err) {
      const { response } = err;
      alert(response.data.error);
    }
  };

  const onDeleteHandler = async () => {
    try {
      await axios.delete("/api/v1/class/delete", {
        headers: {
          Authorization: `Bearer ${userContext.token}`,
        },
        data: {
          code: classId,
          slot: slot,
        },
      });
      history.push(`/teacher/table/${classId}`);
    } catch (err) {
      const { response } = err;
      alert(response.data.error);
    }
  };
  return (
    <>
      <div className="container pb-3" style={mystylee}>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5">
            <div>
              <h1 className="font-weight-light text-center py-5">
                <span className="text-info">Change </span>Period
              </h1>
            </div>
            <div className="form-group">
              <label htmlFor="code">Class Code *</label>
              <input
                type="text"
                name="code"
                className="form-control readonly disabled"
                value={classId}
              />
            </div>
            <div className="form-group input-group">
              <div className="form-group col-5 mx-auto">
                <label htmlFor="slot-day">Day Number *</label>
                <select
                  className="input-group form-select"
                  name="slot-day"
                  onChange={(e) => setSlot({ ...slot, day: e.target.value })}
                >
                  <option selected>Choose...</option>
                  <option value="D1">D1</option>
                  <option value="D2">D2</option>
                  <option value="D3">D3</option>
                  <option value="D4">D4</option>
                  <option value="D5">D5</option>
                </select>
              </div>
              <div className="form-group col-5 mx-auto">
                <label htmlFor="slot-period">Period Number *</label>
                <select
                  className="input-group form-select"
                  name="slot-period"
                  onChange={(e) => setSlot({ ...slot, period: e.target.value })}
                >
                  <option selected>Choose...</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="P3">P3</option>
                  <option value="P4">P4</option>
                  <option value="P5">P5</option>
                  <option value="P6">P6</option>
                  <option value="P7">P7</option>
                  <option value="P8">P8</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="change-subject">
                Change Subject (only for change)
              </label>
              <input
                type="text"
                name="change-subject"
                className="form-control"
                placeholder="Subject Name"
                onChange={(e) =>
                  setChange({ ...change, subject: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="change-faculty">
                Change Faculty (only for change)
              </label>
              <input
                type="text"
                name="change-faculty"
                className="form-control"
                placeholder="Subject Faculty"
                onChange={(e) =>
                  setChange({ ...change, faculty: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger float-left"
              onClick={() => onDeleteHandler()}
            >
              Delete Period
            </button>
            <button
              type="submit"
              className="btn btn-primary float-right"
              onClick={() => onSubmitHandler()}
            >
              Make Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
