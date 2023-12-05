import "./App.css";


function App() {
  const name = "Daniel";

  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  const user = {
    firstName: "Daniel",
    lastName: "Torres",
  };

  return (
    <div>
      {/* Simple Greeting */}
      <h1>Hello World!</h1>

      {/* Greeting with name */}
      <h1>Hello {name}!</h1>

      {/* Greeting with user name */}
      <h1>Hello {formatName(user)}!</h1>

     { /* Additional divv with two h2 tags */}
      <div>
        <h2>Part 1</h2>
        <h2>Part 2</h2>
      </div> 

      { /* img tag displaying an image */}
      <img src="https://reactjs.org/logo-og.png" alt="React Logo" />

      { /* Button with onClick handler */}
      <button onClick={() => alert("Hey Ya'll")}>Click Me</button>
    </div>
  );
}

export default App;
