const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database.js");
const Space = require("./models/spaceModel");

//middleware
app.use(express.json()); // this express middleware is so that our app can understand json data type

app.use(express.static("public"));

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//connect to the DB
connectDB();

// routes
// app.get("/", (req, res) => {
//   res.send("Green Space Homepage"); // this route gets us the home page
// });

//get home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// get docs page
app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/docs.html");
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
  try {
    const space = await Space.create(req.body); // creates a new variable to store the new "space"
    res.status(200).json(space); // response is a status 200 and sends the space data in json format
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// update a space

//delete a space
app.delete("/spaces/:id", async (req, res) => {
  try {
    const { id } = req.params; // using destructuring to grab the id from the route params
    const space = await Space.findByIdAndDelete(id);
    console.log("space successfully deleted");
    if (!space) {
      return res
        .status(404)
        .json({ message: `cannot find any space with id ${id}` });
    }
    res.status(200).json(space);
    res.status(500).json({ message: error.message });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
