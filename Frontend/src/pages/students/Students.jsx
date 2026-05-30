import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Plus,
  Pencil,
  Trash2
} from "lucide-react";

export default function Students() {

  const [showModal, setShowModal] =
    useState(false);

  const [editingIndex, setEditingIndex] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [branchFilter, setBranchFilter] =
    useState("All");

  const [cgpaFilter, setCgpaFilter] =
    useState("All");



  const [students, setStudents] =
    useState([

      {
        fullName: "Aarav Sharma",
        roll: "CSE21001",
        email: "aarav@gmail.com",
        branch: "CSE",
        cgpa: 9.1,
        year: 4,
        phone: "9876543210"
      },

      {
        fullName: "Ananya Reddy",
        roll: "IT21002",
        email: "ananya@gmail.com",
        branch: "IT",
        cgpa: 8.7,
        year: 4,
        phone: "9876543211"
      },

      {
        fullName: "Rahul Verma",
        roll: "ECE21003",
        email: "rahul@gmail.com",
        branch: "ECE",
        cgpa: 7.9,
        year: 4,
        phone: "9876543212"
      },

      {
        fullName: "Sneha Patel",
        roll: "EEE21004",
        email: "sneha@gmail.com",
        branch: "EEE",
        cgpa: 8.4,
        year: 4,
        phone: "9876543213"
      },

      {
        fullName: "Kiran Kumar",
        roll: "ME21005",
        email: "kiran@gmail.com",
        branch: "ME",
        cgpa: 7.5,
        year: 4,
        phone: "9876543214"
      },

      {
        fullName: "Priya Singh",
        roll: "CSE21006",
        email: "priya@gmail.com",
        branch: "CSE",
        cgpa: 9.3,
        year: 4,
        phone: "9876543215"
      },

      {
        fullName: "Rohit Jain",
        roll: "IT21007",
        email: "rohit@gmail.com",
        branch: "IT",
        cgpa: 8.1,
        year: 4,
        phone: "9876543216"
      },

      {
        fullName: "Divya Rao",
        roll: "ECE21008",
        email: "divya@gmail.com",
        branch: "ECE",
        cgpa: 8.9,
        year: 4,
        phone: "9876543217"
      },

      {
        fullName: "Arjun Mehta",
        roll: "EEE21009",
        email: "arjun@gmail.com",
        branch: "EEE",
        cgpa: 7.8,
        year: 4,
        phone: "9876543218"
      },

      {
        fullName: "Meera Joshi",
        roll: "ME21010",
        email: "meera@gmail.com",
        branch: "ME",
        cgpa: 8.2,
        year: 4,
        phone: "9876543219"
      },

      {
        fullName: "Vikram Reddy",
        roll: "CSE21011",
        email: "vikram@gmail.com",
        branch: "CSE",
        cgpa: 9.0,
        year: 4,
        phone: "9876543220"
      },

      {
        fullName: "Nisha Kapoor",
        roll: "IT21012",
        email: "nisha@gmail.com",
        branch: "IT",
        cgpa: 8.6,
        year: 4,
        phone: "9876543221"
      },

      {
        fullName: "Akash Gupta",
        roll: "ECE21013",
        email: "akash@gmail.com",
        branch: "ECE",
        cgpa: 7.7,
        year: 4,
        phone: "9876543222"
      },

      {
        fullName: "Pooja Sharma",
        roll: "EEE21014",
        email: "pooja@gmail.com",
        branch: "EEE",
        cgpa: 8.5,
        year: 4,
        phone: "9876543223"
      },

      {
        fullName: "Ramesh Naidu",
        roll: "ME21015",
        email: "ramesh@gmail.com",
        branch: "ME",
        cgpa: 7.4,
        year: 4,
        phone: "9876543224"
      },

      {
        fullName: "Keerthi Rani",
        roll: "CSE21016",
        email: "keerthi@gmail.com",
        branch: "CSE",
        cgpa: 9.5,
        year: 4,
        phone: "9876543225"
      },

      {
        fullName: "Manoj Kumar",
        roll: "IT21017",
        email: "manoj@gmail.com",
        branch: "IT",
        cgpa: 8.3,
        year: 4,
        phone: "9876543226"
      },

      {
        fullName: "Harsha Vardhan",
        roll: "ECE21018",
        email: "harsha@gmail.com",
        branch: "ECE",
        cgpa: 7.6,
        year: 4,
        phone: "9876543227"
      },

      {
        fullName: "Sanjana Devi",
        roll: "EEE21019",
        email: "sanjana@gmail.com",
        branch: "EEE",
        cgpa: 8.8,
        year: 4,
        phone: "9876543228"
      },

      {
        fullName: "Aditya Rao",
        roll: "ME21020",
        email: "aditya@gmail.com",
        branch: "ME",
        cgpa: 7.9,
        year: 4,
        phone: "9876543229"
      }

    ]);



  const [newStudent, setNewStudent] =
    useState({

      fullName: "",
      roll: "",
      email: "",
      branch: "",
      cgpa: "",
      year: "",
      phone: ""

    });



  const handleChange = (e) => {

    setNewStudent({

      ...newStudent,
      [e.target.name]: e.target.value

    });

  };



  const addStudent = () => {

    setStudents([
      newStudent,
      ...students
    ]);

    closeModal();

  };



  const editStudent = (student, index) => {

    setEditingIndex(index);

    setNewStudent(student);

    setShowModal(true);

  };



  const updateStudent = () => {

    const updatedStudents = [...students];

    updatedStudents[editingIndex] =
      newStudent;

    setStudents(updatedStudents);

    closeModal();

  };



  const deleteStudent = (index) => {

    const updatedStudents =
      students.filter((_, i) => i !== index);

    setStudents(updatedStudents);

  };



  const closeModal = () => {

    setShowModal(false);

    setEditingIndex(null);

    setNewStudent({

      fullName: "",
      roll: "",
      email: "",
      branch: "",
      cgpa: "",
      year: "",
      phone: ""

    });

  };



  const filteredStudents =
    students.filter((student) => {

      const matchesSearch =

        student.fullName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        student.roll
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        student.email
          .toLowerCase()
          .includes(search.toLowerCase());



      const matchesBranch =

        branchFilter === "All" ||

        student.branch === branchFilter;



      const matchesCGPA =

        cgpaFilter === "All" ||

        student.cgpa >= Number(cgpaFilter);



      return (
        matchesSearch &&
        matchesBranch &&
        matchesCGPA
      );

    });



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="flex justify-between items-start mb-8">

        <div>

          <h1 className="text-5xl font-bold text-[#0f172a] mb-2">
            Students
          </h1>

          <p className="text-gray-500 text-lg">
            Manage the student database and track placement status.
          </p>

        </div>



        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md"
        >

          <Plus size={20} />

          Add Student

        </button>

      </div>



      {/* FILTERS */}

      <div className="flex gap-4 mb-8 flex-wrap">

        <input
          type="text"
          placeholder="Search by name, roll, or email..."
          className="border border-gray-200 rounded-xl px-5 py-4 w-96 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />



        <select
          className="border border-gray-200 rounded-xl px-5 py-4 outline-none"
          onChange={(e) =>
            setBranchFilter(e.target.value)
          }
        >

          <option>All</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
          <option>EEE</option>
          <option>ME</option>

        </select>



        <select
          className="border border-gray-200 rounded-xl px-5 py-4 outline-none"
          onChange={(e) =>
            setCgpaFilter(e.target.value)
          }
        >

          <option value="All">
            All CGPA
          </option>

          <option value="7">
            7+
          </option>

          <option value="8">
            8+
          </option>

          <option value="9">
            9+
          </option>

        </select>

      </div>



      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50 border-b">

            <tr className="text-left text-gray-600">

              <th className="p-5">Full Name</th>
              <th className="p-5">Roll Number</th>
              <th className="p-5">Email</th>
              <th className="p-5">Branch</th>
              <th className="p-5">CGPA</th>
              <th className="p-5">Year</th>
              <th className="p-5">Phone</th>
              <th className="p-5">Actions</th>

            </tr>

          </thead>



          <tbody>

            {filteredStudents.map((student, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-5 font-semibold">
                  {student.fullName}
                </td>

                <td className="p-5">
                  {student.roll}
                </td>

                <td className="p-5">
                  {student.email}
                </td>

                <td className="p-5">
                  {student.branch}
                </td>

                <td className="p-5 font-semibold text-blue-600">
                  {student.cgpa}
                </td>

                <td className="p-5">
                  {student.year}
                </td>

                <td className="p-5">
                  {student.phone}
                </td>

                <td className="p-5 flex gap-3">

                  <button
                    onClick={() =>
                      editStudent(student, index)
                    }
                    className="text-blue-600"
                  >

                    <Pencil size={18} />

                  </button>



                  <button
                    onClick={() =>
                      deleteStudent(index)
                    }
                    className="text-red-500"
                  >

                    <Trash2 size={18} />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>




      {/* MODAL */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-full max-w-3xl rounded-2xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">

                {editingIndex !== null
                  ? "Edit Student"
                  : "Add Student"}

              </h2>

              <button
                onClick={closeModal}
                className="text-2xl"
              >
                
              </button>

            </div>



            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={newStudent.fullName}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="roll"
                placeholder="Roll Number"
                value={newStudent.roll}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newStudent.email}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={newStudent.branch}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="cgpa"
                placeholder="CGPA"
                value={newStudent.cgpa}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="year"
                placeholder="Year"
                value={newStudent.year}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

            </div>



            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={newStudent.phone}
              className="border p-3 rounded-lg w-full mt-5"
              onChange={handleChange}
            />



            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={closeModal}
                className="border px-6 py-3 rounded-lg"
              >
                Cancel
              </button>



              {editingIndex !== null ? (

                <button
                  onClick={updateStudent}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Update Student
                </button>

              ) : (

                <button
                  onClick={addStudent}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Add Student
                </button>

              )}

            </div>

          </div>

        </div>

      )}

    </DashboardLayout>

  );
}