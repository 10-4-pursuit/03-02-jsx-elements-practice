import logo from "./logo.svg";
import "./App.css";

function App() {
  const task1 = (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );

  const name = "Ryan";
  const task2 = <h1>Hello, {name}!</h1>;

  function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
  }

  const task4 = (
    <div>
      <h2>Part 1</h2>
      <h2>Part 2</h2>
    </div>
  );

  const task5 = <img src={logo} alt="logo" />;

  const handleClick = () => {
    console.log("Button clicked");
  };

  const elementBonus = <button onClick={handleClick}>Click me</button>;

  return (
    <div>
      {task1}
      {task2}
      {formatName}
      {task4}
      {task5}
      {elementBonus}
    </div>
  );
}

export default App;
