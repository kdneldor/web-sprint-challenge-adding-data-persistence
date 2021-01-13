const express = require("express")
const Tasks = require("../models/task")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Tasks.find()
    res.json(tasks)
  } catch (err){
    next(err)
  }
  });
  
  router.post("/tasks", async (req, res, next) => {
    try {
      const { description, notes, project_id } = req.body
      const newTask = await Tasks.insert({
        description,
        notes,
        project_id,
      })
      res.status(201).json(newTask)
    } catch (err){
      next(err)
    }
  });

module.exports = router