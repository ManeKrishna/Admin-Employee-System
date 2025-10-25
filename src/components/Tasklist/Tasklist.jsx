import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const Tasklist = ({ employeedata }) => {
  return (
    <div id='taskList' className='h-[62%] w-full mt-10 py-4 justify-start items-center flex gap-5 flex-nowrap overflow-x-scroll'>
      {employeedata.tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptTask key={idx} employeedata={e} />
        }
        if (e.completed) {
          return <CompletedTask key={idx} employeedata={e} />
        }
        if (e.failed) {
          return <FailedTask key={idx} employeedata={e} />
        }
        if (e.new) {
          return <NewTask key={idx} employeedata={e} />
        }
      })}
    </div>
  )
}

export default Tasklist