import { render } from "@testing-library/react";

function Wish(props) {

   
    return (
        <div>
            <h1>Hello World!{props.name}</h1>
           
        </div>
    );
}
export default Wish;