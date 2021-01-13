const express = require("express");
const Projects = require("../models/project");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await Projects.find()
    res.json(projects)
  } catch (err){
    next(err)
  }
});

router.post("/projects", async (req, res, next) => {
  try {
    const { name, description } = req.body
    const newProject = await Projects.insert({
      name,
      description,
    })
    res.status(201).json(newProject)
  } catch (err){
    next(err)
  }
});

module.exports = router;