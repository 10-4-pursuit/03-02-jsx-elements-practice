import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
const hello = <h1>Hello, World!</h1>;

const name = "Janine";
const greeting = <h1>Hello, { name }</h1>;

const user = { 
  firstName: 'Janine', 
  lastName: 'Smith' };

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  const fullName = <h1> { formatName(user) } </h1>;

   const parts = (
    <React.Fragment>
      <h1>Part 1</h1>
      <h1>Part 2</h1>
    </React.Fragment>); 
  
  const image = <img src="https://i.ytimg.com/vi/r2QdE1wjPLE/hqdefault.jpg" />;

  const click = <button onClick={() => alert("Button Pressed")}>Click Me</button>;
  
    return (
      <div className="App">
        {hello}
        {greeting}
        {fullName}
        {parts}
        {image}
        <br/>
        {click}
      </div>
    );
  }
export default App;
