import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";

const GptSearchBar = ()=>{

    const langKey = useSelector((store) => store.config.lang)

    return (
        <div className="w-screen flex justify-center">
            <div className="flex justify-evenly mt-36 w-[50%] py-5  p-3 bg-black rounded-lg opacity-90">
                <input className="border w-[80%] rounded-md h-8 p-3" type="text" placeholder={lang[langKey].getSearchPlaceholder}/>
                <button className="border px-4 rounded-md text-white bg-green-600" >{lang[langKey].search}</button>  
            </div>
        </div>
    )
}

export default GptSearchBar;