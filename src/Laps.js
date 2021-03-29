import React, { Component, useEffect, useState } from 'react';
import { render } from "@testing-library/react"
import axios from 'axios';
import Movies from './Movies';


function Laps(props){

const [movies,setMovies] = useState(null);


   useEffect(()=>{

    axios.get('http://localhost:3001/getLaptops').then((res)=>{
         console.log("From Laps >>>>>>>>")
         console.log(res.data.laps);
         console.log("From Laps >>>>>>>>");

        setMovies(res.data.laps.map((mv)=>{
            <li>{mv}</li>
            }));
        //setMovies(moviesList);


    });



   },[movies]);

    return<>
    <h1>From Laps</h1>
    <ul>{movies}</ul>
    </>


}

export default Laps;

