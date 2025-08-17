import { useEffect } from "react";
import { YOUTUBE_API } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/moviesSlice";


const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        getNowPlayingMovies();
    },[])

    const getNowPlayingMovies = async()=>{
        const data = await fetch(YOUTUBE_API)

        const json = await data.json()


        dispatch(addNowPlayingMovies(json.items))
    }
}
export default useNowPlayingMovies;