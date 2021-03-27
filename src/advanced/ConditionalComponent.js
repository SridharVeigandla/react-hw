import UserForm from "../UserForm";

function UserGreeting(props) {
    return <h1>Your Rigistered User !!!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function ConditionalComponent(props){

    if(props.login==='no'){
        return <UserGreeting/>
    }else{
        return <UserForm/>
    }

  }
  export default ConditionalComponent;
