import { useState } from 'react'
import './App.css'
import First from './Components/First/First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Twisted Components</h1>
      <First></First>
    </div>
  )
}

export default App
