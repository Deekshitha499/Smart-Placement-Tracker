import StudentLayout from "../../layouts/StudentLayout";

import {

  Briefcase,
  MapPin,
  IndianRupee,
  CalendarDays

} from "lucide-react";



export default function MyApplications() {

  const applications = [

    {
      company: "Amazon",
      role: "SDE Intern",
      location: "Hyderabad",
      package: "22 LPA",
      appliedDate: "12 July 2026",
      status: "Round 2"
    },

    {
      company: "Google",
      role: "Software Engineer",
      location: "Bangalore",
      package: "40 LPA",
      appliedDate: "08 July 2026",
      status: "Applied"
    },

    {
      company: "Infosys",
      role: "Systems Engineer",
      location: "Mysore",
      package: "3.6 LPA",
      appliedDate: "15 June 2026",
      status: "Selected"
    },

    {
      company: "Microsoft",
      role: "Software Engineer",
      location: "Hyderabad",
      package: "45 LPA",
      appliedDate: "10 July 2026",
      status: "Interview Scheduled"
    },

    {
      company: "TCS",
      role: "Digital Role",
      location: "Mumbai",
      package: "7 LPA",
      appliedDate: "20 June 2026",
      status: "Round 1 Cleared"
    },

    {
      company: "Wipro",
      role: "Project Engineer",
      location: "Chennai",
      package: "3.5 LPA",
      appliedDate: "18 June 2026",
      status: "Rejected"
    }

  ];



  const getStatusColor = (status) => {

    if (status === "Selected") {

      return "bg-green-100 text-green-700";

    }

    else if (status === "Rejected") {

      return "bg-red-100 text-red-700";

    }

    else if (status.includes("Round")) {

      return "bg-blue-100 text-blue-700";

    }

    else if (status === "Interview Scheduled") {

      return "bg-orange-100 text-orange-700";

    }

    else {

      return "bg-gray-100 text-gray-700";

    }

  };



  return (

    <StudentLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-[#0f172a]">

          My Applications

        </h1>



        <p className="text-gray-500 text-lg mt-3">

          Track all the companies you have applied for and monitor your application status.

        </p>

      </div>



      {/* APPLICATION CARDS */}

      <div className="space-y-6">

        {applications.map((app, index) => (

          <div

            key={index}

            className="bg-white rounded-3xl border shadow-sm p-8 hover:shadow-lg transition-all"

          >

            <div className="flex justify-between items-start">

              {/* LEFT */}

              <div>

                <div className="flex items-center gap-4 mb-5">

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                    <Briefcase
                      size={28}
                      className="text-blue-600"
                    />

                  </div>



                  <div>

                    <h1 className="text-3xl font-bold text-[#0f172a]">

                      {app.company}

                    </h1>



                    <p className="text-gray-500 mt-1">

                      {app.role}

                    </p>

                  </div>

                </div>



                {/* DETAILS */}

                <div className="space-y-3">

                  <div className="flex items-center gap-3">

                    <MapPin
                      size={18}
                      className="text-gray-500"
                    />



                    <span className="text-gray-700">

                      {app.location}

                    </span>

                  </div>



                  <div className="flex items-center gap-3">

                    <IndianRupee
                      size={18}
                      className="text-gray-500"
                    />



                    <span className="text-gray-700">

                      Package: {app.package}

                    </span>

                  </div>



                  <div className="flex items-center gap-3">

                    <CalendarDays
                      size={18}
                      className="text-gray-500"
                    />



                    <span className="text-gray-700">

                      Applied On: {app.appliedDate}

                    </span>

                  </div>

                </div>

              </div>



              {/* STATUS */}

              <div>

                <span

                  className={`px-5 py-2 rounded-xl font-semibold ${getStatusColor(app.status)}`}

                >

                  {app.status}

                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </StudentLayout>

  );

}