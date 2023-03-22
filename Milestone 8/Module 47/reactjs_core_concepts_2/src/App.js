/* useState() put the state variable in the functional component In easy
word, when we have to update a value in ui, we will use useState()*/

/* we had to call the fetching function in the bottom in order to show the data
in ui. in react, we will use useEffect() */

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* counter */}
      <Counter></Counter>

      {/* external users */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

// external users
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

// counter
function Counter(){
  const [count, setCount] = useState(32);
  const increaseCount = () =>{setCount(count+1)};
  const decreaseCount = () => setCount(count-1);
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;
