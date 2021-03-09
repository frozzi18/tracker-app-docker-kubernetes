import React, { useState } from "react";
import axios from "axios";

export default function AddUsername(props) {
  const [username, setUsername] = useState("");
  // const baseUrl = "https://my-tracker-application.herokuapp.com";
  // const baseUrl = "http://localhost:5000";


  function handleChange(event) {
    setUsername(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username);

    axios
      .post('/api/users/add', { username })
      .then((response) => {
        console.log(response.data);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h1>Adding Username</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter username"
            value={username}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
