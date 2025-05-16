
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VidoeBackground = ({movieId}) => {
    const trailerVideo = useSelector((store)=>store.movie?.trailerVideo);
    useTrailerVideo(movieId);
    if (!trailerVideo) return null;
  return (
    <div>
    <iframe 
        className="w-screen aspect-video" 
        src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=0&mute=1&controls=0&loop=1`}
        title="YouTube video player">

    </iframe>

    </div>


    
  )
}

export default VidoeBackground