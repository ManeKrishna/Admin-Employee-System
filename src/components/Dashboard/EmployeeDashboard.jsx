import React from 'react'
import Header from '../Bars/Header'
import Taskbox from '../Bars/Taskbox'
import Tasklist from '../Tasklist/Tasklist'
import Footer from '../Tasklist/footer'

const employeedashboard = (props) => {
 
  return (
    <div className='pl-8 pt-8 pr-8 bg-[#1e1e1e] h-screen overflow-auto'>
        <Header ChangeUser={props.ChangeUser} employeedata={props.employeedata}/>
        <Taskbox employeedata={props.employeedata}/>
        <Tasklist employeedata={props.employeedata}/>
        <Footer/>
    </div>
  )
}

export default employeedashboard