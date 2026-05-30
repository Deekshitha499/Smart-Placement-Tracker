const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },

  drive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Drive"
  },

  round: {
    type: String,
    default: "Round 1"
  },

  status: {
    type: String,
    enum: [
      "Applied",
      "Round 1",
      "Round 2",
      "HR Round",
      "Selected",
      "Rejected"
    ],
    default: "Applied"
  }

}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
