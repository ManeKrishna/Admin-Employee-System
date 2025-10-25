// src/components/Tasklist/Tasklist.jsx
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const Tasklist = ({ employeedata }) => {
  return (
    <>
      {/* Desktop/Tablet: Horizontal scroll */}
      <div 
        id='taskList' 
        className='hidden sm:flex h-[50vh] w-full mt-10 py-4 justify-start items-center gap-5 flex-nowrap overflow-x-scroll'
      >
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

      {/* Mobile: Vertical stack */}
      <div className='sm:hidden w-full h-[400px] overflow-y-scroll md:overflow-y-scroll mt-8 py-4 flex flex-col gap-5'>
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
    </>
  )
}

export default Tasklist