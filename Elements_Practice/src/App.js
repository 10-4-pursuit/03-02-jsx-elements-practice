import logo from './logo.svg';
import './App.css';

const HelloWorld = () => (
  <div>
    <h1>Hello, World!</h1>
  </div>
);

const name = 'Jann Pena';
const PersonalizedGreeting = () => 
  <div>
    <h1>Hello, {name}!</h1>
  </div>

const formatName = (user) => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'Jann',
  lastName: 'Pena',
};

const GreetingWithFunction = () => (
  <div>
    <h1>Hello, {formatName(user)}!</h1>
  </div>
)

const ImageComponent = () => (
  <div>
     <img src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp" alt="A soothing nature background" />
  </div>

);
;
const App = () => (
  <div><h1>Hello, World!</h1></div>
)

export default App;
