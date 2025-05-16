
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
// Fetching now plating movies and storing them in redux store.
  useNowPlayingMovies();

  return (
    <div className='w-screen'>
     <Header/>


     <MainContainer/>
      <SecondaryContainer/>
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