
import { render } from "@testing-library/react"
import React, { Component } from 'react';
import axios from 'axios';
class Tv extends React.Component{

    tvPrice =()=>{
        alert( this.state.price);
    }

    componentDidMount() {

        //alert("from componentDidMount !!");
        axios.get('http://localhost:3001/getCars')
        .then((rs) => {
            this.setState({
                name:rs.data.name,
                size:rs.data.size,
                price:rs.data.price
              });
        //  console.log(response.data);
         // console.log(response.status);
         // console.log(response.statusText);
         // console.log(response.headers);
         // console.log(response.config);





        });       

    }

  
   // componentWillUnmount() {
      //  alert(" From componentWillUnmount");
  //  }


    constructor(props){
        super(props);
        this.state = {
            name:'',
            size:'',
            price:''
          }
       

         
  
  


      //  alert("from TV constructor");
    }


    render(){
        return<>
        <h1>From {this.state.name} Tv Component</h1>
        <button onClick={this.tvPrice}>getPrice</button>
        </>
    }


}
export default Tv;
