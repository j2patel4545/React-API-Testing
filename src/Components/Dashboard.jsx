import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const [all, setAll] = useState([]);

    useEffect(() => {
        try {
            const abcd = localStorage.getItem("user");
            if (abcd) {
                const pqrs = JSON.parse(abcd);
                console.log(pqrs);
                setUser(pqrs)
                GT();
            }
        } catch (error) {
            alert('login First');
            navigate('/log')
        }
    }, [navigate])

    const putt = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://api-tesing-backend-4.onrender.com/user/upd/${user._id}`, { firstName, lastName, email })
            alert('user Updated')
        } catch (error) {
            alert('Usr Does NOT Updated')
        }
    }

    const GT = async () => {
        try {
            const uio = await axios.get("https://api-tesing-backend-4.onrender.com/user/users");
            console.log(uio.data);
            setAll(uio.data);

        } catch (error) {
            alert("data GET Error..!");
        }
    }
    const dlt = async(tmp)=>{
        try {
            await axios.delete(`https://api-tesing-backend-4.onrender.com/user/dlt/${tmp}`);
            alert('user Deleted Success.')
            navigate('/das')
        } catch (error) {
            alert('user Deleted Failed...!')

        }
    }
    return (
        <div className='w-screen grid p-1 rounded-3xl  justify-center sm:grid-cols-6   min-h-screen'>
            <div className=' w-full sm:col-span-4 items-center flex flex-col pt-3'>
                <div className=' flex w-full justify-center'>         Welcome :<h2 className=' text-blue-950 font-bold'>{user ? <> {user.firstName} {user.lastName}</> : <>loading....</>} </h2>
                </div>
                <div>
                    <div className=' w-full mt-9  flex  flex-col justify-center items-center  '>
                        Sign up
                        <form onSubmit={putt} className='  p-5 flex-col flex gap-8 bg-white/10 shadow-xl'>
                            <input type="text" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='first name' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            <input type="text" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='last name' value={lastName} onChange={(e) => { setlastName(e.target.value) }} />
                            <input type="email" className=' bg-slate-300 rounded-md p-1 px-2 mx-2 shadow-2xl' placeholder='Emal id' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <button type="submit" className=' p-1 bg-black text-white rounded-md '>Update Your Detail's</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className=' my-16 sm:my-0 col-span-2 pt-4 rounded-xl bg-zinc-800 py-10 items-center flex flex-col w-full'>
                <div onClick={GT} className='p-1 cursor-pointer px-2 mb-6 bg-black text-white rounded-md '>Get Users</div>
                <div className=' flex rounded-xl flex-col gap-7 px-1'>
                    {all.map((temp) => {
                        return (
                            <div className=' w-full items-center h-full rounded-lg  bg-slate-200 p-1 sm:px-4 flex justify-between'>
                                <div className=' flex flex-col w-full '>
                                    <div className=' flex flex-col w-full mx-1 px-2 rounded-lg py-1 '>
                                        <h2>  User Name: {temp.firstName} {temp.lastName}</h2>
                                        <h2>Email id : {temp.email}</h2>

                                    </div>
                                </div>
                                <button onClick={()=>{dlt(temp._id)}} className=' bg-black  p-1 px-2 text-white rounded-md'>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
