const router = require("express").Router();
const workout = require("../models/workout.js");


router.get("/api/workouts", (req, res) => {
  workout.find({})
    .then(dbWorkout => {
      dbWorkout.forEach(workout =>{
        var total = 0;
        workout.exercises.forEach(e =>{
          total += e.duration;
        })
        workout.totalDuration = total;
      })
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.Post("/api/workouts", ({ body }, res) => {
  workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.Put("/api/workouts/:id", (req, res) => {
  workout.findOneAndUpdate(
    { _id: req.params.id},
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body }

    },
    { new: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
