const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

  name: String,

  roll: {
    type: String,
    unique: true
  },

  email: String,

  branch: String,

  cgpa: Number,

  year: Number,

  status: {
    type: String,
    default: "Available"
  }

}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);
