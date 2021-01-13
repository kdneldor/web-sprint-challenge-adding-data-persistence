const express = require("express");
const Resources = require("../models/resource");

const router = express.Router();

router.get("/resources", async (req, res, next) => {
  try {
    const resources = await Resources.find()
    res.json(resources)
  } catch (err){
    next(err)
  }
});

router.post("/resources", async (req, res, next) => {
  try {
    const { name, description } = req.body
    const newResource = await Resources.insert({
      name,
      description,
    })
    res.status(201).json(newResource)
  } catch (err){
    next(err)
  }
});

module.exports = router;
