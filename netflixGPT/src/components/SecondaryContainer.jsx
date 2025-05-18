import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies= useSelector((store)=>store.movie);
  // console.log('%c [ movies ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', movies.nowPlayingMovie)

  // console.log('popular', movies.popularMovie);
  return (
    <>
    {movies.nowPlayingMovie && 
   <div className=" z-40 bg-black">
     <div className="flex flex-col relative gap-4 -mt-52 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/> 
          <MovieList title={"Popular Movies"} movies={movies.popularMovie}/>
          <MovieList title={"Top Rated Movies"} movies={movies.trendingMovie}/>
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovie}/>
      </div>
    </div>

     
     }
    </>
   
  )
}

export default SecondaryContainer