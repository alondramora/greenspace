const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("Green Space Homepage");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
