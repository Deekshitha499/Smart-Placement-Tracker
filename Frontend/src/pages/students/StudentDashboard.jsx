import StudentLayout from "../../layouts/StudentLayout";

import {

  Briefcase,
  Building2,
  CalendarClock,
  Trophy,
  Bell,
  ArrowUpRight

} from "lucide-react";



export default function StudentDashboard() {

  const stats = [

    {
      title: "Applied Drives",
      value: 12,
      desc: "Applications submitted",
      icon: <Briefcase size={28} />,
      color: "bg-blue-100 text-blue-600"
    },

    {
      title: "Eligible Drives",
      value: 8,
      desc: "Matching your profile",
      icon: <Building2 size={28} />,
      color: "bg-green-100 text-green-600"
    },

    {
      title: "Upcoming Interviews",
      value: 3,
      desc: "Scheduled this week",
      icon: <CalendarClock size={28} />,
      color: "bg-orange-100 text-orange-500"
    },

    {
      title: "Selected",
      value: 1,
      desc: "Congratulations 🎉",
      icon: <Trophy size={28} />,
      color: "bg-purple-100 text-purple-600"
    }

  ];



  const recentActivities = [

    {
      title: "Amazon Interview Scheduled",
      desc: "Technical Round on 24 July at 10 AM"
    },

    {
      title: "Google Drive Opened",
      desc: "Applications are now open for SDE role"
    },

    {
      title: "Infosys Application Selected",
      desc: "You cleared all interview rounds"
    },

    {
      title: "Microsoft Shortlisted",
      desc: "Resume shortlisted for interview process"
    }

  ];



  const upcomingDrives = [

    {
      company: "Adobe",
      role: "Frontend Developer",
      package: "28 LPA"
    },

    {
      company: "Oracle",
      role: "Application Developer",
      package: "18 LPA"
    },

    {
      company: "Flipkart",
      role: "SDE-1",
      package: "24 LPA"
    }

  ];



  return (

    <StudentLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-6xl font-bold text-[#0f172a]">

          Student Dashboard

        </h1>



        <p className="text-gray-500 text-xl mt-3">

          Track your placement journey, applications, interviews and opportunities.

        </p>

      </div>



      {/* STATS */}

      <div className="grid grid-cols-4 gap-7 mb-10">

        {stats.map((item, index) => (

          <div

            key={index}

            className="bg-white rounded-3xl border shadow-sm p-8 hover:shadow-lg transition-all"

          >

            <div className="flex justify-between items-start">

              <div>

                <h2 className="text-gray-500 text-lg">

                  {item.title}

                </h2>



                <h1 className="text-5xl font-bold mt-5 text-[#0f172a]">

                  {item.value}

                </h1>



                <p className="text-gray-400 mt-4">

                  {item.desc}

                </p>

              </div>



              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}>

                {item.icon}

              </div>

            </div>

          </div>

        ))}

      </div>



      {/* SECOND SECTION */}

      <div className="grid grid-cols-2 gap-8">

        {/* RECENT ACTIVITY */}

        <div className="bg-white rounded-3xl border shadow-sm p-8">

          <div className="flex items-center justify-between mb-8">

            <h1 className="text-3xl font-bold text-[#0f172a]">

              Recent Activity

            </h1>



            <Bell
              size={24}
              className="text-blue-600"
            />

          </div>



          <div className="space-y-6">

            {recentActivities.map((activity, index) => (

              <div

                key={index}

                className="flex gap-4"

              >

                <div className="w-3 h-3 bg-blue-600 rounded-full mt-3"></div>



                <div>

                  <h2 className="font-semibold text-lg text-[#0f172a]">

                    {activity.title}

                  </h2>



                  <p className="text-gray-500 mt-1">

                    {activity.desc}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>



        {/* UPCOMING DRIVES */}

        <div className="bg-white rounded-3xl border shadow-sm p-8">

          <div className="flex items-center justify-between mb-8">

            <h1 className="text-3xl font-bold text-[#0f172a]">

              Upcoming Drives

            </h1>



            <ArrowUpRight
              size={24}
              className="text-green-600"
            />

          </div>



          <div className="space-y-6">

            {upcomingDrives.map((drive, index) => (

              <div

                key={index}

                className="border rounded-2xl p-5 hover:bg-gray-50 transition-all"

              >

                <div className="flex justify-between items-center">

                  <div>

                    <h2 className="text-2xl font-bold text-[#0f172a]">

                      {drive.company}

                    </h2>



                    <p className="text-gray-500 mt-2">

                      {drive.role}

                    </p>

                  </div>



                  <div className="text-right">

                    <h2 className="text-xl font-bold text-green-600">

                      {drive.package}

                    </h2>



                    <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl">

                      Apply

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </StudentLayout>

  );

}