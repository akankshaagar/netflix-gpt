import React from 'react'
import {MOVIE_POSTER_CDN} from '../utils/constants';
const MovieCard = ({poster_path}) => {
  return (
    <div className='w-48'>
        <img src={MOVIE_POSTER_CDN + poster_path} alt="movie card" />
    </div>
  )
}

export default MovieCard