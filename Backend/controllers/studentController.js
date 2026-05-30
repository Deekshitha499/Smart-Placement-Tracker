const Student = require("../models/Student");

const getStudents = async (req, res) => {

  try {

    const students = await Student.find();

    res.json(students);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const addStudent = async (req, res) => {

  try {

    const student = await Student.create(req.body);

    res.status(201).json(student);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const updateStudent = async (req, res) => {

  try {

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(student);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteStudent = async (req, res) => {

  try {

    await Student.findByIdAndDelete(req.params.id);

    res.json({
      message: "Student deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
};