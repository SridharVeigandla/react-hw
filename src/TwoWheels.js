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
                console.log(xy.data);
                console.log(xy.status);
                console.log(xy.statusText);
            });

            
    }


    constructor(props){
        super(props);
        this.state={
            name:'',
            company:'',
            capacity:''
        }
    };

    render() {
        return<>
    <h1>My first bike is {this.state.name}</h1>
     </>
    }
}
export default TwoWheels;