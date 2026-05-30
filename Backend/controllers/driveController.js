const Drive = require("../models/Drive");

const getDrives = async (req, res) => {

  try {

    const drives = await Drive.find()
      .populate("company");

    res.json(drives);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const addDrive = async (req, res) => {

  try {

    const drive = await Drive.create(req.body);

    res.status(201).json(drive);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const updateDrive = async (req, res) => {

  try {

    const drive = await Drive.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(drive);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteDrive = async (req, res) => {

  try {

    await Drive.findByIdAndDelete(req.params.id);

    res.json({
      message: "Drive deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getDrives,
  addDrive,
  updateDrive,
  deleteDrive
};
