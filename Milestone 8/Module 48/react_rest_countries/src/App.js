import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div className='title'>
      <Header></Header>
      <h2>Available Countries: {countries.length}</h2>
      <div className='country'>
        {
          countries.map(country => <Country key={country.cca3} country={country}></Country>)
        }
      </div>
    </div>
  )
}
function Country(props) {
  console.log(props)
  return (
    <div>
      <img src={props.country.flags.png}/>
      <h3>{props.country.name.common}</h3>
    </div>
  )
}

export default App;
