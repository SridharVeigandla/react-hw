function Fruits(props){

    function clicks(){

        alert("This is Fruits Page");
    }

    return(
     <div>
       <b> {props.name}</b>is in {props.color} Color and has {props.calories} calories
        <button onClick={clicks} value="click"> click</button>
     </div>

    )
}
export default Fruits;