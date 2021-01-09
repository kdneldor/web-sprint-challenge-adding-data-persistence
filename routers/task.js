const express = require("express")
const Tasks = require("../models/task")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
    Tasks.find()
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  });
  
  router.post("/tasks", async (req, res, next) => {
    Tasks.add(req.body)
      .then((data) => res.status(201).json(data))
      .catch((err) => next(err));
  });

module.exports = router