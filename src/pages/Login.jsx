import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import js from '@eslint/js'

export default function Login() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate();
const URL ="https://fakestoreapi.com/users"

const registerBtn=()=>{
if(!username ||!password){
    alert("Please fill all feilds")
    return
}
axios.get(URL).then((res)=>{
    const exist = res.data.find((u)=>(u.username === username&& u.password==password))
    if (exist){
        alert("username or password is wrong")
        return
    }
setUsername(res.data)
alert("login successfully")
localStorage.setItem("user",JSON.stringify(exist))
navigate("/")
})





}

  return (
    <>
    <section className="bg-blue-50 flex items-center justify-center min-h-screen">
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
         alt="amazon logo" className='w-30 m-auto my-5' />
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Log in to your account</h2>
        <div >
            <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Username</label>
                <input type="text" id="name" name="name" value={username} 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2
                 focus:ring-amber-300"onChange={(e)=>{setUsername(e.target.value)}} />
            </div>
            
            <div class="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" value={password}
                 className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2
                  focus:ring-amber-300" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            
            <button type="submit" onClick={registerBtn} className="w-full bg-amber-300  py-3 rounded-lg font-medium hover:bg-amber-400 transition duration-300">Register</button>
        </div>
        <p className="mt-6 text-center text-gray-600">Already have an account? <Link to="/register" className="text-amber-300 hover:underline">Sign in</Link></p>
    </div>
</section>
    
    </>
  )
}
