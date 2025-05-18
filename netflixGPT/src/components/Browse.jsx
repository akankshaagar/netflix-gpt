
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const toggleGPT = useSelector((store)=>store.gptSearch);
  
  const gptSearch = toggleGPT.isGptSearch;
  console.log('%c [ toggleGPT ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', gptSearch);
// Fetching now playing movies and storing them in redux store.
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div className='w-screen'>
     <Header/>
      {gptSearch ? <GptSearch/> : <>
        <MainContainer/>
        <SecondaryContainer/>
      </>}

     
     
     {/* 
       main video container 
        - video background
        - video Title
      
        Secondary Container
        - MOvie categoris Slider list 
        - movie cards card*n
     */}

    </div>
  )
}

export default Browse