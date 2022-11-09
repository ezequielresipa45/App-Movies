import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Cards from './components/Cards/Cards.jsx'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import CardDetails from './components/CardDetails/CardDetails';

const linkApi = 'http://www.omdbapi.com/?s=Star%20Wars&apikey=a81973ad'

function App() {

const [movies, setMovies] = useState([])


useEffect(() => {

  axios.get(linkApi).then((resp)=>{

  console.log(resp.data.Search)

  setMovies(...movies, resp.data.Search)
})
  
}, []);


  return (
    <div className="App">


      <Navbar/>

      <Routes>

        <Route path='/' element = {<Cards movies = {movies}/>}/>
        
        <Route path='/cardDetails/:id' element = {<CardDetails/>}/>




        


      </Routes>

    </div>
  );
}

export default App;


