import logo from './logo.svg';
import React from 'react';
import './App.css';

const name = "Andrew";
const user = { firstName: 'Andrew', lastName: 'Thomas' };
const hello = <h1>Hello, World!</h1>;
const greeting = <h1>Hello, {name}</h1>;
const fullName = <h1>{formatName(user)}</h1>;
const parts = <React.Fragment><h1>Part 1</h1><h1>Part 2</h1></React.Fragment>
const image = <img src="https://livingsimplyy.files.wordpress.com/2016/09/6847284-samurai-champloo-wallpaper.jpg?w=1200" />;
const click = <button onClick={buttonClicked}>Click Me</button>

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function buttonClicked() {
  console.log("Button clicked");
}

function App() {
  return (
    <div className="App">
      {hello}
      {greeting}
      {fullName}
      {parts}
      {image}
      {click}
    </div>
  );
}

export default App;
