import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validated";
import { auth } from "../Utils/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";


const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const email = useRef(null);
    const password = useRef(null)
    const name = useRef(null)

    const handleButtonClick = ()=>{

       const message = checkValidData(email.current.value, password.current.value)

       setErrorMessage(message)
       if(message) return

       if(!isSignInForm){
        //Sign UP

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
              }).then(() => {
                    const {uid , email, displayName, photoURL} = auth.currentUser
                    dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}))
              
              }).catch((error) => {
                setErrorMessage(error.message)
              });

          
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode +"-"+ errorMessage);
            // ..
        });

       }else{
            // Sign In

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            
               
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"-"+ errorMessage);
            });
       }
    }

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div >
            <Header/>
            <div className="absolute">
                <img alt="img" className="h-screen w-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"/>
            </div>

            <form onSubmit={(e)=> e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-85">
                <h1 className="font-bold text-3xl py-4">{isSignInForm? 'Sign In' : 'Sign Up'}</h1>
               {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="p-2 mb-4 w-full bg-gray-700"/>} 
                <input ref={email} type="text" placeholder="Email Address" className="p-2 w-full bg-gray-700"/>
                <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"/>

                <p className="bg-red-500 mb-4 font-bold text-lg">{errorMessage}</p>

                <button onClick={handleButtonClick} className="p-4  bg-red-700 w-full rounded-lg">{isSignInForm? 'Sign In' : 'Sign Up'}</button>

                <p className="my-4 px-1 cursor-pointer" onClick={toggleSignInForm}>New to Netflix? Sign Up</p>
            </form>
        </div>
    )
}

export default Login;