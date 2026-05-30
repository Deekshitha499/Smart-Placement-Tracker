import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../apis/axios";

import {

  User,
  Mail,
  Lock,
  GraduationCap

} from "lucide-react";



export default function Register() {

  const navigate = useNavigate();



  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("student");

  const [loading, setLoading] = useState(false);



  const handleRegister = async (e) => {

    e.preventDefault();



    /* EMAIL VALIDATION */

    if (!email.endsWith("@gmail.com")) {

      alert("Email must end with @gmail.com");

      return;

    }



    /* PASSWORD VALIDATION */

    if (password.length < 6) {

      alert("Password must be at least 6 characters");

      return;

    }



    try {

      setLoading(true);



      const response = await API.post(
  "/auth/register",
  {
    firstName,
    lastName,
    email,
    password,
    role
  }
);



      alert("Registration Successful");



      navigate("/login");

    }

    catch (error) {

      console.log(error);



      alert(

        error.response?.data?.message ||

        "Registration Failed"

      );

    }

    finally {

      setLoading(false);

    }

  };



  return (

    <div className="min-h-screen flex bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#38bdf8]">



      {/* LEFT SECTION */}

      <div className="hidden lg:flex w-1/2 text-white flex-col justify-center px-24 relative overflow-hidden">



        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>



        <div className="relative z-10">

          <div className="flex items-center gap-5">

            <div className="bg-white/20 p-5 rounded-3xl backdrop-blur-lg">

              <GraduationCap size={45} />

            </div>



            <h1 className="text-6xl font-bold leading-tight">

              Smart Placement Tracker

            </h1>

          </div>



          <p className="text-xl text-blue-100 mt-10 leading-10 max-w-2xl">

            Register and begin your placement journey
            with AI-powered resume analysis, mock interviews,
            placement drives, assessments and more.

          </p>



          <div className="grid grid-cols-2 gap-6 mt-14">



            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20">

              <h2 className="text-4xl font-bold">

                500+

              </h2>



              <p className="text-blue-100 mt-3">

                Placement Opportunities

              </p>

            </div>



            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl border border-white/20">

              <h2 className="text-4xl font-bold">

                1000+

              </h2>



              <p className="text-blue-100 mt-3">

                Students Registered

              </p>

            </div>

          </div>

        </div>

      </div>



      {/* RIGHT SECTION */}

      <div className="flex-1 flex items-center justify-center p-10">



        <div className="w-full max-w-2xl bg-white shadow-2xl rounded-[40px] p-12">



          {/* HEADING */}

          <div className="text-center">

            <h1 className="text-5xl font-bold text-[#0f172a]">

              Create Account

            </h1>



            <p className="text-gray-500 text-lg mt-4">

              Register to access your placement portal

            </p>

          </div>



          {/* FORM */}

          <form

            onSubmit={handleRegister}

            className="mt-12"

          >



            {/* FIRST + LAST NAME */}

            <div className="grid grid-cols-2 gap-6">



              <div>

                <label className="text-[#0f172a] font-semibold">

                  First Name

                </label>



                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 mt-3 focus-within:border-blue-500">

                  <User className="text-gray-400" />



                  <input

                    type="text"

                    placeholder="Enter first name"

                    value={firstName}

                    onChange={(e) => {

                      const value = e.target.value;

                      if (/^[A-Za-z\s]*$/.test(value)) {

                        setFirstName(value);

                      }

                    }}

                    required

                    className="w-full outline-none text-lg"

                  />

                </div>

              </div>



              <div>

                <label className="text-[#0f172a] font-semibold">

                  Last Name

                </label>



                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 mt-3 focus-within:border-blue-500">

                  <User className="text-gray-400" />



                  <input

                    type="text"

                    placeholder="Enter last name"

                    value={lastName}

                    onChange={(e) => {

                      const value = e.target.value;

                      if (/^[A-Za-z\s]*$/.test(value)) {

                        setLastName(value);

                      }

                    }}

                    required

                    className="w-full outline-none text-lg"

                  />

                </div>

              </div>

            </div>



            {/* EMAIL */}

            <div className="mt-8">

              <label className="text-[#0f172a] font-semibold">

                Email Address

              </label>



              <div className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 mt-3 focus-within:border-blue-500">

                <Mail className="text-gray-400" />



                <input

                  type="email"

                  placeholder="Enter your gmail"

                  value={email}

                  onChange={(e) =>

                    setEmail(e.target.value)

                  }

                  required

                  className="w-full outline-none text-lg"

                />

              </div>

            </div>



            {/* PASSWORD */}

            <div className="mt-8">

              <label className="text-[#0f172a] font-semibold">

                Password

              </label>



              <div className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 mt-3 focus-within:border-blue-500">

                <Lock className="text-gray-400" />



                <input

                  type="password"

                  placeholder="Enter password"

                  value={password}

                  onChange={(e) =>

                    setPassword(e.target.value)

                  }

                  required

                  className="w-full outline-none text-lg"

                />

              </div>

            </div>



            {/* ROLE */}

            <div className="mt-8">

              <label className="text-[#0f172a] font-semibold">

                Select Role

              </label>



              <select

                value={role}

                onChange={(e) =>

                  setRole(e.target.value)

                }

                className="w-full mt-3 border border-gray-200 rounded-2xl px-5 py-4 outline-none text-lg focus:border-blue-500"

              >

                <option value="student">

                  Student

                </option>



                <option value="tpo">

                  TPO

                </option>

              </select>

            </div>



            {/* BUTTON */}

            <button

              type="submit"

              disabled={loading}

              className="w-full mt-12 bg-linear-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] transition-all text-white py-5 rounded-2xl text-lg font-semibold shadow-lg"

            >

              {

                loading

                  ? "Registering..."

                  : "Create Account"

              }

            </button>

          </form>



          {/* LOGIN */}

          <p className="text-center text-gray-500 mt-10 text-lg">

            Already have an account?{" "}



            <Link

              to="/login"

              className="text-blue-600 font-semibold"

            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}