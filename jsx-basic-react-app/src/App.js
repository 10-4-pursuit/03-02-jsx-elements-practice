import logo from './logo.svg';
import './App.css';

const name = "Andrew"

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = { firstName: 'Andrew', lastName: 'Thomas' };
const element = <h1>{formatName(user)}</h1>;

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h1>Hello, {name}</h1>
      {element}

      <div>
      <h2>Part 1</h2>
      <h2>Part 2</h2>
      </div>

      <img src="https://livingsimplyy.files.wordpress.com/2016/09/6847284-samurai-champloo-wallpaper.jpg?w=1200" />

      <button id="myButton">Click me</button>

    </div>
    
  );
}

var button = document.getElementById('myButton');
button.addEventListener('click', function() {
    console.log('Button clicked');
  });


export default App;
