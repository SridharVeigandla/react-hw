import logo from './logo.svg';
import './App.css';
//import Movies from './Movies'
//import Wish from './Wish';
import UserForm from './UserForm'
//import Button from './Button';
import Comment from './Comment'
//import Fruits from './Fruits'
import Cars from './Cars'
//import Giffy from './Giffy'
import Phones from './Phones'
import Laps from './Laps'
import Languages from './Languages'
import Tv from './Tv'
function App() {

 

  return (
    <div className="App">
     {/* <Wish/>
      <UserForm/>
      <Button/>
     <Movies/>*/}
      <Cars brand="benz" name="c class" color="red"/>
      <Phones />
      <Tv/>
      { /* <Laps/>
       <Languages/>
      

      <Fruits name="Banana" calories="110" color="Yellow"/>
      <Fruits name="Mango" calories="200" color="Yellow"/>
      <Fruits name="Grape" calories="300" color="Black"/>
     <Giffy giffyUrl="https://media.giphy.com/media/toB3AnUDkqE3GENKx0/giphy.gif" name="THis is a Giff"  />*/}

      <Comment date={new Date()} avatarUrl="https://placekitten.com/g/64/64" name="cat image" text="cat text"/>
    </div>
    
  );
}

export default App;
