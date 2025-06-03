import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import js from '@eslint/js'

export default function Register() {
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPass, setConfirmPass] = useState("")
const navigate = useNavigate();
const URL ="https://fakestoreapi.com/users"

const registerBtn=()=>{
if(!username ||!email||!password ||!confirmPass){
    alert("Please fill all feilds")
    return
}
if(username.length<5){
    alert("username must be at least 5 characters ")
    return
}
if(!email.includes("@")){
    alert("Please enter a valid email")
    return
}
if(password.length<6){
    alert("passowrd must be at least 6 characters")
    return
}
if(password !== confirmPass){
    alert("passwords doesnt match")
    return
}
axios.get(URL).then((res)=>{
    const exist = res.data.find((u)=>(u.username === username))
    if (exist){
        alert("username already exist")
        return
    }
})
axios.post(URL,{
    username,
    email,
    password,
}).then((res)=>{
setUsername(res.data)
alert("register successfully")
localStorage.setItem("user",JSON.stringify(res.data))
navigate("/")
})




}

  return (
    <>
    <section className="bg-blue-50 flex items-center justify-center min-h-screen">
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
         alt="amazon logo" className='w-30 m-auto my-5' />
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create an Account</h2>
        <div >
            <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Username</label>
                <input type="text" id="name" name="name" value={username} 
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2
                 focus:ring-amber-300"onChange={(e)=>{setUsername(e.target.value)}} />
            </div>
            <div class="mb-5">
                <label  class="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={email}
                 className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2
                  focus:ring-amber-300" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div class="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" value={password}
                 className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2
                  focus:ring-amber-300" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div class="mb-5">
                <label  className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input type="password" id="confirm_password" name="confirm_password" value={confirmPass}
                 className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2
                  focus:ring-amber-300" onChange={(e)=>{setConfirmPass(e.target.value)}}/>
            </div>
            <div className="flex items-center mb-5">
                <input type="checkbox" id="terms" name="terms" className="mr-2"/>
                <label class="text-gray-700">By continuing, you agree to Amazon's  <a href="#" className="text-amber-300 hover:underline">Conditions of Use and Privacy Notice.</a></label>
            </div>
            <button type="submit" onClick={registerBtn} className="w-full bg-amber-300  py-3 rounded-lg font-medium hover:bg-amber-400 transition duration-300">Register</button>
        </div>
        <p className="mt-6 text-center text-gray-600">Already have an account? <Link to="/login" className="text-amber-300 hover:underline">Sign in</Link></p>
    </div>
</section>
    
    </>
  )
}
