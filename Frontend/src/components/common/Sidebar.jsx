import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#07122b] text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">
        Smart Placement
      </h1>

      <div className="flex flex-col gap-5">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/drives">Drives</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/students">Students</Link>
        <Link to="/applications">Applications</Link>
      </div>
    </div>
  )
}