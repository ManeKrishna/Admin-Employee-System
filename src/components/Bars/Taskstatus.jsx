import React, { use, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Taskstatus = () => {

    const [useData,setUserData] = useContext(AuthContext)
    
  return (
    <div className='ml-3 float-right bg-[#2C2C2C] py-5 px-6 rounded-lg h-182 w-[59%] mx-auto mt-10 shadow-[0_2px_15px_rgba(0,0,0,0.15)] '>
        <div className='flex justify-center items-center mb-7'>
        <h1 className='text-start font-medium text-3xl  text-white'>Task Status</h1>
        </div>
        <div className='w-full flex justify-between gap-4 items-center mb-2'>
            <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-2xl'>Employee Name</h3>
            <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-2xl'>New <br />  Task</h3>
            <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-2xl'>Accepted Task</h3>
            <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-2xl' >Completed Task</h3>
            <h3 className='w-1/5 px-2 text-center py-2.5 bg-amber-500 rounded-xl text-2xl' >Failed <br />Task</h3>
            
        </div>
       <div className='h-[76%] overflow-y-auto'>  
        {useData.map(function(elem,idx){
            return <div key={idx} className='w-full flex justify-between gap-4 items-center mt-5 '>
            <h3 className='w-1/5 px-2 text-center py-2 bg-purple-400 rounded-xl'>{elem.name}</h3>
            <h3 className='w-1/5 px-2 text-center py-2 bg-blue-400 rounded-xl'>{elem.taskCount.new}</h3>
            <h3 className='w-1/5 px-2 text-center py-2 bg-yellow-400 rounded-xl'>{elem.taskCount.active}</h3>
            <h3 className='w-1/5 px-2 text-center py-2 bg-green-400 rounded-xl' >{elem.taskCount.completed}</h3>
            <h3 className='w-1/5 px-2 text-center py-2 bg-red-400 rounded-xl' >{elem.taskCount.failed}</h3>
            
        </div>
        })}
       </div>
        
        

    </div>
  )
}

export default Taskstatus