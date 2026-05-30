import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  Briefcase,
  Building2,
  Users,
  FileText,
  Bell,
  ChevronDown,
  LogOut
} from "lucide-react";



export default function DashboardLayout({ children }) {

  const location = useLocation();



  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);



  const menuItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />
    },

    {
      name: "Drives",
      path: "/drives",
      icon: <Briefcase size={20} />
    },

    {
      name: "Companies",
      path: "/companies",
      icon: <Building2 size={20} />
    },

    {
      name: "Students",
      path: "/students",
      icon: <Users size={20} />
    },

    {
      name: "Applications",
      path: "/applications",
      icon: <FileText size={20} />
    }

  ];



  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/login";

  };



  return (

    <div className="flex bg-[#f8fafc] min-h-screen">

      {/* SIDEBAR */}

      <div className="width: 280px bg-[#081028] text-white flex flex-col h-screen sticky top-0">

        {/* LOGO */}

        <div className="px-6 py-7 border-b border-gray-800">

          <h1 className="text-2xl font-bold">
            Smart Placement
          </h1>

        </div>



        {/* MENU */}

        <div className="flex-1 px-4 py-6 space-y-2">

          {menuItems.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
              
              ${
                location.pathname === item.path

                  ? "bg-[#13203b] text-white"

                  : "text-gray-300 hover:bg-[#13203b] hover:text-white"
              }`}
            >

              {item.icon}

              <span className="font-medium text-lg">
                {item.name}
              </span>

            </Link>

          ))}

        </div>



        {/* USER INFO */}

        <div className="px-6 py-5 border-t border-gray-800">

          <div className="mb-5">

            <h3 className="font-semibold text-lg">
              T&P Coordinator
            </h3>

            <p className="text-gray-400 text-sm">
              coordinator@college.edu
            </p>

          </div>



          {/* LOGOUT BUTTON */}

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-400 hover:text-red-500 transition-all"
          >

            <LogOut size={20} />

            <span className="font-medium text-lg">
              Logout
            </span>

          </button>

        </div>

      </div>



      {/* MAIN CONTENT */}

      <div className="flex-1">

        {/* TOPBAR */}

        <div className="height: 74px bg-white border-b flex items-center justify-end px-8 relative">

          <div className="flex items-center gap-6">

            {/* NOTIFICATIONS */}

            <div className="relative">

              <button
                onClick={() =>
                  setShowNotifications(
                    !showNotifications
                  )
                }
                className="relative cursor-pointer"
              >

                <Bell className="text-gray-600" />

                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                  5

                </div>

              </button>



              {/* NOTIFICATION DROPDOWN */}

              {showNotifications && (

                <div className="absolute right-0 mt-4 w-96 bg-white rounded-2xl shadow-2xl border z-50 overflow-hidden">

                  {/* HEADER */}

                  <div className="px-5 py-4 border-b bg-gray-50">

                    <h2 className="font-bold text-xl text-[#0f172a]">

                      Notifications

                    </h2>

                  </div>



                  {/* ITEMS */}

                  <div className="max-height: 500px overflow-y-auto">

                    <div className="p-5 border-b hover:bg-gray-50 cursor-pointer">

                      <h3 className="font-semibold text-[#0f172a]">

                        Amazon Drive 2026 Added

                      </h3>

                      <p className="text-sm text-gray-500 mt-1">

                        New placement drive created successfully.

                      </p>

                    </div>



                    <div className="p-5 border-b hover:bg-gray-50 cursor-pointer">

                      <h3 className="font-semibold text-[#0f172a]">

                        25 Students Selected

                      </h3>

                      <p className="text-sm text-gray-500 mt-1">

                        Infosys shortlisted 25 students.

                      </p>

                    </div>



                    <div className="p-5 border-b hover:bg-gray-50 cursor-pointer">

                      <h3 className="font-semibold text-[#0f172a]">

                        Google Interview Round

                      </h3>

                      <p className="text-sm text-gray-500 mt-1">

                        Round 2 scheduled for tomorrow.

                      </p>

                    </div>



                    <div className="p-5 border-b hover:bg-gray-50 cursor-pointer">

                      <h3 className="font-semibold text-[#0f172a]">

                        New Company Added

                      </h3>

                      <p className="text-sm text-gray-500 mt-1">

                        Deloitte added to placement portal.

                      </p>

                    </div>



                    <div className="p-5 hover:bg-gray-50 cursor-pointer">

                      <h3 className="font-semibold text-[#0f172a]">

                        Application Status Updated

                      </h3>

                      <p className="text-sm text-gray-500 mt-1">

                        Priya moved to Round 2 in Amazon drive.

                      </p>

                    </div>

                  </div>

                </div>

              )}

            </div>



            {/* PROFILE */}

            <div className="relative">

              <button
                onClick={() =>
                  setShowProfile(
                    !showProfile
                  )
                }
                className="flex items-center gap-3 cursor-pointer"
              >

                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">

                  TC

                </div>

                <ChevronDown
                  size={18}
                  className="text-gray-500"
                />

              </button>



              {/* PROFILE DROPDOWN */}

              {showProfile && (

                <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border z-50 overflow-hidden">

                  {/* HEADER */}

                  <div className="bg-blue-600 p-6 text-white">

                    <div className="w-16 h-16 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold text-2xl mb-4">

                      TC

                    </div>

                    <h2 className="text-2xl font-bold">

                      T&P Coordinator

                    </h2>

                    <p className="text-blue-100 mt-1">

                      coordinator@college.edu

                    </p>

                  </div>



                  {/* DETAILS */}

                  <div className="p-6 space-y-5">

                    <div className="flex justify-between">

                      <span className="text-gray-500">
                        Username
                      </span>

                      <span className="font-semibold text-[#0f172a]">
                        tpocoordinator
                      </span>

                    </div>



                    <div className="flex justify-between">

                      <span className="text-gray-500">
                        Email
                      </span>

                      <span className="font-semibold text-[#0f172a]">
                        coordinator@college.edu
                      </span>

                    </div>



                    <div className="flex justify-between">

                      <span className="text-gray-500">
                        Status
                      </span>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold">

                        Active

                      </span>

                    </div>



                    <div className="flex justify-between">

                      <span className="text-gray-500">
                        Role
                      </span>

                      <span className="font-semibold text-[#0f172a]">
                        TPO Admin
                      </span>

                    </div>



                    {/* SIGN OUT */}

                    <button
                      onClick={handleLogout}
                      className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold mt-4 transition-all"
                    >

                      Sign Out

                    </button>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>



        {/* PAGE CONTENT */}

        <div className="p-10">

          {children}

        </div>

      </div>

    </div>

  );

}