import logo from "./logo.svg";
import "./App.css";
import React from "react";


function App() {
  const intro = (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );

  const name = "Cindy";
  const greeting = <h1>Hello, {name}!</h1>;

  function formatName(user) {
    return `${user.fName} ${user.lName}`;
  }

  const parts = (
    <div>
      <h2>Part 1</h2>
      <h2>Part 2</h2>
    </div>
  );

  const picture = (
    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  );

  const handleClick = () => {
    console.log("Button clicked");
  };

  const bonus = <button onClick={handleClick}>Click me</button>;

  return (
    <div>
      {intro}
      {greeting}
      {formatName}
      {parts}
      {picture}
      {bonus}
    </div>
  );
}

export default App;
