const express = require("express");

const router = express.Router();

const {
  getApplications,
  addApplication,
  updateApplication,
  deleteApplication
} = require("../controllers/applicationController");

const protect = require("../middlewares/authMiddleware");

router.get("/", protect, getApplications);

router.post("/", protect, addApplication);

router.put("/:id", protect, updateApplication);

router.delete("/:id", protect, deleteApplication);

module.exports = router;
