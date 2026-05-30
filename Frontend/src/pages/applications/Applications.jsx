import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Plus,
  Pencil,
  Trash2
} from "lucide-react";

export default function Applications() {

  const [showModal, setShowModal] =
    useState(false);

  const [editingIndex, setEditingIndex] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");



  const [applications, setApplications] =
    useState([

      {
        fullName: "Aarav Sharma",
        roll: "CSE21001",
        email: "aarav@gmail.com",
        branch: "CSE",
        cgpa: 9.1,
        year: 4,
        phone: "9876543210",
        company: "Google",
        status: "Selected"
      },

      {
        fullName: "Ananya Reddy",
        roll: "IT21002",
        email: "ananya@gmail.com",
        branch: "IT",
        cgpa: 8.7,
        year: 4,
        phone: "9876543211",
        company: "Amazon",
        status: "Round 2"
      },

      {
        fullName: "Rahul Verma",
        roll: "ECE21003",
        email: "rahul@gmail.com",
        branch: "ECE",
        cgpa: 7.9,
        year: 4,
        phone: "9876543212",
        company: "Infosys",
        status: "Applied"
      },

      {
        fullName: "Sneha Patel",
        roll: "EEE21004",
        email: "sneha@gmail.com",
        branch: "EEE",
        cgpa: 8.4,
        year: 4,
        phone: "9876543213",
        company: "TCS",
        status: "Rejected"
      },

      {
        fullName: "Kiran Kumar",
        roll: "ME21005",
        email: "kiran@gmail.com",
        branch: "ME",
        cgpa: 7.5,
        year: 4,
        phone: "9876543214",
        company: "Wipro",
        status: "Round 1"
      },

      {
        fullName: "Priya Singh",
        roll: "CSE21006",
        email: "priya@gmail.com",
        branch: "CSE",
        cgpa: 9.3,
        year: 4,
        phone: "9876543215",
        company: "Microsoft",
        status: "Selected"
      },

      {
        fullName: "Rohit Jain",
        roll: "IT21007",
        email: "rohit@gmail.com",
        branch: "IT",
        cgpa: 8.1,
        year: 4,
        phone: "9876543216",
        company: "Capgemini",
        status: "Applied"
      },

      {
        fullName: "Divya Rao",
        roll: "ECE21008",
        email: "divya@gmail.com",
        branch: "ECE",
        cgpa: 8.9,
        year: 4,
        phone: "9876543217",
        company: "Deloitte",
        status: "Round 2"
      },

      {
        fullName: "Arjun Mehta",
        roll: "EEE21009",
        email: "arjun@gmail.com",
        branch: "EEE",
        cgpa: 7.8,
        year: 4,
        phone: "9876543218",
        company: "Google",
        status: "Rejected"
      },

      {
        fullName: "Meera Joshi",
        roll: "ME21010",
        email: "meera@gmail.com",
        branch: "ME",
        cgpa: 8.2,
        year: 4,
        phone: "9876543219",
        company: "Infosys",
        status: "Applied"
      },

      {
        fullName: "Vikram Reddy",
        roll: "CSE21011",
        email: "vikram@gmail.com",
        branch: "CSE",
        cgpa: 9.0,
        year: 4,
        phone: "9876543220",
        company: "Amazon",
        status: "Selected"
      },

      {
        fullName: "Nisha Kapoor",
        roll: "IT21012",
        email: "nisha@gmail.com",
        branch: "IT",
        cgpa: 8.6,
        year: 4,
        phone: "9876543221",
        company: "TCS",
        status: "Round 1"
      }

    ]);



  const [newApplication, setNewApplication] =
    useState({

      fullName: "",
      roll: "",
      email: "",
      branch: "",
      cgpa: "",
      year: "",
      phone: "",
      company: "",
      status: ""

    });



  const handleChange = (e) => {

    setNewApplication({

      ...newApplication,
      [e.target.name]: e.target.value

    });

  };



  const addApplication = () => {

    setApplications([
      newApplication,
      ...applications
    ]);

    closeModal();

  };



  const editApplication = (app, index) => {

    setEditingIndex(index);

    setNewApplication(app);

    setShowModal(true);

  };



  const updateApplication = () => {

    const updatedApplications =
      [...applications];

    updatedApplications[editingIndex] =
      newApplication;

    setApplications(updatedApplications);

    closeModal();

  };



  const deleteApplication = (index) => {

    const updatedApplications =
      applications.filter((_, i) => i !== index);

    setApplications(updatedApplications);

  };



  const closeModal = () => {

    setShowModal(false);

    setEditingIndex(null);

    setNewApplication({

      fullName: "",
      roll: "",
      email: "",
      branch: "",
      cgpa: "",
      year: "",
      phone: "",
      company: "",
      status: ""

    });

  };



  const filteredApplications =
    applications.filter((app) => {

      const matchesSearch =

        app.fullName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        app.company
          .toLowerCase()
          .includes(search.toLowerCase());



      const matchesStatus =

        statusFilter === "All" ||

        app.status === statusFilter;



      return (
        matchesSearch &&
        matchesStatus
      );

    });



  const getStatusColor = (status) => {

    if (status === "Selected") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Rejected") {
      return "bg-red-100 text-red-700";
    }

    if (status === "Round 1") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Round 2") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-gray-100 text-gray-700";

  };



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="flex justify-between items-start mb-8">

        <div>

          <h1 className="text-5xl font-bold text-[#0f172a] mb-2">
            Applications
          </h1>

          <p className="text-gray-500 text-lg">
            Track all student applications across placement drives.
          </p>

        </div>



        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md"
        >

          <Plus size={20} />

          Add Application

        </button>

      </div>



      {/* FILTERS */}

      <div className="flex gap-4 mb-8 flex-wrap">

        <input
          type="text"
          placeholder="Search student or company..."
          className="border border-gray-200 rounded-xl px-5 py-4 w-96 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />



        <select
          className="border border-gray-200 rounded-xl px-5 py-4 outline-none"
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option>All</option>
          <option>Applied</option>
          <option>Round 1</option>
          <option>Round 2</option>
          <option>Selected</option>
          <option>Rejected</option>

        </select>

      </div>



      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-50 border-b">

            <tr className="text-left text-gray-600">

              <th className="p-5">Full Name</th>
              <th className="p-5">Roll No</th>
              <th className="p-5">Email</th>
              <th className="p-5">Branch</th>
              <th className="p-5">CGPA</th>
              <th className="p-5">Year</th>
              <th className="p-5">Phone</th>
              <th className="p-5">Company</th>
              <th className="p-5">Status</th>
              <th className="p-5">Actions</th>

            </tr>

          </thead>



          <tbody>

            {filteredApplications.map((app, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-5 font-semibold">
                  {app.fullName}
                </td>

                <td className="p-5">
                  {app.roll}
                </td>

                <td className="p-5">
                  {app.email}
                </td>

                <td className="p-5">
                  {app.branch}
                </td>

                <td className="p-5 text-blue-600 font-semibold">
                  {app.cgpa}
                </td>

                <td className="p-5">
                  {app.year}
                </td>

                <td className="p-5">
                  {app.phone}
                </td>

                <td className="p-5 font-semibold">
                  {app.company}
                </td>

                <td className="p-5">

                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-semibold ${getStatusColor(app.status)}`}
                  >

                    {app.status}

                  </span>

                </td>

                <td className="p-5 flex gap-3">

                  <button
                    onClick={() =>
                      editApplication(app, index)
                    }
                    className="text-blue-600"
                  >

                    <Pencil size={18} />

                  </button>



                  <button
                    onClick={() =>
                      deleteApplication(index)
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

          <div className="bg-white w-full max-w-4xl rounded-2xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">

                {editingIndex !== null
                  ? "Edit Application"
                  : "Add Application"}

              </h2>

              <button
                onClick={closeModal}
                className="text-2xl"
              >
                ×
              </button>

            </div>



            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={newApplication.fullName}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="roll"
                placeholder="Roll Number"
                value={newApplication.roll}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newApplication.email}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={newApplication.branch}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="cgpa"
                placeholder="CGPA"
                value={newApplication.cgpa}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="year"
                placeholder="Year"
                value={newApplication.year}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={newApplication.phone}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="company"
                placeholder="Company Applied"
                value={newApplication.company}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

            </div>



            <select
              name="status"
              value={newApplication.status}
              className="border p-3 rounded-lg w-full mt-5"
              onChange={handleChange}
            >

              <option value="">
                Select Status
              </option>

              <option>Applied</option>
              <option>Round 1</option>
              <option>Round 2</option>
              <option>Selected</option>
              <option>Rejected</option>

            </select>



            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={closeModal}
                className="border px-6 py-3 rounded-lg"
              >
                Cancel
              </button>



              {editingIndex !== null ? (

                <button
                  onClick={updateApplication}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Update Application
                </button>

              ) : (

                <button
                  onClick={addApplication}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Add Application
                </button>

              )}

            </div>

          </div>

        </div>

      )}

    </DashboardLayout>

  );
}