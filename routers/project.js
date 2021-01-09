const express = require("express");
const Projects = require("../models/project");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  Projects.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.post("/projects", async (req, res, next) => {
  Projects.add(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
});

module.exports = router;