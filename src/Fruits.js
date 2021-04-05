

function Fruits(props){

    function Otthu(){

        alert("This is Fruits Page");
    }

    return(
     <div>
       <b> {props.name}</b>is in {props.color} Color and has {props.calories} calories
        <button onClick={Otthu} value="click"> Othandi</button>
     </div>

    )
}
export default Fruits;