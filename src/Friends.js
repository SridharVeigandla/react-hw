import { render } from "@testing-library/react"
import React, { Component } from 'react';
class Friends extends React.Component{

    constructor(props){
        super(props);

        this.props{
            vinesh:"vinesh",
            srinath: "srinath",
            anwar:"anwar"
        };
    }

    render(){
     return<>
     <h1>My friends are {this.props.vinesh},{this.props.srinath},{this.props.anwar}</h1>
     
     </>

    }


}
export default Friends;