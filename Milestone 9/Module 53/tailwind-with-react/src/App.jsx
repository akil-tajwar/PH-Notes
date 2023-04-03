import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-6xl'>Hello Tailwind</h1>
    </div>
  )
}

export default App
