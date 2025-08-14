import { useState } from "react";
import Header from "./Header";

const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true)

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div >
            <Header/>
            <div className="absolute">
                <img className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"/>
            </div>

            <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInForm? 'Sign In' : 'Sign Up'}</h1>
               {!isSignInForm && <input type="text" placeholder="Name" className="p-2 mb-4 w-full bg-gray-700"/>} 
                <input type="text" placeholder="Email Address" className="p-2 w-full bg-gray-700"/>
                <input type="text" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"/>
                <button className="p-4  bg-red-700 w-full rounded-lg">{isSignInForm? 'Sign In' : 'Sign Up'}</button>

                <p className="my-4 px-1 cursor-pointer" onClick={toggleSignInForm}>New to Netflix? Sign Up</p>
            </form>
        </div>
    )
}

export default Login;