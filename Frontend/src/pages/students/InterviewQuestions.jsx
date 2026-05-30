import StudentLayout from "../../layouts/StudentLayout";

import { useState } from "react";



export default function InterviewQuestions() {

  const questions = [

    "Tell me about yourself.",

    "Why should we hire you?",

    "Explain your biggest project.",

    "What are your strengths?",

    "Where do you see yourself in 5 years?"

  ];



  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answer, setAnswer] = useState("");

  const [submitted, setSubmitted] = useState(false);



  const nextQuestion = () => {

    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion(currentQuestion + 1);

      setAnswer("");

    }

    else {

      setSubmitted(true);

    }

  };



  return (

    <StudentLayout>

      <div className="min-h-screen bg-[#f5f7ff] p-8">

        <h1 className="text-5xl font-bold text-[#0f172a] mb-3">

          Mock Interview

        </h1>



        <p className="text-gray-500 text-lg mb-10">

          Answer the interview questions professionally.

        </p>



        {!submitted ? (

          <div className="bg-white rounded-3xl shadow-lg border p-10">

            <h2 className="text-3xl font-bold text-blue-600 mb-8">

              Question {currentQuestion + 1}

            </h2>



            <p className="text-2xl font-semibold text-[#0f172a] leading-10">

              {questions[currentQuestion]}

            </p>



            <textarea

              rows="8"

              placeholder="Type your answer here..."

              value={answer}

              onChange={(e) => setAnswer(e.target.value)}

              className="w-full border rounded-2xl p-6 mt-8 outline-none"

            />



            <button

              onClick={nextQuestion}

              className="mt-8 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl"

            >

              {currentQuestion === questions.length - 1

                ? "Submit"

                : "Next Question"}

            </button>

          </div>

        ) : (

          <div className="bg-white rounded-3xl shadow-lg border p-16 text-center">

            <h1 className="text-6xl font-bold text-green-600">

              Interview Completed 🎉

            </h1>



            <p className="text-gray-500 text-xl mt-6">

              Great job completing the mock interview.

            </p>

          </div>

        )}

      </div>

    </StudentLayout>

  );

}