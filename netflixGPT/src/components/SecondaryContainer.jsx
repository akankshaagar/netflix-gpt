import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const movies= useSelector((store)=>store.movie);
  console.log('%c [ movies ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', movies.nowPlayingMovie)

  return (
    <>
    {movies.nowPlayingMovie && 
   <div className=" z-40 bg-black">
     <div className="flex flex-col relative gap-4 -mt-52 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
          <MovieList title={"Trending Playing"} movies={movies.nowPlayingMovie}/>
          <MovieList title={"Popular Playing"} movies={movies.nowPlayingMovie}/>
          <MovieList title={"Upcoming Playing"} movies={movies.nowPlayingMovie}/>
      </div>
    </div>

     
     }
    </>
   
  )
}

export default SecondaryContainer