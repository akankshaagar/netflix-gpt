import { BG_URL } from "../utils/constants";
import GPTMoviesRecomendation from "./GPTMoviesRecomendation";
import GPTSearchBar from "./GPTSearchBar";


const GptSearch = () => {
  return (
    <div className="">
         <div className="absolute -z-10">
                <img className=" h-screen w-screen object-cover" src={BG_URL} alt="logo" />
              </div>
        <GPTSearchBar/>
        <GPTMoviesRecomendation/>
    </div>
  )
}

export default GptSearch