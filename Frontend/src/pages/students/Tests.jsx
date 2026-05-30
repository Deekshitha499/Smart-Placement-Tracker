import StudentLayout from "../../layouts/StudentLayout";

import {
  Brain,
  Database,
  Code2,
  Calculator
} from "lucide-react";

import { useNavigate } from "react-router-dom";



export default function Tests() {

  const navigate = useNavigate();



  const tests = [

    {
      title: "Aptitude Test",
      questions: 20,
      duration: "30 mins",
      type: "aptitude",
      icon: <Calculator size={35} />,
      color: "bg-blue-100 text-blue-600"
    },

    {
      title: "Java Quiz",
      questions: 15,
      duration: "20 mins",
      type: "java",
      icon: <Code2 size={35} />,
      color: "bg-green-100 text-green-600"
    },

    {
      title: "DBMS Quiz",
      questions: 10,
      duration: "15 mins",
      type: "dbms",
      icon: <Database size={35} />,
      color: "bg-purple-100 text-purple-600"
    },

    {
      title: "Logical Reasoning",
      questions: 25,
      duration: "35 mins",
      type: "reasoning",
      icon: <Brain size={35} />,
      color: "bg-orange-100 text-orange-600"
    }

  ];



  return (

    <StudentLayout>

      <div className="min-h-screen bg-[#f5f7ff] p-8">

        <h1 className="text-5xl font-bold text-[#0f172a] mb-3">

          Tests & Assessments

        </h1>



        <p className="text-gray-500 text-lg mb-10">

          Practice aptitude and technical tests.

        </p>



        <div className="grid grid-cols-2 gap-8">

          {tests.map((test, index) => (

            <div

              key={index}

              className="bg-white rounded-3xl shadow-lg border p-8 hover:scale-[1.02] transition-all"

            >

              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${test.color}`}>

                {test.icon}

              </div>



              <h1 className="text-3xl font-bold mt-8 text-[#0f172a]">

                {test.title}

              </h1>



              <div className="mt-6 space-y-3">

                <p className="text-gray-500">

                  Questions: {test.questions}

                </p>



                <p className="text-gray-500">

                  Duration: {test.duration}

                </p>

              </div>



              <button

                onClick={() =>

                  navigate(`/student/quiz/${test.type}`)

                }

                className="mt-10 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl"

              >

                Start Test

              </button>

            </div>

          ))}

        </div>

      </div>

    </StudentLayout>

  );

}