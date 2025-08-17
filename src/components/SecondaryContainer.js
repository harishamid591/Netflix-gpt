import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{

    const movies = useSelector((store)=> store.movies)

    console.log(movies)

    if(movies.nowPlayingMovies === null) return

    return (
        <div className="bg-black">
             <div className="-mt-52 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies.slice(0,5)} />
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies.slice(5,10)} />
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies.slice(10,15)} />
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies.slice(15,20)} />
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies.slice(20,25)} />
        </div>
        </div>
       
    )
}

export default SecondaryContainer;