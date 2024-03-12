const express = require("express");

const router = express.Router();

const { getScoresFootball } = require("../controllers/scores.controller");

router.get("/scores", getScoresFootball);

module.exports = router;
