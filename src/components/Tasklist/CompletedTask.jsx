import React from 'react'

export const CompletedTask = ({ employeedata }) => {
  return (
    <div className='flex-shrink-0 h-full md:w-[300px] w-full bg-green-400 rounded-xl flex flex-col'>
      <div className='flex justify-between px-4 sm:px-6 py-4 sm:py-5 items-center'>
        <h2 className='bg-red-700 text-sm sm:text-base text-white px-2 sm:px-3 py-1 rounded-xl'>{employeedata.category}</h2>
        <h3 className='text-xs sm:text-sm font-semibold'>{employeedata.taskDate}</h3>
      </div>
      <div className='px-4 sm:px-5'>
        <h1 className='text-xl sm:text-2xl font-bold pb-1'>{employeedata.taskTitle}</h1>
      </div>

      <div className='px-2 bg-gray-600 w-[90%] mx-auto mt-1 rounded-lg py-2 overflow-y-scroll h-full mb-5'>
        <p className='text-xs sm:text-sm text-white'>{employeedata.taskDescription}</p>
      </div>
      <div className='flex items-center mb-4 sm:mb-5 px-4'>
        <button className='bg-green-700 w-full text-white rounded-xl py-1 px-2 text-base sm:text-lg cursor-not-allowed'>
          Completed
        </button>
      </div>
    </div>
  )
}

export default CompletedTask