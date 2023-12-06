import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
const name = 'Gyancarlos';
const intro = <h1>Hello, Universe!</h1>;
const nameIntro = <h1>Hello, {name}</h1>;
const user = { firstName: 'Gyancarlos', lastName: 'Pinto' };
const element = <h1>Hello, {formatName(user)}!</h1>;
const parts = (
  <React.Fragment>
        <h2>Part 1</h2>
        <h2>Part 2</h2>
  </React.Fragment>
);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {intro}
        {nameIntro}
        {element}
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
        <button onClick={buttonClicked}>
          HEY!!!
        </button>
        <br/>
        <img src="https://images.nightcafe.studio/jobs/EoKP1SYf3BfOaaK3AVLD/EoKP1SYf3BfOaaK3AVLD--14--3wx57_2x.jpg?tr=w-1600,c-at_max" width={500} />
      </header>
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function buttonClicked() {
  console.log("buttonClicked");
}

export default App;
