import React, { useEffect, useState } from "react";
import Datepicker from "react-datepicker";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

export default function AddExercise(props) {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });

  const { username, description, duration, date } = exercise;

  const [users, setUsers] = useState([]);
  // const baseUrl = "https://my-tracker-application.herokuapp.com";
  const baseUrl = "http://localhost:5000";


  useEffect(() => {
    axios
      .get(`${baseUrl}/api/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseUrl}/api/exercises/add`, exercise)
      .then((res) => {
        console.log(res.data);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(exercise);
  }

  function handleChangeUsername(event) {
    // console.log(exercise.username);
    setExercise({ ...exercise, username: event.target.value });
  }

  function handleDescription(event) {
    setExercise({ ...exercise, description: event.target.value });
  }

  function handleDuration(event) {
    setExercise({ ...exercise, duration: event.target.value });
  }

  function handleDate(date) {
    setExercise({ ...exercise, date: date });
  }

  return (
    <div className="container">
      <h1>Add Exercise</h1>
      <form onSubmit={handleSubmit} className=" text-left">
        <div className="form-group">
          <label className="font-weight-bold">Username</label>
          <select
            value={username}
            className="form-control mb-3"
            onChange={handleChangeUsername}
          >
            <option></option>
            {users.map((user) => {
              return (
                <option key={user._id} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={handleDescription}
          ></textarea>
        </div>

        <div className="form-group">
          <label className="font-weight-bold">Duration</label>
          <div>
            <input type="number" value={duration} onChange={handleDuration} />
            <label className="ml-2">Minutes</label>
          </div>
        </div>

        <div className="form-group">
          <label className="font-weight-bold">Date</label>
          <div>
            <Datepicker type="number" selected={date} onChange={handleDate} />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
