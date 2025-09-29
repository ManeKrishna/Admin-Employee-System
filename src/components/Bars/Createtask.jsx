import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const Createtask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create new task object
    const newTaskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      new: true,
      failed: false,
      completed: false
    };

    // Create a deep copy of userData
    const updatedData = userData.map(emp => {
      if (assignTo === emp.name) {
        return {
          ...emp,
          tasks: [...emp.tasks, newTaskObj],
          taskCount: {
            ...emp.taskCount,
            new: emp.taskCount.new + 1
          }
        };
      }
      return emp;
    });

    // Check if employee was found
    const employeeFound = updatedData.some((emp, idx) => 
      assignTo === emp.name && emp !== userData[idx]
    );

    if (!employeeFound) {
      alert(`Employee "${assignTo}" not found!`);
      return;
    }

    // Update context (which also updates localStorage)
    setUserData(updatedData);

    // Clear form fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");

    alert("Task created successfully!");
  }

  return (
    <div className='float-left bg-[#2C2C2C] p-10 rounded-lg h-fit w-[40%] mx-auto mt-10 shadow-[0_2px_15px_rgba(0,0,0,0.15)]'>
      <div className='flex justify-start items-center gap-3 '>
        <h1 className='text-start font-semibold text-4xl text-white'>Create Task</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className='mt-8'>
          <h3 className='text-white'>Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
            type="text"
            className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]'
            placeholder='Make a UI design...' />
        </div>
        <div>
          <h3 className='text-white'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]'
            placeholder='Detailed description of task (Max 500 words)'
            rows="4"></textarea>
        </div>
        <div>
          <h3 className='text-white'>Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
            type="date"
            className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]' />
        </div>
        <div>
          <h3 className='text-white'>Assign To</h3>
          <select
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            required
            className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]'>
            <option value="">Select Employee</option>
            {userData && userData.map((emp) => (
              <option key={emp.id} value={emp.name}>{emp.name}</option>
            ))}
          </select>
        </div>
        <div>
          <h3 className='text-white'>Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            type="text"
            className='text-white mt-1.5 w-full p-2 mb-4 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0]'
            placeholder='Design, Development, etc....' />
        </div>
        <div className='flex justify-center mt-5'>
          <button type="submit" className='text-2xl bg-purple-400 hover:bg-purple-500 transition-colors w-full py-2 rounded-xl text-center text-white'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default Createtask