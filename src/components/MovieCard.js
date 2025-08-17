
const MovieCard = ({posterPath})=>{
    return (
        <div className=" p-2">
            <img alt="Movie card" src={posterPath}/>
        </div>
    )
}

export default MovieCard;