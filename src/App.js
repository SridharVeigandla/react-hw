import logo from './logo.svg';
import './App.css';
import Movies from './Movies'
import Wish from './Wish';
import UserForm from './UserForm'

function App() {

  function shoot() {
    alert("Great Shot!");
  }

  return (
    <div className="App">
     <Wish/>
      <UserForm/>
      <button onClick={shoot}>Take the shot!</button>
      <Movies/>
    </div>
    
  );
}

export default App;
