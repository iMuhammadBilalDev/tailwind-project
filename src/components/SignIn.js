import React, { useState } from "react";
import {  toast } from "react-toastify";
import { Link } from "react-router-dom";
function SignIn() {
const [username,setusername] = useState("")
const [password,setpassword] = useState("")
    const handleclick = ()=>{
      if (username.trim() === "" || password.trim() ===  ""){
        toast.error("Please fill in both username and password",{
          position:"top-right"
        })
      }
    else {
      toast.success("successful sign in",{
        position:"top-right"
    });
    }
    }
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className="flex justify-center items-center font-bold text-3xl mb-4">
          <i className="fa-solid fa-user mr-2"></i> Sign In
        </h1>

        <label htmlFor="username" className="block text-base mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e)=>setusername(e.target.value)}
          className="border-2 w-full text-base px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
          placeholder="Enter Username"
        />

        <label htmlFor="password" className="block text-base mb-2">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
            className="border-2 w-full text-base px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
            placeholder="Enter Password"
          />
          <i className="fa-solid fa-lock absolute right-3 top-1/3 transform -translate-y-1/2 text-gray-400"></i>
        </div>

        <div className="flex items-center mb-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label>Remember Me</label>
        </div>

        <div className="mb-4">
          <a href="#" className="text-gray-700 font-semibold">
            Forgot Password?
          </a>
        </div>

        <button className="border-2 bg-gray-900 text-white w-full rounded-md py-1 hover:bg-transparent hover:text-gray-600 font-semibold" onClick={handleclick}>
          Sign In
        </button>
        <button className="border-2 bg-gray-900 text-white w-full rounded-md py-1 hover:bg-transparent hover:text-gray-600 font-semibold"  >
            <Link to="/signup"> SignUp</Link>
        </button>
      </div>

    </div>
  );
}

export default SignIn;
