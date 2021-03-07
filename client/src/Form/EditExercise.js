import axios from "axios";
import React, { useEffect, useState } from "react";

import Datepicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function EditExercise(props) {
  //   const [exerciseId, setExerciseId] = useState(props.match.params.exerId);
  const exerciseId = props.match.params.exerId;
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });

  const { username, description, duration, date } = exercise;

  const [users, setUsers] = useState([]);
  const baseUrl = "https://my-tracker-application.herokuapp.com";

  useEffect(() => {
    // setExerciseId();
    // console.log(exerciseId);

    async function fetchData() {
      const [firstResponse, secondResponse] = await Promise.all([
        axios.get(`${baseUrl}/users`),
        axios.get(`${baseUrl}/exercises/${exerciseId}`),
      ]);

      setUsers(firstResponse.data);

      const newExerciseData = {
        ...exercise,
        username: secondResponse.data.username,
        description: secondResponse.data.description,
        duration: secondResponse.data.duration,
        date: new Date(secondResponse.data.date),
      };

      setExercise(newExerciseData);
    }

    fetchData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${baseUrl}/exercises/update/${exerciseId}`, exercise)
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
      <form onSubmit={handleSubmit} className="text-left">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* <div className="border border-primary mt-5">
        {JSON.stringify(exercise)}
        <div></div>
        {JSON.stringify(users)}
      </div> */}
    </div>
  );
}
