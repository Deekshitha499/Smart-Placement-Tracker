import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Plus,
  Pencil,
  Trash2,
  ExternalLink
} from "lucide-react";

export default function Companies() {

  const [showModal, setShowModal] = useState(false);

  const [editingIndex, setEditingIndex] =
    useState(null);

  const [search, setSearch] = useState("");



  const [companies, setCompanies] = useState([

    {
      name: "Infosys",
      industry: "IT Services",
      role: "Systems Engineer",
      package: "3.6 LPA",
      cgpa: "6.5",
      branches: ["CSE", "IT", "ECE"],
      website: "https://www.infosys.com"
    },

    {
      name: "TCS",
      industry: "IT Services",
      role: "Software Developer",
      package: "3.36 LPA",
      cgpa: "6",
      branches: ["CSE", "IT", "ECE", "EEE", "ME"],
      website: "https://www.tcs.com"
    },

    {
      name: "Google",
      industry: "Technology",
      role: "Software Engineer",
      package: "40 LPA",
      cgpa: "8.5",
      branches: ["CSE", "IT"],
      website: "https://www.google.com"
    },

    {
      name: "Amazon",
      industry: "E-Commerce / Cloud",
      role: "SDE-1",
      package: "22 LPA",
      cgpa: "7.5",
      branches: ["CSE", "IT", "ECE"],
      website: "https://www.amazon.com"
    },

    {
      name: "Wipro",
      industry: "IT Services",
      role: "Project Engineer",
      package: "3.5 LPA",
      cgpa: "6.5",
      branches: ["CSE", "IT", "ECE", "EEE"],
      website: "https://www.wipro.com"
    },

    {
      name: "Microsoft",
      industry: "Technology",
      role: "Software Engineer",
      package: "28 LPA",
      cgpa: "8",
      branches: ["CSE", "IT", "ECE"],
      website: "https://www.microsoft.com"
    }

  ]);



  const [newCompany, setNewCompany] = useState({

    name: "",
    industry: "",
    role: "",
    package: "",
    cgpa: "",
    branches: "",
    website: ""

  });



  const handleChange = (e) => {

    setNewCompany({

      ...newCompany,
      [e.target.name]: e.target.value

    });

  };



  const addCompany = () => {

    const companyData = {

      ...newCompany,

      branches:
        newCompany.branches.split(",")

    };

    setCompanies([
      companyData,
      ...companies
    ]);

    closeModal();

  };



  const deleteCompany = (index) => {

    const updatedCompanies =
      companies.filter((_, i) => i !== index);

    setCompanies(updatedCompanies);

  };



  const editCompany = (company, index) => {

    setEditingIndex(index);

    setNewCompany({

      ...company,

      branches:
        company.branches.join(",")

    });

    setShowModal(true);

  };



  const updateCompany = () => {

    const updatedCompanies = [...companies];

    updatedCompanies[editingIndex] = {

      ...newCompany,

      branches:
        newCompany.branches.split(",")

    };

    setCompanies(updatedCompanies);

    closeModal();

  };



  const closeModal = () => {

    setShowModal(false);

    setEditingIndex(null);

    setNewCompany({

      name: "",
      industry: "",
      role: "",
      package: "",
      cgpa: "",
      branches: "",
      website: ""

    });

  };



  const filteredCompanies =
    companies.filter((company) =>

      company.name
        .toLowerCase()
        .includes(search.toLowerCase())

    );



  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="flex justify-between items-start mb-8">

        <div>

          <h1 className="text-5xl font-bold text-[#0f172a] mb-2">
            Companies
          </h1>

          <p className="text-gray-500 text-lg">
            Manage companies and their recruitment criteria.
          </p>

        </div>



        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 shadow-md"
        >

          <Plus size={20} />

          Add Company

        </button>

      </div>



      {/* SEARCH */}

      <div className="mb-8">

        <input
          type="text"
          placeholder="Search by name, industry, or role..."
          className="w-full max-w-xl border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>



      {/* CARDS */}

      <div className="grid grid-cols-3 gap-8">

        {filteredCompanies.map((company, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
          >

            {/* TOP */}

            <div className="flex justify-between items-start">

              <div className="flex gap-4">

                <div className="bg-blue-100 text-blue-700 w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold">

                  {company.name.substring(0, 2)}

                </div>

                <div>

                  <h2 className="text-3xl font-bold text-[#0f172a]">
                    {company.name}
                  </h2>

                  <p className="text-gray-500">
                    {company.industry}
                  </p>

                </div>

              </div>



              {/* ACTIONS */}

              <div className="flex gap-3">

                <button
                  onClick={() =>
                    editCompany(company, index)
                  }
                  className="text-blue-600 hover:text-blue-800"
                >

                  <Pencil size={20} />

                </button>



                <button
                  onClick={() => deleteCompany(index)}
                  className="text-red-500 hover:text-red-700"
                >

                  <Trash2 size={20} />

                </button>

              </div>

            </div>



            {/* DETAILS */}

            <div className="mt-8 space-y-5">

              <div className="flex justify-between">

                <p className="text-gray-500">
                  Role
                </p>

                <p className="font-semibold">
                  {company.role}
                </p>

              </div>



              <div className="flex justify-between">

                <p className="text-gray-500">
                  Package
                </p>

                <p className="font-semibold">
                  ₹ {company.package}
                </p>

              </div>



              <div className="flex justify-between items-center">

                <p className="text-gray-500">
                  Min CGPA
                </p>

                <span className="bg-gray-100 px-3 py-1 rounded-md font-semibold">
                  {company.cgpa}
                </span>

              </div>

            </div>



            {/* BRANCHES */}

            <div className="flex flex-wrap gap-3 mt-6">

              {company.branches.map((branch, i) => (

                <span
                  key={i}
                  className="border px-3 py-1 rounded-md text-sm font-semibold"
                >

                  {branch}

                </span>

              ))}

            </div>



            {/* WEBSITE */}

            <a
              href={company.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-600 mt-6 hover:underline"
            >

              <ExternalLink size={18} />

              {company.website}

            </a>

          </div>

        ))}

      </div>




      {/* MODAL */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white w-full max-w-3xl rounded-2xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">

                {editingIndex !== null
                  ? "Edit Company"
                  : "Add New Company"}

              </h2>

              <button
                onClick={closeModal}
                className="text-2xl"
              >
                ×
              </button>

            </div>



            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                name="name"
                placeholder="Company Name"
                value={newCompany.name}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="industry"
                placeholder="Industry"
                value={newCompany.industry}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="role"
                placeholder="Role"
                value={newCompany.role}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="package"
                placeholder="Package"
                value={newCompany.package}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="cgpa"
                placeholder="Minimum CGPA"
                value={newCompany.cgpa}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

              <input
                type="text"
                name="website"
                placeholder="Company Website"
                value={newCompany.website}
                className="border p-3 rounded-lg"
                onChange={handleChange}
              />

            </div>



            <input
              type="text"
              name="branches"
              placeholder="Eligible Branches"
              value={newCompany.branches}
              className="border p-3 rounded-lg w-full mt-5"
              onChange={handleChange}
            />



            <div className="flex justify-end gap-4 mt-8">

              <button
                onClick={closeModal}
                className="border px-6 py-3 rounded-lg"
              >
                Cancel
              </button>



              {editingIndex !== null ? (

                <button
                  onClick={updateCompany}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Update Company
                </button>

              ) : (

                <button
                  onClick={addCompany}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                >
                  Add Company
                </button>

              )}

            </div>

          </div>

        </div>

      )}

    </DashboardLayout>

  );
}