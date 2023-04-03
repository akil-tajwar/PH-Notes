import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Graph from './Components/Graph/Graph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-6xl'>Hello Tailwind</h1>
      <Graph></Graph>
    </div>
  )
}

export default App
