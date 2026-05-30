import StudentLayout from "../../layouts/StudentLayout";

import {

  Mic,
  Brain,
  Code2,
  Users,
  ArrowRight,
  Clock3,
  Star,
  Trophy,
  Sparkles

} from "lucide-react";

import { useNavigate } from "react-router-dom";



export default function MockInterviews() {

  const navigate = useNavigate();



  const interviews = [

    {

      title: "HR Interview",

      desc: "Practice HR and behavioral interview questions professionally.",

      icon: <Users size={38} />,

      color: "from-blue-500 to-cyan-500",

      bg: "bg-blue-50",

      questions: 10,

      duration: "20 mins",

      level: "Beginner"

    },



    {

      title: "Technical Interview",

      desc: "Practice technical concepts and coding interview rounds.",

      icon: <Code2 size={38} />,

      color: "from-green-500 to-emerald-500",

      bg: "bg-green-50",

      questions: 15,

      duration: "30 mins",

      level: "Intermediate"

    },



    {

      title: "AI Mock Interview",

      desc: "Experience AI-powered interview simulation and evaluation.",

      icon: <Brain size={38} />,

      color: "from-purple-500 to-pink-500",

      bg: "bg-purple-50",

      questions: 12,

      duration: "25 mins",

      level: "Advanced"

    }

  ];



  return (

    <StudentLayout>

      <div className="min-h-screen bg-[#f5f7ff] p-8">



        {/* HEADER */}

        <div className="flex justify-between items-center mb-12">

          <div>

            <div className="flex items-center gap-4">

              <div className="bg-indigo-100 p-4 rounded-2xl">

                <Mic

                  size={40}

                  className="text-indigo-600"

                />

              </div>



              <h1 className="text-5xl font-bold text-[#0f172a]">

                Mock Interviews

              </h1>

            </div>



            <p className="text-gray-500 text-lg mt-5 leading-8">

              Practice interviews, improve communication,
              boost confidence and prepare for placements.

            </p>

          </div>



          {/* STATS */}

          <div className="flex gap-6">



            <div className="bg-white border shadow-sm rounded-3xl px-8 py-5">

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-3 rounded-2xl">

                  <Trophy

                    size={28}

                    className="text-blue-600"

                  />

                </div>



                <div>

                  <h1 className="text-3xl font-bold text-[#0f172a]">

                    12

                  </h1>



                  <p className="text-gray-500">

                    Interviews Completed

                  </p>

                </div>

              </div>

            </div>



            <div className="bg-white border shadow-sm rounded-3xl px-8 py-5">

              <div className="flex items-center gap-4">

                <div className="bg-green-100 p-3 rounded-2xl">

                  <Star

                    size={28}

                    className="text-green-600"

                  />

                </div>



                <div>

                  <h1 className="text-3xl font-bold text-[#0f172a]">

                    88%

                  </h1>



                  <p className="text-gray-500">

                    Average Score

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* INTERVIEW CARDS */}

        <div className="grid grid-cols-3 gap-8">



          {interviews.map((item, index) => (

            <div

              key={index}

              className="bg-white rounded-[30px] shadow-lg border border-gray-100 overflow-hidden hover:scale-[1.02] transition-all duration-300"

            >



              {/* TOP */}

              <div className={`bg-linear-to-r ${item.color} p-8 text-white relative overflow-hidden`}>



                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-16 -mt-16"></div>



                <div className={`w-20 h-20 rounded-3xl ${item.bg} flex items-center justify-center text-white backdrop-blur-xl`}>

                  {item.icon}

                </div>



                <h1 className="text-3xl font-bold mt-8">

                  {item.title}

                </h1>



                <p className="text-white/90 mt-4 leading-7">

                  {item.desc}

                </p>

              </div>



              {/* CONTENT */}

              <div className="p-8">



                <div className="space-y-5">



                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">

                      <Clock3

                        size={22}

                        className="text-indigo-600"

                      />



                      <p className="text-gray-500 font-medium">

                        Duration

                      </p>

                    </div>



                    <p className="font-bold text-[#0f172a]">

                      {item.duration}

                    </p>

                  </div>



                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">

                      <Sparkles

                        size={22}

                        className="text-indigo-600"

                      />



                      <p className="text-gray-500 font-medium">

                        Difficulty

                      </p>

                    </div>



                    <p className="font-bold text-[#0f172a]">

                      {item.level}

                    </p>

                  </div>



                  <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">

                      <Mic

                        size={22}

                        className="text-indigo-600"

                      />



                      <p className="text-gray-500 font-medium">

                        Questions

                      </p>

                    </div>



                    <p className="font-bold text-[#0f172a]">

                      {item.questions}

                    </p>

                  </div>

                </div>



                {/* BUTTON */}

                <button

                  onClick={() =>

                    navigate("/student/interview-questions")

                  }

                  className={`w-full mt-10 bg-linear-to-r ${item.color} hover:scale-[1.02] transition-all duration-300 text-white py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg`}

                >

                  Start Interview

                  <ArrowRight size={22} />

                </button>

              </div>

            </div>

          ))}

        </div>



        {/* TIPS SECTION */}

        <div className="bg-white rounded-[30px] shadow-lg border border-gray-100 p-10 mt-12">



          <h1 className="text-3xl font-bold text-[#0f172a] mb-8">

            Interview Tips

          </h1>



          <div className="grid grid-cols-3 gap-8">



            <div className="bg-blue-50 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-blue-600">

                Communication

              </h2>



              <p className="text-gray-500 mt-4 leading-8">

                Speak clearly and confidently during interviews.

              </p>

            </div>



            <div className="bg-green-50 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-green-600">

                Technical Knowledge

              </h2>



              <p className="text-gray-500 mt-4 leading-8">

                Revise projects, DSA and core subjects thoroughly.

              </p>

            </div>



            <div className="bg-purple-50 rounded-3xl p-8">

              <h2 className="text-2xl font-bold text-purple-600">

                Confidence

              </h2>



              <p className="text-gray-500 mt-4 leading-8">

                Maintain eye contact and answer calmly.

              </p>

            </div>

          </div>

        </div>

      </div>

    </StudentLayout>

  );

}