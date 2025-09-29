import React from 'react'

const newtask = ({employeedata}) => {
    return (
        <div className='flex-shrink-0 h-full  w-[300px] bg-orange-300 rounded-xl flex flex-col'>
            <div className='flex justify-between px-6 py-5 items-center '>
                <h2 className='bg-red-700 text-medium text-white px-3 py-1 rounded-xl'>{employeedata.category}</h2>
                <h3 className='text-sm'>{employeedata.taskDate}</h3>
            </div>
            <div className='h-fill'><h1 className='px-5 text-2xl pb-1 font-bold'>{employeedata.taskTitle}</h1></div>

            <div className='px-2 bg-gray-600 w-[90%] mx-auto mt-1 rounded-lg py-2 overflow-y-scroll h-full mb-5'>
                <p className='text-sm text-white '>{employeedata.taskDescription}</p>
            </div>
            <div className='flex  items-center   mb-5 px-4'>
                <button className='bg-green-700 w-full text-white rounded-xl py-1 px-2 text-lg'>Accept task</button>

            </div>
        </div>
    )
}

export default newtask