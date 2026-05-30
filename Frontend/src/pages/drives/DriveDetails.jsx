import { useLocation, useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  CalendarDays,
  IndianRupee,
  ArrowLeft
} from "lucide-react";

export default function DriveDetails() {

  const navigate = useNavigate();

  const location = useLocation();

  const drive = location.state;


  return (

    <DashboardLayout>

      {/* BACK BUTTON */}

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-blue-600 font-semibold"
      >

        <ArrowLeft size={20} />

        Back

      </button>



      {/* MAIN CARD */}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">

        {/* HEADER */}

        <div className="flex justify-between items-start mb-8">

          <div>

            <h1 className="text-5xl font-bold text-[#0f172a]">
              {drive.title}
            </h1>

            <p className="text-gray-500 text-xl mt-3">
              {drive.company}
            </p>

          </div>


          <span
            className="bg-blue-100 text-blue-700 px-5 py-2 rounded-xl font-semibold capitalize"
          >

            {drive.status}

          </span>

        </div>



        {/* DETAILS GRID */}

        <div className="grid grid-cols-2 gap-8 mt-10">

          <div className="bg-gray-50 p-6 rounded-xl">

            <p className="text-gray-500 mb-2">
              Drive Date
            </p>

            <div className="flex items-center gap-3 text-2xl font-bold">

              <CalendarDays size={24} />

              {drive.date}

            </div>

          </div>



          <div className="bg-gray-50 p-6 rounded-xl">

            <p className="text-gray-500 mb-2">
              Package Offered
            </p>

            <div className="flex items-center gap-3 text-2xl font-bold">

              <IndianRupee size={24} />

              {drive.package}

            </div>

          </div>



          <div className="bg-gray-50 p-6 rounded-xl">

            <p className="text-gray-500 mb-2">
              Minimum CGPA
            </p>

            <h2 className="text-2xl font-bold">
              {drive.cgpa}
            </h2>

          </div>



          <div className="bg-gray-50 p-6 rounded-xl">

            <p className="text-gray-500 mb-2">
              Number of Rounds
            </p>

            <h2 className="text-2xl font-bold">
              {drive.rounds}
            </h2>

          </div>

        </div>



        {/* ELIGIBLE BRANCHES */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-5">
            Eligible Branches
          </h2>

          <div className="flex gap-4 flex-wrap">

            {drive.branches.map((branch, index) => (

              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-5 py-2 rounded-lg font-semibold"
              >

                {branch}

              </span>

            ))}

          </div>

        </div>



        {/* DESCRIPTION */}

        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-5">
            Drive Description
          </h2>

          <p className="text-gray-600 text-lg leading-8">

            This recruitment drive is conducted by
            {" "}
            <span className="font-bold">
              {drive.company}
            </span>
            {" "}
            for hiring talented students across eligible branches.

            Students must meet the minimum CGPA criteria
            and successfully clear all interview rounds.

          </p>

        </div>

      </div>

    </DashboardLayout>

  );
}