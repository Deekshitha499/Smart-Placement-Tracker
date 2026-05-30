import StudentLayout from "../../layouts/StudentLayout";

import {

  Briefcase,
  MapPin,
  IndianRupee,
  GraduationCap,
  ExternalLink

} from "lucide-react";



export default function StudentDrives() {

  const drives = [

    {
      company: "Amazon",
      role: "SDE Intern",
      location: "Hyderabad",
      package: "22 LPA",
      cgpa: "7.5+",
      link: "https://www.amazon.jobs"
    },

    {
      company: "Google",
      role: "Software Engineer",
      location: "Bangalore",
      package: "40 LPA",
      cgpa: "8.5+",
      link: "https://careers.google.com"
    },

    {
      company: "Microsoft",
      role: "Software Engineer",
      location: "Hyderabad",
      package: "45 LPA",
      cgpa: "8+",
      link: "https://careers.microsoft.com"
    },

    {
      company: "Infosys",
      role: "Systems Engineer",
      location: "Mysore",
      package: "3.6 LPA",
      cgpa: "6+",
      link: "https://www.infosys.com/careers"
    },

    {
      company: "TCS",
      role: "Digital Role",
      location: "Mumbai",
      package: "7 LPA",
      cgpa: "6.5+",
      link: "https://www.tcs.com/careers"
    },

    {
      company: "Wipro",
      role: "Project Engineer",
      location: "Chennai",
      package: "3.5 LPA",
      cgpa: "6+",
      link: "https://careers.wipro.com"
    },

    {
      company: "Accenture",
      role: "Associate Software Engineer",
      location: "Pune",
      package: "4.5 LPA",
      cgpa: "6.5+",
      link: "https://www.accenture.com/in-en/careers"
    },

    {
      company: "Capgemini",
      role: "Analyst",
      location: "Noida",
      package: "4 LPA",
      cgpa: "6+",
      link: "https://www.capgemini.com/careers"
    },

    {
      company: "Cognizant",
      role: "Programmer Analyst",
      location: "Hyderabad",
      package: "4.2 LPA",
      cgpa: "6+",
      link: "https://careers.cognizant.com"
    },

    {
      company: "Oracle",
      role: "Application Developer",
      location: "Bangalore",
      package: "18 LPA",
      cgpa: "7.5+",
      link: "https://www.oracle.com/careers"
    },

    {
      company: "Adobe",
      role: "Frontend Developer",
      location: "Noida",
      package: "28 LPA",
      cgpa: "8+",
      link: "https://careers.adobe.com"
    },

    {
      company: "IBM",
      role: "Software Developer",
      location: "Bangalore",
      package: "9 LPA",
      cgpa: "7+",
      link: "https://www.ibm.com/careers"
    },

    {
      company: "Zoho",
      role: "Software Engineer",
      location: "Chennai",
      package: "10 LPA",
      cgpa: "7+",
      link: "https://careers.zohocorp.com"
    },

    {
      company: "Flipkart",
      role: "SDE-1",
      location: "Bangalore",
      package: "24 LPA",
      cgpa: "7.5+",
      link: "https://www.flipkartcareers.com"
    },

    {
      company: "Deloitte",
      role: "Consultant",
      location: "Hyderabad",
      package: "8 LPA",
      cgpa: "7+",
      link: "https://www2.deloitte.com/careers"
    }

  ];



  return (

    <StudentLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-[#0f172a]">

          Placement Drives

        </h1>



        <p className="text-gray-500 text-lg mt-3">

          Explore ongoing campus recruitment opportunities.

        </p>

      </div>



      {/* DRIVE CARDS */}

      <div className="grid grid-cols-2 gap-7">

        {drives.map((drive, index) => (

          <div

            key={index}

            className="bg-white rounded-3xl border shadow-sm p-8 hover:shadow-lg transition-all"

          >

            {/* TOP */}

            <div className="flex items-center gap-4 mb-7">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                <Briefcase
                  size={28}
                  className="text-blue-600"
                />

              </div>



              <div>

                <h1 className="text-3xl font-bold text-[#0f172a]">

                  {drive.company}

                </h1>



                <p className="text-gray-500 mt-1">

                  {drive.role}

                </p>

              </div>

            </div>



            {/* DETAILS */}

            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-3">

                <MapPin
                  size={18}
                  className="text-gray-500"
                />



                <span className="text-gray-700">

                  {drive.location}

                </span>

              </div>



              <div className="flex items-center gap-3">

                <IndianRupee
                  size={18}
                  className="text-gray-500"
                />



                <span className="text-gray-700">

                  Package: {drive.package}

                </span>

              </div>



              <div className="flex items-center gap-3">

                <GraduationCap
                  size={18}
                  className="text-gray-500"
                />



                <span className="text-gray-700">

                  Eligibility CGPA: {drive.cgpa}

                </span>

              </div>

            </div>



            {/* APPLY BUTTON */}

            <a

              href={drive.link}

              target="_blank"

              rel="noreferrer"

              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"

            >

              <ExternalLink size={18} />

              Apply Now

            </a>

          </div>

        ))}

      </div>

    </StudentLayout>

  );

}