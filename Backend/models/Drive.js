const mongoose = require("mongoose");

const driveSchema = new mongoose.Schema({

  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  },

  title: String,

  date: String,

  minCGPA: Number,

  branches: [String],

  rounds: Number,

  status: {
    type: String,
    enum: ["upcoming", "ongoing", "completed"],
    default: "upcoming"
  }

}, { timestamps: true });

module.exports = mongoose.model("Drive", driveSchema);
