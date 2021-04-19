import {usePlayersAsync} from "./fetchClient"

function App() {
  const {data, error, loading} = usePlayersAsync()

  return (
    <div>
      <h1>Players Latest Activities</h1>
      <span>{loading ? "Loading..." : "Data is loaded"}</span>
    </div>
  )
}

export default App
