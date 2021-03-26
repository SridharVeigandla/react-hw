function Button() {

    function shoot() {
        alert("Great Shot!");
    }


    return (
        <div>
            <button onClick={shoot}>Take the shot!</button>
        </div>
    );
}
export default Button;