const express = require("express");

const router = express.Router();

const {
  getStudents,
  addStudent,
  deleteStudent
} = require("../controllers/studentController");

const protect = require("../middlewares/authMiddleware");

router.get("/", protect, getStudents);

router.post("/", protect, addStudent);

router.delete("/:id", protect, deleteStudent);

module.exports = router;