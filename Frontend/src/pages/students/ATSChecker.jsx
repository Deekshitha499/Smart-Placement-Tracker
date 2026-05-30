import { useState } from "react";

import axios from "axios";

import {
  FileText,
  CheckCircle,
  XCircle,
  Lightbulb,
  TrendingUp,
  Upload,
  Rocket,
  Bell,
  UserCircle2,
} from "lucide-react";

import StudentLayout from "../../layouts/StudentLayout";

export default function ATSChecker() {

  const [file, setFile] = useState(null);

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);



  const handleUpload = async () => {

    if (!file) {

      alert("Please upload resume");

      return;

    }



    const formData = new FormData();

    formData.append("resume", file);



    try {

      setLoading(true);



      const response = await axios.post(

        "http://localhost:5000/api/ats/check-resume",

        formData

      );



      setResult(response.data);

    }

    catch (error) {

      console.log(error);

      alert("ATS Check Failed");

    }

    finally {

      setLoading(false);

    }

  };



  return (

    <StudentLayout>

      <div className="min-h-screen bg-[#f5f7ff] p-8">



        {/* HEADER */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold text-[#0f172a] flex items-center gap-4">

              <div className="bg-indigo-100 p-4 rounded-2xl">

                <FileText

                  size={40}

                  className="text-indigo-600"

                />

              </div>

              ATS Resume Checker

            </h1>



            <p className="text-gray-500 text-lg mt-4">

              Upload your resume and analyze ATS score professionally.

            </p>

          </div>

        </div>



        {/* UPLOAD SECTION */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 mb-10">

          <div className="border-2 border-dashed border-indigo-200 rounded-3xl p-10 flex items-center justify-between">

            <div className="flex items-center gap-6">

              <div className="bg-indigo-100 p-5 rounded-2xl">

                <Upload

                  size={40}

                  className="text-indigo-600"

                />

              </div>



              <div>

                <input

                  type="file"

                  accept=".pdf"

                  onChange={(e) =>

                    setFile(e.target.files[0])

                  }

                  className="mb-3"

                />



                <p className="text-gray-500">

                  Upload PDF Resume

                </p>

              </div>

            </div>



            <button

              onClick={handleUpload}

              className="bg-linear-to-r from-indigo-600 to-purple-600 hover:scale-105 transition-all duration-300 text-white px-10 py-5 rounded-2xl font-semibold shadow-lg"

            >

              {loading

                ? "Analyzing..."

                : "Check ATS Score"}

            </button>

          </div>

        </div>



        {/* RESULT */}

        {result && (

          <>



            {/* SCORE SECTION */}

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 mb-10">

              <div className="grid grid-cols-2 gap-10 items-center">



                {/* LEFT */}

                <div className="flex items-center gap-10">

                  <div className="w-64 h-64 rounded-full border-18 border-green-500 flex flex-col items-center justify-center shadow-inner">

                    <h1 className="text-6xl font-bold text-[#0f172a]">

                      {result.atsScore}%

                    </h1>



                    <p className="text-gray-500 mt-3 text-xl">

                      ATS Score

                    </p>

                  </div>



                  <div>

                    <h1 className="text-4xl font-bold text-green-600 flex items-center gap-3">

                      Good Start!

                      <TrendingUp size={35} />

                    </h1>



                    <p className="text-gray-500 text-lg mt-5 leading-8">

                      Your resume has a good foundation.

                      Improve the missing skills and

                      suggestions to increase ATS score.

                    </p>

                  </div>

                </div>



                {/* RIGHT STATS */}

                <div className="grid grid-cols-2 gap-6">



                  <div className="bg-green-50 border border-green-100 p-8 rounded-3xl">

                    <div className="flex items-center gap-4">

                      <CheckCircle

                        size={35}

                        className="text-green-600"

                      />



                      <div>

                        <h1 className="text-4xl font-bold text-green-600">

                          {result.matchedSkills.length}

                        </h1>



                        <p className="text-gray-500">

                          Matched Skills

                        </p>

                      </div>

                    </div>

                  </div>



                  <div className="bg-red-50 border border-red-100 p-8 rounded-3xl">

                    <div className="flex items-center gap-4">

                      <XCircle

                        size={35}

                        className="text-red-600"

                      />



                      <div>

                        <h1 className="text-4xl font-bold text-red-600">

                          {result.missingSkills.length}

                        </h1>



                        <p className="text-gray-500">

                          Missing Skills

                        </p>

                      </div>

                    </div>

                  </div>



                  <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl">

                    <div className="flex items-center gap-4">

                      <Lightbulb

                        size={35}

                        className="text-blue-600"

                      />



                      <div>

                        <h1 className="text-4xl font-bold text-blue-600">

                          {result.suggestions.length}

                        </h1>



                        <p className="text-gray-500">

                          Suggestions

                        </p>

                      </div>

                    </div>

                  </div>



                  <div className="bg-purple-50 border border-purple-100 p-8 rounded-3xl">

                    <div className="flex items-center gap-4">

                      <Rocket

                        size={35}

                        className="text-purple-600"

                      />



                      <div>

                        <h1 className="text-4xl font-bold text-purple-600">

                          {result.atsScore}%

                        </h1>



                        <p className="text-gray-500">

                          Overall Score

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>



            {/* SKILLS SECTION */}

            <div className="grid grid-cols-2 gap-8 mb-10">



              {/* MATCHED */}

              <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-10">

                <div className="flex justify-between items-center mb-8">

                  <h1 className="text-3xl font-bold text-green-600 flex items-center gap-3">

                    <CheckCircle size={32} />

                    Matched Skills

                  </h1>



                  <div className="bg-green-100 text-green-700 px-5 py-2 rounded-xl font-semibold">

                    {result.matchedSkills.length} Found

                  </div>

                </div>



                <div className="flex flex-wrap gap-4">

                  {result.matchedSkills.map((skill, index) => (

                    <div

                      key={index}

                      className="bg-green-100 text-green-700 px-5 py-3 rounded-2xl font-medium"

                    >

                      {skill}

                    </div>

                  ))}

                </div>

              </div>



              {/* MISSING */}

              <div className="bg-white rounded-3xl shadow-lg border border-red-100 p-10">

                <div className="flex justify-between items-center mb-8">

                  <h1 className="text-3xl font-bold text-red-600 flex items-center gap-3">

                    <XCircle size={32} />

                    Missing Skills

                  </h1>



                  <div className="bg-red-100 text-red-700 px-5 py-2 rounded-xl font-semibold">

                    {result.missingSkills.length} Missing

                  </div>

                </div>



                <div className="flex flex-wrap gap-4">

                  {result.missingSkills.map((skill, index) => (

                    <div

                      key={index}

                      className="bg-red-100 text-red-700 px-5 py-3 rounded-2xl font-medium"

                    >

                      {skill}

                    </div>

                  ))}

                </div>

              </div>

            </div>



            {/* SUGGESTIONS */}

            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10">

              <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold text-[#0f172a] flex items-center gap-3">

                  <Lightbulb

                    size={32}

                    className="text-yellow-500"

                  />

                  Top Suggestions

                </h1>



                <div className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-xl font-semibold">

                  {result.suggestions.length} Suggestions

                </div>

              </div>



              <div className="space-y-5">

                {result.suggestions.map((item, index) => (

                  <div

                    key={index}

                    className="flex justify-between items-center bg-gray-50 hover:bg-indigo-50 transition-all duration-300 p-6 rounded-2xl border"

                  >

                    <div>

                      <h2 className="font-semibold text-xl text-[#0f172a]">

                        {item}

                      </h2>



                      <p className="text-gray-500 mt-2">

                        Improve your resume quality

                        and ATS compatibility.

                      </p>

                    </div>



                    <TrendingUp

                      size={28}

                      className="text-indigo-600"

                    />

                  </div>

                ))}

              </div>

            </div>

          </>

        )}

      </div>

    </StudentLayout>

  );

}