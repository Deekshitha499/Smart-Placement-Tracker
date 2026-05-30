import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Briefcase,
  Building2,
  TrendingUp,
  Users
} from "lucide-react";

export default function Dashboard() {

  const branchData = [

    {
      branch: "CSE",
      placed: 95
    },

    {
      branch: "IT",
      placed: 90
    },

    {
      branch: "ECE",
      placed: 82
    },

    {
      branch: "EEE",
      placed: 75
    },

    {
      branch: "ME",
      placed: 68
    }

  ];

  const activities = [

    "Amazon SDE Drive 2026 created successfully",
    "Google internship applications opened",
    "250 students shortlisted for TCS NQT",
    "Microsoft drive Round 2 results published",
    "Infosys onboarding mails sent"

  ];

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-[#0f172a] mb-2">
          Dashboard
        </h1>

        <p className="text-gray-500 text-lg">
          Overview of placement activities and statistics.
        </p>

      </div>


      {/* STAT CARDS */}

      <div className="grid grid-cols-4 gap-6 mb-8">

        {/* PLACEMENT RATE */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-gray-500 font-medium">
                Placement Rate
              </p>

              <h2 className="text-5xl font-bold text-[#2563eb] mt-3">
                93%
              </h2>

            </div>

            <div className="bg-blue-100 p-3 rounded-xl">

              <TrendingUp
                size={26}
                className="text-blue-600"
              />

            </div>

          </div>

          <p className="text-green-600 mt-5 font-medium">
            +8% growth compared to last year
          </p>

        </div>


        {/* TOTAL STUDENTS */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-gray-500 font-medium">
                Total Students
              </p>

              <h2 className="text-5xl font-bold text-[#0f172a] mt-3">
                30,000
              </h2>

            </div>

            <div className="bg-indigo-100 p-3 rounded-xl">

              <Users
                size={26}
                className="text-indigo-600"
              />

            </div>

          </div>

          <p className="text-gray-500 mt-5 font-medium">
            25,000 students successfully placed
          </p>

        </div>


        {/* ACTIVE DRIVES */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-gray-500 font-medium">
                Active Drives
              </p>

              <h2 className="text-5xl font-bold text-[#0f172a] mt-3">
                14
              </h2>

            </div>

            <div className="bg-orange-100 p-3 rounded-xl">

              <Briefcase
                size={26}
                className="text-orange-600"
              />

            </div>

          </div>

          <p className="text-gray-500 mt-5 font-medium">
            5 drives scheduled this week
          </p>

        </div>


        {/* COMPANIES VISITED */}

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-gray-500 font-medium">
                Companies Visited
              </p>

              <h2 className="text-5xl font-bold text-[#0f172a] mt-3">
                56
              </h2>

            </div>

            <div className="bg-emerald-100 p-3 rounded-xl">

              <Building2
                size={26}
                className="text-emerald-600"
              />

            </div>

          </div>

          <p className="text-gray-500 mt-5 font-medium">
            Top recruiters from product & service companies
          </p>

        </div>

      </div>



      {/* SECOND SECTION */}

      <div className="grid grid-cols-2 gap-8">

        {/* BAR GRAPH */}

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-screen">

          <h2 className="text-3xl font-bold text-[#0f172a] mb-2">
            Placement by Branch
          </h2>

          <p className="text-gray-500 mb-12">
            Branch-wise placement performance overview.
          </p>


          <div className="space-y-8">

            {branchData.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4"
              >

                <p className="w-16 font-semibold text-gray-700">
                  {item.branch}
                </p>

                <div className="flex-1 bg-gray-200 rounded-full h-5 overflow-hidden">

                  <div
                    className="bg-blue-600 from-blue-500 to-indigo-600 h-5 rounded-full"
                    style={{
                      width: `${item.placed}%`
                    }}
                  />

                </div>

                <p className="font-bold text-gray-700 w-14">
                  {item.placed}%
                </p>

              </div>

            ))}

          </div>

        </div>



        {/* RECENT ACTIVITY */}

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-screen">

          <h2 className="text-3xl font-bold text-[#0f172a] mb-2">
            Recent Activity
          </h2>

          <p className="text-gray-500 mb-10">
            Latest updates from placement drives and applications.
          </p>


          <div className="space-y-8">

            {activities.map((activity, index) => (

              <div
                key={index}
                className="flex gap-4 items-start"
              >

                <div className="w-3 h-3 rounded-full bg-blue-600 mt-2"></div>

                <div>

                  <p className="font-semibold text-[#0f172a] text-lg">
                    {activity}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Updated recently
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}