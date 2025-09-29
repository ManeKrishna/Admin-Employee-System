import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ employeedata }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const handleCompleteTask = () => {
    const updatedData = userData.map(emp => {
      const updatedTasks = emp.tasks.map(task => {
        if (task.taskTitle === employeedata.taskTitle && 
            task.taskDate === employeedata.taskDate) {
          return {
            ...task,
            active: false,
            completed: true
          };
        }
        return task;
      });

      const taskWasUpdated = updatedTasks.some((task, idx) => 
        task.completed && !emp.tasks[idx].completed &&
        task.taskTitle === employeedata.taskTitle
      );

      if (taskWasUpdated) {
        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            ...emp.taskCount,
            active: emp.taskCount.active - 1,
            completed: emp.taskCount.completed + 1
          }
        };
      }

      return { ...emp, tasks: updatedTasks };
    });

    setUserData(updatedData);
  }

  const handleFailTask = () => {
    const updatedData = userData.map(emp => {
      const updatedTasks = emp.tasks.map(task => {
        if (task.taskTitle === employeedata.taskTitle && 
            task.taskDate === employeedata.taskDate) {
          return {
            ...task,
            active: false,
            failed: true
          };
        }
        return task;
      });

      const taskWasUpdated = updatedTasks.some((task, idx) => 
        task.failed && !emp.tasks[idx].failed &&
        task.taskTitle === employeedata.taskTitle
      );

      if (taskWasUpdated) {
        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: {
            ...emp.taskCount,
            active: emp.taskCount.active - 1,
            failed: emp.taskCount.failed + 1
          }
        };
      }

      return { ...emp, tasks: updatedTasks };
    });

    setUserData(updatedData);
  }

  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-amber-300 rounded-xl flex flex-col'>
      <div className='flex justify-between px-6 py-5 items-center'>
        <h2 className='bg-red-700 text-medium text-white px-3 py-1 rounded-xl'>{employeedata.category}</h2>
        <h3 className='text-sm font-semibold'>{employeedata.taskDate}</h3>
      </div>
      <div className='h-fill'>
        <h1 className='px-5 text-2xl pb-1 font-bold'>{employeedata.taskTitle}</h1>
      </div>

      <div className='px-2 bg-gray-600 w-[90%] mx-auto mt-1 rounded-lg py-2 overflow-y-scroll h-full mb-5'>
        <p className='text-sm text-white'>{employeedata.taskDescription}</p>
      </div>
      <div className='flex justify-between items-center mb-5 px-4'>
        <button 
          onClick={handleCompleteTask}
          className='bg-green-700 hover:bg-green-800 transition-colors text-white rounded-xl py-1 px-2 text-lg'>
          Completed
        </button>
        <button 
          onClick={handleFailTask}
          className='bg-red-700 hover:bg-red-800 transition-colors text-white rounded-xl py-1 px-2 text-lg'>
          Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask