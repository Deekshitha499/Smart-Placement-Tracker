const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({

  name: String,

  industry: String,

  role: String,

  package: Number,

  minCGPA: Number,

  branches: [String],

  website: String

}, { timestamps: true });

module.exports = mongoose.model("Company", companySchema);
