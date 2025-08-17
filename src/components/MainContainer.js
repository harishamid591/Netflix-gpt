import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = ()=>{

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(movies === null ) return;

    const mainMovie = movies[4]

 

    const {title} = mainMovie.snippet
    const {id} = mainMovie

   

    return (
        <div>
            <VideoTitle title={title}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;