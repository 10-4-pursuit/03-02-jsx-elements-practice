import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const name = 'Joe';
  const user = { firstName: 'Anggel', lastName: 'P' };
  const intro = (<h1>Hello, {name}</h1>);
  const formatted = (<h1>Hello, {formatName(user)}!</h1>);
  const element = (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
  const parts = (
    <React.Fragment>
      <h1>Part 1</h1>
      <h1>Part 2</h1>
  </React.Fragment>
  );
  const imgElement = <img src='https://images.unsplash.com/photo-1594904351111-a072f80b1a71?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWN0fGVufDB8fDB8fHww' />
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
        {intro}
        {formatted}
        {parts}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <button onClick={buttonClick}>
          click!
        </button>
        {imgElement}
      </header>
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function buttonClick(){
  console.log("button clicked!")
}

export default App;
