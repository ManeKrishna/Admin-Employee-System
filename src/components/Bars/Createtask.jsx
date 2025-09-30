import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const Createtask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("")
  const [category, setCategory] = useState("");
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    if (userData) {
      setEmployees(userData)
    }
  }, [userData])

  const submitHandler = (e) => {
    e.preventDefault();

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

    const employeeFound = updatedData.some((emp, idx) => 
      assignTo === emp.name && emp !== userData[idx]
    );

    if (!employeeFound) {
      alert(`Employee "${assignTo}" not found!`);
      return;
    }

    setUserData(updatedData);

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");

    alert("Task created successfully!");
  }

  return (
    <div className='bg-[#2C2C2C] p-6 sm:p-8 lg:p-10 rounded-lg w-full lg:w-[90%] xl:w-[40%] mx-auto mt-6 sm:mt-8 lg:mt-10 shadow-[0_2px_15px_rgba(0,0,0,0.15)]'>
      <div className='flex justify-start items-center gap-3 mb-6'>
        <h1 className='text-start font-semibold text-2xl sm:text-3xl lg:text-4xl text-white'>Create Task</h1>
      </div>
      <form onSubmit={submitHandler}>
        <div className='mb-4'>
          <h3 className='text-white text-sm sm:text-base mb-1.5'>Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            required
            type="text"
            className='text-white w-full p-2 sm:p-2.5 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0] text-sm sm:text-base'
            placeholder='Make a UI design...' />
        </div>
        <div className='mb-4'>
          <h3 className='text-white text-sm sm:text-base mb-1.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className='text-white w-full p-2 sm:p-2.5 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0] text-sm sm:text-base'
            placeholder='Detailed description of task (Max 500 words)'
            rows="4"></textarea>
        </div>
        <div className='mb-4'>
          <h3 className='text-white text-sm sm:text-base mb-1.5'>Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
            type="date"
            className='text-white w-full p-2 sm:p-2.5 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0] text-sm sm:text-base' />
        </div>
        <div className='mb-4'>
          <h3 className='text-white text-sm sm:text-base mb-1.5'>Assign To</h3>
          <select
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            required
            className='text-white w-full p-2 sm:p-2.5 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0] text-sm sm:text-base'>
            <option value="">Select Employee</option>
            {employees && employees.map((emp) => (
              <option key={emp.id} value={emp.name}>{emp.name}</option>
            ))}
          </select>
        </div>
        <div className='mb-4'>
          <h3 className='text-white text-sm sm:text-base mb-1.5'>Category</h3>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            type="text"
            className='text-white w-full p-2 sm:p-2.5 rounded bg-[#3A3A3A] placeholder:text-[#a0a0a0] text-sm sm:text-base'
            placeholder='Design, Development, etc....' />
        </div>
        <div className='flex justify-center mt-6'>
          <button type="submit" className='text-lg sm:text-xl lg:text-2xl bg-purple-400 hover:bg-purple-500 transition-colors w-full py-2 rounded-xl text-center text-white'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default Createtask