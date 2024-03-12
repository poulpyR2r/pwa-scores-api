require("dotenv").config();
const express = require("express");
const cors = require("cors");

const ScoreRoute = "./routes/scores.route.js";

const app = express();
const PORT = process.env.PORT || 3005;
const IP_ADDRESSE = process.env.IP_ADDRESSE || "localhost";

app.use(cors());
app.use(express.json());

app.use("/api", require(ScoreRoute));

app.listen(PORT, IP_ADDRESSE, () => {
  console.log(`Serveur démarré sur http://${IP_ADDRESSE}:${PORT}`);
});
