import logo from './logo.svg';
import './App.css';

const name = "EdgarCollado";

const user = {
  firstName: "Edgar",
  lastName: "Collado",
}

function formatName(user) {
  return user.firstName + user.lastName
}

function App() {

  function clickButton() {
    alert('Button Clicked');
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        Hello, {formatName(user)} welcome to the World of code!
      </h1>
      <div id="twoh2" class="twoh2div">
        <h2 style={{textAlign: 'center'}}>Part 1</h2>
        <h2 style={{textAlign: 'center'}}> Part 2</h2>
      </div>
      <div>
        <img id='firstImg' class="page-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSVHuIa8dxXoVax_Oe3nKFeg58_JzMWZBXQ&usqp=CAU' alt='Toji' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: 400}}></img>
      </div>
      <div style={{textAlign: 'center', padding: 10}}>
        <button onClick={clickButton}>Click Here For More</button>
      </div>
    </div>
  );
}

export default App;
