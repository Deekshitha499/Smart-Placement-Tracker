import StudentLayout from "../../layouts/StudentLayout";

export default function StudentProfile() {

  return (

    <StudentLayout>

      <div className="bg-white rounded-2xl p-10 border shadow-sm max-w-4xl">

        <div className="flex items-center gap-6 mb-10">

          <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-700">

            DS

          </div>



          <div>

            <h1 className="text-4xl font-bold">

              Deepthi Gorugantala

            </h1>



            <p className="text-gray-500 mt-2">

              CSE • 4th Year

            </p>

          </div>

        </div>



        <div className="grid grid-cols-2 gap-8">

          <div>

            <p className="text-gray-500">

              Roll Number

            </p>

            <h2 className="text-xl font-semibold mt-2">

              CSE21001

            </h2>

          </div>



          <div>

            <p className="text-gray-500">

              Email

            </p>

            <h2 className="text-xl font-semibold mt-2">

              deepthi@gmail.com

            </h2>

          </div>



          <div>

            <p className="text-gray-500">

              CGPA

            </p>

            <h2 className="text-xl font-semibold mt-2">

              8.9

            </h2>

          </div>



          <div>

            <p className="text-gray-500">

              Skills

            </p>

            <h2 className="text-xl font-semibold mt-2">

              MERN Stack, Java

            </h2>

          </div>

        </div>

      </div>

    </StudentLayout>

  );

}