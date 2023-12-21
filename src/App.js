import React from 'react';
import './App.css';

function App() {
  const hello = <h1>Hello, World!</h1>;
  
  const name = "Andrew";
  const greeting = <h1>Hello, { name }</h1>;
  
  const user = { 
    firstName: 'Andrew', 
    lastName: 'Thomas' 
  };
  
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const fullName = <h1> { formatName(user) } </h1>;
  
  const parts = ( 
  <React.Fragment>
    <h1>Part 1</h1>
    <h1>Part 2</h1>
  </React.Fragment>
  );
  
  const image = <img src="https://livingsimplyy.files.wordpress.com/2016/09/6847284-samurai-champloo-wallpaper.jpg?w=1200" />;
  
  const click = <button onClick={ () => alert("Button Pressed") }> Click Me </button>;

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
