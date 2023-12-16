import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Andromeda'
const formatName = (user) => {
  return user.firstName + ' ' + user.lastName 
}
const user = {
  firstName: 'Hadrian',
  lastName: 'Ceasar'
}

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h1>Hello {formatName(user)}</h1>
      <h1>Hello {name}</h1>
      <img src={logo} className="App-logo" alt="logo"/> 

      <div >
        <h2>Part1</h2>
        <h2>Part2</h2>
        <button onClick={() => alert('Spot of Tea')}> Click Me</button>
      </div>
    </div>
  );
}


export default App;
