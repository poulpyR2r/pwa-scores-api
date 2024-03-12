require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const ScoreRoute = "./routes/scores.route.js";

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.use("/api", require(ScoreRoute));

app.listen(PORT, "192.168.1.212", () => {
  console.log(`Serveur démarré sur http://192.168.1.212:${PORT}`);
});
