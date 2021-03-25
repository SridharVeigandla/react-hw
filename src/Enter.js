import { render } from "@testing-library/react";

function Enter() {

    function clicked() {

        alert("Enter button clicked");
    }

    render(

        <div>
            <button onClick={clicked}> Click here </button>
        </div>
    );

}
export default Enter;