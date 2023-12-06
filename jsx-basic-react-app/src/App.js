import "./App.css";

function App() {
  const name = "Azmain Shoeb";
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Azmain",
    lastName: "Shoeb",
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <h1>Hello {name}</h1>
      <h1>Hello {formatName(user)}</h1>
      <div>
        <h2>Part 1</h2>
        <h2>Part 2</h2>
      </div>
      <img src="https://reactjs.org/logo-og.png" alt="logo" />
      <button onClick={() => alert("This does nothing")}>Click Me</button> 
    </div>
  );
}

export default App;
