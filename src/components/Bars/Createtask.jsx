import React, { use, useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';



const Createtask = () => {

  const [useData,setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("");

  const [newtask, setNewTask] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
    setNewTask({taskTitle, taskDescription, taskDate, assignTo, category,active:false,new:true,failed:false,completed:false})

    const data = useData

    console.log(data);
    data.forEach((elem)=>{
      if(assignTo == elem.name){
        elem.tasks.push(newtask)
        elem.taskCount.new = elem.taskCount.new + 1;
      }
    })
    setUserData(data)
    console.log(data)
    

    
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
     
  }

  return (
    <div className='float-left bg-[#2C2C2C] p-10 rounded-lg h-fit w-[40%] mx-auto mt-10 shadow-[0_2px_15px_rgba(0,0,0,0.15)]'>
        <div className='flex justify-start items-center gap-3 '>
        <button className="text-white ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
          <h1 className='text-start font-semibold text-4xl  text-white'>Create Task</h1></div>
        <form onSubmit={(e)=>{submitHandler(e)}} >
          <div className='mt-8'>
            <h3 className='text-white'>Task Title</h3>
            <input 
            value={taskTitle}
            onChange={(e)=>{setTaskTitle(e.target.value)}}
            type="text" className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]' placeholder='Make a UI design...' />
          </div>
          <div>
            <h3 className='text-white'>Description</h3>
            <textarea
            value={taskDescription}
            onChange={(e)=>{setTaskDescription(e.target.value)}}
             className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]' placeholder='Detailed description of task (Max 500 words)' rows="4"></textarea>
          </div>
          <div>
            <h3 className='text-white'>Date</h3>
            <input
            value={taskDate}
            onChange={(e)=>{setTaskDate(e.target.value)}}
             type="date" className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]' />
          </div>
          <div>
            <h3 className='text-white'>Assign To</h3>
            <input 
            value={assignTo}
            onChange={(e)=>{setAssignTo(e.target.value)}}  
            type="text" className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]'/>
          </div>
          <div>
            <h3 className='text-white'>Category</h3>
            <input 
            value={category}
            onChange={(e)=>{setCategory(e.target.value)}}
            type="text" className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]' placeholder='Design,Development,etc....' />
          </div>
          <div className='flex justify-center mt-5'>
            <button className='text-2xl bg-purple-400 w-full py-2 rounded-xl text-center text-white'>Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default Createtask