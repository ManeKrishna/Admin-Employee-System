// src/components/Auth/SignUp.jsx
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { addEmployee, getEmployeeByEmail } from '../../services/firebaseServices'

const SignUp = ({ setShowSignUp, handleLogin }) => {
  const [userData] = useContext(AuthContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const generateEmployeeId = () => {
    if (!userData || userData.length === 0) return "E001"
    
    // Find the highest employee ID number
    const maxId = userData.reduce((max, emp) => {
      const idNum = parseInt(emp.id.substring(1))
      return idNum > max ? idNum : max
    }, 0)
    
    return `E${String(maxId + 1).padStart(3, '0')}`
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match!")
        setIsLoading(false)
        return
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters long!")
        setIsLoading(false)
        return
      }

      // Check if email already exists in Firestore
      const existingEmployee = await getEmployeeByEmail(email)
      if (existingEmployee) {
        alert("Email already registered! Please use a different email.")
        setIsLoading(false)
        return
      }

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

      // Add to Firestore
      await addEmployee(newEmployee)

      alert("Registration successful! Please login with your credentials.")
      
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      setShowSignUp(false)
    } catch (error) {
      console.error('Signup error:', error)
      alert("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-black p-4'>
      <div className='border-2 py-6 px-6 sm:py-7 sm:px-7 rounded-2xl shadow-lg bg-black text-white shadow-[rgba(168,85,247,0.4)_0px_50px_100px_-20px,rgba(147,51,234,0.4)_0px_30px_60px_-30px,rgba(192,132,252,0.45)_0px_-2px_6px_0px_inset] max-w-md w-full'>
        <div className='mb-6 sm:mb-7 flex justify-center items-center'>
          <h1 className='text-white text-3xl sm:text-4xl font-semibold'>Sign Up</h1>
        </div>

        <form onSubmit={handleSignUp} className='flex flex-col justify-center items-center'>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
            className='text-white py-2.5 px-6 sm:py-3 sm:px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent text-base sm:text-xl placeholder:text-gray-400 w-full disabled:opacity-50'
            type="text"
            placeholder='Enter your full name'
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className='text-white py-2.5 px-6 sm:py-3 sm:px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent text-base sm:text-xl placeholder:text-gray-400 w-full mt-3 disabled:opacity-50'
            type="email"
            placeholder='Enter your email'
          />

          <div className='relative w-full mt-3'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
              disabled={isLoading}
              className='text-white py-2.5 px-6 pr-12 sm:py-3 sm:px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent text-base sm:text-xl placeholder:text-gray-400 w-full disabled:opacity-50'
              type={showPassword ? "text" : "password"}
              placeholder='Enter password'
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
              className='absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors disabled:opacity-50'
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

          <div className='relative w-full mt-3'>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength="6"
              disabled={isLoading}
              className='text-white py-2.5 px-6 pr-12 sm:py-3 sm:px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent text-base sm:text-xl placeholder:text-gray-400 w-full disabled:opacity-50'
              type={showConfirmPassword ? "text" : "password"}
              placeholder='Confirm password'
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              disabled={isLoading}
              className='absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors disabled:opacity-50'
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

          <div className='w-full mt-2 sm:mt-3 text-xs text-gray-400 px-2'>
            <p>Password must be at least 6 characters long</p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className='transition-transform hover:scale-110 duration-300 py-2 px-5 border-none rounded-full outline-none bg-gradient-to-r from-purple-400 to-red-300 text-lg sm:text-xl mt-6 sm:mt-7 min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing up...
              </div>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>

        <div className='mt-5 sm:mt-6 text-center text-xs sm:text-sm text-gray-400'>
          Already have an account?{' '}
          <button 
            onClick={() => setShowSignUp(false)}
            disabled={isLoading}
            className='text-purple-400 hover:text-purple-300 hover:underline font-medium transition-colors disabled:opacity-50'>
            Login here
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp