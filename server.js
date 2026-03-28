const express = require("express");
const app = express();

app.use(express.json());

let winners = [];

// test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// receive winner
app.post("/win", (req, res) => {
  const { user } = req.body;
  winners.push(user);
  console.log("Winner:", user);
  res.send({ status: "ok" });
});

// send winners
app.get("/winners", (req, res) => {
  res.send(winners);
});

app.listen(3000, () => console.log("Server running"));

