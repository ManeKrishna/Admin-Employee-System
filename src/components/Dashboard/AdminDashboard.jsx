import React from 'react'
import Header from '../Bars/Header'
import Createtask from '../Bars/Createtask'
import Taskstatus from '../Bars/Taskstatus'
import Footer from '../Tasklist/footer'

function AdminDashboard(props) {
  return (
    <div className='min-h-screen bg-[#1e1e1e] p-4 sm:p-6 lg:p-8 overflow-auto'>
      <Header ChangeUser={props.ChangeUser} />
      
      {/* Desktop: Side by side, Mobile: Stacked */}
      <div className='flex flex-col lg:flex-row gap-6 lg:gap-4'>
        <Createtask />
        <Taskstatus />
      </div>
      
      <Footer />
    </div>
  )
}

export default AdminDashboard