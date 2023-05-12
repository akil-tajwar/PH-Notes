import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log({ name, email });

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }
  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' /><br />
        <input type="email" name='email' /><br />
        <input type="submit" />
      </form><br />
      <Link to='/users'><button>Users</button></Link>
    </>
  )
}

export default App
