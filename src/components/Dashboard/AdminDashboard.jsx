import React from 'react'
import Header from '../Bars/Header'
import Createtask from '../Bars/Createtask';
import Taskstatus from '../Bars/Taskstatus';
import Footer from '../Tasklist/footer';

function Admindashboard(props) {
  return (
    <div className='h-screen bg-[#1e1e1e] pt-8 pl-8 pr-8 overflow-auto'>
      <Header ChangeUser={props.ChangeUser} />
      <Createtask />
      <Taskstatus />
      <Footer />
    </div>
  );
}

export default Admindashboard