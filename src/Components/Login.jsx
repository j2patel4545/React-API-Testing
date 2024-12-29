import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    const [message,setMessage] = useState("");
    const navigate = useNavigate()

    const abc = async(e)=>{
        e.preventDefault();
        try {
          const xyz=  await axios.post("https://api-tesing-backend-4.onrender.com/user/login",{email,password});
            setMessage("Login Success");
            alert('login Success')
            navigate('/das')

            console.log(xyz.data.user);
            
            localStorage.setItem("user", JSON.stringify(xyz.data.user))
        } catch (error) {
            setMessage("Login Failed");
            alert('Login Failed')
            navigate('/log')
        }
    }
  return (
    <div className=' w-screen  flex  flex-col justify-center items-center min-h-screen '>
                Sign in 
            <form onSubmit={abc} className='  p-5 flex-col flex gap-8 bg-white/10 shadow-xl'>
                <input type="email" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='Emal id' value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
                <input type="password" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}  />
                <button type="submit" className=' p-1 bg-black text-white rounded-md '>Login</button>
            </form>
            <h2 className=' text-red-500'>{message}</h2>
      
    </div>
  )
}

export default Login
