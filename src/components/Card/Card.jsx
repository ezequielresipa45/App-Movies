import React from 'react'
import styles from './Card.module.css'
import {Link} from 'react-router-dom';

export default function Card({movie}) {

   
  return (

    <Link to={`/cardDetails/${movie.imdbID}`}>
    <div className={styles.containerMovie}>

        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Title}</p>

    </div>

    </Link>

  )
}
