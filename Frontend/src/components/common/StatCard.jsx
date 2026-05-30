export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-4xl font-bold mt-4">{value}</p>
    </div>
  )
}