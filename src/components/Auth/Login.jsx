import React, { useState } from 'react'

const Login = () => {

const [email, setemail] = useState("")
const [password, setPassword] = useState("");

const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted, Email:", email, "Password:", password);
    setemail("");
    setPassword("");
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black '>
        <div className='border-2 py-7 px-7 rounded-2xl shadow-lg bg-black text-white p-6 shadow-[rgba(168,85,247,0.4)_0px_50px_100px_-20px,rgba(147,51,234,0.4)_0px_30px_60px_-30px,rgba(192,132,252,0.45)_0px_-2px_6px_0px_inset]'>
          <div className=' h-8 mb-7 flex justify-center items-center'>
            <h1 className='text-white text-4xl w-fit'>Log In</h1>
          </div>
            <form onSubmit={(e) => handleLogin(e)}
            className='flex flex-col justify-center items-center '>
                <input 
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required 
                className='text-white py-3 px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent  text-xl placeholder:text-gray-400' type="email" placeholder='Enter your email' />

                <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className='text-white py-3 px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent  text-xl placeholder:text-gray-400 mt-3' type="password" placeholder='Enter password' />
                
                <button className='transition-transform hover:scale-110 duration-300 py-2 px-5 border-purple-400 border-none rounded-full outline-none bg-gradient-to-r from-purple-400 to-red-300  text-xl placeholder:text-white mt-7'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login