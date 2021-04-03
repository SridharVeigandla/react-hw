import React, { Component, useEffect, useState } from 'react';
import { render } from "@testing-library/react"
import axios from 'axios';
import Movies from './Movies';


function Laps(props){

const [movies,setMovies] = useState(null);

const moviesList = movies.map((mv)=>{
<li>{mv}</li>
});

   useEffect(()=>{

    axios.get('http://localhost:3001/getLaptops').then((res)=>{
         console.log("From Laps >>>>>>>>")
         console.log(res.data.laps);
         console.log("From Laps >>>>>>>>");

        setMovies(res.data.laps);
      

        //setMovies(moviesList);


    });



   });

    return<>
    <h1>From Laps</h1>
    <ul>{moviesList}</ul>
    </>


}

export default Laps;

