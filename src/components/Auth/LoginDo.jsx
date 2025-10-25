import React, { useState } from 'react'
import AdminDebugButton from '../Debug/AdminDebugButton';

const LoginDo = ({ handleLogin, setShowSignUp }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const submitLogin = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail("");
    setPassword("");
  };

  const handleForgotEmail = () => {
    alert('Forgot Email: Please contact support or check your recovery options to retrieve your email address.')
  }

  const handleForgotPassword = () => {
    alert('Forgot Password: Please check your email for password reset instructions.')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-black p-4'>
      <div className='border-2 py-6 px-6 sm:py-7 sm:px-7 rounded-2xl shadow-lg bg-black text-white shadow-[rgba(168,85,247,0.4)_0px_50px_100px_-20px,rgba(147,51,234,0.4)_0px_30px_60px_-30px,rgba(192,132,252,0.45)_0px_-2px_6px_0px_inset] max-w-md w-full'>
        <div className='mb-6 sm:mb-7 flex justify-center items-center'>
          <h1 className='text-white text-3xl sm:text-4xl font-semibold'>Log In</h1>
        </div>

        <form onSubmit={submitLogin} className='flex flex-col justify-center items-center'>
          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='text-white py-2.5 px-6 sm:py-3 sm:px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent text-base sm:text-xl placeholder:text-gray-400 w-full'
            type="email"
            placeholder='Enter your email'
          />

          {/* Password Input with Toggle */}
          <div className='relative w-full mt-3'>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='text-white py-2.5 px-6 pr-12 sm:py-3 sm:px-9 border-purple-400 border-2 rounded-full outline-none bg-transparent text-base sm:text-xl placeholder:text-gray-400 w-full'
              type={showPassword ? "text" : "password"}
              placeholder='Enter password'
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className='absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors'
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

          {/* Forgot Options */}
          <div className='flex justify-between w-full mt-3 sm:mt-4 text-xs sm:text-sm'>
            <button
              type="button"
              onClick={handleForgotEmail}
              className='text-purple-400 hover:text-purple-300 hover:underline transition-colors'
            >
              Forgot Email?
            </button>
            <button
              type="button"
              onClick={handleForgotPassword}
              className='text-purple-400 hover:text-purple-300 hover:underline transition-colors'
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className='transition-transform hover:scale-110 duration-300 py-2 px-5 border-none rounded-full outline-none bg-gradient-to-r from-purple-400 to-red-300 text-lg sm:text-xl mt-6 sm:mt-7 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[120px]'
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Logging in...
              </div>
            ) : (
              'Log in'
            )}
          </button>
        </form>

        {/* Sign Up Option */}
        <div className='mt-5 sm:mt-6 text-center text-xs sm:text-sm text-gray-400'>
          Don't have an account?{' '}
          <button 
            onClick={() => setShowSignUp(true)}
            className='text-purple-400 hover:text-purple-300 hover:underline font-medium transition-colors'>
            Sign up here
          </button>
        </div>
      </div>
      <AdminDebugButton />
    </div>
  )
}

export default LoginDo