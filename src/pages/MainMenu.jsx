import { useNavigate } from "react-router-dom"

function MainMenu() {
  const navigate = useNavigate()

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      
      <h1 className="text-4xl font-bold mb-10">
        MOBA Manager
      </h1>

      <div className="flex flex-col gap-4 w-64">

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 p-3 rounded"
        >
          Novo Jogo
        </button>

        <button
          onClick={() => alert("Sistema de save ainda não implementado")}
          className="bg-green-600 hover:bg-green-700 p-3 rounded"
        >
          Continuar
        </button>

        <button
          onClick={() => navigate("/create-team")}
          className="bg-purple-600 hover:bg-purple-700 p-3 rounded"
        >
          Criar Time
        </button>

      </div>
    </div>
  )
}

export default MainMenu