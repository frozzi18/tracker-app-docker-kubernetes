const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({ username, description, duration, date });

  newExercise
    .save()
    .then(() => res.json("Exersice added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:exerciseId").get((req, res) => {
  Exercise.findById(req.params.exerciseId)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:exerciseId").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.exerciseId)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:exerciseId").post((req, res) => {
  const updateExercise = {
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date),
  };

  Exercise.findByIdAndUpdate(
    req.params.exerciseId,
    updateExercise,
    { new: true },
    (err, doc) => {
      if (err) return res.status(400).json("Error: " + err);
      return res.json("Exercise updated.");
    }
  ).catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
