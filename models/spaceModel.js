const mongoose = require("mongoose");

const spaceSchema = mongoose.Schema(
  {
    name: String,
    location: String,
    description: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const Space = mongoose.model("Space", spaceSchema); // Space is a variable we will access from other files in the project since we are going to be exporting it. It will reference our spaceSchema
module.exports = Space; // this line exports the Space model to the rest of the proj
