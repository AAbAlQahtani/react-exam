import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const user = JSON.parse(localStorage.getItem("user"))
import { useEffect } from 'react'

export default function Nav() {
    const navigate = useNavigate()




    // if (user) {
    //     <div className=' flex gap-4 m-3'>
    //         <button className='bg-amber-300 rounded-2xl px-2'>Login</button>
    //         <button className='bg-amber-300 rounded-2xl px-2'>Register</button>
    //     </div>
    // } else {
    //     <button onClick={Logoutbtn} className='bg-amber-300 rounded-2xl px-2'>Logout</button>
    // }


    function Logoutbtn() {

        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <>
            <nav className='flex justify-between items-center bg-[#161D28]'>
                <img src="data:image/png;base64,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"
                    alt="" width={90} />

                    
                <Link to="/"><p className='text-white'>Home</p></Link>

                <div className=' flex gap-4 m-3'>
                 <Link to="/login"><button className='bg-amber-300 rounded-2xl px-4 cursor-pointer'>Login</button></Link>
                  <Link to="/register">  <button className='bg-amber-300 rounded-2xl px-2 cursor-pointer'>Register</button></Link>
                    <button onClick={Logoutbtn} className='text-white px-2 cursor-pointer'>Logout</button>

                </div>







            </nav>
        </>
    )
}
