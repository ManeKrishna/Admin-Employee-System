import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Taskstatus = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    if (userData) {
      setEmployees(userData)
    }
  }, [userData])

  return (
    <div className='bg-[#2C2C2C] py-4 px-4 sm:py-5 sm:px-6 rounded-lg w-full lg:w-[90%] xl:w-[59%] mx-auto mt-6 sm:mt-8 lg:mt-10 shadow-[0_2px_15px_rgba(0,0,0,0.15)]'>
      <div className='flex justify-center items-center mb-5 sm:mb-7'>
        <h1 className='text-center font-medium text-2xl sm:text-3xl text-white'>Task Status</h1>
      </div>
      
      {/* Desktop/Tablet View */}
      <div className='hidden sm:block'>
        <div className='w-full flex justify-between gap-2 sm:gap-4 items-center mb-2'>
          <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-sm sm:text-lg lg:text-xl font-semibold'>Name</h3>
          <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-sm sm:text-lg lg:text-xl font-semibold'>New</h3>
          <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-sm sm:text-lg lg:text-xl font-semibold'>Active</h3>
          <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-sm sm:text-lg lg:text-xl font-semibold'>Done</h3>
          <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-sm sm:text-lg lg:text-xl font-semibold'>Failed</h3>
        </div>
        <div className='h-[60vh] sm:h-[50vh] overflow-y-auto'>
          {employees.map(function (elem, idx) {
            return <div key={idx} className='w-full flex justify-between gap-2 sm:gap-4 items-center mt-3 sm:mt-5'>
              <h3 className='w-1/5 px-2 text-center py-2 bg-purple-400 rounded-xl text-sm sm:text-base'>{elem.name}</h3>
              <h3 className='w-1/5 px-2 text-center py-2 bg-blue-400 rounded-xl text-sm sm:text-base'>{elem.taskCount.new}</h3>
              <h3 className='w-1/5 px-2 text-center py-2 bg-yellow-400 rounded-xl text-sm sm:text-base'>{elem.taskCount.active}</h3>
              <h3 className='w-1/5 px-2 text-center py-2 bg-green-400 rounded-xl text-sm sm:text-base'>{elem.taskCount.completed}</h3>
              <h3 className='w-1/5 px-2 text-center py-2 bg-red-400 rounded-xl text-sm sm:text-base'>{elem.taskCount.failed}</h3>
            </div>
          })}
        </div>
      </div>

      {/* Mobile View */}
      <div className='sm:hidden space-y-4 max-h-[60vh] overflow-y-auto'>
        {employees.map(function (elem, idx) {
          return <div key={idx} className='bg-[#3A3A3A] p-4 rounded-xl'>
            <h3 className='text-white text-lg font-semibold mb-3 text-center'>{elem.name}</h3>
            <div className='grid grid-cols-2 gap-2'>
              <div className='bg-blue-400 p-2 rounded-lg text-center'>
                <p className='text-xs font-medium'>New</p>
                <p className='text-xl font-bold'>{elem.taskCount.new}</p>
              </div>
              <div className='bg-yellow-400 p-2 rounded-lg text-center'>
                <p className='text-xs font-medium'>Active</p>
                <p className='text-xl font-bold'>{elem.taskCount.active}</p>
              </div>
              <div className='bg-green-400 p-2 rounded-lg text-center'>
                <p className='text-xs font-medium'>Completed</p>
                <p className='text-xl font-bold'>{elem.taskCount.completed}</p>
              </div>
              <div className='bg-red-400 p-2 rounded-lg text-center'>
                <p className='text-xs font-medium'>Failed</p>
                <p className='text-xl font-bold'>{elem.taskCount.failed}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Taskstatus