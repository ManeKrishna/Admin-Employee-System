// NewTask.jsx - Responsive
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ employeedata }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const handleAcceptTask = () => {
    const updatedData = userData.map(emp => {
      const updatedTasks = emp.tasks.map(task => {
        if (task.taskTitle === employeedata.taskTitle && 
            task.taskDate === employeedata.taskDate) {
          return {
            ...task,
            active: true,
            new: false
          };
        }
        return task;
      });

      const taskWasUpdated = updatedTasks.some((task, idx) => 
        task.active && !emp.tasks[idx].active &&
        task.taskTitle === employeedata.taskTitle
      );

      if (taskWasUpdated) {
        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            ...emp.taskCount,
            new: emp.taskCount.new - 1,
            active: emp.taskCount.active + 1
          }
        };
      }

      return { ...emp, tasks: updatedTasks };
    });

    setUserData(updatedData);
  }

  return (
    <div className='flex-shrink-0 h-full md:w-[300px] w-full bg-blue-400 rounded-xl flex flex-col'>
      <div className='flex justify-between px-4 sm:px-6 py-4 sm:py-5 items-center'>
        <h2 className='bg-red-700 text-sm sm:text-base text-white px-2 sm:px-3 py-1 rounded-xl'>{employeedata.category}</h2>
        <h3 className='text-xs sm:text-sm font-semibold'>{employeedata.taskDate}</h3>
      </div>
      <div className='px-4 sm:px-5'>
        <h1 className='text-xl sm:text-2xl pb-1 font-bold'>{employeedata.taskTitle}</h1>
      </div>

      <div className='px-2 bg-gray-600 w-[90%] mx-auto mt-1 rounded-lg py-2 overflow-y-scroll h-full mb-5'>
        <p className='text-xs sm:text-sm text-white'>{employeedata.taskDescription}</p>
      </div>
      <div className='flex items-center mb-4 sm:mb-5 px-4'>
        <button 
          onClick={handleAcceptTask}
          className='bg-green-700 hover:bg-green-800 transition-colors w-full text-white rounded-xl py-1 px-2 text-base sm:text-lg'>
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask