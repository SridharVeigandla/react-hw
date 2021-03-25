function Input(props) {

    return (
        <div>
           {props.label} : <input type={props.type} value={props.value} />
        </div>

    )

}
export default Input;