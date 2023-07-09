const mongoose = require("mongoose");

const spaceSchema = mongoose.Schema({
  name: String,
  location: String,
  description: String,
  image: String,
});

const Space = mongoose.model("Space", spaceSchema); // Space is a variable we can access from other files in the project since we are going to be exporting it. It will reference our spaceSchema from line 3
