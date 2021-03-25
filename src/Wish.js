import { render } from "@testing-library/react";

function Wish(props) {

    function activateLasers(){

        alert("clicked");
    }
    return (
        <div>
            <h1>Hello World! !! Mr . {props.name}</h1>
            <button onClick={activateLasers}>
                Activate Lasers
            </button>
        </div>
    );
}
export default Wish;