import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  GraduationCap
} from "lucide-react";

import API from "../apis/axios"; // Adjust path if needed

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      const user = response.data.user;

      if (user.role === "student") {
        navigate("/student/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login Error:", error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-linear-to-br from-[#0f172a] via-[#1e3a8a] to-[#38bdf8]">
      {/* LEFT */}
      <div className="hidden lg:flex w-1/2 text-white flex-col justify-center px-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-28 h-28 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center mb-10">
            <GraduationCap size={55} />
          </div>

          <h1 className="text-7xl font-bold leading-tight">
            Smart Placement Tracker
          </h1>

          <p className="text-2xl text-blue-100 mt-10 leading-10">
            Manage placements, applications,
            drives and interviews in one
            professional platform.
          </p>

          <div className="mt-16 space-y-6">
            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-xl">
              🚀 Track Applications & Interviews
            </div>

            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-xl">
              🏢 Manage Companies & Drives
            </div>

            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-xl">
              🔔 Real-Time Notifications
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center items-center px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-2xl w-full max-w-xl rounded-[35px] shadow-2xl p-14 border border-white/20"
        >
          <h1 className="text-6xl font-bold text-center text-[#0f172a]">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-5 text-lg">
            Login to continue your placement journey
          </p>

          {/* EMAIL */}
          <div className="mt-12">
            <label className="font-semibold text-lg">
              Email Address
            </label>

            <div className="flex items-center bg-gray-50 border-2 border-gray-100 rounded-2xl mt-4 px-5">
              <Mail
                size={22}
                className="text-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-5 bg-transparent outline-none text-lg"
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="mt-8">
            <label className="font-semibold text-lg">
              Password
            </label>

            <div className="flex items-center bg-gray-50 border-2 border-gray-100 rounded-2xl mt-4 px-5">
              <LockKeyhole
                size={22}
                className="text-blue-500"
              />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-5 bg-transparent outline-none text-lg"
                required
              />
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-12 bg-linear-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] transition-all text-white py-5 rounded-2xl text-xl font-bold shadow-xl"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* REGISTER */}
          <p className="text-center text-gray-600 mt-10 text-lg">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-600 font-bold cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}