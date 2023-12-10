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
  const greet = <h1>Howdy {name}!</h1>;

  function formatName(user) {
    return user.fName + " " + user.lName;
  }

  const user = {
    fName: "Carlos",
    lName: "Godoy",
  };

  const element = {
    <div>
      <h2>Part 1</h2>
      <h2>Part 2</h2>
      </div>
  };
    


  {/* // const pic = <img src={logo} alt="logo"></img>;

 function handleClick = () {
    console.log("Button clicked");
  };

  const clickElement = <button onClick={(handleClick)}>Click Here</button>; */}

  return (
   
      <h1>
        {intro} {greet}
      </h1>
      {formatName(user)}
      {element}
    
  );
}

export default App;
