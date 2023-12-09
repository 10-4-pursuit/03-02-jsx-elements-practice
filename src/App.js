import React from 'react';
import logo from './logo.svg';
import './App.css';
import { first } from 'fakers/lib/name';



function App() {

    let name = {
    firstName: 'Kanique',
    lastName: 'Cox',
    };

    
  function formatName(user) {
    return user.firstName + ' '+ user.lastName;
  }
  const profilePic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnacgpi0IOqxKoZllR4oEMcfoD2LbqIsy2ph5asJN0bvKkANMBw9UTyh1IDM0WPcdfSTY&usqp=CAU';

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <div>
        <h1>Hello, World!</h1>
      </div>
      <div>
        <h1> Hello, {formatName(name)}!</h1>
      </div>
      <div>
        <h2>Part 1</h2>
        <h2>Part 2</h2>
      </div>
      <div>
        <img src={profilePic} alt="image" />
      </div>
      <div>
        <button onClick={handleButtonClick}>Click Me</button>
      </div>
    </div>
  );
}
    


export default App;
