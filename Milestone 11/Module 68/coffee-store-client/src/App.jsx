import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  const coffees = useLoaderData();
  return (
    <>
      <h1>Coffee Availabe : {coffees.length}</h1>
      <div className='grid grid-cols-3 gap-5'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
