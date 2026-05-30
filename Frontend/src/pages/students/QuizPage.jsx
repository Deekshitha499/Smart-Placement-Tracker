import StudentLayout from "../../layouts/StudentLayout";

import { useState } from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";



export default function QuizPage() {

  const navigate = useNavigate();

  const { type } = useParams();



  /* QUESTION BANK */

  const questionBank = {

    aptitude: [

      {
        question: "What is 25% of 200?",
        options: ["25", "50", "75", "100"],
        answer: "50"
      },

      {
        question: "If A=1, B=2 then CAT=?",
        options: ["24", "20", "35", "40"],
        answer: "24"
      },

      {
        question: "Find the next number: 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "64"],
        answer: "32"
      },

      {
        question: "What is the square root of 144?",
        options: ["10", "11", "12", "14"],
        answer: "12"
      },

      {
        question: "A train travels 60 km in 1 hour. Speed?",
        options: [
          "40 km/hr",
          "50 km/hr",
          "60 km/hr",
          "80 km/hr"
        ],
        answer: "60 km/hr"
      }

    ],



    java: [

      {
        question: "Which company developed Java?",
        options: [
          "Google",
          "Oracle",
          "Sun Microsystems",
          "Microsoft"
        ],
        answer: "Sun Microsystems"
      },

      {
        question: "Which keyword is used for inheritance in Java?",
        options: [
          "this",
          "super",
          "extends",
          "implements"
        ],
        answer: "extends"
      },

      {
        question: "Which method is entry point in Java?",
        options: [
          "run()",
          "start()",
          "main()",
          "init()"
        ],
        answer: "main()"
      },

      {
        question: "Java is a _____ language.",
        options: [
          "Procedural",
          "Object Oriented",
          "Scripting",
          "Assembly"
        ],
        answer: "Object Oriented"
      },

      {
        question: "Which package contains Scanner class?",
        options: [
          "java.io",
          "java.util",
          "java.net",
          "java.awt"
        ],
        answer: "java.util"
      }

    ],



    dbms: [

      {
        question: "Which language is used for databases?",
        options: ["HTML", "SQL", "CSS", "Python"],
        answer: "SQL"
      },

      {
        question: "Which is a NoSQL database?",
        options: [
          "MySQL",
          "MongoDB",
          "Oracle",
          "PostgreSQL"
        ],
        answer: "MongoDB"
      },

      {
        question: "Primary key is used to?",
        options: [
          "Delete rows",
          "Identify records uniquely",
          "Sort data",
          "Create tables"
        ],
        answer: "Identify records uniquely"
      },

      {
        question: "Which command removes table data?",
        options: [
          "DELETE",
          "DROP",
          "REMOVE",
          "CLEAR"
        ],
        answer: "DELETE"
      },

      {
        question: "DBMS stands for?",
        options: [
          "Data Backup Management System",
          "Database Management System",
          "Database Method System",
          "Data Method Software"
        ],
        answer: "Database Management System"
      }

    ],



    reasoning: [

      {
        question: "Find the odd one out.",
        options: [
          "Circle",
          "Triangle",
          "Rectangle",
          "Apple"
        ],
        answer: "Apple"
      },

      {
        question: "If 2+3=10, 4+5=?",
        options: ["18", "20", "22", "25"],
        answer: "18"
      },

      {
        question: "Complete series: A, C, E, G, ?",
        options: ["H", "I", "J", "K"],
        answer: "I"
      },

      {
        question: "Mirror image belongs to?",
        options: [
          "Reasoning",
          "Maths",
          "English",
          "Science"
        ],
        answer: "Reasoning"
      },

      {
        question: "Which is different?",
        options: [
          "Dog",
          "Cat",
          "Cow",
          "Car"
        ],
        answer: "Car"
      }

    ]

  };



  const questions = questionBank[type] || [];



  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");

  const [score, setScore] = useState(0);



  const handleNext = () => {

    let updatedScore = score;



    if (

      selectedOption ===

      questions[currentQuestion].answer

    ) {

      updatedScore += 1;

      setScore(updatedScore);

    }



    if (

      currentQuestion < questions.length - 1

    ) {

      setCurrentQuestion(currentQuestion + 1);

      setSelectedOption("");

    }

    else {

      navigate("/student/test-result", {

        state: {

          score: updatedScore,

          total: questions.length,

          type: type

        }

      });

    }

  };



  return (

    <StudentLayout>

      <div className="min-h-screen bg-[#f5f7ff] p-8">



        {/* HEADER */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold text-[#0f172a]">

              {type?.toUpperCase()} Test

            </h1>



            <p className="text-gray-500 text-lg mt-3">

              Answer all questions carefully.

            </p>

          </div>



          <div className="bg-white shadow-md border px-8 py-4 rounded-2xl">

            <p className="text-indigo-600 font-bold text-xl">

              Question {currentQuestion + 1} / {questions.length}

            </p>

          </div>

        </div>



        {/* QUESTION CARD */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10">



          <div className="bg-indigo-50 text-indigo-700 px-6 py-3 rounded-2xl inline-block font-semibold mb-8">

            Current Question

          </div>



          <h1 className="text-3xl font-bold text-[#0f172a] leading-10">

            {

              questions[currentQuestion]

                ?.question

            }

          </h1>



          {/* OPTIONS */}

          <div className="mt-10 space-y-5">

            {

              questions[currentQuestion]

                ?.options.map((option, index) => (

                  <div

                    key={index}

                    onClick={() =>

                      setSelectedOption(option)

                    }

                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300

                    ${

                      selectedOption === option

                        ? "bg-blue-100 border-blue-500 shadow-md"

                        : "hover:bg-gray-50 border-gray-200"

                    }

                    `}

                  >

                    <p className="text-lg font-medium text-[#0f172a]">

                      {option}

                    </p>

                  </div>

                ))

            }

          </div>



          {/* BUTTON */}

          <button

            onClick={handleNext}

            disabled={!selectedOption}

            className="mt-10 bg-linear-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] transition-all duration-300 text-white px-10 py-5 rounded-2xl text-lg font-semibold disabled:opacity-50"

          >

            {

              currentQuestion ===

              questions.length - 1

                ? "Submit Test"

                : "Next Question"

            }

          </button>

        </div>

      </div>

    </StudentLayout>

  );

}