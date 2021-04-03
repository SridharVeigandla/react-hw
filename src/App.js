import logo from './logo.svg';
import './App.css';
//import Movies from './Movies'
     import Wish from './Wish';
import UserForm from './UserForm'
//import Button from './Button';
import Comment from './Comment'
//import Fruits from './Fruits'
import Cars from './Cars'
import Giffy from './Giffy'
import Phones from './Phones'
import Laps from './Laps'
import Languages from './Languages'
import Tv from './Tv'
import NumberList from './advanced/ListTest';
import ConditionalComponent from './advanced/ConditionalComponent';
import Conditional from './advanced/Conditional';
import TwoWheels from './TwoWheels';
import Test from './Test'
import Test2 from './Test2'
import Friends from './Friends'
import Alcohals from './Alcohals'
function App() {

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="App">
     
      <Alcohals/>
     <Friends/>
     <Test2 name="Sushmitha" age="22" />
     <Wish name="Sridhar"/>
     <Test festival="Holi"/>
     <Giffy giffyUrl="https://media.giphy.com/media/toB3AnUDkqE3GENKx0/giphy.gif" name="THis is a Giff"  />

      
     {/* 
          <Laps/>

      <UserForm/>
      <Button/>
     <Movies/>
      <Cars brand="benz" name="c class" color="red"/>
      <Phones />
      
       <NumberList numbers={numbers}/>
      <ConditionalComponent login="no"/>
      <TwoWheels/>
      <Conditional fresh="no"/>
       
       <Tv/>
       <Comment date={new Date()} avatarUrl="https://placekitten.com/g/64/64" name="cat image" text="cat text"/>
     
    
       <Languages/>
  
      <Fruits name="Grape" calories="300" color="Black"/>
      */}
     

      
    </div>
    
  );
}

export default App;
