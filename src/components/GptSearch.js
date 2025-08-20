import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = ()=>{
    return (

        <div className="">
            <div className="absolute -z-10">
                <img alt="img" className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"/>
            </div>

            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearch;