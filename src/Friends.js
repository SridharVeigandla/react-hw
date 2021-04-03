import { render } from "@testing-library/react"
import React, { Component } from 'react';
class Friends extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            vin:"vinesh",
            srinath: "srinath",
            anwar:"anwar"
        };
    }

    render(){
     return<>
     <h1>My friends are {this.state.vin} {this.state.srinath} {this.state.anwar}</h1>
     
     </>

    }


}
export default Friends;