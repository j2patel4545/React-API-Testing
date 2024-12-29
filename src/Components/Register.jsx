import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [firstName,setFiestname] = useState("");
    const [lastName,setlastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    const [message,setMessage] = useState("");
    const navigate = useNavigate();

    const abc = async(e)=>{
        e.preventDefault();
        try {
            await axios.post("https://api-tesing-backend-4.onrender.com/user/register",{firstName,lastName,email,password});
            setMessage("Register Success");
            navigate('/log');
            alert('Register Succes ')
        } catch (error) {
            setMessage("Register Failed");
            alert('Register Failed')
            navigate('/reg')
        }
    }
  return (
    <div className=' w-screen  flex  flex-col justify-center items-center min-h-screen '>
                Sign up 
            <form onSubmit={abc} className='  p-5 flex-col flex gap-8 bg-white/10 shadow-xl'>
                <input type="text" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='first name' value={firstName} onChange={(e)=>{setFiestname(e.target.value)}}  />
                <input type="text" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='last name' value={lastName} onChange={(e)=>{setlastName(e.target.value)}}  />
                <input type="email" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='Emal id' value={email} onChange={(e)=>{setEmail(e.target.value)}}  />
                <input type="password" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}  />
                <button type="submit" className=' p-1 bg-black text-white rounded-md '>Register Your self</button>
            </form>
            <h2 className=' text-red-500'>{message}</h2>
      
    </div>
  )
}

export default Register
