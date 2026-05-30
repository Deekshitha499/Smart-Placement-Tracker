import StudentLayout from "../../layouts/StudentLayout";

export default function Settings() {

  return (

    <StudentLayout>

      <h1 className="text-5xl font-bold mb-10">

        Settings

      </h1>



      <div className="bg-white p-8 rounded-2xl border shadow-sm max-w-3xl">

        <div className="mb-6">

          <label className="block mb-2 font-semibold">

            Full Name

          </label>

          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border p-4 rounded-xl"
          />

        </div>



        <div className="mb-6">

          <label className="block mb-2 font-semibold">

            Email

          </label>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border p-4 rounded-xl"
          />

        </div>



        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">

          Save Changes

        </button>

      </div>

    </StudentLayout>

  );

}