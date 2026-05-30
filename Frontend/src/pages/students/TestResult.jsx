import StudentLayout from "../../layouts/StudentLayout";

import { useLocation } from "react-router-dom";

import {

  Trophy,
  CheckCircle,
  XCircle

} from "lucide-react";



export default function TestResult() {

  const location = useLocation();



  const score = location.state?.score || 0;

  const total = location.state?.total || 5;



  const percentage = Math.round(

    (score / total) * 100

  );



  return (

    <StudentLayout>

      <div className="min-h-screen bg-[#f5f7ff] p-8">



        <h1 className="text-5xl font-bold text-[#0f172a] mb-10">

          Test Result

        </h1>



        <div className="bg-white rounded-3xl shadow-lg border p-16 text-center">



          <div className="w-36 h-36 rounded-full bg-green-100 flex items-center justify-center mx-auto">

            <Trophy

              size={70}

              className="text-green-600"

            />

          </div>



          <h1 className="text-7xl font-bold text-green-600 mt-10">

            {percentage}%

          </h1>



          <p className="text-2xl text-gray-500 mt-5">

            You scored {score} out of {total}

          </p>



          <div className="grid grid-cols-2 gap-8 mt-14">



            <div className="bg-green-50 rounded-3xl p-10">

              <CheckCircle

                size={45}

                className="text-green-600 mx-auto"

              />



              <h2 className="text-5xl font-bold mt-6">

                {score}

              </h2>



              <p className="text-gray-500 mt-2">

                Correct Answers

              </p>

            </div>



            <div className="bg-red-50 rounded-3xl p-10">

              <XCircle

                size={45}

                className="text-red-600 mx-auto"

              />



              <h2 className="text-5xl font-bold mt-6">

                {total - score}

              </h2>



              <p className="text-gray-500 mt-2">

                Wrong Answers

              </p>

            </div>

          </div>

        </div>

      </div>

    </StudentLayout>

  );

}