import React, { Component } from 'react';
import { render } from "@testing-library/react"
import axios from 'axios';


class Laps extends React.Component{


    /*bestLap = () =>{
        alert(this.state.brand)
    }*/


componentDidMount(){
    //alert("inDidMount");
    const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
this.setState=({
    numbers:listItems
})


//axios.get().then();

    axios.get('http://localhost:3001/getLaptops')
        .then((response) => {
            
         console.log(response.data.laps);
         console.log(response.status);
         console.log(response.statusText);

        });
}

    constructor(props){
        super(props); 
        this.state={
            numbers:null
        }
    }

    render(){
        return <>
        {/*<h1>{this.state.model}is Best model from{this.state.brand}</h1>
        <button onClick={this.bestLap}>check</button>*/}

    <>{this.state.numbers}</>
        
        </>
    }

}

export default Laps;