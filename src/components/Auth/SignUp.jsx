import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const SignUp = ({ setShowSignUp, handleLogin }) => {
  const [userData, setUserData] = useContext(AuthContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const generateEmployeeId = () => {
    if (!userData) return "E001"
    const lastEmployee = userData[userData.length - 1]
    const lastId = parseInt(lastEmployee.id.substring(1))
    return `E${String(lastId + 1).padStart(3, '0')}`
  }

  const handleSignUp = (e) => {
    e.preventDefault()

    // Validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!")
      return
    }

    // Check if email already exists
    const emailExists = userData?.some(emp => emp.email === email)
    if (emailExists) {
      alert("Email already registered! Please use a different email.")
      return
    }

    // Create new employee object
    const newEmployee = {
      id: generateEmployeeId(),
      name: name,
      email: email,
      password: password,
      taskCount: {
        active: 0,
        completed: 0,
        failed: 0,
        new: 0
      },
      tasks: []
    }

    // Update context and localStorage
    const updatedEmployees = [...userData, newEmployee]
    setUserData(updatedEmployees)

    alert("Registration successful! Please login with your credentials.")
    
    // Clear form
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    
    // Switch to login page
    setShowSignUp(false)
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border-2 py-7 px-7 rounded-2xl shadow-lg bg-black text-white p-6 shadow-[rgba(168,85,247,0.4)_0px_50px_100px_-20px,rgba(147,51,234,0.4)_0px_30px_60px_-30px,rgba(192,132,252,0.45)_0px_-2px_6px_0px_inset] max-w-md w-full mx-4'>
        <div className='h-8 mb-7 flex justify-center items-center'>
          <h1 className='text-white text-4xl w-fit'>Sign Up</h1>
        </div>

        <form onSubmit={handleSignUp} className='flex flex-col justify-center items-center'>
          {/* Name Input */}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='text-white py-3 px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent text-xl placeholder:text-gray-400 w-full'
            type="text"
            placeholder='Enter your full name'
          />

          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='text-white py-3 px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent text-xl placeholder:text-gray-400 w-full mt-3'
            type="email"
            placeholder='Enter your email'
          />

          {/* Password Input with Toggle */}
          <div className='relative w-full mt-3'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
              className='text-white py-3 px-9 pr-12 border-purple-400 border-2 rounded-full outline-none bg-transparent text-xl placeholder:text-gray-400 w-full'
              type={showPassword ? "text" : "password"}
              placeholder='Enter password'
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors'
            >
              {showPassword ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Confirm Password Input with Toggle */}
          <div className='relative w-full mt-3'>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength="6"
              className='text-white py-3 px-9 pr-12 border-purple-400 border-2 rounded-full outline-none bg-transparent text-xl placeholder:text-gray-400 w-full'
              type={showConfirmPassword ? "text" : "password"}
              placeholder='Confirm password'
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors'
            >
              {showConfirmPassword ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Password Requirements */}
          <div className='w-full mt-3 text-xs text-gray-400 px-2'>
            <p>Password must be at least 6 characters long</p>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className='transition-transform hover:scale-110 duration-300 py-2 px-5 border-purple-400 border-none rounded-full outline-none bg-gradient-to-r from-purple-400 to-red-300 text-xl placeholder:text-white mt-7 min-w-[120px]'
          >
            Sign Up
          </button>
        </form>

        {/* Login Option */}
        <div className='mt-6 text-center text-sm text-gray-400'>
          Already have an account?{' '}
          <button 
            onClick={() => setShowSignUp(false)}
            className='text-purple-400 hover:text-purple-300 hover:underline font-medium transition-colors'>
            Login here
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp