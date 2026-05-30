const express = require("express");

const router = express.Router();

const {
  getDrives,
  addDrive,
  updateDrive,
  deleteDrive
} = require("../controllers/driveController");

const protect = require("../middlewares/authMiddleware");

router.get("/", protect, getDrives);

router.post("/", protect, addDrive);

router.put("/:id", protect, updateDrive);

router.delete("/:id", protect, deleteDrive);

module.exports = router;
