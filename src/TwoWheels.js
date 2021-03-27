import { render } from "@testing-library/react"
import React, { Component } from 'react';

import axios from "axios";

class TwoWheels extends React.Component {


    componentDidMount() {

        axios.get('http://localhost:3001/info')
            .then((xy) => {
                this.setState({
                    name: xy.data.name,
                    company: xy.data.company,
                    capacity: xy.data.capacity
                });
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
            });

            constructor(props){
                super(props);
                this.state={
                    name:'',
                    company:'',
                    capacity:''
                }
            }
    }
    render(){
    <h1>My first bike is {this.state.name}</h1>
    }
}
export default TwoWheels;