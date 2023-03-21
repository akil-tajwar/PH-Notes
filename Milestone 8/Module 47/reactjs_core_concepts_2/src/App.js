/* useState() put the state variable in the functional component*/

import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
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
