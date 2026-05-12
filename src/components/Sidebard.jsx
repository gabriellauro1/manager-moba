import { Link } from "react-router-dom"

const menu = [
  { name: "Menu", path: "/" },
  { name: "Elenco", path: "/squad" },
  { name: "Transferências", path: "/transfers" },
  { name: "Partida", path: "/match" },
  { name: "Liga", path: "/league" },
  { name: "SoloQ", path: "/soloq" },
]

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">MOBA Manager</h1>

      <ul className="space-y-3">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="block p-2 rounded hover:bg-gray-700"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar