import { useEffect, useState } from "react";
import Fruits from "../Fruits";
import axios from 'axios';

function NewFruits(props){
    return<h3>These are Fresh Fruits</h3>
}
function OldFruits(props){
    return<h3>this is some old stock</h3>
}

function Conditional(props){

    const [name, setName] = useState(''); 
    const [company,setCompany] = useState('');
    const [capacity,setCapacity] = useState('');


    useEffect(()=>{

        
    });

    useEffect(()=>{

        axios.get('http://localhost:3001/info')
        .then((xy) => {


            setName(xy.data.name);
            setCompany(xy.data.name);
            setCapacity(xy.data.capacity);

            console.log(xy.data);
            console.log(xy.status);
            console.log(xy.statusText);
        });


    });

    if(props.fresh==="yes"){
        return<>
        <p>I have a {name}</p>
        <NewFruits/></>
    }else{
        return <>
        <p>I have a {name}</p>

        <OldFruits/></>
    }
}

export default Conditional;