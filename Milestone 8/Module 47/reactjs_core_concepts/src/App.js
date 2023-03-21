import './App.css';

function App() {
  const friends = [
    {name: 'sadia', plus2: 'padia'},
    {name: 'kadia', plus2: 'ladia'},
    {name: 'nadia', plus2: 'madia'}
  ];
  return (
    <div className="App">
      {/* basic way for dynamic react */}
      <div className="App-header">
        <h1>Akil Tajwar</h1>
        <Myself></Myself><br></br>
        <h1>My Friends</h1>
        <MyFriends friend="Sadia" plus2="padia"></MyFriends>
        <MyFriends friend="kadia" plus2="madia"></MyFriends>
        <MyFriends friend="nadia" plus2="ladia"></MyFriends>
      </div>

      {/* suggested way for dynamic react */}
      <div className='App-header'>
        {
          friends.map(friends=><MyFriends friend = {friends.name} plus2 = {friends.plus2}></MyFriends>)
        }
      </div>
    </div>
  );
}
function Myself() {
  return (
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, optio rem nesciunt, exercitationem dignissimos praesentium unde aliquid fuga labore quisquam cumque repellat asperiores dolores non numquam, voluptas ut qui consectetur nam excepturi laudantium porro. Voluptatibus aliquam magnam maiores, sunt dolore nesciunt perferendis nulla culpa. Optio accusantium delectus alias nihil voluptate!</p>
  )
}
function MyFriends(props) {
  return (
    <div className='family'>
      <p>{props.friend}</p>
      <p>{props.plus2}</p>
    </div>
  )
}

export default App;
