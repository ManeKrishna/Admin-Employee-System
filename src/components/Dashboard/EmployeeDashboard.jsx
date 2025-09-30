import React from 'react'
import Header from '../Bars/Header'
import Taskbox from '../Bars/Taskbox'
import Tasklist from '../Tasklist/Tasklist'
import Footer from '../Tasklist/footer'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 bg-[#1e1e1e] min-h-screen overflow-auto'>
      <Header ChangeUser={props.ChangeUser} employeedata={props.employeedata} />
      <Taskbox employeedata={props.employeedata} />
      <Tasklist employeedata={props.employeedata} />
      <Footer />
    </div>
  )
}

export default EmployeeDashboard