const express = require("express");
const Resources = require("../models/resource");

const router = express.Router();

router.get("/resources", async (req, res, next) => {
  Resources.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

router.post("/resources", async (req, res, next) => {
  Resources.add(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
});

module.exports = router;
