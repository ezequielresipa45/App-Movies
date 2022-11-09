import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

import { useParams } from "react-router-dom";

export default function CardDetails() {


const { id } = useParams();
    



    useEffect(() => {

        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=a81973ad`).then((resp)=>{
      
            console.log(resp)
      })
        
      }, []);




  return (
    <div>ESTOY EN CardDetails</div>
  )
}
