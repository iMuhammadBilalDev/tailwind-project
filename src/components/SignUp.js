import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
function SignUp() {
const [firstname,setfirstname] = useState("")
const [lastname,setlastname] = useState("")
const [Password,setPassword] = useState("")
const [confirmpass,setconfirmpass] = useState("")
const HandleSignUp =()=>{

  if (firstname.trim() === "" && lastname.trim() === "" && Password.trim() === "" && confirmpass.trim() === "") {
    toast.error("Please fill in all filed",{
      position:"top-right"
    })
  }
  else if(firstname.trim() === ""){
    toast.error("Please enter first name",{
      position:"top-right"
    })
  }
  else if (lastname.trim()===""){
    toast.error("Please enter last name",{
      position:"top-right"
    })
  }
  else if(Password.trim()===""){
    toast.error("Please enter password",{
      position:"top-right"
    })
  }
  else if(confirmpass.trim()===""){
    toast.error("Please enter confrim password",{
      position:"top-right"
    })
  }
  else if(Password !== confirmpass){
    toast.error("Password do not match")
  }
  else{
    toast.success("SignUp Successfull",{
      position:"top-right"
    })
  }
  }
 
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
    <div className="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 className="flex justify-center items-center font-bold text-3xl mb-4"> 
        SignUp
      </h1>
     <div>
     <label className='block text-base mb-2'>First Name</label>
      <input type='text' id='username' value={firstname} onChange={(e)=>setfirstname(e.target.value)} className='border-2 w-full px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md'
      placeholder='First Name' />
     </div>
     <div>
      <label className='block text-base mb-2'>Last Name</label>
      <input type='text' id='username' value={lastname} onChange={(e)=>setlastname(e.target.value)} className='border-2 w-full px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md'
      placeholder='Last Name' />
     </div>
     <div>
      <label className='block text-base mb-2'>Password</label>
      <input type='password' id='password' value={Password} onChange={(e)=>setPassword(e.target.value)} className='border-2 w-full px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md'
      placeholder='Enter Password' />
     </div>
     <div>
      <label className='block text-base mb-2'>Confirm Password</label>
      <input type='password' id='password' value={confirmpass} onChange={(e)=>setconfirmpass(e.target.value)} className='border-2 w-full px-2 py-1 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md'
      placeholder='Confirm Password' />
     </div>
     <div>
      <h3 className='flex justify-center items-center mb-4 font-semibold'>Already a member? <Link to="/" className='text-blue-500 ml-2'> Login </Link></h3>
     </div>
     <button className='w-full font-semibold bg-slate-500 rounded-md py-2 border-2 text-white hover:bg-transparent hover:text-gray-600' onClick={HandleSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp