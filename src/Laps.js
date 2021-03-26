import React, { Component } from 'react';
import { render } from "@testing-library/react"

class Laps extends React.Component{

    bestLap = () =>{
        alert(this.state.brand)
    }
   
    constructor(props){
        super(props);

        this.state={
            brand: "ASUS"
            
        }
        
    }

    render(){
        return <>
        <h1>{this.state.model}is Best model from{this.state.brand}</h1>
        <button onClick={this.bestLap}>check</button>
        
        </>
    }

}

export default Laps;