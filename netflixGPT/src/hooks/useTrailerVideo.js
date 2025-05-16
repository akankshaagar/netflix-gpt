import { useDispatch, } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (movieId) => {
    
    const dispatch = useDispatch();
    //  movie id
    // fetching the trailer video and updating the redux store
    
    const getMovieVideo = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS)
        const json = await data.json();
        console.log("movie video", json.results);
        const filteredTrailer = json.results.filter((video)=>video.type==="Trailer");
        const trailer = filteredTrailer.lenght? filteredTrailer[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
       // console.log('%c trailerVideo', 'font-size:13px; background:pink; color:#bf2c9f;', trailerVideo.key);
    }
    
    useEffect(()=>{
        getMovieVideo();
    },[])

}
export default useTrailerVideo;