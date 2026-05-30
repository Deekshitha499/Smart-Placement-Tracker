import StudentLayout from "../../layouts/StudentLayout";

import {

  Building2,
  ExternalLink,
  Eye

} from "lucide-react";



export default function StudentCompanies() {

  const companies = [

    {
      name: "Amazon",
      role: "SDE Intern",
      package: "22 LPA",
      location: "Hyderabad",
      website: "https://www.amazon.jobs"
    },

    {
      name: "Google",
      role: "Software Engineer",
      package: "40 LPA",
      location: "Bangalore",
      website: "https://careers.google.com"
    },

    {
      name: "Microsoft",
      role: "Software Engineer",
      package: "45 LPA",
      location: "Hyderabad",
      website: "https://careers.microsoft.com"
    },

    {
      name: "Infosys",
      role: "Systems Engineer",
      package: "3.6 LPA",
      location: "Mysore",
      website: "https://www.infosys.com/careers"
    },

    {
      name: "TCS",
      role: "Digital Role",
      package: "7 LPA",
      location: "Mumbai",
      website: "https://www.tcs.com/careers"
    },

    {
      name: "Wipro",
      role: "Project Engineer",
      package: "3.5 LPA",
      location: "Chennai",
      website: "https://careers.wipro.com"
    },

    {
      name: "Accenture",
      role: "Associate Software Engineer",
      package: "4.5 LPA",
      location: "Pune",
      website: "https://www.accenture.com/in-en/careers"
    },

    {
      name: "Capgemini",
      role: "Analyst",
      package: "4 LPA",
      location: "Noida",
      website: "https://www.capgemini.com/careers"
    },

    {
      name: "Cognizant",
      role: "Programmer Analyst",
      package: "4.2 LPA",
      location: "Hyderabad",
      website: "https://careers.cognizant.com"
    },

    {
      name: "Oracle",
      role: "Application Developer",
      package: "18 LPA",
      location: "Bangalore",
      website: "https://www.oracle.com/careers"
    },

    {
      name: "Adobe",
      role: "Frontend Developer",
      package: "28 LPA",
      location: "Noida",
      website: "https://careers.adobe.com"
    },

    {
      name: "Deloitte",
      role: "Consultant",
      package: "8 LPA",
      location: "Hyderabad",
      website: "https://www2.deloitte.com/careers"
    },

    {
      name: "IBM",
      role: "Software Developer",
      package: "9 LPA",
      location: "Bangalore",
      website: "https://www.ibm.com/careers"
    },

    {
      name: "Zoho",
      role: "Software Engineer",
      package: "10 LPA",
      location: "Chennai",
      website: "https://careers.zohocorp.com"
    },

    {
      name: "Flipkart",
      role: "SDE-1",
      package: "24 LPA",
      location: "Bangalore",
      website: "https://www.flipkartcareers.com"
    }

  ];



  const handleView = (company) => {

    alert(

      `Company: ${company.name}

Role: ${company.role}

Package: ${company.package}

Location: ${company.location}`

    );

  };



  return (

    <StudentLayout>

      {/* HEADER */}

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold text-[#0f172a]">

            Companies

          </h1>



          <p className="text-gray-500 text-lg mt-2">

            Explore top recruiters and apply for placement opportunities.

          </p>

        </div>

      </div>



      {/* COMPANY CARDS */}

      <div className="grid grid-cols-3 gap-7">

        {companies.map((company, index) => (

          <div

            key={index}

            className="bg-white rounded-3xl border shadow-sm p-7 hover:shadow-lg transition-all"

          >

            {/* TOP */}

            <div className="flex items-start justify-between mb-6">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                  <Building2
                    size={28}
                    className="text-blue-600"
                  />

                </div>



                <div>

                  <h1 className="text-2xl font-bold text-[#0f172a]">

                    {company.name}

                  </h1>



                  <p className="text-gray-500 mt-1">

                    {company.role}

                  </p>

                </div>

              </div>

            </div>



            {/* DETAILS */}

            <div className="space-y-3 mb-7">

              <div className="flex justify-between">

                <span className="text-gray-500">

                  Package

                </span>



                <span className="font-semibold">

                  {company.package}

                </span>

              </div>



              <div className="flex justify-between">

                <span className="text-gray-500">

                  Location

                </span>



                <span className="font-semibold">

                  {company.location}

                </span>

              </div>

            </div>



            {/* BUTTONS */}

            <div className="flex gap-3">

              <button

                onClick={() => handleView(company)}

                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"

              >

                <Eye size={18} />

                View

              </button>



              <a

                href={company.website}

                target="_blank"

                rel="noreferrer"

                className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-xl flex items-center justify-center gap-2"

              >

                <ExternalLink size={18} />

                Careers

              </a>

            </div>

          </div>

        ))}

      </div>

    </StudentLayout>

  );

}