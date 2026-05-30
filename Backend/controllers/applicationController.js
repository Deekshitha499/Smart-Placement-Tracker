const Application = require("../models/Application");

const getApplications = async (req, res) => {

  try {

    const applications = await Application.find()
      .populate("student")
      .populate({
        path: "drive",
        populate: {
          path: "company"
        }
      });

    res.json(applications);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const addApplication = async (req, res) => {

  try {

    const application = await Application.create(req.body);

    res.status(201).json(application);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const updateApplication = async (req, res) => {

  try {

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(application);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteApplication = async (req, res) => {

  try {

    await Application.findByIdAndDelete(req.params.id);

    res.json({
      message: "Application deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getApplications,
  addApplication,
  updateApplication,
  deleteApplication
};
