import { useState } from "react";

import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  CalendarDays,
  IndianRupee,
  Plus,
  ChevronRight
} from "lucide-react";

export default function Drives() {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const [selectedFilter, setSelectedFilter] =
    useState("all");


  const [drives, setDrives] = useState([

    {
      company: "Infosys",
      title: "Infosys Campus Drive 2024",
      date: "2024-06-15",
      package: "3.6 LPA",
      cgpa: "6.5",
      rounds: 3,
      branches: ["CSE", "IT", "ECE"],
      status: "completed"
    },

    {
      company: "TCS",
      title: "TCS NQT Drive 2024",
      date: "2024-07-20",
      package: "3.36 LPA",
      cgpa: "6",
      rounds: 2,
      branches: ["CSE", "IT", "ECE", "EEE", "ME"],
      status: "completed"
    },

    {
      company: "Wipro",
      title: "Wipro Elite NLTH 2024",
      date: "2024-08-05",
      package: "3.5 LPA",
      cgpa: "6.5",
      rounds: 2,
      branches: ["CSE", "IT", "ECE", "EEE"],
      status: "completed"
    },

    {
      company: "Amazon",
      title: "Amazon SDE Drive 2025",
      date: "2025-06-10",
      package: "22 LPA",
      cgpa: "7.5",
      rounds: 3,
      branches: ["CSE", "IT", "ECE"],
      status: "ongoing"
    },

    {
      company: "Microsoft",
      title: "Microsoft Engage 2025",
      date: "2025-07-15",
      package: "18 LPA",
      cgpa: "7",
      rounds: 4,
      branches: ["CSE", "IT", "ECE", "EEE"],
      status: "upcoming"
    },

    {
      company: "Deloitte",
      title: "Deloitte Analyst Drive 2025",
      date: "2025-07-25",
      package: "6 LPA",
      cgpa: "6",
      rounds: 2,
      branches: ["CSE", "IT", "ECE"],
      status: "upcoming"
    },

    {
      company: "Accenture",
      title: "Accenture Hiring 2025",
      date: "2025-08-12",
      package: "6.5 LPA",
      cgpa: "6",
      rounds: 2,
      branches: ["CSE", "IT", "ECE", "EEE"],
      status: "upcoming"
    },

    {
      company: "Capgemini",
      title: "Capgemini Off Campus 2025",
      date: "2025-05-20",
      package: "4 LPA",
      cgpa: "5.5",
      rounds: 1,
      branches: ["CSE", "IT", "ECE"],
      status: "cancelled"
    }

  ]);


  const [newDrive, setNewDrive] = useState({

    company: "",
    title: "",
    date: "",
    package: "",
    cgpa: "",
    rounds: "",
    branches: "",
    status: "upcoming"

  });



  const handleChange = (e) => {

    setNewDrive({

      ...newDrive,
      [e.target.name]: e.target.value

    });

  };



  const addDrive = () => {

    const driveData = {

      ...newDrive,

      branches:
        newDrive.branches.split(",")

    };

    setDrives([
      driveData,
      ...drives
    ]);

    setShowModal(false);

    setNewDrive({

      company: "",
      title: "",
      date: "",
      package: "",
      cgpa: "",
      rounds: "",
      branches: "",
      status: "upcoming"

    });

  };



  const getStatusColor = (status) => {

    if (status === "completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "ongoing") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "cancelled") {
      return "bg-red-100 text-red-700";
    }

    return "bg-blue-100 text-blue-700";

  };



  const filteredDrives = drives.filter((drive) => {

    if (selectedFilter === "all") {
      return true;
    }

    return drive.status === selectedFilter;

  });



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-5xl font-bold text-[#0f172a] mb-2">
            Placement Drives
          </h1>

          <p className="text-gray-500 text-lg">
            Create and manage recruitment drives.
          </p>

        </div>


        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md"
        >

          <Plus size={20} />

          New Drive

        </button>

      </div>



      {/* FILTER BUTTONS */}

      <div className="flex gap-4 mb-8 flex-wrap">

        <button

          onClick={() => setSelectedFilter("all")}

          className={`px-5 py-2 rounded-lg font-semibold transition-all

            ${selectedFilter === "all"

              ? "bg-blue-600 text-white"

              : "border bg-white"}

          `}
        >

          All

        </button>



        <button

          onClick={() => setSelectedFilter("upcoming")}

          className={`px-5 py-2 rounded-lg font-semibold transition-all

            ${selectedFilter === "upcoming"

              ? "bg-blue-600 text-white"

              : "border bg-white"}

          `}
        >

          Upcoming

        </button>



        <button

          onClick={() => setSelectedFilter("ongoing")}

          className={`px-5 py-2 rounded-lg font-semibold transition-all

            ${selectedFilter === "ongoing"

              ? "bg-yellow-500 text-white"

              : "border bg-white"}

          `}
        >

          Ongoing

        </button>



        <button

          onClick={() => setSelectedFilter("completed")}

          className={`px-5 py-2 rounded-lg font-semibold transition-all

            ${selectedFilter === "completed"

              ? "bg-green-600 text-white"

              : "border bg-white"}

          `}
        >

          Completed

        </button>



        <button

          onClick={() => setSelectedFilter("cancelled")}

          className={`px-5 py-2 rounded-lg font-semibold transition-all

            ${selectedFilter === "cancelled"

              ? "bg-red-600 text-white"

              : "border bg-white"}

          `}
        >

          Cancelled

        </button>

      </div>



      {/* DRIVE CARDS */}

      <div className="grid grid-cols-2 gap-8">

        {filteredDrives.map((drive, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
          >

            <div className="flex justify-between items-start mb-3">

              <div>

                <h2 className="text-3xl font-bold text-[#0f172a]">
                  {drive.title}
                </h2>

                <p className="text-gray-500 mt-1">
                  {drive.company}
                </p>

              </div>

              <span
                className={`px-4 py-1 rounded-lg text-sm font-semibold ${getStatusColor(drive.status)}`}
              >

                {drive.status}

              </span>

            </div>



            <div className="grid grid-cols-2 gap-y-5 mt-8 text-gray-600">

              <div className="flex items-center gap-2">

                <CalendarDays size={18} />

                {drive.date}

              </div>

              <div className="flex items-center gap-2">

                <IndianRupee size={18} />

                {drive.package}

              </div>

              <div>

                Min CGPA:
                <span className="font-bold text-[#0f172a] ml-2">
                  {drive.cgpa}
                </span>

              </div>

              <div>

                Rounds:
                <span className="font-bold text-[#0f172a] ml-2">
                  {drive.rounds}
                </span>

              </div>

            </div>



            {/* BRANCHES */}

            <div className="flex flex-wrap gap-3 mt-6">

              {drive.branches.map((branch, i) => (

                <span
                  key={i}
                  className="border px-3 py-1 rounded-md text-sm font-semibold"
                >

                  {branch}

                </span>

              ))}

            </div>



            {/* VIEW DETAILS BUTTON */}

            <button

              onClick={() =>
                navigate(
                  "/drive-details",
                  {
                    state: drive
                  }
                )
              }

              className="w-full border mt-8 py-3 rounded-lg font-semibold flex justify-center items-center gap-2 hover:bg-gray-50"
            >

              View Details

              <ChevronRight size={18} />

            </button>

          </div>

        ))}

      </div>




      {/* MODAL */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-full max-w-3xl rounded-2xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                Create New Drive
              </h2>

              <button
                onClick={() => setShowModal(false)}
                className="text-2xl"
              >
                ×
              </button>

            </div>



            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="title"
                placeholder="Drive Title"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="date"
                name="date"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="package"
                placeholder="Package (LPA)"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="cgpa"
                placeholder="Minimum CGPA"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="number"
                name="rounds"
                placeholder="Rounds"
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

            </div>



            <input
              type="text"
              name="branches"
              placeholder="Eligible Branches (comma separated)"
              className="border p-3 rounded-lg w-full mt-5"
              onChange={handleChange}
            />



            <select
              name="status"
              className="border p-3 rounded-lg w-full mt-5"
              onChange={handleChange}
            >

              <option value="upcoming">
                Upcoming
              </option>

              <option value="ongoing">
                Ongoing
              </option>

              <option value="completed">
                Completed
              </option>

              <option value="cancelled">
                Cancelled
              </option>

            </select>



            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={() => setShowModal(false)}
                className="border px-6 py-3 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={addDrive}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                Create Drive
              </button>

            </div>

          </div>

        </div>

      )}

    </DashboardLayout>

  );
}