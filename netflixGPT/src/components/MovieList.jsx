import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log('%c [ title, movies ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', title, movies)
  return (
    <div className=''>
        <div className=' text-3xl py-3 w-11/12 mx-auto px-1 text-white'>{title}</div>
        <div className='w-11/12 mx-auto px-1 flex overflow-x-scroll'>
            <div className=' flex  gap-4 justify-center'>
                {
                    movies?.map((movie)=>(
                        <MovieCard key={movie.id} poster_path={movie.poster_path}/>
                    ))
                }
           
            </div>
           
        </div>
    </div>
  )
}

export default MovieList