import './App.css';

function App() {
  const name = "Amira"
  
  function formatName(user) {
    return user.firstName + ' ' + user.lastName
  }

  const user = {
    firstName: 'Amira',
    lastName: 'Fredericks'
  }
  return (
    <div className="App">
    <h1>Hello World</h1>

    <h1>Hello {name}</h1>

    <h1>Hello {formatName(user)}</h1>

    <div>
      <h2>Part 1 </h2>

      <h2>Part 2 </h2>
    </div>

<img src="lauren&nip.jpeg" alt="lauren&nip"/>
 
 

  
  
    </div>

  );
}

export default App;
