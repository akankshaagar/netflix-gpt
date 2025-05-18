import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VidoeBackground from "./VidoeBackground";

const MainContainer = () => {
    const movies = useSelector((store)=>store.movie.nowPlayingMovie);
    if(!movies) return;
    // console.log('%c [ movies ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', movies[0])
    const mainMovie = movies[0];
    const {original_title,id, overview} = mainMovie;


  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VidoeBackground movieId={id}/>
    </div>
  )
}

export default MainContainer