import MovieCard from "./MovieCard";

const MovieList = ({title, movies})=>{

    if(movies === null ) return;


    return (
        <div className="">
            <div>
                <h1 className="text-3xl p-2 pt-3 text-white">{title}</h1>
            
                <div className="flex">
                    {movies.map((movie)=> <MovieCard posterPath={movie.snippet.thumbnails.medium.url}/>)}
                </div>
     

              

            </div>
         
        </div>
    )
}

export default MovieList;