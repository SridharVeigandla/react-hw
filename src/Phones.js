import React, { Component } from 'react';
import { render } from "@testing-library/react"


class Phones extends React.Component{

     
     
    getPrice = () =>{
     
        alert(this.state.price);
        
    }
    constructor(props) {
     super(props);
     this.state={
         brand: "Samsung",
         price: 9000
     }
    }
render(){
    
 return<>
 <h1>{this.state.brand} is a Good Brand</h1>

 <button  onClick={this.getPrice}>Price</button>
 
 
 </>

}

}
export default Phones;