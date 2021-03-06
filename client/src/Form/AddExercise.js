import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddExercise() {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
  });

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

  function handleChangeUsername(){
      
  }

  return (
    <div className="container">
      <h1>Add Exercise</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="form-group">
          <label>Username</label>
          <select value={username} className="form-control" onChange={handleChangeUsername}>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      {users.map((user) => {
        return <option>Hello</option>;
      })}
      {JSON.stringify(users)}
    </div>
  );
}
