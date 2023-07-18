const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database.js");
const Space = require("./models/spaceModel");

//middleware
app.use(express.json()); // this express middleware is so that our app can understand json data type

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//connect to the DB
connectDB();

// routes
app.get("/", (req, res) => {
  res.send("Green Space Homepage"); // this route gets us the home page
});

// GET all spaces
app.get("/spaces", async (req, res) => {
  try {
    const allSpaces = await Space.find({}); // find all spaces in db
    console.log(allSpaces);
    res.status(200).json(allSpaces);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//GET one specific space using it's id
app.get("/spaces/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const space = await Space.findById(id);
    res.status(200).json(space);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//create a new space document and save to DB
app.post("/spaces", async (req, res) => {
  console.log(req.body); // this was so that we could see the data being sent in insomnia
  //   res.send(req.body); // this was so that we could see the data being sent in insomnia
  try {
    const space = await Space.create(req.body); // creates a new variable to store the new "space"
    res.status(200).json(space); // response is a status 200 and sends the space data in json format
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
