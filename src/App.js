import logo from './logo.svg';
import './App.css';
import Movies from './Movies'
import Wish from './Wish';
import UserForm from './UserForm'
import Button from './Button';

function App() {

  function shoot() {
    alert("Great Shot!");
  }

  return (
    <div className="App">
      <Wish/>
      <UserForm/>
      <Button/>
      <Movies/>
    </div>
    
  );
}

export default App;
