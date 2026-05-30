import { Link, useLocation } from "react-router-dom";

import { Mic, ClipboardList } from "lucide-react";

import {

  LayoutDashboard,
  Building2,
  Briefcase,
  FileText,
  LogOut,
  UserCircle2,
  Bell

} from "lucide-react";



export default function StudentLayout({ children }) {

  const location = useLocation();



  /* GET USER */

  const user =
    JSON.parse(localStorage.getItem("user"));



  const fullName =
    `${user?.firstName || ""} ${user?.lastName || ""}`;



  const menuItems = [

    {
      name: "Dashboard",
      path: "/student/dashboard",
      icon: <LayoutDashboard size={20} />
    },

    {
      name: "Companies",
      path: "/student/companies",
      icon: <Building2 size={20} />
    },

    {
      name: "Drives",
      path: "/student/drives",
      icon: <Briefcase size={20} />
    },

    {
      name: "My Applications",
      path: "/student/applications",
      icon: <FileText size={20} />
    },

    {
  name: "Mock Interviews",
  path: "/student/mock-interviews",
  icon: <Mic size={20} />
},

{
  name: "Tests",
  path: "/student/tests",
  icon: <ClipboardList size={20} />
},

    {
  name: "ATS Checker",
  path: "/student/ats-checker",
  icon: <FileText size={20} />
}

  ];



  const notifications = [

    "Amazon interview scheduled tomorrow",

    "Google drive applications opened",

    "Infosys shortlisted candidates released",

    "Microsoft Round 2 results announced"

  ];



  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";

  };



  return (

    <div className="flex min-h-screen bg-[#f8fafc]">

      {/* SIDEBAR */}

      <div className="w-72 bg-[#081028] text-white flex flex-col">

        {/* LOGO */}

        <div className="p-6 border-b border-gray-800">

          <h1 className="text-3xl font-bold">

            Student Portal

          </h1>

        </div>



        {/* MENU */}

        <div className="flex-1 p-4 space-y-3 mt-4">

          {menuItems.map((item) => (

            <Link

              key={item.name}

              to={item.path}

              className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all

              ${

                location.pathname === item.path

                  ? "bg-[#13203b] text-white"

                  : "text-gray-300 hover:bg-[#13203b]"

              }`}

            >

              {item.icon}



              <span className="text-lg">

                {item.name}

              </span>

            </Link>

          ))}

        </div>



        {/* LOGOUT */}

        <div className="p-5 border-t border-gray-800">

          <button

            onClick={handleLogout}

            className="flex items-center gap-3 text-red-400 hover:text-red-300"

          >

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </div>



      {/* MAIN CONTENT */}

      <div className="flex-1 flex flex-col">

        {/* TOP NAVBAR */}

        <div className="bg-white border-b px-10 py-5 flex justify-end items-center gap-6 shadow-sm">

          {/* NOTIFICATIONS */}

          <div className="relative group">

            <button className="relative">

              <Bell
                size={26}
                className="text-gray-700"
              />



              {/* RED DOT */}

              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                4

              </div>

            </button>



            {/* NOTIFICATION DROPDOWN */}

            <div className="absolute right-0 mt-4 w-96 bg-white rounded-2xl shadow-xl border p-5 hidden group-hover:block z-50">

              <h1 className="text-2xl font-bold mb-5 text-[#0f172a]">

                Notifications

              </h1>



              <div className="space-y-4">

                {notifications.map((item, index) => (

                  <div

                    key={index}

                    className="p-4 rounded-xl border hover:bg-gray-50"

                  >

                    <p className="text-gray-700">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>



          {/* PROFILE */}

          <div className="relative group">

            {/* PROFILE BUTTON */}

            <button className="flex items-center gap-4">

              <div className="text-right">

                <h2 className="font-bold text-[#0f172a] text-lg">

                  {fullName}

                </h2>



                <p className="text-gray-500 text-sm capitalize">

                  {user?.role}

                </p>

              </div>



              {/* AVATAR */}

              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">

                <UserCircle2
                  size={34}
                  className="text-blue-600"
                />

              </div>

            </button>



            {/* PROFILE DROPDOWN */}

            <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-xl border p-6 hidden group-hover:block z-50">

              <div className="flex items-center gap-4 mb-5">

                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">

                  <UserCircle2
                    size={38}
                    className="text-blue-600"
                  />

                </div>



                <div>

                  <h2 className="text-xl font-bold text-[#0f172a]">

                    {fullName}

                  </h2>



                  <p className="text-gray-500 text-sm mt-1">

                    {user?.email}

                  </p>

                </div>

              </div>



              {/* ROLE */}

              <div className="border-t border-b py-4 space-y-3">

                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Role

                  </span>



                  <span className="font-semibold text-blue-600 capitalize">

                    {user?.role}

                  </span>

                </div>



                <div className="flex justify-between">

                  <span className="text-gray-500">

                    Status

                  </span>



                  <span className="font-semibold text-green-600">

                    Active

                  </span>

                </div>

              </div>



              {/* SIGN OUT */}

              <button

                onClick={handleLogout}

                className="w-full mt-5 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold"

              >

                Sign Out

              </button>

            </div>

          </div>

        </div>



        {/* PAGE CONTENT */}

        <div className="p-10 overflow-y-auto">

          {children}

        </div>

      </div>

    </div>

  );

}


