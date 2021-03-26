import { render } from '@testing-library/react';
import React, {component} from 'react';

class Languages extends React.Component{

    myLang = () =>{
        alert(this.state.lang1);
        this.setState({lang1:"ENGLISH"});
    }


constructor(props){

    super(props);
    this.state ={
        lang1:"Telugu",
        lang2 :"Hindi"
    }
}
    render(){
        return<>
        <h1>My mother toungue is {this.state.lang1}</h1>
        <button onClick={this.myLang}>MyLanguage</button>
        
        </>
    };
    

}
export default Languages;