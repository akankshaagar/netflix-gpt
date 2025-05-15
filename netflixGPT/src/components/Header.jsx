import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    // subscribe to the store
    const user = useSelector(store=>store.user);
    console.log("user in header", user);
const handleSignOut =  () => {

    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out success");
        navigate("/")
      }).catch((error) => {
        // An error happened.
        console.log("error in sign out", error)
      });
      
}

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
            {user &&
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div>{user.displayName}</div>
                <button className="p-2 rounded bg-red-800 text-white" onClick={handleSignOut}> Sign Out</button>
            </div>
        }
      </div>
    </div>
  )
}
export default Header;