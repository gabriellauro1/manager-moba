import Sidebar from "../components/Sidebard"
import { Outlet } from "react-router-dom"

function GameLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-900 min-h-screen text-white p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default GameLayout