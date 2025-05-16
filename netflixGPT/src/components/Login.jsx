import { useRef, useState, } from "react"
import { BG_URL } from "../utils/constants"
import Header from "./Header"
import { checkValiddata } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
const [issignIn, setIsSignIn] = useState(true);
const email = useRef(null);
const password = useRef(null);
const name = useRef(null);
const [errorMessage, setErrorMessage] = useState('');
// const navigate = useNavigate();
const dispatch = useDispatch();

function toggleSignInForm(){
    setIsSignIn(!issignIn);
}

function handleLogin(){


    console.log(email.current.value,password.current.value);
    const message = checkValiddata(email.current.value,password.current.value);
    console.log('%c [ errrMessage ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', message)
    setErrorMessage(message);

    if(message !== null) return;

    if(!issignIn){
        // SignUpLogic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                const {uid, email,  displayName } = auth.currentUser;
                console.log("user profile update ", uid, email, displayName);
                dispatch(addUser({userId:uid, email:email, displayName:displayName}));

                // navigate("/browse");
              }).catch((error) => {
                // An error occurred
               console.log("error in updating profile", error);
              });

            console.log('%c [ userSignup ]-39', 'font-size:13px; background:pink; color:#bf2c9f;', user)
          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ ":::" +errorMessage);
          });


    }else{
        // SignInLogic
        signInWithEmailAndPassword(auth,  email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('%c [ userLogin ]-55', 'font-size:13px; background:pink; color:#bf2c9f;', user)
          // ...
        //   navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ ":::" +errorMessage);
        });


    }

}

  return (
    <div className="relative w-screen ">
        <Header/>
        <div className="absolute">
        <img className="object-cover " src={BG_URL} alt="logo" />
      </div>
      <div className='absolute w-3/12 my-52 mx-auto right-0 left-0'>
        <form className='flex flex-col gap-3 bg-gray-900 p-10 rounded-lg bg-opacity-80' onSubmit={(e)=>(e.preventDefault())}>
        
          <div className=' text-2xl text-white'>{issignIn? "Sign in Now":"Sign up Now"}</div>
          
          {!issignIn && <input ref={name} type='text' name='Name' placeholder='Fullname' className=' text-white p-2  bg-gray-700' />
       }
          
          <input ref={email} type='text' name='email' placeholder='Email / phone number' className='text-white p-2  bg-gray-700' />
          <input ref={password} type='password' name='password' placeholder='Password' className='text-white p-2 bg-gray-700 ' />
          <p className='text-red-700'>{errorMessage}</p>
          <button className='border-spacing-0 bg-red-500 text-center text-black p-2' onClick={handleLogin}>{issignIn? "Sign in Now":"Sign up Now"}</button>
          <div className='flex align-middle gap-1'> <input type="checkbox"/> <label className='text-xs text-white' >Remember me</label></div>
          
          <div className='text-white cursor-pointer' onClick={toggleSignInForm}> {issignIn?"New to Netflix? Sign Up Now":"Already Register? Signin now"}</div>
        </form>
        </div>
    </div>
  )
}

export default Login