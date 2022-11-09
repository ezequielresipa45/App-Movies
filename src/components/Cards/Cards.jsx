import React from 'react'
// import styles from './Cards.module.css'
import Card from '../Card/Card.jsx'

export default function Cards({movies}) {
  return (
    <div>

{
    movies.map((movie)=>(<Card movie = {movie} key = {movie.imdbID}/>))
}





    </div>
  )
}
