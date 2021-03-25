import { render } from "@testing-library/react"
import React, { Component } from 'react';
class Cars extends React.Component {

    render() {
        
    return <h1>I have a,{this.props.brand} {this.props.name} {this.props.color} color Car.</h1>
        
    }

}
export default Cars;