import logo from './logo.svg';
import './App.css';

 function formatName(user) {
  return user.firstName + user.lastName
}
const user = {
  firstName: "Elisha ",
  lastName: "Abochie-Ansah"
}

function clickButton(){
  alert('Button clicked');
}

function App() {

 

  return (
    <div>
      <h1>Hello, {formatName(user)} the world is yours!</h1>
      <div>
        <h2> Part 1</h2>
        <h2 style={{color: "red", backgroundColor: 'blue'}}> Part 2</h2>
      </div>
      <div>
<img style={{width: 150, display: 'block', marginLeft: 110 }} 
src="https://a0.anyrgb.com/pngimg/930/348/tom-and-jerry-spotlight-collection-jerry-mouse-tom-cat-tom-and-jerry-heroes-whiskers-small-to-medium-sized-cats-television-cat-like-mammal-cat.png"
/>
      </div>
      <div style={{alignItems:'center'}}>
        <button onClick={clickButton}>Click here </button>
      </div>
    </div>
    
  );
}

export default App;
