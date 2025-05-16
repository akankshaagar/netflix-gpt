import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constants"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // subscribe to the store
    const user = useSelector(store=>store.user);
    console.log("user in header", user);
    
    const handleSignOut =  () => {

    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out success");
      }).catch((error) => {
        // An error happened.
        console.log("error in sign out", error)
      });
      
};

useEffect(()=>{

 const unSubscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          console.log("user on auth change", user);
            const {uid, email,  displayName } = user;
            
            dispatch(addUser({userId:uid, email:email, displayName:displayName}));
            navigate("/browse");
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
// Perform any cleanup actions: unsubscribe when the component unmounts
return ()=>{
    unSubscribe();
    console.log("unsubscribed");
}
   },[])


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
            {user &&
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="text-white">{user.displayName}</div>
                <button className="p-2 rounded bg-red-800 text-white" onClick={handleSignOut}> Sign Out</button>
            </div>
        }
      </div>
    </div>
  )
}
export default Header;