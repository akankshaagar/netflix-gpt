import { useState } from "react"
import { BG_URL } from "../utils/constants"
import Header from "./Header"

const Login = () => {
const [issignIn, setIsSignIn] = useState(true);
const [email, setEmail] = useState('');
const [name, setName] = useState('');


function toggleSignInForm(){
    setIsSignIn(!issignIn);
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
          
          {!issignIn && <input type='text' name='Name' placeholder='Fullname' className=' text-white p-2  bg-gray-700'  value={name} onChange={(e)=>setName(e.target.value)}/>
       }
          
          <input type='text' name='email' placeholder='Email / phone number' className='text-white p-2  bg-gray-700' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type='password' name='password' placeholder='Password' className='text-white p-2 bg-gray-700 ' />
          <p className='text-red-700'>Error Here</p>
          <button className='border-spacing-0 bg-red-500 text-center text-black p-2'>{issignIn? "Sign in Now":"Sign up Now"}</button>
          <div className='flex align-middle gap-1'> <input type="checkbox"/> <label className='text-xs text-white' >Remember me</label></div>
          
          <div className='text-white cursor-pointer' onClick={toggleSignInForm}> {issignIn?"New to Netflix? Sign Up Now":"Already Register? Signin now"}</div>
        </form>
        </div>
    </div>
  )
}

export default Login