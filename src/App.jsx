import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainMenu from "./pages/MainMenu"
import CreateTeam from "./pages/CreateTeam"

import GameLayout from "./layouts/GameLayout"

import Dashboard from "./pages/Dashbord"
import Squad from "./pages/Squad"
import Transfers from "./pages/Transfers"
import Match from "./pages/Match"
import League from "./pages/League"
import SoloQ from "./pages/SoloQ"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 MENU (SEM SIDEBAR) */}
        <Route path="/" element={<MainMenu />} />
        <Route path="/create-team" element={<CreateTeam />} />

        {/* 🔒 JOGO (COM SIDEBAR) */}
        <Route element={<GameLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/squad" element={<Squad />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/match" element={<Match />} />
          <Route path="/league" element={<League />} />
          <Route path="/soloq" element={<SoloQ />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App