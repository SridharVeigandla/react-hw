import { render } from "@testing-library/react"
import React, { Component } from 'react';
class Cars extends React.Component {

    changeColor = () => {
        this.setState({color: "blue"});
    }
    componentDidMount() {
     
    }

  
    componentWillUnmount() {
      //  alert(" From componentWillUnmount");
    }

    
    constructor(props) {
        //alert(" From Constructor");
        super(props);

        http://localhost:3001/getCars

        /*
            do http call and get Car properties
            set to the state object
            let carResponse;
            ajax({
                url:'http://localhost:8080/getCarDetails',
                method: '',
                success: function(req,res){
                   carResponse = res.getData();     
                },
                failure: function(){



                }
        });

        */

      /*this.state = {
            brand: carResponse.brand,
            price: carResponse.price,
            color: carResponse.color
        };*/

        this.state = {
            brand: "Ford123",
            price: "100000",
            color: "red"
        };

        



      }


    render() {
        
    return <> 
    <h1>I have a,{this.props.brand} {this.props.name} {this.props.color} color Car.</h1>

    <h2>My friend has {this.state.brand} color in <span>{this.state.color}</span></h2>

    <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>

    </>
        
    }

}
export default Cars;