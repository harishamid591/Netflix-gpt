import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = ()=>{

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const user = useSelector((store)=> store.user)

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
          
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {

                const {uid, email, displayName} = user;
                dispatch(addUser({uid:uid, email:email, displayName: displayName}))
                navigate('/browse')
                
            } else {
                dispatch(removeUser())
                navigate('/')
            }
          });
    },[])

    return (
        <div className="flex justify-between absolute w-screen bg-gradient-to-b from-black z-10">
            <img className="w-44 ml-10" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>


            {user && <div>
                <button onClick={handleSignOut} className="p-2 mt-4 mr-3 bg-red-600 text-white rounded-lg cursor-pointer">Sign Out</button>
            </div>}

        </div>

    )

}

export default Header;