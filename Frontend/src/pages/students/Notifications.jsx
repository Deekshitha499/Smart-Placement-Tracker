import StudentLayout from "../../layouts/StudentLayout";

export default function Notifications() {

  const notifications = [

    "Amazon interview scheduled tomorrow",

    "Google drive registrations opened",

    "Infosys shortlisted candidates announced"

  ];



  return (

    <StudentLayout>

      <h1 className="text-5xl font-bold mb-10">

        Notifications

      </h1>



      <div className="space-y-5">

        {notifications.map((item, index) => (

          <div
            key={index}
            className="bg-white p-6 rounded-2xl border shadow-sm"
          >

            {item}

          </div>

        ))}

      </div>

    </StudentLayout>

  );

}