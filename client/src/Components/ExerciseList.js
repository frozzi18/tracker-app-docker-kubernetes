import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ExerciseList() {
  const [exercises, setExercises] = useState([]);
  const baseUrl = "http://localhost:5000";

  useEffect(() => {
    axios
      .get(`${baseUrl}/exercises`)
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [exercises]);

  function handleDelete(id) {
    axios
      .delete(`${baseUrl}/exercises/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h1 className="mb-5">Exercise List</h1>
      <ul className="list-group text-left">
        {exercises.length ? (
          exercises.map((exercise) => (
            <li key={exercise._id} className="list-group-item">
              user : {exercise.username} | activity : {exercise.description} |
              duration : {exercise.duration} minutes
              <button type="button" className="btn btn-secondary float-right">
                <Link
                  to={`/exercises/update/${exercise._id}`}
                  className="text-decoration-none text-white"
                >
                  Edit
                </Link>
              </button>{" "}
              <button
                type="button"
                className="btn btn-danger float-right mr-3"
                onClick={() => handleDelete(exercise._id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <div>No Exercises found</div>
        )}
      </ul>
    </div>
  );
}
