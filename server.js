const express = require("express");
const app = express();
const mongoose = require("mongoose");

//middleware
app.use(express.json()); // this express middleware is so that our app can understand json data type

// routes
app.get("/", (req, res) => {
  res.send("Green Space Homepage"); // this route gets us the home page
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
