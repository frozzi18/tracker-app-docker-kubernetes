import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddExercise() {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });

  const { username, description, duration, date } = exercise;

  const [users, setUsers] = useState([]);
  const baseUrl = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${baseUrl}/users`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(event) {
    event.targetDefault();
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

  return (
    <div className="container">
      <h1>Add Exercise</h1>
      <form onSubmit={handleSubmit} className="border border-primary text-left">
        <div className="form-group">
          <label className="font-weight-bold">Username</label>
          <select
            value={username}
            className="form-control mb-3"
            onChange={handleChangeUsername}
          >
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
          </div>
        </div>

        <div className="form-group">
          <label className="font-weight-bold">Date</label>
          <div>
            <input type="number" value={duration} onChange={handleDuration} />
          </div>
        </div>
      </form>
      <div className="border border-primary mt-5">
        {JSON.stringify(exercise)}
        <div></div>
        {JSON.stringify(users)}
      </div>
    </div>
  );
}
